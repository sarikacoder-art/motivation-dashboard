# 🌞 Daily Motivation Dashboard

## 📌 Project Overview

The **Daily Motivation Dashboard** is a React-based web application that displays motivational quotes to users. It allows users to like their favorite quotes and saves them locally so they persist even after refreshing the page.

---

## 🚀 Features

* 🔄 Fetch random quotes from an API
* ❤️ Like and save quotes
* 💾 Persist liked quotes using localStorage
* 🌙 Dark Mode toggle
* 📋 Display all liked quotes on the page
* 📱 Responsive and clean UI
* ⚡ Loading state handling

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6)**
* **HTML & CSS**
* **Browser localStorage API**

---

## 📂 Project Structure

```
motivation-dashboard
│
├── public
│   └── index.html
│
├── src
│   ├── App.js
│   ├── App.css
│   └── index.js
│
└── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository or download the project
2. Open the project in VS Code
3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

5. Open in browser:

```
http://localhost:3000
```

---

## 🔧 How It Works

* The app fetches quotes using an external API.
* React **useState** is used to manage quote data, liked quotes, and UI states.
* React **useEffect** is used to:

  * Fetch quotes on component load
  * Store liked quotes in localStorage
* Liked quotes are retrieved from localStorage when the app loads.

---

## 🎯 Key Concepts Used

* React Hooks (useState, useEffect)
* API Integration (fetch)
* Conditional Rendering
* Array Mapping using map()
* Event Handling
* Local Storage Persistence

---

## 🌙 Dark Mode

Users can toggle between light and dark themes using a button. This is implemented using state-based conditional styling.

---

## 📸 Sample UI

* Quote display with author
* Like button ❤️
* List of liked quotes
* Dark/Light mode toggle

---

## 🔮 Future Improvements

* Add animations
* Add quote categories
* Add backend database for storage
* Add user authentication

---

## 🧑‍💻 Author

* Developed by: *Your Name*

---

## 📜 License

This project is for educational purposes.
