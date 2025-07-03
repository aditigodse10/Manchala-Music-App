const playlists = [
  {
    mood: "Calm",
    name: "Morning Breeze",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=5qap5aO4i9A" // lofi radio
  },
  {
    mood: "Calm",
    name: "Forest Relax",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=hHW1oY26kxQ"
  },
  {
    mood: "Happy",
    name: "Party Hits",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=KQetemT1sWc" // Happy pop
  },
  {
    mood: "Happy",
    name: "Feel Good Vibes",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" // Pharrell Happy
  },
  {
    mood: "Focus",
    name: "Study Lofi",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=DWcJFNfaw9c"
  },
  {
    mood: "Focus",
    name: "Deep Focus",
    img: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=WPni755-Krg"
  },
  {
    mood: "Retro",
    name: "Retro Classics",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" // Queen
  },
  {
    mood: "Retro",
    name: "Disco Fever",
    img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Rick Astley 😉
  },
  {
    mood: "Night",
    name: "Night Drive",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=-5KAN9_CzSA" // The Weeknd
  },
  {
    mood: "Night",
    name: "Moonlight Chill",
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ"
  },
  {
    mood: "Happy",
    name: "Sunny Morning",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" // Ed Sheeran
  },
  {
    mood: "Calm",
    name: "Serene Waves",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=DWcJFNfaw9c"
  },
  {
    mood: "Focus",
    name: "Chill Instrumentals",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=5yx6BWlEVcY"
  },
  {
    mood: "Retro",
    name: "Vinyl Nostalgia",
    img: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y"
  },
  {
    mood: "Night",
    name: "Stars Above",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=V1Pl8CzNzCw"
  },
];

const grid = document.getElementById('playlist-grid');
const moodButtons = document.querySelectorAll('.mood-btn');

function displayPlaylists(filterMood) {
  grid.innerHTML = '';
  const filtered = filterMood ? playlists.filter(p => p.mood === filterMood) : playlists;
  filtered.forEach(p => {
    const card = document.createElement('a'); // <a> instead of div
    card.className = 'card';
    card.href = p.url;
    card.target = '_blank'; // open in new tab
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <p>${p.name}</p>
    `;
    grid.appendChild(card);
  });
}

// Show all by default
displayPlaylists();

moodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.dataset.mood;
    displayPlaylists(mood);
  });
});
