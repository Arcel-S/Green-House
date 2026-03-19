const CART_STORAGE_KEY = 'treemart_cart_items'
const CART_EVENT = 'treemart-cart-updated'

function isBrowser() {
  return typeof window !== 'undefined'
}

function emitCartUpdated() {
  if (!isBrowser()) {
    return
  }

  window.dispatchEvent(new Event(CART_EVENT))
}

export function getCartItems() {
  if (!isBrowser()) {
    return []
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function setCartItems(items) {
  if (!isBrowser()) {
    return
  }

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  emitCartUpdated()
}

export function addItemToCart(plant) {
  const cartItems = getCartItems()
  const existingIndex = cartItems.findIndex((item) => item.id === plant.id)

  if (existingIndex >= 0) {
    const updatedItems = [...cartItems]
    updatedItems[existingIndex] = {
      ...updatedItems[existingIndex],
      quantity: updatedItems[existingIndex].quantity + 1,
    }
    setCartItems(updatedItems)
    return
  }

  setCartItems([
    ...cartItems,
    {
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image,
      quantity: 1,
    },
  ])
}

export function removeItemFromCart(plantId) {
  const cartItems = getCartItems()
  const updatedItems = cartItems.filter((item) => item.id !== plantId)
  setCartItems(updatedItems)
}

export function updateCartQuantity(plantId, quantity) {
  const safeQuantity = Number(quantity)
  if (!Number.isFinite(safeQuantity)) {
    return
  }

  if (safeQuantity <= 0) {
    removeItemFromCart(plantId)
    return
  }

  const cartItems = getCartItems()
  const updatedItems = cartItems.map((item) =>
    item.id === plantId ? { ...item, quantity: safeQuantity } : item,
  )

  setCartItems(updatedItems)
}

export function clearCart() {
  setCartItems([])
}

export function getCartCount() {
  return getCartItems().reduce((total, item) => total + item.quantity, 0)
}

export function subscribeToCart(callback) {
  if (!isBrowser()) {
    return () => {}
  }

  window.addEventListener(CART_EVENT, callback)
  window.addEventListener('storage', callback)

  return () => {
    window.removeEventListener(CART_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}
