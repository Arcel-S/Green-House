import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

const mobileNavItems = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'catalog', label: 'Katalog', to: '/katalog' },
  { id: 'collection', label: 'Koleksi', to: '/koleksi' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const headerRef = useRef(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMobileMenu()
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleEscapeKey)
      }
    }
  }, [isMobileMenuOpen])

  const desktopNavClass = ({ isActive }) =>
    `relative px-1 py-1 text-sm font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-brand after:transition-transform after:duration-300 ${
      isActive
        ? 'text-brand after:scale-x-100'
        : 'text-slate-600 after:scale-x-0 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200'
    }`

  const mobileNavClass = ({ isActive }) =>
    `block px-4 py-3 text-sm font-semibold transition-all ${
      isActive
        ? 'bg-primary/10 text-brand'
        : 'text-slate-700 hover:bg-primary/10 dark:text-slate-200'
    }`

  return (
    <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90" ref={headerRef}>
      <div className="relative flex items-center justify-between px-4 py-2 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="md:justify-self-start">
          <h2 className="text-xl font-black tracking-wider text-slate-900 dark:text-slate-100">
            <span className="text-brand">Tree</span><span>Mart</span>
          </h2>
        </div>

        <div className="hidden md:flex items-center justify-self-center gap-8">
          <NavLink className={desktopNavClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={desktopNavClass} to="/katalog">
            Katalog
          </NavLink>
          <NavLink className={desktopNavClass} to="/koleksi">
            Koleksi
          </NavLink>
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0 md:justify-self-end">
          <Link to="/keranjang" onClick={closeMobileMenu} className="relative flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors" aria-label="Keranjang">
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">
              shopping_cart
            </span>
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 z-40 md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            {/* Mobile menu */}
            <nav className="absolute top-full left-4 right-4 md:hidden mt-2 rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden z-50">
              {mobileNavItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={closeMobileMenu}
                  end={item.to === '/'}
                  className={mobileNavClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
