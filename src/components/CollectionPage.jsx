import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'

export default function CollectionPage() {
  const navigate = useNavigate()
  const { favorites, toggleFavoritePlant } = useFavorites()

  useEffect(() => {
    document.title = 'TreeMart - Koleksi'
  }, [])

  return (
    <div className="min-h-screen bg-background-light pb-10 font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <header className="border-b border-primary/10 bg-background-light/80 px-4 py-4 backdrop-blur-md dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <button
            className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-primary/10"
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Kembali"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="flex-1 text-center text-xl font-bold">Koleksi Tanaman</h1>
          <div className="w-10 text-right text-xs font-semibold text-primary">{favorites.length}</div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl p-4">
        {favorites.length === 0 ? (
          <div className="rounded-xl border border-primary/20 bg-white p-8 text-center dark:bg-primary/10">
            <p className="text-lg font-bold">Belum ada tanaman di koleksi</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Tekan ikon love di tanaman untuk menyimpannya ke koleksi.
            </p>
            <Link
              className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white"
              to="/"
            >
              Jelajahi Tanaman
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {favorites.map((plant) => (
              <article
                key={plant.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm dark:bg-primary/10"
              >
                <div className="relative aspect-square overflow-hidden">
                  {plant.slug ? (
                    <Link to={`/detail-tanaman/${plant.slug}`}>
                      <img
                        alt={plant.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={plant.image}
                      />
                    </Link>
                  ) : (
                    <img
                      alt={plant.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={plant.image}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => toggleFavoritePlant(plant)}
                    className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm dark:bg-background-dark/90"
                    aria-label={`Hapus ${plant.name} dari koleksi`}
                  >
                    <span className="material-symbols-outlined fill-1 text-sm">favorite</span>
                  </button>
                </div>

                <div className="flex flex-1 flex-col p-3">
                  <h2 className="line-clamp-1 text-sm font-bold">{plant.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-primary">{plant.price}</p>
                  {plant.slug ? (
                    <Link
                      className="mt-3 rounded-lg border border-primary/20 px-3 py-1.5 text-center text-xs font-semibold text-primary"
                      to={`/detail-tanaman/${plant.slug}`}
                    >
                      Lihat Detail
                    </Link>
                  ) : (
                    <span className="mt-3 rounded-lg border border-primary/10 px-3 py-1.5 text-center text-xs text-slate-400">
                      Detail belum tersedia
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
