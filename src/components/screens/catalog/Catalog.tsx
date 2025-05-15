import React from 'react'
import Header from '../../ui/header/Header'
import styles from './Catalog.module.scss'

const Catalog: React.FC = () => {
    const books = [
        {
            id: 1,
            title: 'Война и мир',
            author: 'Лев Толстой',
            image: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg',
            description: 'Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах.'
        },
        {
            id: 2,
            title: 'Преступление и наказание',
            author: 'Фёдор Достоевский',
            image: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg',
            description: 'Социально-психологический и социально-философский роман Фёдора Михайловича Достоевского.'
        },
        {
            id: 3,
            title: 'Мастер и Маргарита',
            author: 'Михаил Булгаков',
            image: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg',
            description: 'Роман Михаила Афанасьевича Булгакова, работа над которым началась в конце 1920-х годов.'
        }
    ]

    return (
        <>
            <Header />
            <div className={styles.catalogContainer}>
                <h1 className={styles.title}>Каталог книг</h1>
                <div className={styles.booksGrid}>
                    {books.map(book => (
                        <div key={book.id} className={styles.bookCard}>
                            <img src={book.image} alt={book.title} className={styles.bookImage} />
                            <div className={styles.bookInfo}>
                                <h3 className={styles.bookTitle}>{book.title}</h3>
                                <p className={styles.bookAuthor}>{book.author}</p>
                                <p className={styles.bookDescription}>{book.description}</p>
                                <button className={styles.readButton}>Читать</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Catalog