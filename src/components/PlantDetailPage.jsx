import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { catalogPlants, featuredPlants, plantDetailsBySlug } from '../data/plants'
import { useFavorites } from '../hooks/useFavorites'

function PlantDetailPage() {
  const navigate = useNavigate()
  const { slug = 'monstera-deliciosa' } = useParams()
  const plantDetail = plantDetailsBySlug[slug]
  const plantPreview = [...catalogPlants, ...featuredPlants].find((item) => item.slug === slug)
  const hasDetailData = Boolean(plantDetail)
  const plant =
    plantDetail ??
    {
      slug,
      name: plantPreview?.name ?? 'Tanaman',
      price: plantPreview?.price ?? '-',
      availabilityLabel: 'Data belum tersedia',
      image: plantPreview?.image ?? 'https://placehold.co/1200x900?text=No+Image',
      imageAlt: plantPreview?.name ?? 'Tanaman belum memiliki data detail',
      highlights: [],
      description: '',
      careSteps: [],
      lightNeeds: '',
      whatsappUrl: 'https://wa.me/6281234567890',
    }
  const { toggleFavoritePlant, isPlantFavorite } = useFavorites()

  const favoritePayload = {
    id: plant.slug,
    name: plant.name,
    image: plant.image,
    price: plant.price,
    slug: plant.slug,
  }

  useEffect(() => {
    document.title = 'TreeMart - Detail Tanaman'
  }, [])

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light pb-24 font-display text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
      <div className="flex items-center justify-between border-b border-primary/10 bg-background-light/80 p-4 backdrop-blur-md dark:bg-background-dark/80">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:text-slate-100"
          aria-label="Kembali"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
          Detail Tanaman
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:text-slate-100"
            aria-label="Bagikan"
          >
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      <div className="@container">
        <div className="px-4 py-3">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-primary/10 p-2 shadow-2xl">
            <img
              src={plant.image}
              alt={plant.imageAlt}
              className="aspect-[3/4] h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="px-4 pt-6">
        <div className="items-start justify-between gap-3 sm:flex">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              {plant.name}
            </h1>
            <p className="mt-1 text-xl font-bold text-primary dark:text-primary/80">{plant.price}</p>
          </div>
          <div className="mt-3 rounded-full bg-primary/10 px-3 py-1 dark:bg-primary/30 sm:mt-0">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-slate-100">
              {plant.availabilityLabel}
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {hasDetailData ? (
            plant.highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-xl border border-primary/10 bg-primary/5 p-3 dark:bg-primary/20"
              >
                <span className="material-symbols-outlined mb-2 text-primary">{item.icon}</span>
                <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                  {item.label}
                </span>
                <span className="text-center text-xs font-semibold">{item.value}</span>
              </div>
            ))
          ) : (
            <div className="col-span-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-slate-600 dark:bg-primary/10 dark:text-slate-300">
              Detail perawatan untuk tanaman ini belum diisi.
            </div>
          )}
        </div>

        {hasDetailData ? (
          <div className="mt-8 space-y-6 pb-8">
            <div>
              <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">description</span>
                Deskripsi
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {plant.description}
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-4 dark:bg-primary/10">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">spa</span>
                Cara Perawatan
              </h2>
              <ul className="space-y-3">
                {plant.careSteps.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-sm text-primary">check_circle</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">wb_sunny</span>
                Kebutuhan Cahaya
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {plant.lightNeeds}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="mt-8 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-5 text-sm text-slate-600 dark:bg-primary/10 dark:text-slate-300">
              Detail untuk tanaman ini masih kosong. Kamu bisa isi data deskripsi dan perawatan nanti di
              sumber data tanaman.
            </div>
            <div className="pb-8" />
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex items-center gap-4 border-t border-primary/10 bg-background-light p-4 dark:bg-background-dark">
        <button
          type="button"
          className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
          aria-label="Tambah favorit"
          onClick={() => toggleFavoritePlant(favoritePayload)}
        >
          <span
            className={`material-symbols-outlined ${
              isPlantFavorite(plant.slug) ? 'fill-1' : ''
            }`}
          >
            favorite
          </span>
        </button>
        <a
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3.5 font-bold text-white shadow-lg transition-opacity hover:opacity-90"
          href={plant.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Chat via WhatsApp
        </a>
      </div>

    </div>
  )
}

export default PlantDetailPage
