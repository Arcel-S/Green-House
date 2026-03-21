import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

const WHATSAPP_NUMBER = '+62 895-6100-20963'

function formatCurrency(value) {
  return `Rp ${new Intl.NumberFormat('id-ID').format(value)}`
}

function parsePrice(price) {
  return Number(String(price).replace(/[^0-9]/g, '')) || 0
}

function normalizeWhatsAppNumber(rawNumber) {
  const digits = String(rawNumber).replace(/\D/g, '')

  if (digits.startsWith('0')) {
    return `62${digits.slice(1)}`
  }

  if (digits.startsWith('62')) {
    return digits
  }

  if (digits.startsWith('8')) {
    return `62${digits}`
  }

  return digits
}

function buildCheckoutWhatsAppUrl(items, totalPrice) {
  const normalizedNumber = normalizeWhatsAppNumber(WHATSAPP_NUMBER)

  const itemLines = items.map((item, index) => {
    const unitPrice = parsePrice(item.price)
    return [
      `${index + 1}. Jenis Tanaman: ${item.name}`,
      `   Jumlah: ${item.quantity} tanaman`,
      `   Harga Satuan: ${formatCurrency(unitPrice)}`,
    ].join('\n')
  })

  const message = [
    '👤 Data Pembeli',
    'Nama: [Nama Pembeli]',
    'Alamat Lengkap: [Alamat Pembeli, RT/RW, Kecamatan, Kota/Kabupaten, Kode Pos]',
    '',
    '🌱 Detail Pesanan',
    ...itemLines,
    '',
    `💰 Total Pembayaran: ${formatCurrency(totalPrice)}`,
    '💳 Metode Pembayaran: [Transfer Bank / COD / E-Wallet]',
  ].join('\n')

  return `https://api.whatsapp.com/send?phone=${normalizedNumber}&text=${encodeURIComponent(message)}`
}

export default function CartPage() {
  const navigate = useNavigate()
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    action: null,
    itemId: null,
  })
  const {
    items,
    cartCount,
    totalPrice,
    removeItemFromCart,
    updateCartQuantity,
    clearCart,
  } = useCart()
  const checkoutWhatsAppUrl = buildCheckoutWhatsAppUrl(items, totalPrice)

  function closeConfirmDialog() {
    setConfirmDialog({
      isOpen: false,
      title: '',
      message: '',
      action: null,
      itemId: null,
    })
  }

  function openRemoveAtZeroDialog(item) {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus item dari keranjang?',
      message: `Jumlah ${item.name} akan menjadi 0 dan item akan dihapus dari keranjang.`,
      action: 'remove-at-zero',
      itemId: item.id,
    })
  }

  function openRemoveItemDialog(item) {
    setConfirmDialog({
      isOpen: true,
      title: 'Hapus item ini?',
      message: `${item.name} akan dihapus dari keranjang.`,
      action: 'remove-item',
      itemId: item.id,
    })
  }

  function openClearCartDialog() {
    setConfirmDialog({
      isOpen: true,
      title: 'Kosongkan keranjang?',
      message: 'Semua item di keranjang akan dihapus.',
      action: 'clear-cart',
      itemId: null,
    })
  }

  function handleConfirmDialogAction() {
    if (confirmDialog.action === 'remove-at-zero' && confirmDialog.itemId) {
      updateCartQuantity(confirmDialog.itemId, 0)
    }

    if (confirmDialog.action === 'remove-item' && confirmDialog.itemId) {
      removeItemFromCart(confirmDialog.itemId)
    }

    if (confirmDialog.action === 'clear-cart') {
      clearCart()
    }

    closeConfirmDialog()
  }

  function handleDecreaseQuantity(item) {
    const nextQuantity = item.quantity - 1

    if (nextQuantity > 0) {
      updateCartQuantity(item.id, nextQuantity)
      return
    }

    openRemoveAtZeroDialog(item)
  }

  function handleClearCart() {
    openClearCartDialog()
  }

  function handleCheckout() {
    const checkoutWindow = window.open(checkoutWhatsAppUrl, '_blank', 'noopener,noreferrer')

    if (checkoutWindow) {
      clearCart()
      return
    }

    clearCart()
    window.location.href = checkoutWhatsAppUrl
  }

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
                        onClick={() => handleDecreaseQuantity(item)}
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
                      onClick={() => openRemoveItemDialog(item)}
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
        <footer className="fixed bottom-16 left-0 right-0 border-t border-primary/10 bg-background-light p-4 dark:bg-background-dark md:bottom-0">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-300">Total pembayaran</p>
              <p className="text-lg font-bold text-primary">{formatCurrency(totalPrice)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-primary/20 px-4 py-2 text-sm font-semibold"
                onClick={handleClearCart}
              >
                Kosongkan
              </button>
              <button
                type="button"
                className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </footer>
      )}

      {confirmDialog.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-primary/20 bg-white p-5 shadow-2xl dark:bg-background-dark">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{confirmDialog.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{confirmDialog.message}</p>
            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={closeConfirmDialog}
                className="rounded-lg border border-primary/20 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-primary/10 dark:text-slate-200"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleConfirmDialogAction}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Ya, Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
