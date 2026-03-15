import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCategories from './components/FeaturedCategories'
import FeaturedPlants from './components/FeaturedPlants'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedCategories />
        <FeaturedPlants />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
