import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { useAuth } from '../../../context/AuthContext'

const Header: React.FC = () => {
    const navigate = useNavigate()
    const { username, logout, isAuthenticated } = useAuth()

    return (
        <div className={styles.header}>
            <div className={styles.logo} onClick={() => navigate('/')}>
                <img src="/src/assets/img/testing-library.svg" alt="Logo" />
                <div className={styles.text}>OctoLib</div>
            </div>
            <div className={styles.navigation}>
                <a href="/catalog" onClick={(e) => { e.preventDefault(); navigate('/catalog') }}>Каталог</a>
                <a href="/tables" onClick={(e) => { e.preventDefault(); navigate('/tables') }}>Читательские столы</a>
                <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about') }}>О нас</a>
                <a href="/contacts" onClick={(e) => { e.preventDefault(); navigate('/contacts') }}>Контакты</a>
            </div>
            <div className={styles.authButtons}>
                {isAuthenticated ? (
                    <div className={styles.userInfo}>
                        <span>Привет, {username}!</span>
                        <button className={styles.logout} onClick={logout}>
                            Выйти
                        </button>
                    </div>
                ) : (
                    <>
                        <button className={styles.login} onClick={() => navigate('/login')}>
                            Login
                        </button>
                        <button className={styles.signUp} onClick={() => navigate('/register')}>
                            Sign up
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header