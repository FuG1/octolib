import React, { useState } from 'react'
import Header from '../../ui/header/Header'
import styles from './Librarian.module.scss'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

interface Table {
  id: number
  name: string
  status: 'free' | 'occupied'
  currentVisitor?: {
    name: string
    startTime: string
    endTime: string
  }
}

const Librarian: React.FC = () => {
  const { role } = useAuth()
  const navigate = useNavigate()
  
  const [tables, setTables] = useState<Table[]>([
    {
      id: 1,
      name: 'Стол #1',
      status: 'free'
    },
    {
      id: 2,
      name: 'Стол #2',
      status: 'occupied',
      currentVisitor: {
        name: 'Иван Петров',
        startTime: '10:00',
        endTime: '12:00'
      }
    },
    {
      id: 3,
      name: 'Стол #3',
      status: 'free'
    }
  ])

  // Redirect if not librarian
  if (role !== 'librarian') {
    navigate('/')
    return null
  }

  const handleAssignTable = (tableId: number, visitorName: string, startTime: string, endTime: string) => {
    setTables(tables.map(table => {
      if (table.id === tableId) {
        return {
          ...table,
          status: 'occupied' as const,
          currentVisitor: {
            name: visitorName,
            startTime,
            endTime
          }
        }
      }
      return table
    }))
  }

  const handleFreeTable = (tableId: number) => {
    setTables(tables.map(table => {
      if (table.id === tableId) {
        return {
          ...table,
          status: 'free' as const,
          currentVisitor: undefined
        }
      }
      return table
    }))
  }

  return (
    <>
      <Header />
      <div className={styles.librarianContainer}>
        <h1 className={styles.title}>Панель библиотекаря</h1>
        <div className={styles.tablesGrid}>
          {tables.map(table => (
            <div key={table.id} className={styles.tableCard}>
              <div className={styles.tableHeader}>
                <h2 className={styles.tableName}>{table.name}</h2>
                <span className={`${styles.tableStatus} ${styles[table.status]}`}>
                  {table.status === 'free' ? 'Свободен' : 'Занят'}
                </span>
              </div>

              {table.status === 'free' ? (
                <form 
                  className={styles.assignForm}
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.target as HTMLFormElement
                    const visitorName = (form.elements.namedItem('visitorName') as HTMLInputElement).value
                    const startTime = (form.elements.namedItem('startTime') as HTMLInputElement).value
                    const endTime = (form.elements.namedItem('endTime') as HTMLInputElement).value
                    handleAssignTable(table.id, visitorName, startTime, endTime)
                  }}
                >
                  <div className={styles.formGroup}>
                    <label>Имя посетителя</label>
                    <input type="text" name="visitorName" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Время начала</label>
                    <input type="time" name="startTime" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Время окончания</label>
                    <input type="time" name="endTime" required />
                  </div>
                  <button type="submit" className={styles.assignButton}>
                    Назначить
                  </button>
                </form>
              ) : (
                <>
                  <div className={styles.currentVisitor}>
                    <p>Посетитель: {table.currentVisitor?.name}</p>
                    <p>Время: {table.currentVisitor?.startTime} - {table.currentVisitor?.endTime}</p>
                  </div>
                  <button 
                    className={styles.assignButton}
                    onClick={() => handleFreeTable(table.id)}
                  >
                    Освободить стол
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Librarian