import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slice/registerSlice';
import Profile from '../Profile/Profile';
import classes from './login.module.css'


function Login () {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === 'Admin' && password === '12345') {
      dispatch(login());
      setIsRegister(true);
    } else {
      setErrorMessage('Вы ввели неправильные данные');
    }
  };


  return (
    <>
    {isRegister ? 
    (<Profile/> ):
    (   
      <>
      <h1 className={classes.text}>Регистация</h1>
    <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.register_one}>
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            value={userName}
            placeholder="Введите ваше имя"
            onChange={handleUserNameChange}
          />
        </div>
        <div className={classes.register_two}>
          <label htmlFor="password">Пароль</label>
          <input
            type="number"
            value={password}
            placeholder="Введите ваш пароль"
            onChange={handlePasswordChange}
          />
        </div>
        {errorMessage && <div className={classes.error_register}>{errorMessage}</div>}
        <button  className={classes.button_register} type="submit">Войти</button>
      </form>      
    </>)}
    </>
  );
};

export default Login;