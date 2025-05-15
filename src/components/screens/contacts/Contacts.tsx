import React from 'react'
import Header from '../../ui/header/Header'
import styles from './Contacts.module.scss'

const Contacts: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <>
            <Header />
            <div className={styles.contactsContainer}>
                <h1 className={styles.title}>Контакты</h1>
                <div className={styles.content}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoSection}>
                            <h2>Свяжитесь с нами</h2>
                            <p>Email: info@octolib.com</p>
                            <p>Телефон: +7 (999) 123-45-67</p>
                            <p>Адрес: г. Москва, ул. Примерная, д. 123</p>
                        </div>
                        <div className={styles.infoSection}>
                            <h2>Режим работы</h2>
                            <p>Пн-Пт: 9:00 - 18:00</p>
                            <p>Сб-Вс: 10:00 - 16:00</p>
                        </div>
                    </div>
                    <div className={styles.contactForm}>
                        <h2>Напишите нам</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Имя</label>
                                <input type="text" id="name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Сообщение</label>
                                <textarea id="message" rows={5} required></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts