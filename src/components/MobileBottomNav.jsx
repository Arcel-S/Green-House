const navItems = [
  {
    id: "home",
    label: "Home",
    icon: "home",
    href: "#home",
    active: true,
  },
  {
    id: "catalog",
    label: "Katalog",
    icon: "grid_view",
    href: "#catalog",
    active: false,
  },
  {
    id: "recommendations",
    label: "Rekomendasi",
    icon: "auto_awesome",
    href: "#recommendations",
    active: false,
  },
  {
    id: "profile",
    label: "Profil",
    icon: "person",
    href: "#profile",
    active: false,
  },
];

function NavItem({ label, icon, href, active }) {
  return (
    <a
      href={href}
      className={`flex flex-1 flex-col items-center justify-center gap-1 ${
        active
          ? "text-primary"
          : "text-slate-400 dark:text-slate-500"
      }`}
    >
      <span
        className="material-symbols-outlined text-2xl"
        style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
      >
        {icon}
      </span>
      <p className={`text-[10px] leading-normal uppercase tracking-wider ${
        active ? "font-bold" : "font-medium"
      }`}>
        {label}
      </p>
    </a>
  );
}

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex gap-2 border-t border-primary/10 bg-background-light dark:bg-background-dark px-4 pb-6 pt-3 shadow-2xl">
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          icon={item.icon}
          href={item.href}
          active={item.active}
        />
      ))}
    </div>
  );
}
