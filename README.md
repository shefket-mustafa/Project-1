# 🌦️ Weatherer

A lightweight and dynamic weather application built with **React**. This project was created as a personal learning experience to strengthen my understanding of React fundamentals, React Router, Context API, and working with the terminal using Git.

---

## 📌 Features

- 🔍 **Search for any city** to view its current weather conditions  
- 🌡️ Displays temperature in °C and °F, wind speed, feels like, and more  
- 🎨 **Dynamic theme**: Background visuals change depending on the weather (sunny, cloudy, rainy, snowy)  
- 🧠 State management handled with **React Context API**  
- 🚫 No third-party state libraries or REST clients (e.g. no Redux, no Axios) — built using **vanilla `fetch()`**  
- 💅 Styled with custom **CSS**  
- 🧭 Navigable through **React Router**  
- 🧪 Practiced and used **Git exclusively through the terminal** for version control  

---

## 🛠️ Tech Stack

- **React**  
- **React Router**  
- **CSS**  
- **Weather API** (via REST with `fetch`)  
- **React Context API**  
- **Git (terminal only)**  

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/weatherer.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
│
├── api/               # Custom REST logic (fetch weather data)
├── components/        # Reusable components (Forecast, Header, Rain, Snow, etc.)
├── context/           # Context Provider and hooks
├── error-modal/       # Error and success modals
├── styles/            # CSS files for different components
├── App.jsx            # Main app and routing
└── main.jsx           # ReactDOM render
```

---

## 🎯 What I Learned

- Structuring and building a React app from scratch  
- Using the **Context API** for state sharing across components  
- Making API calls using **`fetch()`** and handling loading/error states  
- Styling with **vanilla CSS** and applying dynamic themes  
- Working with **React Router**  
- Managing branches, commits, and merges **using Git via terminal only**

---

## 🌤️ Credits

- Weather data powered by [WeatherAPI.com](https://www.weatherapi.com/)  
- Icons & illustrations sourced from open SVG repositories  

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
