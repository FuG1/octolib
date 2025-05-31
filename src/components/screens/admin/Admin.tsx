import React, { useState } from 'react'
import Header from '../../ui/header/Header'
import styles from './Admin.module.scss'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

interface Book {
  id: number
  title: string
  author: string
  description: string
  image: string
}

interface Author {
  id: number
  name: string
  bio: string
}

interface Room {
  id: number
  name: string
  capacity: number
  status: string
}

const Admin: React.FC = () => {
  const { role } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'books' | 'authors' | 'rooms'>('books')
  
  // Mock data
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: 'Война и мир',
      author: 'Лев Толстой',
      description: 'Роман-эпопея',
      image: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg'
    }
  ])

  const [authors, setAuthors] = useState<Author[]>([
    {
      id: 1,
      name: 'Лев Толстой',
      bio: 'Русский писатель'
    }
  ])

  const [rooms, setRooms] = useState<Room[]>([
    {
      id: 1,
      name: 'Зал 1',
      capacity: 50,
      status: 'Открыт'
    }
  ])

  // Redirect if not admin
  if (role !== 'admin') {
    navigate('/')
    return null
  }

  const handleAddBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add book logic
  }

  const handleAddAuthor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add author logic
  }

  const handleAddRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add room logic
  }

  return (
    <>
      <Header />
      <div className={styles.adminContainer}>
        <h1 className={styles.title}>Панель администратора</h1>
        
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'books' ? styles.active : ''}`}
            onClick={() => setActiveTab('books')}
          >
            Книги
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'authors' ? styles.active : ''}`}
            onClick={() => setActiveTab('authors')}
          >
            Авторы
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'rooms' ? styles.active : ''}`}
            onClick={() => setActiveTab('rooms')}
          >
            Залы
          </button>
        </div>

        {activeTab === 'books' && (
          <div className={styles.section}>
            <h2>Добавить книгу</h2>
            <form className={styles.form} onSubmit={handleAddBook}>
              <div className={styles.formGroup}>
                <label>Название</label>
                <input type="text" required />
              </div>
              <div className={styles.formGroup}>
                <label>Автор</label>
                <input type="text" required />
              </div>
              <div className={styles.formGroup}>
                <label>Описание</label>
                <textarea required />
              </div>
              <div className={styles.formGroup}>
                <label>URL изображения</label>
                <input type="url" required />
              </div>
              <button type="submit" className={styles.button}>Добавить</button>
            </form>

            <h2>Список книг</h2>
            <div className={styles.list}>
              {books.map(book => (
                <div key={book.id} className={styles.item}>
                  <div>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                  </div>
                  <div className={styles.itemActions}>
                    <button className={styles.editButton}>Изменить</button>
                    <button className={styles.deleteButton}>Удалить</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'authors' && (
          <div className={styles.section}>
            <h2>Добавить автора</h2>
            <form className={styles.form} onSubmit={handleAddAuthor}>
              <div className={styles.formGroup}>
                <label>Имя</label>
                <input type="text" required />
              </div>
              <div className={styles.formGroup}>
                <label>Биография</label>
                <textarea required />
              </div>
              <button type="submit" className={styles.button}>Добавить</button>
            </form>

            <h2>Список авторов</h2>
            <div className={styles.list}>
              {authors.map(author => (
                <div key={author.id} className={styles.item}>
                  <div>
                    <h3>{author.name}</h3>
                    <p>{author.bio}</p>
                  </div>
                  <div className={styles.itemActions}>
                    <button className={styles.editButton}>Изменить</button>
                    <button className={styles.deleteButton}>Удалить</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rooms' && (
          <div className={styles.section}>
            <h2>Добавить зал</h2>
            <form className={styles.form} onSubmit={handleAddRoom}>
              <div className={styles.formGroup}>
                <label>Название</label>
                <input type="text" required />
              </div>
              <div className={styles.formGroup}>
                <label>Вместимость</label>
                <input type="number" required />
              </div>
              <div className={styles.formGroup}>
                <label>Статус</label>
                <input type="text" required />
              </div>
              <button type="submit" className={styles.button}>Добавить</button>
            </form>

            <h2>Список залов</h2>
            <div className={styles.list}>
              {rooms.map(room => (
                <div key={room.id} className={styles.item}>
                  <div>
                    <h3>{room.name}</h3>
                    <p>Вместимость: {room.capacity}</p>
                    <p>Статус: {room.status}</p>
                  </div>
                  <div className={styles.itemActions}>
                    <button className={styles.editButton}>Изменить</button>
                    <button className={styles.deleteButton}>Удалить</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Admin