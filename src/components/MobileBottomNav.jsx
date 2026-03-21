import { NavLink } from 'react-router-dom'

const navItems = [
  { id: 'home', label: 'Beranda', to: '/', icon: 'home' },
  { id: 'catalog', label: 'Katalog', to: '/katalog', icon: 'potted_plant' },
  { id: 'collection', label: 'Koleksi', to: '/koleksi', icon: 'eco' },
]

export default function MobileBottomNav() {
  const navClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 ${
      isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500'
    }`

  const labelClass = ({ isActive }) => `text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`

  return (
    <nav className="pb-safe-area-inset-bottom fixed bottom-0 left-0 right-0 z-30 border-t border-primary/10 bg-white dark:border-primary/20 dark:bg-background-dark md:hidden">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-around px-4">
        {navItems.map((item) => (
          <NavLink key={item.id} to={item.to} end={item.to === '/'} className={navClass}>
            {({ isActive }) => (
              <>
                <span className={`material-symbols-outlined ${isActive ? 'fill-1' : ''}`}>
                  {item.icon}
                </span>
                <span className={labelClass({ isActive })}>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
