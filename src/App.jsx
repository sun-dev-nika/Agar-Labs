import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
