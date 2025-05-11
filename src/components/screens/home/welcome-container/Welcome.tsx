import React from 'react'
import styles from './Welcome.module.scss'

const Welcome: React.FC = () => {
    return (
        <div className={styles.welcomeContainer}>
            <h1 className={styles.text}>Добро пожаловать в библиотеку</h1>
            <button className={styles.catalogButton}>Перейти в каталог</button>

        </div>
    )
}

export default Welcome