import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../auth.module.scss'
import { useAuth } from '../../../../context/AuthContext'

const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const validateForm = () => {
    if (password.length < 8) {
      setError('Пароль должен содержать минимум 8 символов')
      return false
    }
    if (password !== confirmPassword) {
      setError('Пароли не совпадают')
      return false
    }
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (validateForm()) {
      navigate('/login')
    }
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Регистрация</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="username">Имя пользователя</label>
            <input
              className={styles.input}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">Пароль</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="confirmPassword">Подтвердите пароль</label>
            <input
              className={styles.input}
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.submitButton}>
            Зарегистрироваться
          </button>
        </form>
        <div className={styles.switchText}>
          Уже есть аккаунт?
          <Link to="/login">Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Register