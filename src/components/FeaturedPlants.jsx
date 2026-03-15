const plants = [
  {
    id: 1,
    name: "Monstera Adansonii",
    difficulty: "Mudah",
    difficultyColor: "green",
    price: "Rp 85.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvWtB52KJqqIjJVrdY5W0ME0QBH76Yt3GOm9h1aNrSFCLUxTxaghPtqdiLQc6NlJNmAKT2u7XOfq1MKR5V_mruA6VO-xoeh_Le9poSd69eIIMEZEtxnpziwpOeXoEwKviwZH4lnvB882fRVpEM-aQmqrqSDPHmiWp3Wij3v56s329J730cybSXQRoTFU6h6YSWRPh1i7pHkbJscvDjYPS7QS8YpHtORySnzaK5fVg3m-zGE2lx2SGSSiuxEd2Ffqh7QvAyZ3r46Q",
  },
  {
    id: 2,
    name: "Snake Plant",
    difficulty: "Sangat Mudah",
    difficultyColor: "green",
    price: "Rp 45.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnMf1G5GTCizcW4RhkbgjblQYYcR00zRFgSm8KrFHHX2gTlxoc_xsdHfRJJXlrLBphOC0qx0VUulO3bbSmGvCzuMSZLgxUc1YZQzYbQeNWtR912gKZ9bWVUHQ4IjkqBzIe6I6cqSBPIqdo5mqpxSdnVQEvHCKQ3XWwgAe7iecQkZzZzb0ikBH1uOeZPaYIEDz3JAzkOXVzVu5p18usKSlPIhL9WqDYz3th4LB-Ec9lmSvG_ac3IK25lnqwB8_R4mDs6uId4uUgOw",
  },
  {
    id: 3,
    name: "Calathea Orbifolia",
    difficulty: "Sedang",
    difficultyColor: "orange",
    price: "Rp 120.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiyuwGvnfODZDpKJfrHTN2AoOAZ5jm7WsP-GCYLYhr_dMq_ggMvukXjvyG5tpm5WScYojYUUEQHnb9nVwbemz7eIUUBrU_uTKTMg6NtQsC1ABKlt9kZILL0Mm01ftYliEEQy0ArgVoS3D1R8nkGssco-KNqA-e07L2uCQu5kOcGphRFMnysUtxJaWP2wFiwwxC74nUF12pvZt8-ULSPBUXdJawLmsQTjVV6cdmD4relNcQ5EQIMcVrJo1QEY3dSeYL45_JT1AWcA",
  },
  {
    id: 4,
    name: "Ficus Lyrata",
    difficulty: "Mudah",
    difficultyColor: "green",
    price: "Rp 150.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV8xR2jwfNerFwBJ2dFj3ospazHHEYWEvj-_-wz7Hl8sqBwb2aIZ6IPtGFrBj0aStM5Qvt5JNcv2i3hksjo93fj-QP3BCm9Omti_kvlIVaf41lsFX1p3ApxmtEJqwjlNA3DpweYLh1mkMaaIn_eJRuNVh_7EbXDzJYPybf7-eGI8cgO0N69s4UVeraXSvOC9CqJrYogBmNOZeDsCbokLjnOYTNBDVcu8Ovay1HamfeEPKh5WaCHEdCbxcILxCKTojo6czOtL_-SQ",
  },
];

function PlantCard({ name, difficulty, difficultyColor, price, image }) {
  const difficultyClasses = {
    green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  };

  return (
    <div className="flex flex-col gap-3 group">
      <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
        <img
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={image}
        />
        <div className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-lg">favorite</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold">
            {name}
          </h3>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${difficultyClasses[difficultyColor]}`}>
            {difficulty}
          </span>
        </div>
        <p className="text-white font-bold">{price}</p>
      </div>
      <button className="w-full py-2 rounded-lg border border-white text-white text-sm font-bold hover:bg-white hover:text-slate-900 transition-colors">
        Tambah ke Keranjang
      </button>
    </div>
  );
}

export default function FeaturedPlants() {
  return (
    <section className="px-4 py-8 bg-primary/5 dark:bg-primary/10">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">
          Tanaman Populer
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Pilihan terlaris untuk pemula maupun kolektor
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            difficulty={plant.difficulty}
            difficultyColor={plant.difficultyColor}
            price={plant.price}
            image={plant.image}
          />
        ))}
      </div>
    </section>
  );
}
