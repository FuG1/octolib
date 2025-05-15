import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import Welcome from './welcome-container/Welcome'
import Popular from "./popular-container/Popular"
import Header from '../../ui/header/Header'

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Welcome />
            <Popular />
        </>
    )
}

export default Home