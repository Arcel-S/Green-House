import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

function formatCurrency(value) {
  return `Rp ${new Intl.NumberFormat('id-ID').format(value)}`
}

export default function CartPage() {
  const navigate = useNavigate()
  const {
    items,
    cartCount,
    totalPrice,
    removeItemFromCart,
    updateCartQuantity,
    clearCart,
  } = useCart()

  useEffect(() => {
    document.title = 'TreeMart - Keranjang'
  }, [])

  return (
    <div className="min-h-screen bg-background-light pb-28 font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <header className="border-b border-primary/10 bg-background-light/80 px-4 py-4 backdrop-blur-md dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <button
            className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-primary/10"
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Kembali"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="flex-1 text-center text-xl font-bold">Keranjang Anda</h1>
          <div className="flex w-10 items-center justify-end text-xs font-bold text-primary">
            {cartCount} item
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl p-4">
        {items.length === 0 ? (
          <div className="rounded-xl border border-primary/20 bg-white/80 p-8 text-center shadow-sm dark:bg-primary/10">
            <p className="text-lg font-bold">Keranjang masih kosong</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Tambahkan tanaman favoritmu dari halaman beranda atau katalog.
            </p>
            <Link
              className="mt-5 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white"
              to="/katalog"
            >
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <article
                key={item.id}
                className="flex gap-3 rounded-xl border border-primary/10 bg-white p-3 shadow-sm dark:bg-primary/10"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col gap-2">
                  <h2 className="text-base font-bold">{item.name}</h2>
                  <p className="text-sm font-semibold text-primary">{item.price}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-primary/20 px-2 py-1 text-xs"
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="min-w-5 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        className="rounded-md border border-primary/20 px-2 py-1 text-xs"
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-xs font-semibold text-red-500"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {items.length > 0 && (
        <footer className="fixed bottom-0 left-0 right-0 border-t border-primary/10 bg-background-light p-4 dark:bg-background-dark">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-300">Total pembayaran</p>
              <p className="text-lg font-bold text-primary">{formatCurrency(totalPrice)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-primary/20 px-4 py-2 text-sm font-semibold"
                onClick={clearCart}
              >
                Kosongkan
              </button>
              <button
                type="button"
                className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
