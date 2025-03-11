import { useTheme } from '../context/kntThemeContext'

export default function KntThemeToggle() {
    const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
        Chuyển sang {theme === "light" ? "Tối" : "Sáng"}
    </button>
  );
}
