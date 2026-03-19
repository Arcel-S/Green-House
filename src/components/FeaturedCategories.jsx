import { Link } from 'react-router-dom'

const categories = [
  {
    id: 1,
    name: "Tanaman Indoor",
    filter: "Indoor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPWZTfLNnpa1eYmJvZLCGnX6xRN8mdvWnyLqMoPdm1CB7iAkO7rKbKn9j2_fnaYR0r4RkeDOFobjmhVqNv2OkrCvP08wACKjtSoz-gT-kygD8mrkqOCQEMVFXlLUqOHVywHfDzvQXwUlRPQzjIuq6YPdDgls36IcJXT9iA3OnmpTLGoEOHmkfjESXhKO0ZjXoI4h96d1gf35ByCkrmas0CC5fnkMKd9Cc23BMc38GByDMNCgZGnWKJmNKM7O6-ghR4XVXhBPmVAQ",
  },
  {
    id: 2,
    name: "Sukulen",
    filter: "Sukulen",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFHkB2cpJyJ6RaPGk8EYZhaiVs7Dpfb4ZS2kIh9Ql9PwFfktYTF4zsnRpdfltEuAw3BjvW2gImboA-zI45Iwymw4UQuVlDjhRQtt4TaPLDgZ-xIVBfn05UdRwgN7qLAbiFeyF_8Pb1jg5-wMYsPtm_9CkdJ_vyZhZiHV8MFgkV0gRCJvdWPxsjIsSIIOgA3r2M9juXDlfyitEjthsvCFAZO0RyGmS7MajF7BWcU80D-QUdSnH8YHf_XjN6gRb3Ovh7tYhg4BUzcQ",
  },
  {
    id: 3,
    name: "Tanaman Gantung",
    filter: "Tanaman Gantung",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQxUB8RqMsuNHPVllfa1mRb_tRASamfh_8lA0THP0f6eH2ZiV9k0lznpMgcE9BZONKfK1JjA92LIGL-gLwke2WPFEtSHVLyjTbTwCI7ezlag9tj8BaqXDniQWew9OiZDAQ-Bs9arJrlf6W8KtRy3ngWTANpl_jPVQTpxlht4RSau6f0QUUv9NirMW2Rz3upS9QQS9FnJWn0TLnNmwH2Z08YC3CJT_q810FKb00VTKRjLfOujen1eGYeoT1bOWzs6S0v40VID3jVg",
  },
  {
    id: 4,
    name: "Meja Kerja",
    filter: "Meja Kerja",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNdeZCuvuB5j7dLXZN4r2RJDAqMNZ5KebWTLPgyZz8rBYSoxFHY7y0Zf7xRm5aL110oNlGEch73q3JDFCRmDA2WD-45-g8ISJBWD0qieN-8_XbYCfsUhUgHXg9-C9utM6bDhlIx-W3jHMYqLsNGlbDt5OgCyZlsISWFyVZ_gbtpIl_dTxptrC4nMDsdVk65dOPQYsrX5JPaPcXryCjvfhnJjnc2UzWHBi3ehUxVRVwLAg9R1vlbAEJfUuv9Q3LsoR1o0qbjxbT0A",
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
