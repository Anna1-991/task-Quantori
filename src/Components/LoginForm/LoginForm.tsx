import React, { useState } from "react";
import { motion } from "framer-motion";
import "./loginForm.css";
import { useLoginForm } from "../../hooks/useLoginForm";

interface LoginFormProps {
    onCancel: () => void;
    onLoginSuccess: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    onCancel,
    onLoginSuccess,
}) => {
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleSubmit,
        isLoading,
        isFormVisible,
        error
    } = useLoginForm(onLoginSuccess);

    if (!isFormVisible && !isAnimatingOut) {
        return null;
    }

    const formVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        animateOut: { opacity: 0, scale: 0.8 },
    };

    const handleCancelClick = () => {
        setIsAnimatingOut(true);
        setTimeout(() => {
            onCancel();
        }, 500);
    };

    return (
        <motion.div
            className="login_form"
            initial="hidden"
            animate={isAnimatingOut ? "animateOut" : "visible"}
            variants={formVariants}
            transition={{ duration: 0.5 }}
        >
            <div>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input_wrapper">
                        <label htmlFor="text">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error_message">{error}</div>}
                    <div className="buttons">
                        <button type="button" onClick={handleCancelClick}>
                            Cancel
                        </button>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};
