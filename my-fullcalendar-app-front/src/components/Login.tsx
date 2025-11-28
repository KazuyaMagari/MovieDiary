import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from '../LoginWithFirebase/firebase';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  text-align: center;
`;

function Login() {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    setError('');
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Title>Googleでログイン</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button onClick={handleGoogleSignIn}>
          Googleでログイン
        </Button>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;