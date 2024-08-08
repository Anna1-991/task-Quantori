import { useState } from "react";

export const useLoginToggle = () => {
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = () => {
        setIsLogin(prev => !prev);
    };

    const closeLogin = () => {
        setIsLogin(false);
    };

    return { isLogin, toggleLogin, closeLogin };
};
