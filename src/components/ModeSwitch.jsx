import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const ModeSwitch = () => {
  const { darkMode, setDarkMode } = useContext(ModeContext);
  
  return (
    <div className="" onClick={()=>setDarkMode(!darkMode)}>
      <i className={`bi bi-moon${darkMode ? "" : "-fill"}`}></i>
      {`${darkMode ? "Light" : "Dark"} Mode`}
    </div>
  );
};
export default ModeSwitch;
