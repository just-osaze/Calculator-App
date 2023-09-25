import { useTheme } from "../ThemeContext";

const ToggleButton = () => {
   const {isDarkMode, toggleDarkMode } = useTheme();

   return (
      <button onClick={toggleDarkMode}>
         Toggle Dark Mode {isDarkMode ? 'Off' : 'On'}
      </button>
   );
};

export default ToggleButton;


