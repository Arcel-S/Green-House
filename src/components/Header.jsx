export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 justify-between border-b border-primary/10">
      <div>
        <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-black tracking-wider">
          <span className="text-primary">Green</span><span>House</span>
        </h2>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a className="text-sm font-semibold text-primary" href="#home">
          Home
        </a>
        <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#catalog">
          Katalog
        </a>
        <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#recommendations">
          Rekomendasi
        </a>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">
            shopping_cart
          </span>
        </button>
        <button className="md:hidden flex size-10 items-center justify-center rounded-full">
          <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">
            menu
          </span>
        </button>
      </div>
    </header>
  );
}
