import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hero({ onSearchSubmit }) {
  const heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAtTdCLx1NDXcYIVlr3Ouv8QZiiA4MqX2AKm9Dn6dk5C1mPE49vMZo2mUxVTptI5f1qx7eE0BXkbIrb4StyNqsbNMrjzUeAAmleDG1Ap8PcmQw6Bq3xQHwSgnSAj2iwuwBiUmmud_KKPwOsq8C-NLGDr5qSB3pHcokH6IKHPJ-HDtVhS3jV1L-afE9xjHlcLfxmuyNWpZb7DCHI9MjlL0PQD7GP1GfVPUVJ8mxFBSeAbeSY5RJTJgBXmyULrSkbrjvENpss8p7FAQ";
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus()
    }
  }, [isSearchOpen])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearchSubmit?.(query.trim())
    document.getElementById('popular-plants')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="@container">
      <div className="p-4 md:p-6">
        <div
          className="relative flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("${heroImage}")`,
          }}
        >
          <div className="max-w-2xl flex flex-col gap-4">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Hijaukan Masa Depan dengan <span className="text-brand">Tree</span>Mart
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-medium max-w-lg mx-auto">
              Temukan koleksi tanaman hias terbaik yang dikurasi khusus untuk menghadirkan kesegaran di setiap sudut hunian Anda.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button
              className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
            >
              <span>Temukan Tanamanmu</span>
            </button>
            <Link
              className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all"
              to="/katalog"
            >
              <span>Lihat Katalog</span>
            </Link>
          </div>

          {isSearchOpen && (
            <div className="mt-2 w-full max-w-lg">
              <form className="relative" onSubmit={handleSubmit}>
                <span className="pointer-events-none material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
                  search
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Cari tanaman favoritmu..."
                  className="h-12 w-full rounded-full border border-white/30 bg-white/10 pl-11 pr-24 text-sm text-white placeholder:text-white/70 outline-none backdrop-blur-md focus:border-white/60"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white hover:bg-primary/90"
                >
                  Cari
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
