import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import LandingPage from "./pages/LandingPage"
import WalletPage from "./pages/WalletPage"
import NewsPage from "./pages/NewsPage"
import CompanyPage from "./pages/CompanyPage"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/company" element={<CompanyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

