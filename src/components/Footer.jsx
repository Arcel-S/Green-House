const services = [
  'Pengiriman Cepat',
  'Konsultasi Gratis',
  'Garansi Tanaman',
  'Cek Status Order',
]

export default function Footer() {
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

        <div className="text-center md:justify-self-center">
          <h3 className="font-bold mb-4">Ikuti Kami</h3>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
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
