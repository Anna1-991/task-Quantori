import { NavLink } from "react-router-dom";
import "./navBar.css";
import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";

export const NavBar = () => {
    const [isLogin, setIsLogin] = useState(false);

    const toggleLoginForm = () => {
        setIsLogin(!isLogin);
    };

    const closeLoginForm = () => {
        setIsLogin(false);
    }

    return (
        <nav className="nav_bar">
            <div>
                <i className="fa-solid fa-circle-user" style={{color: 'rgba(47, 79, 79, 0.969)', fontSize: '50px'}}></i>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
            <button onClick={toggleLoginForm}>Login</button>
            {isLogin && <LoginForm onCancel={closeLoginForm} onLoginSuccess={function (): void {
                throw new Error("Function not implemented.");
            } }/>}
        </nav>
    );
};
