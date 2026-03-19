import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCategories from './components/FeaturedCategories'
import FeaturedPlants from './components/FeaturedPlants'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CatalogPage from './components/CatalogPage'
import PlantDetailPage from './components/PlantDetailPage'
import CartPage from './components/CartPage'
import CollectionPage from './components/CollectionPage'

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="flex-1">
      <Hero onSearchSubmit={setSearchQuery} />
      <FeaturedCategories />
      <FeaturedPlants searchQuery={searchQuery} />
      <Newsletter />
    </main>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 page-transition" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/katalog" element={<CatalogPage />} />
          <Route path="/detail-tanaman/:slug" element={<PlantDetailPage />} />
          <Route path="/keranjang" element={<CartPage />} />
          <Route path="/koleksi" element={<CollectionPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
