import React from 'react'
import styles from './Home.module.scss'

const Home: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.OctoLogo}>
                <div className={styles.logo}>
                    <img src="/src/assets/img/testing-library.svg" alt="Logo" />
                </div>
                <div className={styles.OctoLogoText}>OctoLib</div>
            </div>
            <div className={styles.authButtons}>
                <button className={styles.login}>Login</button>
                <button className={styles.signUp}>Sign up</button>
            </div>
        </div>
    )
}

export default Home