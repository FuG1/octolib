import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import Welcome from './welcome-container/Welcome.tsx'
import Popular from "./popular-container/Popular.tsx"

const Home: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src="/src/assets/img/testing-library.svg" alt="Logo" />
                    <div className={styles.text}>OctoLib</div>
                </div>
                <div className={styles.navigation}>
                    <a href="#" className={styles.catalog}>Каталог</a>
                    <a href="#" className={styles.about}>О нас</a>
                    <a href="#" className={styles.contacts}>Контакты</a>
                </div>
                <div className={styles.authButtons}>
                    <button className={styles.login} onClick={() => navigate('/login')}>Login</button>
                    <button className={styles.signUp} onClick={() => navigate('/register')}>Sign up</button>
                </div>
            </div>
            <Welcome />
            <Popular />
        </>
    )
}

export default Home