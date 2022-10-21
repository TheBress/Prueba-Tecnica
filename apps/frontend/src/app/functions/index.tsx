import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../models';

interface Props {
  passwordVisible: boolean;
  setPasswordVisible: (value: boolean) => void;
}

export const IsAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('auth-id')) {
      navigate('/login');
    }
  }, []);
};

export const getData = () => {
  const [data, setdata] = useState<User[]>([]);

  useEffect(() => {
    fetch('DB.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setdata(myJson);
      });
  }, []);

  return { data };
};

export const changePasswordVisibility = (
  passwordVisible: boolean,
  setPasswordVisible: (value: boolean) => void
) => {
  if (passwordVisible) setPasswordVisible(false);
  else setPasswordVisible(true);
};
