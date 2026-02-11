"use client";

import { useEffect, useState } from "react";
import Login from "../components/Login";
import PuzzleGame from "../components/PuzzleGame";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function handleLogin(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <PuzzleGame user={user} onLogout={handleLogout} />
      )}
    </>
  );
}
