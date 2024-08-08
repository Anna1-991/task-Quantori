import { useState } from "react";
import { login } from "../Components/api/User"; // Adjust the import path as needed

export const useLoginForm = (onLoginSuccess: () => void) => {
    const [email, setEmail] = useState("emily.johnson@x.dummyjson.com"); // Use email for DummyJSON
    const [password, setPassword] = useState("emilyspass");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null); // Reset error message

        try {
            console.log('Form submitted with:', { email, password });

            // Perform the login
            const response = await login(email, password);

            console.log('Login successful:', response);

            // Save tokens or any necessary data
            localStorage.setItem("token", response.token);
            localStorage.setItem("refreshToken", response.refreshToken);

            // Hide form on successful login
            setIsFormVisible(false);

            // Call the onLoginSuccess callback
            if (onLoginSuccess) onLoginSuccess();
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed. Please check your username and password.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        handleSubmit,
        isLoading,
        isFormVisible,
        error
    };
};
