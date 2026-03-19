import { useEffect, useMemo, useState } from 'react'
import {
  getFavoritePlants,
  isPlantFavorite,
  subscribeToFavorites,
  toggleFavoritePlant,
} from '../utils/favoritesStorage'

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => getFavoritePlants())

  useEffect(() => {
    const sync = () => {
      setFavorites(getFavoritePlants())
    }

    return subscribeToFavorites(sync)
  }, [])

  const favoriteCount = useMemo(() => favorites.length, [favorites])

  return {
    favorites,
    favoriteCount,
    isPlantFavorite,
    toggleFavoritePlant,
  }
}
