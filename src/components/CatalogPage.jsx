import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { catalogPlants } from '../data/plants'
import { useCart } from '../hooks/useCart'
import { useFavorites } from '../hooks/useFavorites'
import AddToCartButton from './AddToCartButton'

const filterChips = [
  { label: 'Semua', value: 'Semua' },
  { label: 'Indoor', value: 'Indoor' },
  { label: 'Sukulen', value: 'Sukulen' },
  { label: 'Tanaman Gantung', value: 'Tanaman Gantung' },
  { label: 'Meja Kerja', value: 'Meja Kerja' },
]

function CatalogPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItemToCart, cartCount } = useCart()
  const { toggleFavoritePlant, isPlantFavorite } = useFavorites()
  const [careSortDirection, setCareSortDirection] = useState(null)
  const [priceSortDirection, setPriceSortDirection] = useState(null)
  const validFilterValues = filterChips.map((chip) => chip.value)
  const rawFilter = searchParams.get('filter')
  const selectedFilter = rawFilter && validFilterValues.includes(rawFilter) ? rawFilter : 'Semua'
  const careRank = {
    'Sangat Mudah': 1,
    Mudah: 2,
    Sedang: 3,
    Sulit: 4,
  }

  const filteredPlants =
    selectedFilter === 'Semua'
      ? catalogPlants
      : catalogPlants.filter((plant) => plant.category === selectedFilter)

  const parsePriceValue = (priceLabel) =>
    Number(String(priceLabel).replace(/[^0-9]/g, '')) || 0

  const displayedPlants = useMemo(() => {
    const sorted = [...filteredPlants]

    sorted.sort((leftPlant, rightPlant) => {
      if (careSortDirection) {
        const leftRank = careRank[leftPlant.careDifficulty] ?? 99
        const rightRank = careRank[rightPlant.careDifficulty] ?? 99

        if (leftRank !== rightRank) {
          return careSortDirection === 'easy'
            ? leftRank - rightRank
            : rightRank - leftRank
        }
      }

      if (priceSortDirection) {
        const leftPrice = parsePriceValue(leftPlant.price)
        const rightPrice = parsePriceValue(rightPlant.price)

        if (leftPrice !== rightPrice) {
          return priceSortDirection === 'low'
            ? leftPrice - rightPrice
            : rightPrice - leftPrice
        }
      }

      return leftPlant.name.localeCompare(rightPlant.name)
    })

    return sorted
  }, [careSortDirection, filteredPlants, priceSortDirection])

  useEffect(() => {
    document.title = 'TreeMart - Katalog Tanaman'
  }, [])

  return (
    <div className="min-h-screen bg-background-light pb-24 font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <header className="border-b border-primary/10 bg-background-light/80 px-4 py-4 backdrop-blur-md dark:border-primary/20 dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <button
            className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-primary/10"
            type="button"
            onClick={() => navigate('/')}
            aria-label="Kembali ke beranda"
          >
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
          </button>
          <h1 className="flex-1 text-center text-xl font-bold">Katalog Tanaman</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        <div className="py-6">
          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-symbols-outlined text-primary/60 dark:text-primary/40">search</span>
            </div>
            <input
              className="block w-full rounded-xl border border-primary/10 bg-white py-3 pl-10 pr-4 text-slate-900 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary dark:border-primary/30 dark:bg-primary/10 dark:text-slate-100"
              placeholder="Cari tanaman impian Anda..."
              type="text"
            />
          </div>
        </div>

        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-6">
          {filterChips.map((chip) => (
            <button
              key={chip.label}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm ${
                selectedFilter === chip.value
                  ? 'bg-primary font-semibold text-white'
                  : 'border border-primary/5 bg-primary/10 font-medium text-slate-700 hover:bg-primary/20 dark:bg-primary/20 dark:text-slate-200'
              }`}
              type="button"
              onClick={() => {
                if (chip.value === 'Semua') {
                  setSearchParams({})
                  return
                }

                setSearchParams({ filter: chip.value })
              }}
            >
              {chip.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() =>
              setCareSortDirection((currentDirection) =>
                currentDirection === 'easy' ? 'hard' : 'easy',
              )
            }
            className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/20 bg-primary/10 px-5 text-sm font-medium text-slate-700 hover:bg-primary/20 dark:bg-primary/20 dark:text-slate-200"
          >
            Kemudahan Perawatan
            <span className="flex flex-col leading-none">
              <span
                className={`material-symbols-outlined text-xs ${
                  careSortDirection === 'easy' ? 'text-primary' : 'opacity-60'
                }`}
              >
                keyboard_arrow_up
              </span>
              <span
                className={`material-symbols-outlined -mt-1 text-xs ${
                  careSortDirection === 'hard' ? 'text-primary' : 'opacity-60'
                }`}
              >
                keyboard_arrow_down
              </span>
            </span>
          </button>
          <button
            type="button"
            onClick={() =>
              setPriceSortDirection((currentDirection) =>
                currentDirection === 'low' ? 'high' : 'low',
              )
            }
            className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/20 bg-primary/10 px-5 text-sm font-medium text-slate-700 hover:bg-primary/20 dark:bg-primary/20 dark:text-slate-200"
          >
            Harga
            <span className="flex flex-col leading-none">
              <span
                className={`material-symbols-outlined text-xs ${
                  priceSortDirection === 'low' ? 'text-primary' : 'opacity-60'
                }`}
              >
                keyboard_arrow_up
              </span>
              <span
                className={`material-symbols-outlined -mt-1 text-xs ${
                  priceSortDirection === 'high' ? 'text-primary' : 'opacity-60'
                }`}
              >
                keyboard_arrow_down
              </span>
            </span>
          </button>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight">Koleksi Terpopuler</h2>
          <button className="text-sm font-semibold text-primary hover:underline" type="button">
            Lihat Semua
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-8 md:grid-cols-3 lg:grid-cols-4">
          {displayedPlants.map((plant) => (
            <article
              key={plant.name}
              className="group flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-white dark:border-primary/20 dark:bg-primary/5"
            >
              <div className="relative aspect-square overflow-hidden">
                <Link to={`/detail-tanaman/${plant.slug}`}>
                  <img
                    alt={plant.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={plant.image}
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => toggleFavoritePlant(plant)}
                  className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 shadow-sm dark:bg-background-dark/90"
                  aria-label={`Toggle koleksi ${plant.name}`}
                >
                  <span
                    className={`material-symbols-outlined text-sm ${
                      isPlantFavorite(plant.slug ?? plant.id) ? 'fill-1 text-primary' : 'text-slate-400'
                    }`}
                  >
                    favorite
                  </span>
                </button>
              </div>
              <div className="flex flex-1 flex-col p-3">
                <div className="mb-1 flex items-center gap-1">
                  <span className="flex h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                    In Stock
                  </p>
                </div>
                <h3 className="mb-1 line-clamp-1 text-sm font-bold">{plant.name}</h3>
                <p className="mb-3 text-base font-bold text-primary">{plant.price}</p>
                <AddToCartButton
                  className="mt-auto w-full rounded-lg bg-primary py-2 text-xs font-bold text-white transition-colors hover:bg-primary/90"
                  label="Beli Sekarang"
                  onAdd={addItemToCart}
                  item={plant}
                />
              </div>
            </article>
          ))}
        </div>
        {displayedPlants.length === 0 && (
          <div className="rounded-xl border border-primary/20 bg-white/80 p-5 text-sm text-slate-700 dark:bg-primary/10 dark:text-slate-200">
            Tidak ada tanaman untuk kategori {selectedFilter}.
          </div>
        )}
      </main>

      <nav className="pb-safe-area-inset-bottom fixed bottom-0 left-0 right-0 z-30 border-t border-primary/10 bg-white dark:border-primary/20 dark:bg-background-dark md:hidden">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-around px-4">
          <Link className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" to="/">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Beranda</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-primary" to="/katalog">
            <span className="material-symbols-outlined fill-1">potted_plant</span>
            <span className="text-[10px] font-bold">Katalog</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" to="/koleksi">
            <span className="material-symbols-outlined">eco</span>
            <span className="text-[10px] font-medium">Koleksi</span>
          </Link>
          <a className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" href="#">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profil</span>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default CatalogPage
