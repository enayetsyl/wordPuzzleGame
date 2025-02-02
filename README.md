# 📜 Word Game

**Word Game** is a React-based web application that allows users to extract words from images using OCR (Optical Character Recognition), manipulate them by rearranging letters, and generate fill-in-the-blank word lists. It supports multiple languages and allows users to download generated words as a PDF.

---

## 🚀 Features

- 📸 **Upload Images**: Convert text from images into editable text using Tesseract.js.
- 🔤 **Extracted Word List**: Display a list of words from the uploaded image.
- 🔄 **Rearrange Words**: Shuffle and rearrange selected words for learning purposes.
- 📝 **Fill in the Blanks**: Generate words with missing letters for exercises.
- 🎨 **Customizable Word Colors**: Choose between black or mixed-color letters.
- 🌎 **Multilingual Support**: Supports multiple languages including Arabic, Bengali, and English.
- 📄 **Download as PDF**: Export generated words as a printable PDF file.
- 🌙 **Dark Mode**: Toggle between light and dark themes.

---

## 🏗️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: Context API
- **OCR (Optical Character Recognition)**: Tesseract.js
- **PDF Generation**: jsPDF, html2canvas
- **Toast Notifications**: React-Toastify
- **Router**: React Router DOM

---

## 📦 Installation and Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/enayetsyl/wordPuzzleGame.git
cd word-game
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start Development Server
```sh
npm run dev
```
Your app will now be running at `http://localhost:5173/`

---

## 📂 Project Structure

```
word-game/
│── public/               # Static assets (images, icons, etc.)
│── src/                  
│   ├── components/       # UI components (Buttons, Sidebar, etc.)
│   ├── Context/          # Global Context API for state management
│   ├── lib/              # Utility functions for OCR, word manipulation
│   ├── assets/           # Image assets (On/Off light bulb, etc.)
│   ├── App.jsx           # Main App Component
│   ├── index.jsx         # React Entry Point
│── .eslintrc.json        # ESLint Config
│── package.json          # Dependencies and Scripts
│── vite.config.js        # Vite Configuration
└── README.md             # Documentation
```

---

## 🛠 Usage Guide

### 🎯 1. Upload an Image
- Click on the **Upload** button and select an image containing text.
- The app will extract the words using **OCR (Tesseract.js)**.

### 🎯 2. Select Words
- Click on individual words from the extracted text to **add them to your list**.

### 🎯 3. Rearrange Words
- Click the **Rearrange** button to shuffle letters of the selected words.

### 🎯 4. Create Fill in the Blanks
- Click the **Blank** button to generate words with missing letters.

### 🎯 5. Customize Word Colors
- Choose between **Black or Mixed** colors for the generated words.

### 🎯 6. Download as PDF
- Click **Download** to save the generated words as a PDF file.

### 🎯 7. Toggle Dark Mode
- Click the **Light On/Off** button to switch between dark and light modes.

---

## 📌 Available Scripts

### 🚀 Start Development Server
```sh
npm run dev
```

### 🔨 Build for Production
```sh
npm run build
```

### 👀 Preview Production Build
```sh
npm run preview
```

### 🧹 Lint Code
```sh
npm run lint
```

---

## 💡 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Added new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## 📝 License
This project is licensed under the **MIT License**.

## 🏆 **Author:** Md Enayetur Rahman

### Contact Information
- [LinkedIn](https://www.linkedin.com/in/md-enayetur-rahman/)
- [Facebook](https://www.facebook.com/profile.php?id=100094416483981)
- [X (Twitter)](https://x.com/enayetu_syl)
- [YouTube](https://www.youtube.com/@MdEnayeturRahman)
- [GitHub](https://github.com/enayetsyl/)
- [Medium](https://medium.com/@enayetflweb)
- [dev.to](https://dev.to/md_enayeturrahman_2560e3)
- [Leetcode](https://leetcode.com/u/XTl7hvNPIc/)
- [Hackerrank](https://www.hackerrank.com/profile/enayetflweb)
- [Codeforces](https://codeforces.com/profile/enayetsyl)
- [Email](mailto:enayetflweb@gmail.com)
