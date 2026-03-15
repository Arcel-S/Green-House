const footerLinks = {
  navigation: [
    { label: "Beranda", href: "#" },
    { label: "Katalog Tanaman", href: "#" },
    { label: "Rekomendasi", href: "#" },
    { label: "Tentang Kami", href: "#" },
  ],
  services: [
    { label: "Pengiriman Cepat", href: "#" },
    { label: "Konsultasi Gratis", href: "#" },
    { label: "Garansi Tanaman", href: "#" },
    { label: "Cek Status Order", href: "#" },
  ],
};

function FooterSection({ title, links }) {
  return (
    <div>
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-black/20 border-t border-primary/10 pt-12 pb-24 md:pb-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-black tracking-wider"><span className="text-primary">Green</span>House</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Menghadirkan alam ke dalam rumah Anda dengan tanaman berkualitas tinggi dan edukasi perawatan yang tepat.
          </p>
        </div>

        <FooterSection title="Navigasi" links={footerLinks.navigation} />
        <FooterSection title="Layanan" links={footerLinks.services} />

        <div>
          <h3 className="font-bold mb-4">Ikuti Kami</h3>
          <div className="flex gap-4">
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
        <p>© 2024 <span className="font-bold"><span className="text-primary">Green</span>House</span>. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
}
