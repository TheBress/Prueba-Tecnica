import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const IsAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('auth-id')) {
      navigate('/login');
    }
  }, []);
};
