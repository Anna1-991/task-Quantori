import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import { LoginForm } from "../LoginForm/LoginForm";
import { MobileNavBar } from "../MobileNavBar/MobileNavBar";
import { useLoginToggle } from "../../hooks/useLoginToggle";

export const NavBar = () => {
    const { isLogin, toggleLogin, closeLogin } = useLoginToggle();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 769);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile ? (
                <MobileNavBar />
            ) : (
                <nav className="nav_bar">
                    <div>
                        <i
                            className="fa-solid fa-circle-user"
                            style={{
                                color: "rgba(47, 79, 79, 0.969)",
                                fontSize: "50px",
                            }}
                        ></i>
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
                    <button onClick={toggleLogin}>Login</button>
                    {isLogin && (
                        <LoginForm
                            onCancel={closeLogin}
                            onLoginSuccess={() => {
                                console.log("Login was Successful");
                            }}
                        />
                    )}
                </nav>
            )}
        </>
    );
};
