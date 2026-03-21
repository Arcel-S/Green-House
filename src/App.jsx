import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
import MobileBottomNav from './components/MobileBottomNav'

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 page-transition pb-16 md:pb-0" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/katalog" element={<CatalogPage />} />
          <Route path="/detail-tanaman/:slug" element={<PlantDetailPage />} />
          <Route path="/keranjang" element={<CartPage />} />
          <Route path="/koleksi" element={<CollectionPage />} />
        </Routes>
      </div>
      <MobileBottomNav />
      <Footer />
    </div>
  )
}

export default App
