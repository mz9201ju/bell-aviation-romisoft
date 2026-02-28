# React + Vite

# ✈️ Bell Aviation LLC

**Bell Aviation LLC** is a modern aviation website built using **React + Vite + Tailwind CSS**, designed to showcase aircraft services, gallery, and company information with a clean, glass-morphism UI and mobile-first responsiveness.

![Bell Aviation Screenshot](https://api.microlink.io?url=https://mz9201ju.github.io/bell-aviation-romisoft/&screenshot=true&type=png&meta=false&embed=screenshot.url)

---

## 🚀 Project Overview

Bell Aviation represents a sleek, high-performance web experience for an aviation business.  
It includes a responsive photo gallery, a service catalog, and interactive navigation components optimized for all devices.

### 🌐 Live Demo
🔗 [https://mz9201ju.github.io/bell-aviation-romisoft/](https://mz9201ju.github.io/bell-aviation-romisoft/)

---

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React (Vite) |
| **Styling** | Tailwind CSS with Glassmorphism |
| **Routing** | React Router DOM |
| **Hosting** | GitHub Pages |
| **CI/CD** | GitHub Actions |
| **Icons & UI** | Lucide React / HeroIcons |
| **Optional Backend (future)** | Cloudflare Workers for comments or API endpoints |

---

## ⚙️ Setup & Run Locally

# 1️⃣ Clone repo
git clone https://github.com/mz9201ju/bell-aviation-romisoft.git
cd bell-aviation-romisoft

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm run dev

# 4️⃣ Build for production
npm run build

# Optional: run image optimization manually
npm run optimize:images

# 5️⃣ Preview build locally
npm run preview

> Note: `npm run build` automatically runs image optimization (`prebuild`) for JPG/PNG assets in `src/assets`.

## 💡 Features

- ✈️ **Clean, professional aviation-themed UI**
- 📸 **Interactive photo gallery** with in-page image preview modal
- 💼 **Services section** with modern glass cards
- 📰 **News page** with image posts & comment placeholders
- 🌙 **Fully responsive layout** (mobile-first)
- ↔️ **Image navigation controls** with keyboard arrows + touch swipe in modal
- 💬 **Future integration:** Cloudflare-based comment API

---

## 🧱 Architecture & Standards

- **Data / config separation:** shared static arrays moved to `src/data/*`
- **Shared business logic:** reusable transforms in `src/lib/*`
- **Route performance:** route-level lazy loading in `src/routes/AppRoutes.jsx`
- **Image modal system:** shared in-page viewer in `src/components/ImageLightbox.jsx`
- **Responsive CSS split:**
	- Base styles: `src/index.css`
	- Mobile-only styles: `src/styles/mobile.css`
	- Desktop-only styles: `src/styles/desktop.css`
- **Image optimization pipeline:** `src/scripts/optimize-images.mjs` via `npm run optimize:images` and `prebuild`

---

## 📱 Responsive & Image Behavior Rules

- Images in News, About, Aircraft, Tools, Gallery, and Projects open **in the same page** (modal), not a new tab.
- Click outside image or press `Esc` to close.
- Use `ArrowLeft` / `ArrowRight` (desktop) or swipe (mobile) to navigate images.
- For future responsive troubleshooting, keep cross-page mobile/desktop rules in their dedicated stylesheets.

### ✅ Latest Mobile QA Improvements
- Page shell layout now avoids early two-column squeeze on small devices.
- Home, Contact, and Service sections were adjusted for better phone spacing and readability.
- Navbar brand text now handles narrow widths without overflow.
- Lightbox controls are tuned for both touch and desktop interactions.

---

## 🔮 Future Enhancements

- Add backend comments API via **Cloudflare Worker** or **D1**
- Add **animations** for aircraft banners
- Include **booking/contact form** integration
- Add **multi-language support** (EN / AR / URDU)

---

## 🧑‍✈️ Author

**Omer Zahid**  
Senior Software Engineer | Full-Stack Developer  
📍 USA | 🌐 [GitHub Profile](https://github.com/mz9201ju)

---

## 🪪 License

This project is licensed under the **MIT License** — feel free to use and adapt it for your own aviation or corporate site.

> “**Expertise in the Skies — Powered by Code and Creativity.**” ☁️