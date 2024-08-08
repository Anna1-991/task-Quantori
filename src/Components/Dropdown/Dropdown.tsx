import { NavLink } from "react-router-dom";
import "./dropdown.css";
import { LoginForm } from "../LoginForm/LoginForm";
import { useLoginToggle } from "../../hooks/useLoginToggle";

export const Dropdown = () => {
    const {isLogin, toggleLogin, closeLogin} = useLoginToggle();

    return (
        <div className="dropdown">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
            <button onClick={toggleLogin}>Login</button>
            {isLogin && <LoginForm onCancel={closeLogin} onLoginSuccess={function (): void {
                throw new Error("Function not implemented.");
            } }/>}
        </div>
    );
};
