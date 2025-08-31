#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::api::path::app_dir;
use std::path::PathBuf;
use std::process::{Command, Stdio, Child};
use std::sync::Mutex;

// comando pra expor o caminho do banco
#[tauri::command]
fn get_db_path() -> String {
    let base_dir: PathBuf = app_dir(&tauri::Config::default()).unwrap();
    let db_path = base_dir.join("dev.db");
    db_path.to_string_lossy().into_owned()
}

fn main() {
    // variável pra guardar o processo do servidor Next
    let server_process: Mutex<Option<Child>> = Mutex::new(None);

    tauri::Builder::default()
        .setup(|app| {
            // inicia o servidor Next standalone
            let child = Command::new("node")
                .arg(".next/standalone/server.js") // caminho do server gerado no build
                .stdout(Stdio::inherit()) // herda stdout pra ver logs
                .stderr(Stdio::inherit()) // herda stderr pra ver erros
                .spawn()
                .expect("falha ao iniciar servidor Next.js");

            // guarda o processo
            *server_process.lock().unwrap() = Some(child);

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![get_db_path])
        .on_window_event(move |event| {
            // se a janela principal fechar, mata o servidor
            if let tauri::WindowEvent::CloseRequested { .. } = event.event() {
                if let Some(mut child) = server_process.lock().unwrap().take() {
                    let _ = child.kill();
                }
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
