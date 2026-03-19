import { useEffect, useRef, useState } from 'react'

export default function AddToCartButton({
  label,
  className,
  onAdd,
  item,
}) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const successTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current)
      }
    }
  }, [])

  const handleClick = () => {
    onAdd(item)
    setIsAnimating(false)
    window.requestAnimationFrame(() => {
      setIsAnimating(true)
    })

    setIsSuccess(true)
    if (successTimerRef.current) {
      window.clearTimeout(successTimerRef.current)
    }

    successTimerRef.current = window.setTimeout(() => {
      setIsSuccess(false)
    }, 900)
  }

  return (
    <button className={`relative overflow-hidden ${className}`} type="button" onClick={handleClick}>
      <span>{isSuccess ? 'Ditambahkan' : label}</span>
      <span
        aria-hidden="true"
        className={`material-symbols-outlined cart-fly-icon ${isAnimating ? 'is-active' : ''}`}
      >
        shopping_cart
      </span>
    </button>
  )
}
