import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [likedQuotes, setLikedQuotes] = useState(() => {
  const saved = localStorage.getItem("likedQuotes");
  return saved ? JSON.parse(saved) : [];
});
  const [liked, setLiked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();

      setQuote(data.slip.advice);
      setAuthor("Advice Generator");
    } catch (error) {
      setQuote("Believe in yourself and keep going.");
      setAuthor("Local Quote");
    }

    setLiked(false);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();

    const saved = JSON.parse(localStorage.getItem("likedQuotes"));
    if (saved) {
      setLikedQuotes(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
  }, [likedQuotes]);

  const handleLike = () => {
    if (!liked) {
      setLikedQuotes([...likedQuotes, { quote, author }]);
      setLiked(true);
    }
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>

      <div className="card">

        <button
          className="mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1 className="title">🌞 Daily Motivation</h1>

        {loading ? (
          <p>Loading quote...</p>
        ) : (
          <>
            <p className="quote">"{quote}"</p>
            <p className="author">— {author}</p>
          </>
        )}

        <div className="buttons">

          <button className="new-btn" onClick={fetchQuote}>
            New Quote
          </button>

          <button className="like-btn" onClick={handleLike}>
            {liked ? "Liked ❤️" : "Like ❤️"}
          </button>

        </div>
        <div className="liked-list">

          <h3>Liked Quotes</h3>

          {likedQuotes.length === 0 ? (
            <p>No liked quotes yet.</p>
          ) : (
            likedQuotes.map((q, index) => (
              <div key={index} className="liked-item">
                <p>"{q.quote}"</p>
                <small>- {q.author}</small>
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default App;