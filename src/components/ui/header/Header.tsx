import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.header}>
            <div className={styles.logo} onClick={() => navigate('/')}>
                <img src="/src/assets/img/testing-library.svg" alt="Logo" />
                <div className={styles.text}>OctoLib</div>
            </div>
            <div className={styles.navigation}>
                <a href="/catalog" onClick={(e) => { e.preventDefault(); navigate('/catalog') }}>Каталог</a>
                <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about') }}>О нас</a>
                <a href="/contacts" onClick={(e) => { e.preventDefault(); navigate('/contacts') }}>Контакты</a>
            </div>
            <div className={styles.authButtons}>
                <button className={styles.login} onClick={() => navigate('/login')}>Login</button>
                <button className={styles.signUp} onClick={() => navigate('/register')}>Sign up</button>
            </div>
        </div>
    )
}