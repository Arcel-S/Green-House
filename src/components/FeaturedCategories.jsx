import { Link } from 'react-router-dom'

const categories = [
  {
    id: 1,
    name: "Pohon Kayu Keras",
    filter: "Pohon Kayu Keras",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzqAI8qv6R-6Ar0m1r8jJDUjADs2wbEkWqUKyuanP5qAi_0x3HF_p7wpw0kS2B4enwmHxVkg5aA1WtN4PLea9PO9ltu6nc6rKFEohdS5Q9-m3HD77tH4f4RqwE5LnpixID4bhD-AEgf51E0DZ0bdIsa4jX3nyOLv9h4lRBEt3IkBxfD_FlRKVe9uvEST0a9Bef_wWs2Lzb4jjtGf5F_05gUYNPQeEbQb_-w2B9P_ZUZ_L6B6whCTa0WxrUhHWTI5X7qIwRKggTeQ",
  },
  {
    id: 2,
    name: "Pioneer",
    filter: "Pioneer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzpC_2NlbtDI1EeAZBY-ad9dbyIE5SwXodXqK7unmXaXdvtJOqMTaFAbw0A2otab9ppWiTsK5_nhetV12xHxY6zAIdzTaa2_OsNT28CFKVlI90M6SbVVpowXIr4ofsdIPvT3fZltWpC554WvTVemQY89KNbtjVouUoq886EeNV2Pz1iiC2oIXpGVpzFM9-skOPJWIWbcR0DlwWT6SpbMlPK1d740P_2ObTCUNUuaD7Boy00JPDmJJ73R0Z4ave1mfPvgkz2_1Vgw",
  },
  {
    id: 3,
    name: "Tanaman Hias & Estetika",
    filter: "Tanaman Hias & Estetika",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhEGpK4tPpEdDjTfkPjeR5wAGrxdxDt2m-GO5-st8ass80LtYs8TD9rBLEZcs2Ib3e7zd11NaPLsn7NId-L_IfI1OlH2d0w6ltAV89n-EbkjbaZle1a9e6-leu7VC6nksF8pf6mJln6mhM16_f6ngoUqQp-7U60_OJtu0m4CKwcUy_Ukpv_BdKEUxQDMUw9x1a9H5JsObKIixUktRKPDdo-ky1mLlhEFmxOLg3xkEOw6YF2DsSTQjO8x9Cl342MtlAdB4Be02EgQ",
  },
  {
    id: 4,
    name: "Tanaman Pangan",
    filter: "Tanaman Pangan",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANob6D6MTLPMbj77Br7qbzbSAq76yWowEjMphhiDBhaYg_vJOwumXfGPWCNMsIeC_7OKDLvOW1XTIyIHCvq9REgsoZp9UvhlvVJiiPGE8E2rbFrk-out4a_uBgnuj8p7nIMJj9h_4rKfhGmH1ec-CF5vtACMBap_ycxU8UO0AC-j_dtcQhs0N8XZRgkqLeBs8mlST3r5l8zTB1HVdza0-NsHTQs-EHBiiVDkgkvSdOtcYkhLfFeb5kPDDO2z8Nj-aET_ZkSPAEJQ",
  },
];

function CategoryCard({ name, image, filter }) {
  return (
    <Link
      to={`/katalog?filter=${encodeURIComponent(filter)}`}
      className="group relative aspect-[4/5] overflow-hidden rounded-xl"
    >
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4">
        <p className="text-white font-bold">{name}</p>
      </div>
    </Link>
  );
}

export default function FeaturedCategories() {
  return (
    <section className="px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">
          Kategori Populer
        </h2>
        <Link className="text-primary text-sm font-bold flex items-center gap-1" to="/katalog">
          Lihat Semua <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            image={category.image}
            filter={category.filter}
          />
        ))}
      </div>
    </section>
  );
}
