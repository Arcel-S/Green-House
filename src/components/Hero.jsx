export default function Hero() {
  const heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuA8edrwPGjn7yK4MJKYYv6U9LJMTE8AEKZfnO_afWAiCphVCII-XroDQL6NtE5AL6RKNxHnjqMlqhSnX55hylovsqFvfrBqut-k0K2XaFQF3rEcP_R-0KTDgnWItmpM8XeB0Pd5q0LUeCaym2pQxC5zuxG8M0we8plEtRjYP8Vg1vqCSAFdRldpWiwfL1wdVtXvDyDpg8hOb2JOBzeyMNaATjVLA8YzdeuXNIXGuZyT6LCKPFDPXV2IPcr2tY_Y9yCZewqS102TZg";

  return (
    <section id="home" className="@container">
      <div className="p-4 md:p-6">
        <div
          className="relative flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("${heroImage}")`,
          }}
        >
          <div className="max-w-2xl flex flex-col gap-4">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Hijaukan Ruangmu dengan <span className="text-primary">Green</span>House
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-medium max-w-lg mx-auto">
              Temukan koleksi tanaman hias terbaik yang dikurasi khusus untuk menghadirkan kesegaran di setiap sudut hunian Anda.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
              <span>Temukan Tanamanmu</span>
            </button>
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all">
              <span>Lihat Katalog</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
