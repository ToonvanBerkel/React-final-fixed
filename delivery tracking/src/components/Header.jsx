import { IoMdHome, IoMdSettings } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { GiHandTruck } from "react-icons/gi";

const Header = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <div>
            <IoMdHome />
            <IoMail />
            <GiHandTruck />
          </div>
          <IoMdSettings />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
