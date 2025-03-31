import React, { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayStatus from './DisplayStatus';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (error === null && username && password) {
      const validateUser = async () => {
        setLoading(true);
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const users = await response.json();

          const user = users.find(user => user.username === username && user.email === password);
          if (user) {
            setAuthUser(user);
            setError('Login successful!');
            setTimeout(() => {
              navigate('/courses'); 
            }, 2000);
          } else {
            setError('Invalid credentials');
          }
        } catch (error) {
          setError('Failed to fetch user data');
        } finally {
          setLoading(false);
        }
      };

      validateUser();
    }
  }, [username, password, error, setAuthUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    setError(null);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && (
        <DisplayStatus
          type={error === 'Login successful!' ? 'success' : 'error'}
          message={error}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p><a href="/forgot-password">Forgot Password?</a></p>
    </div>
  );
}

export default LoginForm;
