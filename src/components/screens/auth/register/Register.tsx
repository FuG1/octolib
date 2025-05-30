import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../auth.module.scss'
import { useAuth } from '../../../../context/AuthContext'

const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/login')
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
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">Пароль</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="confirmPassword">Подтвердите пароль</label>
            <input
              className={styles.input}
              type="password"
              id="confirmPassword"
              required
            />
          </div>
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