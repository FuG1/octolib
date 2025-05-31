import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../auth.module.scss'
import { useAuth } from '../../../../context/AuthContext'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState<'user' | 'admin' | 'librarian'>('user')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(username, role)
    navigate('/')
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Вход</h1>
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
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="role">Роль</label>
            <select
              className={styles.input}
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as 'user' | 'admin' | 'librarian')}
            >
              <option value="user">Пользователь</option>
              <option value="admin">Администратор</option>
              <option value="librarian">Библиотекарь</option>
            </select>
          </div>
          <button type="submit" className={styles.submitButton}>
            Войти
          </button>
        </form>
        <div className={styles.switchText}>
          Нет аккаунта?
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  )
}

export default Login