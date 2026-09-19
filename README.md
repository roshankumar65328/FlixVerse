# FlixVerse - Movie & TV Discovery Web App

FlixVerse is a sleek, modern, and high-performance movie discovery web application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. It leverages the **TMDB (The Movie Database) API** to fetch real-time trending movies, TV shows, celebrity profiles, trailers, watch providers, and detailed recommendation lists.

---

## Features

- **Trending & Popular Hub:** Real-time collection of trending movies, TV shows, and celebrities.
- **Dynamic Header & Hero Section:** Randomly styled hero poster with backdrop overlay on every reload.
- **Comprehensive Movie & Show Details:** 
  - Poster, release date, genres, runtime, and ratings.
  - Watch provider platforms (*Flatrate, Rent, Buy*).
  - External links (*IMDb, Homepage*).
- **Embedded Trailer Player:** Integrated nested routing (`<Outlet />`) to watch trailers without leaving the main details context.
- **Responsive Layout:** Mobile-friendly slide-in navigation sidebar with custom scrollbars and backdrop overlays.
- **Category Filtering:** Filter content effortlessly by TV Shows, Movies, or All media types.
- **Infinite Scroll:** Continuous content fetching with pagination handling.

---

## Tech Stack & Libraries

- **Frontend Framework:** React (Vite)
- **State Management:** Redux Toolkit / React-Redux
- **Routing:** React Router v6
- **Styling:** Tailwind CSS & Remixicons (`remixicon`)
- **API Client:** Axios (Centralized Instance)
- **Data Source:** [TMDB API](https://www.themoviedb.org/documentation/api)

---

⚙️ Installation & Setup Guide
Follow these steps to run FlixVerse locally on your system:

1. Clone the Repository

   git clone https://github.com/roshankumar65328/FlixVerse.git


2. Install Dependencies

   npm install

3. Setup Environment Variables
   Create a .env file in the root directory and add your TMDB API Bearer Token / Key:
   Code snippet

   VITE_TMDB_API_KEY=your_tmdb_api_key_here

4. Run Development Server

   npm run dev

---

<img width="1919" height="863" alt="Screenshot 2026-09-19 172037" src="https://github.com/user-attachments/assets/ca21841c-6032-4c2b-a045-6ac9dfef281e" />

---

## Project Structure

```text
FlixVerse/
├── public/
│   ├── logo.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Trailer.jsx
│   │   └── template/
│   │       ├── Dropdown.jsx
│   │       ├── Header.jsx
│   │       ├── HorizontalCards.jsx
│   │       ├── Sidenav.jsx
│   │       └── Topnav.jsx
│   ├── store/
│   │   ├── actions/
│   │   │   └── movieAction.jsx
│   │   ├── reducers/
│   │   │   └── movieSlice.jsx
│   │   └── store.jsx
│   ├── utils/
│   │   └── axios.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
