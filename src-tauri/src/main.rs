#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::api::path::app_dir;
use std::path::PathBuf;

#[tauri::command]
fn get_db_path() -> String {
    let base_dir: PathBuf = app_dir(&tauri::Config::default()).unwrap();
    let db_path = base_dir.join("dev.db");
    db_path.to_string_lossy().into_owned()
}

fn main() {
    tauri::Builder::default()
        // registrar o comando
        .invoke_handler(tauri::generate_handler![get_db_path])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
