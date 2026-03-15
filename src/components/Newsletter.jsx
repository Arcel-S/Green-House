export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section className="px-4 py-16 text-center">
      <div className="max-w-xl mx-auto flex flex-col gap-6">
        <div className="flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <span className="material-symbols-outlined text-primary text-4xl">mail</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">
          Dapatkan Tips Perawatan Tanaman
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Daftarkan email Anda untuk menerima panduan eksklusif dan promo spesial setiap minggu.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Alamat email Anda"
            className="flex-1 rounded-full px-6 py-3 bg-background-light dark:bg-background-dark border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
          >
            Berlangganan
          </button>
        </form>
      </div>
    </section>
  );
}
