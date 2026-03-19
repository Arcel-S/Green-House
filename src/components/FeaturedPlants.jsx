import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredPlants } from '../data/plants'
import { useCart } from '../hooks/useCart'
import { useFavorites } from '../hooks/useFavorites'
import AddToCartButton from './AddToCartButton'

function shufflePlants(items) {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const temp = shuffled[index]
    shuffled[index] = shuffled[randomIndex]
    shuffled[randomIndex] = temp
  }

  return shuffled
}

function PlantCard({ plant, onAddToCart, onToggleFavorite, isFavorite }) {
  const { name, difficulty, difficultyColor, price, image } = plant
  const difficultyClasses = {
    green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  };

  return (
    <div className="flex flex-col gap-3 group">
      <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
        <Link to={`/detail-tanaman/${plant.slug}`}>
          <img
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={image}
          />
        </Link>
        <button
          type="button"
          onClick={() => onToggleFavorite(plant)}
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/80 text-slate-900 backdrop-blur-sm dark:bg-black/40 dark:text-white"
          aria-label={`Toggle koleksi ${name}`}
        >
          <span className={`material-symbols-outlined text-lg ${isFavorite ? 'fill-1 text-primary' : ''}`}>
            favorite
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold">
            {name}
          </h3>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${difficultyClasses[difficultyColor]}`}>
            {difficulty}
          </span>
        </div>
        <p className="text-white font-bold">{price}</p>
      </div>
      <AddToCartButton
        className="w-full py-2 rounded-lg border border-white text-white text-sm font-bold hover:bg-white hover:text-slate-900 transition-colors"
        label="Tambah ke Keranjang"
        onAdd={onAddToCart}
        item={plant}
      />
    </div>
  );
}

export default function FeaturedPlants({ searchQuery = '' }) {
  const { addItemToCart } = useCart()
  const { toggleFavoritePlant, isPlantFavorite } = useFavorites()
  const [randomizedPlants] = useState(() => shufflePlants(featuredPlants))
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredPlants = randomizedPlants.filter((plant) =>
    plant.name.toLowerCase().includes(normalizedQuery),
  )

  return (
    <section id="popular-plants" className="px-4 py-8 bg-primary/5 dark:bg-primary/10">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">
          Tanaman Populer
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Pilihan terlaris untuk pemula maupun kolektor
        </p>
      </div>
      {normalizedQuery && (
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
          Hasil pencarian untuk: <span className="font-bold">{searchQuery}</span>
        </p>
      )}
      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredPlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onAddToCart={addItemToCart}
              onToggleFavorite={toggleFavoritePlant}
              isFavorite={isPlantFavorite(plant.slug ?? plant.id)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-primary/20 bg-white/70 p-5 text-sm text-slate-700 dark:bg-primary/10 dark:text-slate-200">
          Tanaman tidak ditemukan. Coba kata kunci lain.
        </div>
      )}
    </section>
  );
}
