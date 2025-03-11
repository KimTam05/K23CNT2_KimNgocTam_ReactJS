import React from "react";
import KntThemeToggle from './components/KntThemeToggle';
import KntTodoList from "./components/KntTodoList";

function KntApp() {
  return (
    <div>
      <h1>Mini Project: Quản lý công việc (To-Do List) với Hooks trong ReactJS</h1>
      <h2>Quản lý công việc</h2>
      <KntThemeToggle/>
      <KntTodoList/>
    </div>
  );
}

export default KntApp;
