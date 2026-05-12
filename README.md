# DeJoule | Smart Building Intelligence Platform

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

DeJoule is a high-performance building management interface designed to redefine facility operations. By merging **AI-driven hardware** with a premium **Next.js** frontend, DeJoule transforms raw building data into actionable intelligence through immersive, cinematic user experiences.

## ✨ Key Features

* **Dynamic Hero Sequence:** A multi-step animation that transitions from a centralized mobile view to a "scrolled" actionable dashboard using **Framer Motion**.
* **Interactive Feature Stacks:** A physical-modeled "deck of cards" UI where users can cycle through core capabilities (Automation, Monitoring, Alerts, Analytics) with smooth exit/entrance physics.
* **Smart Alert Stack:** Visualized role-based notifications that stack with dynamic opacity and vertical offsets to maintain context history.
* **Cinematic Panning:** Custom "Virtual Scroll" implementation that pans the viewport to focus on specific content phases without browser-native jitter.

## 🚀 Performance Optimizations

To ensure a "buttery smooth" 60FPS experience:

-   **Optimized Images:** Utilizes `next/image` with proper `priority` flags for Hero assets and `sizes` attributes to prevent Cumulative Layout Shift (CLS).
-   **Hardware Acceleration:** Animations are strictly limited to `transform` (GPU-accelerated) properties to avoid heavy browser repaints.
-   **Code Splitting:** Secondary sections (MidSection, Footer) are loaded via **Next.js Dynamic Imports** to minimize initial bundle size.
-   **Lazy Video Backgrounds:** High-quality background video with fallback posters and optimized preloading strategies.

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/dejoule-platform.git](https://github.com/your-username/dejoule-platform.git)
    cd dejoule-platform
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the browser:**
    Visit [http://localhost:3000](http://localhost:3000) to see the result.

