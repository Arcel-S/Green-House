const FAVORITES_STORAGE_KEY = 'treemart_favorite_plants'
const FAVORITES_EVENT = 'treemart-favorites-updated'

function isBrowser() {
  return typeof window !== 'undefined'
}

function emitFavoritesUpdated() {
  if (!isBrowser()) {
    return
  }

  window.dispatchEvent(new Event(FAVORITES_EVENT))
}

export function getFavoritePlants() {
  if (!isBrowser()) {
    return []
  }

  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function setFavoritePlants(plants) {
  if (!isBrowser()) {
    return
  }

  window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(plants))
  emitFavoritesUpdated()
}

export function isPlantFavorite(plantId) {
  return getFavoritePlants().some((plant) => plant.id === plantId)
}

export function toggleFavoritePlant(plant) {
  const favorites = getFavoritePlants()
  const normalizedSlug = plant.slug ?? plant.detailSlug ?? null
  const normalizedId = normalizedSlug ?? plant.id
  const exists = favorites.some((item) => item.id === normalizedId)

  if (exists) {
    const filtered = favorites.filter((item) => item.id !== normalizedId)
    setFavoritePlants(filtered)
    return false
  }

  const next = [
    ...favorites,
    {
      id: normalizedId,
      name: plant.name,
      image: plant.image,
      price: plant.price ?? '-',
      slug: normalizedSlug,
    },
  ]
  setFavoritePlants(next)
  return true
}

export function subscribeToFavorites(callback) {
  if (!isBrowser()) {
    return () => {}
  }

  window.addEventListener(FAVORITES_EVENT, callback)
  window.addEventListener('storage', callback)

  return () => {
    window.removeEventListener(FAVORITES_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}
