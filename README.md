# One Fluency - Language & IT Courses 📚💻

One Fluency is a platform designed to help users discover and learn new languages and IT skills. It provides a user-friendly interface to browse courses, select a country, and access relevant learning materials. The application uses React, Chakra UI, and other modern web technologies to deliver a smooth and engaging learning experience.

## 🚀 Key Features

- **Course Browsing:** Explore a variety of language and IT courses. 🌐
- **Tabbed Interface:** Easily switch between language and IT course categories. 🔀
- **Country Selection:** Choose your country for localized content and course offerings. 🌍
- **Animated Transitions:** Enjoy smooth page transitions with `framer-motion`. ✨
- **Responsive Design:** The application is designed to work seamlessly on different devices. 📱💻
- **Contact Information:** A dedicated page to view contact details and certificates. 📧
- **Error Handling:** A custom "Not Found" page for invalid routes. 🚧
- **Landing Page:** An attractive landing page with a carousel of images. 🖼️

## 🛠️ Tech Stack

*   **Frontend:**
    *   React
    *   React Router DOM
    *   Chakra UI
    *   Framer Motion
    *   Swiper
    *   Lucide React
    *   Next Themes
    *   React Icons
*   **Build Tool:**
    *   Vite
*   **Other:**
    *   ESLint
    *   `vite-tsconfig-paths`

## 📦 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

*   Node.js (version >= 18)
*   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port Vite provides).

## 📂 Project Structure

```
one-fluency/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── ContactCard.jsx
│   │   ├── CountryChoice.jsx
│   │   ├── CourseDescription.jsx
│   │   ├── Footer.jsx
│   │   ├── ItSection.jsx
│   │   ├── LanguageSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Tabs.jsx
│   │   └── ui/
│   │       └── provider.jsx
│   ├── countries.js
│   ├── functions/
│   │   ├── RegularPageWrapper.jsx
│   │   └── TitleManager.jsx
│   ├── it-courses-info.js
│   ├── language-courses-info.js
│   ├── main.jsx
│   ├── screens/
│   │   ├── ContactsScreen.jsx
│   │   ├── LandingScreen.jsx
│   │   ├── MainScreen.jsx
│   │   └── NotFoundScreen.jsx
│   └── styles/
│       └── LandingScreen.css
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

## 📸 Screenshots

*(Add screenshots of the application here to showcase its UI and functionality.)*


## 💖 Thanks

Thank you for checking out this project! I hope it's helpful for learning new languages and IT skills.

This is written by [readme.ai](https://readme-generator-phi.vercel.app/) - Generate beautiful READMEs effortlessly.
