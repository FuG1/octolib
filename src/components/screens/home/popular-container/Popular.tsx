import React from 'react'
import styles from './Popular.module.scss'

const Popular: React.FC = () => {
    const popularBooks = [
        {
            id: 1,
            title: 'Евгений Онегин',
            author: 'Александр Пушкин',
            image: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg'
        },
        {
            id: 2,
            title: 'Анна Каренина',
            author: 'Лев Толстой',
            image: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg'
        },
        {
            id: 3,
            title: 'Идиот',
            author: 'Фёдор Достоевский',
            image: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg'
        }
    ]

    return (
        <div className={styles.popularContainer}>
            <h2 className={styles.title}>Популярные книги</h2>
            <div className={styles.booksGrid}>
                {popularBooks.map(book => (
                    <div key={book.id} className={styles.bookCard}>
                        <img src={book.image} alt={book.title} className={styles.bookImage} />
                        <div className={styles.bookInfo}>
                            <h3 className={styles.bookTitle}>{book.title}</h3>
                            <p className={styles.bookAuthor}>{book.author}</p>
                            <button className={styles.readButton}>Читать</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Popular