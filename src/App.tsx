import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/screens/home/Home'
import Login from './components/screens/auth/login/Login'
import Register from './components/screens/auth/register/Register'
import Catalog from './components/screens/catalog/Catalog'
import About from './components/screens/about/About'
import Contacts from './components/screens/contacts/Contacts'
import ReadingTables from './components/screens/reading-tables/ReadingTables'
import Admin from './components/screens/admin/Admin'
import Librarian from './components/screens/librarian/Librarian'
import { AuthProvider } from './context/AuthContext'

function App() {
  return(
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/tables" element={<ReadingTables />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/librarian" element={<Librarian />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App