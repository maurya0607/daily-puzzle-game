export function saveProgress(data) {
  localStorage.setItem("daily-progress", JSON.stringify(data));
}

export function loadProgress() {
  const data = localStorage.getItem("daily-progress");
  return data ? JSON.parse(data) : null;
}
