import { useState } from 'react'

const mobileNavItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'catalog', label: 'Katalog', href: '#catalog' },
  { id: 'recommendations', label: 'Rekomendasi', href: '#recommendations' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="relative flex items-center px-4 py-3 justify-between">
        <div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-black tracking-wider">
            <span className="text-brand">Green</span><span>House</span>
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold text-brand" href="#home">
            Home
          </a>
          <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#catalog">
            Katalog
          </a>
          <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#recommendations">
            Rekomendasi
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">
              shopping_cart
            </span>
          </button>
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
          <nav className="absolute top-full left-4 right-4 md:hidden mt-2 rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
            {mobileNavItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                  item.id === 'home'
                    ? 'text-brand bg-primary/5'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-primary/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
