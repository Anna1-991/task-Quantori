import "./mobileNavBar.css";
import menu from "../../assets/dotMenu.svg";
import { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";

export const MobileNavBar = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const handleButtonClick = () => {
        setIsDropdown(!isDropdown);
    };
    return (
        <nav className="mobile_navbar">
            <i
                className="fa-solid fa-circle-user"
                style={{
                    color: "rgba(47, 79, 79, 0.969)",
                    fontSize: "35px",
                }}
            ></i>
            <button onClick={handleButtonClick}>
                <img src={menu} alt="dot" />
            </button>
            {isDropdown && <Dropdown />}
        </nav>
    );
};
