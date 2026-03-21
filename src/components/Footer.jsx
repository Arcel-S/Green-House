import { useState } from 'react'

const services = [
  'Pengiriman Cepat',
  'Konsultasi Gratis',
  'Garansi Tanaman',
  'Cek Status Order',
]

const socialLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    icon: 'share',
    url: 'https://instagram.com',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: 'share',
    url: 'https://facebook.com',
  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: 'share',
    url: 'https://twitter.com',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: 'share',
    url: 'https://wa.me',
  },
]

export default function Footer() {
  const [isShareOpen, setIsShareOpen] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    const title = 'TreeMart'
    const text = 'Temukan koleksi tanaman berkualitas di TreeMart!'

    // Coba gunakan Web Share API
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        })
      } catch (err) {
        console.log('Share dibatalkan')
      }
    } else {
      // Fallback ke menu pilihan sosmed
      setIsShareOpen(!isShareOpen)
    }
  }

  const shareToSocial = (platform) => {
    const url = window.location.href
    const title = 'TreeMart - Koleksi Tanaman Berkualitas'
    let shareUrl = ''

    switch (platform) {
      case 'instagram':
        // Instagram tidak punya direct share URL, tapi bisa copy ke clipboard
        navigator.clipboard.writeText(url)
        alert('Link disalin ke clipboard! Bisa dibagikan di Instagram Stories atau Direct Message')
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        window.open(shareUrl, '_blank', 'width=600,height=400')
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        window.open(shareUrl, '_blank', 'width=600,height=400')
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`
        window.open(shareUrl, '_blank')
        break
      default:
        break
    }

    setIsShareOpen(false)
  }

  return (
    <footer className="bg-slate-100 dark:bg-black/20 border-t border-primary/10 pt-12 pb-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div>
            <h2 className="text-xl font-black tracking-wider"><span className="text-brand">Tree</span>Mart</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Menghadirkan alam ke dalam rumah Anda dengan tanaman berkualitas tinggi dan edukasi perawatan yang tepat.
          </p>
        </div>

        <div className="text-center md:justify-self-center">
          <h3 className="font-bold mb-4">Layanan</h3>
          <ul className="flex flex-col items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="text-center md:justify-self-center relative">
          <h3 className="font-bold mb-4">Ikuti Kami</h3>
          <div className="flex justify-center gap-4">
            <div className="relative">
              <button
                onClick={handleShare}
                className="size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Share"
              >
                <span className="material-symbols-outlined">share</span>
              </button>

              {isShareOpen && (
                <div className="absolute bottom-full mb-2 -left-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-primary/20 py-2 z-10">
                  {socialLinks.map((social) => (
                    <button
                      key={social.id}
                      onClick={() => shareToSocial(social.id)}
                      className="w-full px-4 py-2 text-sm text-left hover:bg-primary/10 transition-all"
                    >
                      {social.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#"
              className="size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
        <p>© 2024 <span className="font-bold"><span className="text-brand">Tree</span>Mart</span>. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  )
}
