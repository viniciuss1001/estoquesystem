// Prevents additional console window on Windows in release, DO NOT REMOVE!!
use tauri::api::path::app_dir;
use std::path::PathBuf;

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn get_db_path() -> String {
    let base_dir: PathBuf = app_dir(&tauri::Config::default()).unwrap();
    let db_path = base_dir.join("data.db");
    db_path.to_string_lossy().into_owned()
}
