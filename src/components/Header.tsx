import ModeSwitch from "./ModeSwitch";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <nav className=" shadow">
        <div className=" container d-flex justify-content-between align-items-center">
          <h1 className="">Where in the world?</h1>
          <ModeSwitch />
        </div>
      </nav>
    </header>
  );
};
export default Header;
