#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;
use std::sync::{Arc, Mutex};
use std::path::PathBuf;
use tauri::{Config, api::path::app_data_dir};

/// Comando para obter o caminho do banco de dados
#[tauri::command]
fn get_db_path(config: Config) -> String {
    let base_dir: PathBuf = app_data_dir(&config)
        .expect("Não foi possível obter a pasta de dados do app");
    let db_path = base_dir.join("dev.db");
    db_path.to_string_lossy().into_owned()
}

fn main() {
    // Mutex para manter o processo do servidor Next
    let server_process = Arc::new(Mutex::new(None));
    let server_process_clone = server_process.clone();

    tauri::Builder::default()
        // Setup do app: inicia o servidor Next standalone
        .setup(move |_app| {
            // Ajuste aqui para a pasta web-dist
            let child = Command::new("node")
                .arg("../web-dist/standalone/server.js") // << caminho do server.js
                .spawn()
                .expect("Falha ao iniciar o servidor Next");

            *server_process_clone.lock().unwrap() = Some(child);

            Ok(())
        })
        // Garante que o processo Next seja encerrado ao fechar a janela
        .on_window_event(move |_event| {
            if let Some(mut child) = server_process.lock().unwrap().take() {
                let _ = child.kill();
            }
        })
        // Registra comandos Tauri
        .invoke_handler(tauri::generate_handler![get_db_path])
        .run(tauri::generate_context!())
        .expect("Erro ao executar o aplicativo Tauri");
}
