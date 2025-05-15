import React from 'react'
import Header from '../../ui/header/Header'
import styles from './About.module.scss'

const About: React.FC = () => {
    return (
        <>
            <Header />
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>О нас</h1>
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h2>Наша миссия</h2>
                        <p>
                            OctoLib - это современная онлайн библиотека, созданная с целью сделать 
                            литературу доступной для каждого. Мы стремимся создать удобную платформу 
                            для чтения и изучения литературы, где каждый может найти книгу по своему вкусу.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2>Что мы предлагаем</h2>
                        <ul>
                            <li>Широкий выбор книг различных жанров</li>
                            <li>Удобный интерфейс для чтения</li>
                            <li>Персональные рекомендации</li>
                            <li>Возможность создания собственных коллекций</li>
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h2>Наша команда</h2>
                        <p>
                            Мы - команда энтузиастов, объединенных любовью к литературе и технологиям. 
                            Наша цель - сделать чтение доступным и увлекательным для каждого.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About