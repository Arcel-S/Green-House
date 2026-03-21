# 🌿 TreeMart - E-Commerce Aplikasi Tanaman Online

TreeMart adalah aplikasi e-commerce modern untuk jual beli tanaman hias dan perawatan tumbuhan. Dibangun dengan React 18, Vite, dan Tailwind CSS untuk memberikan pengalaman pengguna yang smooth dan responsif.

---

## 📋 Daftar Isi
- [Ringkasan Framework & Alur Kerja](#-ringkasan-framework--alur-kerja)
- [Log Pembaruan Per Update](#-log-pembaruan-per-update)
- [Fitur Utama](#fitur-utama)
- [UI/UX Elements](#uiux-elements)
- [Halaman & Routing](#halaman--routing)
- [Komponen Utama](#komponen-utama)
- [Teknologi & Stack](#teknologi--stack)
- [Instalasi & Setup](#instalasi--setup)
- [Perintah npm](#perintah-npm)
- [Struktur Folder](#struktur-folder)

---

## ✨ Fitur Utama

### 🛒 Sistem Keranjang (Shopping Cart)
- ✅ Tambah produk ke keranjang dengan animasi kartu terbang ke atas
- ✅ Ikon keranjang di header menampilkan jumlah item real-time
- ✅ Kelola quantity produk (tambah/kurangi)
- ✅ Hapus item dari keranjang
- ✅ Hitung total harga otomatis
- ✅ Data keranjang tersimpan di localStorage (persistent)

### ❤️ Sistem Favorit & Koleksi
- ✅ Simpan tanaman favorit dengan tombol love
- ✅ Halaman Koleksi menampilkan semua tanaman yang di-like
- ✅ Unlike tanaman dari halaman koleksi
- ✅ Data favorit tersimpan di localStorage
- ✅ Sinkronisasi favorit di semua halaman

### 🔍 Filter & Sorting Katalog
- ✅ **Filter Kategori** (Indoor, Sukulen, Tanaman Gantung, Meja Kerja)
- ✅ **Filter Kemudahan Perawatan** (Sangat Mudah, Mudah, Sedang, Sulit)
- ✅ **Filter Harga** (Termurah/Termahal - ascending/descending)
- ✅ Multi-filter support (kategori + sortir berdasarkan kesulitan + harga)
- ✅ Query parameter handling untuk persistent filter state
- ✅ Default view "Semua" menampilkan seluruh katalog

### 📱 Detail Produk
- ✅ Halaman detail lengkap untuk setiap tanaman
- ✅ Gambar produk dengan aspect ratio 3:4
- ✅ Informasi lengkap: nama, harga, kategori, kesulitan perawatan
- ✅ Highlight fitur tanaman
- ✅ Panduan perawatan lengkap (step-by-step)
- ✅ Tombol WhatsApp untuk konsultasi
- ✅ Fallback message "data belum tersedia" untuk tanaman tanpa detail
- ✅ Navegasi dengan URL slug untuk SEO-friendly

### 🎨 Animasi & Transisi
- ✅ Smooth page transition (fade-in + slide up 0.4s)
- ✅ Cart fly-up animation saat tambah ke keranjang
- ✅ Navbar active state dengan animated underline
- ✅ Smooth hover effects pada semua button & card

### 📍 Navigation & Routing
- ✅ Global sticky header dengan logo & menu navigasi
- ✅ Active page highlight di navbar dengan NavLink styling
- ✅ Mobile-responsive navigation
- ✅ Search bar placeholder (wiring ready)
- ✅ React Router v6 untuk client-side routing

### 🏠 Homepage
- ✅ Hero section dengan search box
- ✅ Featured Categories dengan direct link ke katalog + filter
- ✅ Featured Plants carousel
- ✅ Newsletter subscription section
- ✅ Global footer dengan info perusahaan

---

## 🐛 Recent Bug Fixes & Updates

### Latest Fixes (v1.1.0)
- ✅ **Fixed SPA Routing 404** - Refresh halaman di `/katalog`, `/koleksi`, dll tidak lagi 404
  - Ditambah `historyApiFallback` di vite.config.js (dev)
  - Ditambah `vercel.json` & `netlify.toml` untuk production
- ✅ **Fixed Duplicate Cart Button on Desktop** - Removed duplicate cart button di CatalogPage header
- ✅ **Fixed Mobile Menu Behavior** - Burger menu otomatis tutup saat user klik cart button di mobile
- ✅ **Page Transition Animations** - Added smooth fade-in + slide up effect antar halaman (0.4s)

### Latest Features (v1.1.1)
- ✅ **Mobile Menu Close Handlers** - Menu bisa ditutup dengan 4 cara:
  1. Klik tombol "X" (close button)
  2. Klik di luar menu area (click outside)
  3. Tekan tombol `ESC` key
  4. Klik backdrop overlay (semi-transparent background)
- ✅ **Backdrop Overlay** - Semi-transparent overlay muncul saat mobile menu terbuka untuk fokus user
### Latest Updates (v1.2.0)
- ✅ **Removed Mobile Profile Link** - Profil link dihapus dari footer navbar mobile
  - Mobile navbar sekarang hanya menampilkan 3 item: Beranda, Katalog, Koleksi
  - Lebih fokus pada navigasi utama aplikasi
- ✅ **Removed Burger Menu** - Hamburger menu dihapus dari mobile header
  - Navigasi sudah tersedia di footer navbar, jadi burger menu tidak perlu
  - Header mobile sekarang hanya menampilkan logo TreeMart dan tombol keranjang
- ✅ **Added Social Share Functionality** - Button "share" di footer sekarang berfungsi
  - Browser dengan Web Share API: buka dialog share native sistem
  - Browser tanpa Web Share API: dropdown menu dengan pilihan platform:
    - Instagram: copy link ke clipboard
    - Facebook: share dialog langsung ke Facebook
    - Twitter: buka tweet dialog dengan link website
    - WhatsApp: share link ke WhatsApp dengan text preview
  - Share button menampilkan dropdown menu di atas button (positioned absolutely)
---

## 🎨 UI/UX Elements

### Header (Global Sticky)
- **Komponen**: Logo TreeMart + Menu navigasi + Cart badge + Search bar
- **Fitur**:
  - Sticky top positioning
  - Active page indicator dengan animated underline effect
  - Cart count badge (live update)
  - Mobile hamburger menu support
  - Responsive design Desktop/Mobile

### Navbar Menu Items
1. **Home** (`/`) - Beranda utama
2. **Katalog** (`/katalog`) - Daftar semua tanaman
3. **Keranjang** (`/keranjang`) - Shopping cart
4. **Koleksi** (`/koleksi`) - Favorit tanaman

### Button Styles
- **Primary Button**: Green (Tailwind `bg-green-600`)
- **Secondary Button**: Gray/outline
- **Icon Button**: Material Symbols untuk cart, search, love
- **Animated Button**: Add to cart dengan fly-up animation

### Card Components
- **Plant Card**: Image + nama + harga + love button + add to cart button
- **Category Card**: Icon + nama kategori (clickable filter link)
- **Cart Item Card**: Product info + quantity adjuster + remove button

### Color Scheme
- **Primary**: Green (#16a34a) - untuk button & accent
- **Background**: White/Light gray
- **Text**: Dark gray (#1f2937)
- **Accent**: Red/Pink untuk love button (filled)

### Typography
- **Font**: Tailwind default (sans-serif)
- **Heading**: Bold, size lg-2xl
- **Body**: Regular, size sm-base
- **Label**: Semibold, size sm

### Spacing & Layout
- **Container**: Max-width 1200px centered
- **Padding**: Consistent 4-16px base unit
- **Grid**: 2-4 kolom responsive (1 mobile, 2 tablet, 3-4 desktop)
- **Gap**: 16px standard antar item

### Responsive Design
- **Mobile** (< 640px): Single column, full width, bottom nav aware
- **Tablet** (640px - 1024px): 2 column grid
- **Desktop** (> 1024px): 3-4 column grid
- **Breakpoints**: Tailwind default (sm, md, lg, xl)

---

## 📄 Halaman & Routing

### 1. **Home Page** (`/`)
**Komponen**:
- Hero section dengan gambar background & search box
- Featured Categories (4 kategori utama)
- Featured Plants carousel
- Newsletter subscription
- Footer

**Fitur**:
- Search functionality placeholder
- Category tiles link ke katalog dengan filter query
- Plant cards link ke detail page
- Add to cart button dengan feedback animation

---

### 2. **Katalog Page** (`/katalog`)
**Komponen**:
- Filter sidebar (Kategori, Kemudahan Perawatan, Harga)
- Plant grid dengan semua produk
- Breadcrumb/filter display

**Fitur**:
- Category filter dropdown (mutually exclusive)
- Care difficulty toggle (Mudah/Sulit)
- Price sort toggle (Termurah/Termahal)
- Query parameter handling (`?filter=Indoor`, `?careDifficulty=easy`, `?priceSort=low`)
- Multi-filter combination support
- Real-time product count
- Add to cart & favorite button on setiap card

**Filter Logic**:
```
Tampilan Produk = (Kategori Filter) → (Sort by Care) → (Sort by Price) → (Sort by Name tiebreaker)
```

---

### 3. **Plant Detail Page** (`/detail-tanaman/:slug`)
**Komponen**:
- Large product image (3:4 aspect ratio)
- Product info (nama, harga, kategori, kesulitan)
- Product highlights list
- Care instructions (step-by-step)
- WhatsApp contact button
- Add to cart & favorite button

**Fitur**:
- URL slug untuk SEO-friendly navigation
- Image responsive dengan object-contain
- Fallback state "detail belum tersedia" untuk produk tanpa data detail
- Related products suggestion (opsional)
- Breadcrumb navigation

---

### 4. **Shopping Cart Page** (`/keranjang`)
**Komponen**:
- Cart items list
- Item card (image, nama, harga, quantity, subtotal)
- Quantity adjuster (+ / - buttons)
- Remove item button
- Order summary (total items, total price)
- Checkout button / WhatsApp order button

**Fitur**:
- Real-time total calculation
- Increment/decrement quantity
- Remove single item
- View empty state message ketika cart kosong
- Checkout via WhatsApp link
- Setelah klik checkout dan diarahkan ke WhatsApp, keranjang otomatis dikosongkan
- Persistent cart data (localStorage)

---

### 5. **Collections Page** (`/koleksi`)
**Komponen**:
- Favorited plants grid
- Same plant card as katalog
- Empty state message

**Fitur**:
- Display semua tanaman yang di-like
- Unlike button (remove dari favorit)
- Link ke detail page
- Add to cart dari koleksi
- Empty state "Anda belum memiliki koleksi" jika kosong

---

## 🔧 Komponen Utama

### `Header.jsx`
- Global sticky header di semua halaman
- NavLink active state styling dengan animated underline
- Cart badge counter dari useCart hook
- Search bar placeholder
- Mobile menu toggle

### `Footer.jsx`
- Global footer di semua halaman
- 3-column layout (TreeMart info, Layanan, Social media)
- Centered Layanan section
- Always sticky at bottom

### `CatalogPage.jsx`
- Filter UI dengan category dropdown, care difficulty toggle, price toggle
- Plant grid display
- Filter logic & state management
- Query parameter synchronization

### `PlantDetailPage.jsx`
- Dynamic routing dengan slug parameter
- Image display dengan aspect ratio lock
- Care instructions rendering
- WhatsApp contact link generator
- Fallback UI untuk missing detail data

### `CartPage.jsx`
- Cart items list rendering
- Quantity management
- Item removal
- Total price calculation
- Order summary

### `CollectionPage.jsx`
- Favorited plants grid
- Unlike functionality
- Navigation to detail page
- Empty state handling

### `AddToCartButton.jsx`
- Reusable button component
- Cart fly-up animation
- Loading state (ditambahkan)
- Toast notification support

### `FeaturedPlants.jsx`
- Plant carousel/grid untuk home page
- Add to cart button dengan animation
- Link ke detail page
- Favorit button

### `FeaturedCategories.jsx`
- Category card tiles
- Link ke katalog dengan filter parameter
- Category icon + name display

### `Hero.jsx`
- Large banner section
- Search input dengan onSubmit handler
- Call-to-action text

### `Newsletter.jsx`
- Email subscription form
- Form validation placeholder
- Submit button

---

## 🛠️ Teknologi & Stack

### Frontend Framework & Build
- **React 18.x** - UI library
- **Vite 8.x** - Build tool & dev server (fast HMR)
- **React Router v6** - Client-side routing
- **Tailwind CSS 3.x** - Utility-first CSS framework

### Styling & Icons
- **Tailwind CSS** - Responsive design & utility classes
- **Material Symbols Outlined** - Icon library via Google Fonts
- **CSS Keyframes** - Custom animations

### State Management
- **React Hooks** (useState, useEffect, useContext)
- **Custom Hooks**: `useCart()`, `useFavorites()`
- **localStorage API** - Persistent data storage

### Utilities
- **cartStorage.js** - localStorage wrapper untuk cart
- **favoritesStorage.js** - localStorage wrapper untuk favorites

### Development
- **ESLint** - Code quality
- **npm** - Package manager
- **git** - Version control

---

## 📦 Instalasi & Setup

### Prerequisites
- Node.js v16+ 
- npm atau yarn

### Clone Repository
```bash
git clone https://github.com/Arcel-S/Green-House.git
cd Green-House
```

### Install Dependencies
```bash
npm install
```

### Setup Environment (jika diperlukan)
```bash
# Buat .env.local jika ada API credentials
VITE_API_URL=your_api_url
```

---

## 🚀 Perintah npm

### Development Server
```bash
npm run dev
```
Jalankan vite dev server dengan HMR di `http://localhost:5173`

### Build Production
```bash
npm run build
```
Create optimized build di folder `dist/`

### Preview Build
```bash
npm run preview
```
Pratinjau production build lokal

### Lint Code
```bash
npm run lint
```
Check code quality dengan ESLint

---

## � Deployment

### Catatan Penting: SPA Routing
TreeMart adalah Single Page Application (SPA). Saat user refresh di halaman seperti `/katalog`, server harus di-redirect ke `index.html` agar React Router bisa handle routing.

### Deployment ke Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
File `vercel.json` sudah di-setup otomatis untuk rewrites.

**Setup di Vercel Dashboard:**
1. Connect GitHub repository
2. Vercel auto-detect Vite
3. Deploy otomatis pada git push

### Deployment ke Netlify
```bash
npm install -g netlify-cli
netlify deploy
```
File `netlify.toml` sudah di-setup otomatis untuk redirects.

**Setup di Netlify Dashboard:**
1. Connect GitHub
2. Basic settings: Build command `npm run build`, Publish directory `dist`
3. Deploy

### Deployment ke Platform Lain

**GitHub Pages:**
```bash
# Tambah ke package.json:
# "deploy": "npm run build && gh-pages -d dist"

npm install --save-dev gh-pages
npm run deploy
```

**Self-hosted / Docker:**
- Build: `npm run build`
- Serve: Gunakan web server (Nginx, Apache) dengan fallback ke `index.html`

**Nginx Config Example:**
```nginx
location / {
  try_files $uri /index.html;
}
```

## 🧭 Ringkasan Framework & Alur Kerja

Supaya mudah dipahami, proyek ini dibangun dengan pendekatan berikut:

### 1) Framework yang dipakai
- **React + Vite + Tailwind CSS**
- Tujuannya: aplikasi web terasa cepat, tampilan rapi, dan mudah dikembangkan saat ada revisi.

### 2) Alur kerja yang dipakai
Untuk proyek ini, alur yang paling cocok adalah **Agile (iteratif)**, bukan waterfall murni.

Kenapa Agile?
- Karena proses kita nyata di lapangan adalah: **diskusi kebutuhan -> implementasi -> review klien -> revisi -> update lagi**.
- Pola seperti ini lebih pas disebut iteratif (bertahap dan berulang), bukan sekali jadi.

Alur sederhana yang kita jalankan:
1. Kumpulkan kebutuhan awal dari klien.
2. Kerjakan fitur versi pertama yang bisa dicoba.
3. Minta feedback klien (uji tampilan/fungsi).
4. Catat revisi dan prioritas.
5. Implementasi revisi per pembaruan (satu per satu).
6. Update dokumentasi README dan GitHub per perubahan.
7. Ulangi siklus sampai hasil sesuai kebutuhan klien.

### 3) Kenapa bukan Waterfall penuh?
- Waterfall cocok jika kebutuhan dari awal sudah sangat tetap.
- Di proyek ini, kebutuhan berubah mengikuti feedback klien, jadi model iteratif lebih aman dan cepat menyesuaikan.

### 4) Praktik yang dipakai di repository ini
- Setiap perubahan besar dicatat di log pembaruan README.
- Commit dibuat bertahap berdasarkan tema perubahan.
- Setelah valid, perubahan dipush ke GitHub agar histori rapi dan mudah ditelusuri.

---

## 📝 Log Pembaruan Per Update

Format ini dipakai supaya update README dan GitHub konsisten satu per satu, bukan digabung acak.

1. **Update 01 - Sinkronisasi Data Tanaman Utama**
- Sumber data diubah dari katalog lama ke data bibit pohon.
- Struktur `featuredPlants`, `catalogPlants`, dan `plantDetailsBySlug` diselaraskan.
- Daftar tanaman utama: Meranti, Sengon, Alpukat Siger, Pucuk Merah, Sikat Botol, Jati Putih, Kembang Merak, Kaliandra, Tabebuya, Mahoni, Akasia.

2. **Update 02 - Pembaruan URL Gambar Cloudinary**
- URL gambar semua tanaman utama diganti ke Cloudinary terbaru.
- URL khusus Kaliandra diperbarui ke versi terbaru (`Kaliandra_esazcp.png`).

3. **Update 03 - Penambahan Tanaman Ulin**
- Menambahkan `Bibit Ulin` ke `featuredPlants`.
- Menambahkan `Bibit Ulin` ke `catalogPlants`.
- Menambahkan detail lengkap `bibit-ulin` ke `plantDetailsBySlug`.

4. **Update 04 - Homepage Tanaman Populer Maksimal 4 Item**
- Komponen tanaman populer di homepage tetap random.
- Jumlah kartu dibatasi maksimal 4 item per render.

5. **Update 05 - Validasi Keranjang dengan Popup Kustom**
- Mengganti validasi hapus dari `window.confirm` menjadi modal popup kustom.
- Validasi diterapkan untuk:
  - Pengurangan kuantitas sampai 0.
  - Tombol `Hapus` item (teks merah).
  - Tombol `Kosongkan` keranjang.

6. **Update 06 - Integrasi Checkout WhatsApp Dinamis**
- Menambahkan generator pesan checkout berisi detail item dan total pembayaran.
- Tombol checkout membuka WhatsApp dengan pesan yang sudah terformat.

7. **Update 07 - Penyempurnaan Navigasi dan Layout**
- Navbar desktop di header disimetriskan agar benar-benar center.
- Menambahkan reset scroll global saat pindah route (selalu mulai dari atas).
- Menambahkan bottom navigation mobile global agar muncul di semua halaman.
- Menghapus bottom navigation duplikat dari halaman katalog.
- Menyesuaikan posisi CTA fixed di keranjang/detail agar tidak tabrakan dengan bottom nav mobile.

8. **Update 08 - Penyelarasan Footer Mobile**
- Brand `TreeMart` di footer dibuat center pada mobile.
- Layout desktop tetap left-aligned seperti sebelumnya.

9. **Update 09 - Auto Clear Cart Setelah Checkout**
- Setelah pengguna klik tombol checkout dan berpindah ke WhatsApp, item keranjang otomatis dikosongkan.
- Menambahkan fallback redirect agar alur tetap berjalan saat popup/tab baru diblokir browser.

10. **Update 10 - UI/UX Optimization & Mobile Navigation Cleanup (v1.2.0)**
- **Removed Mobile Profile Link**: Profil link dihapus dari MobileBottomNav
  - Mobile navbar sekarang hanya menampilkan 3 item navigasi utama: Beranda, Katalog, Koleksi
  - Lebih fokus dan tidak membingungkan pengguna
- **Removed Hamburger Menu**: Burger button dihapus dari Header komponen
  - Navigasi sudah tersedia lengkap di footer bottom navbar mobile
  - Header mobile sekarang hanya memiliki logo TreeMart dan tombol keranjang
  - Mengurangi clutter di header dan menyederhanakan UX
- **Added Social Media Share Functionality**: Button "share" di footer sekarang fully functional
  - Deteksi Web Share API: jika tersedia, gunakan share dialog native sistem operasi
  - Fallback untuk browser lama: dropdown menu dengan 4 pilihan platform social media
  - Instagram: copy website link ke clipboard (Instagram tidak support direct share)
  - Facebook: buka Facebook share dialog dengan URL website
  - Twitter: buka Twitter tweet composer dengan link dan text predefined
  - WhatsApp: share link ke WhatsApp dengan pesan text
  - Menu dropdown di-positioning absolutely di atas button dengan styling dark mode support


**Apache .htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📁 Struktur Folder

```
GreenHouse/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── [image assets]
│   ├── components/
│   │   ├── AddToCartButton.jsx
│   │   ├── CartPage.jsx
│   │   ├── CatalogPage.jsx
│   │   ├── CollectionPage.jsx
│   │   ├── FeaturedCategories.jsx
│   │   ├── FeaturedPlants.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Newsletter.jsx
│   │   └── PlantDetailPage.jsx
│   ├── data/
│   │   └── plants.js          # Plant catalog, featured, details
│   ├── hooks/
│   │   ├── useCart.js         # Cart state hook
│   │   └── useFavorites.js    # Favorites state hook
│   ├── utils/
│   │   ├── cartStorage.js     # localStorage wrapper untuk cart
│   │   └── favoritesStorage.js# localStorage wrapper untuk favorites
│   ├── App.jsx                # Root component & routing
│   ├── index.css              # Global styles & animations
│   ├── main.jsx               # Entry point
│   └── App.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── tailwind.config.js
└── README.md
```

---

## 💾 Data Structure

### Plant Object (Catalog)
```javascript
{
  id: 1,
  name: "Monstera Deliciosa",
  price: 150000,
  category: "Indoor",
  careDifficulty: "Mudah",
  image: "url_to_image",
  slug: "monstera-deliciosa"
}
```

### Cart Item Object
```javascript
{
  id: 1,
  name: "Monstera Deliciosa",
  price: 150000,
  quantity: 2,
  image: "url_to_image"
}
```

### Favorite Object
```javascript
{
  id: "monstera-deliciosa", // normalized ke slug
  name: "Monstera Deliciosa",
  slug: "monstera-deliciosa"
}
```

---

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## 🔐 localStorage Keys

- `treemart_cart_items` - Menyimpan array cart items
- `treemart_favorites` - Menyimpan array favorit plants

---

## 🚧 Future Features (Roadmap)

- [ ] User authentication & profile
- [ ] Search functionality fully wired
- [ ] Payment gateway integration
- [ ] Order history & tracking
- [ ] Product review & rating
- [ ] Wishlist sharing
- [ ] Dark mode toggle
- [ ] Real-time inventory
- [ ] Admin dashboard
- [ ] Plant care tips & blog

---

## 🤝 Contributing

Pull requests welcome! Untuk major changes, silakan buka issue terlebih dahulu.

---

## 📝 License

MIT License - see LICENSE file for details

---

## 👨‍💻 Author

**Arcel S** - GitHub: [@Arcel-S](https://github.com/Arcel-S)

---

## 📞 Contact & Support

Untuk pertanyaan atau feedback, hubungi via:
- GitHub Issues
- Email (jika ada di profile)
- WhatsApp (tersedia di detail produk)
