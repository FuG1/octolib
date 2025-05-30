import React, { useState } from 'react'
import Header from '../../ui/header/Header'
import styles from './ReadingTables.module.scss'

interface Table {
    id: number
    name: string
    status: string
    image: string
    books: string[]
}

const ReadingTables: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<Table | null>(null)

    const tables: Table[] = [
        {
            id: 1,
            name: 'Стол #1',
            status: 'Свободен',
            image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg',
            books: ['Война и мир - Том 1', 'Евгений Онегин', 'Мастер и Маргарита']
        },
        {
            id: 2,
            name: 'Стол #2',
            status: 'Занят',
            image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg',
            books: ['Преступление и наказание', 'Идиот', 'Братья Карамазовы']
        },
        {
            id: 3,
            name: 'Стол #3',
            status: 'Свободен',
            image: 'https://images.pexels.com/photos/1957479/pexels-photo-1957479.jpeg',
            books: ['Анна Каренина', 'Отцы и дети', 'Горе от ума']
        },
        {
            id: 4,
            name: 'Стол #4',
            status: 'Занят',
            image: 'https://images.pexels.com/photos/1957480/pexels-photo-1957480.jpeg',
            books: ['Мёртвые души', 'Ревизор', 'Вишнёвый сад']
        }
    ]

    return (
        <>
            <Header />
            <div className={styles.tablesContainer}>
                <h1 className={styles.title}>Читательские столы</h1>
                <div className={styles.tablesGrid}>
                    {tables.map(table => (
                        <div
                            key={table.id}
                            className={styles.tableCard}
                            onClick={() => setSelectedTable(table)}
                        >
                            <img
                                src={table.image}
                                alt={table.name}
                                className={styles.tableIcon}
                            />
                            <h3 className={styles.tableName}>{table.name}</h3>
                            <p className={styles.tableStatus}>Статус: {table.status}</p>
                        </div>
                    ))}
                </div>

                {selectedTable && (
                    <div className={styles.modal} onClick={() => setSelectedTable(null)}>
                        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                            <button
                                className={styles.closeButton}
                                onClick={() => setSelectedTable(null)}
                            >
                                ×
                            </button>
                            <div className={styles.tableDetails}>
                                <h2>{selectedTable.name}</h2>
                                <p className={styles.tableStatus}>Статус: {selectedTable.status}</p>
                                <h3>Книги на столе:</h3>
                                <ul className={styles.booksList}>
                                    {selectedTable.books.map((book, index) => (
                                        <li key={index}>{book}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ReadingTables