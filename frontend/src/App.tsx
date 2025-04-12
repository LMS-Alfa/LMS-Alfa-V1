import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Users from './pages/admin/Users'
import Subjects from './pages/admin/Subjects'
import Classes from './pages/admin/Classes'
import Timetables from './pages/admin/Timetables'
import Roles from './pages/admin/Roles'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* Redirect root to admin dashboard */}
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="roles" element={<Roles />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="classes" element={<Classes />} />
            <Route path="timetables" element={<Timetables />} />
            <Route path="settings" element={<div>Settings Page</div>} />
          </Route>
          
          {/* 404 route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
