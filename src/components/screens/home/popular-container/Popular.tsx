import React from 'react'
import styles from './Popular.module.scss'

const Popular: React.FC = () => {
    return (
        <div className={styles.popularContainer}>
           <p className={styles.text}>Популярные книги</p>
        </div>
    )
}

export default Popular