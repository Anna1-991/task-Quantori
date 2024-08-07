import React, { useState } from "react";
import "./loginForm.css";

interface LoginFormProps {
    onCancel: () => void;
    onLoginSuccess: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onCancel, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            console.log('Form submitted with:', { email, password });
            
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: email,
                    password,
                    expiresInMins: 30,
                }),
            });
    
            console.log('API response status:', response.status);
            
            if (!response.ok) {
                throw new Error('Login failed');
            }
    
            const data = await response.json();
            console.log('Login successful:', data);
    
            setError(null);
            if (onLoginSuccess) onLoginSuccess();
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Error occurred:', err.message);
                setError(err.message);
            } else {
                console.error('Unexpected error:', err);
                setError('An unexpected error occurred');
            }
        }
    };
    return (
        <div className="login_form">
            <div>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input_wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="buttons">
                        <button type="button" onClick={onCancel}>Cancel</button>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
