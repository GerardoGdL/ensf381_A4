import React from 'react';
import { useAuth } from './LoginForm';

function AuthMessage() {
    const { authUser } = useAuth();

    return (
        <div>
            {authUser ? (
                <p>Welcome, {authUser.username}!</p>
            ) : (
                <p>Please log in.</p>
            )}
        </div>
    );
}

export default AuthMessage;
