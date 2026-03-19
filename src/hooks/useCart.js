import { useEffect, useMemo, useState } from 'react'
import {
  addItemToCart,
  clearCart,
  getCartCount,
  getCartItems,
  removeItemFromCart,
  subscribeToCart,
  updateCartQuantity,
} from '../utils/cartStorage'

function parsePrice(price) {
  return Number(String(price).replace(/[^0-9]/g, '')) || 0
}

export function useCart() {
  const [items, setItems] = useState(() => getCartItems())

  useEffect(() => {
    const syncItems = () => {
      setItems(getCartItems())
    }

    return subscribeToCart(syncItems)
  }, [])

  const cartCount = useMemo(() => getCartCount(), [items])

  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0),
    [items],
  )

  return {
    items,
    cartCount,
    totalPrice,
    addItemToCart,
    removeItemFromCart,
    updateCartQuantity,
    clearCart,
  }
}
