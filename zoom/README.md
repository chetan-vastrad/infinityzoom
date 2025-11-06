.🌀 Infinite Zoom Animation (React.js)

An infinite zoom canvas animation inspired by the Hydromeda Zoomquilt effect — built entirely in React.js using the HTML5 Canvas API.
This project smoothly transitions through a loop of zooming images, creating a continuous illusion of depth and motion.

Features

✨ Infinite Zoom Effect — seamless looping of zoomed images

🖼️ Dynamic Canvas Scaling — adapts perfectly to all screen sizes

🎬 Optimized Animation using requestAnimationFrame

🧩 Image Preloading for smoother transitions

🌗 Fullscreen Mode Toggle

⚡ Lightweight — no external libraries other than React


# Why React.js?

# Component-based Architecture
React lets us wrap the entire animation inside a single reusable component (ImageZoom), making it easy to integrate into any app — for example, a game intro screen, landing page animation, or interactive art site.

# Clean State & Lifecycle Management
The animation setup, resizing, and cleanup are handled cleanly inside useEffect, ensuring that:
Event listeners are attached/detached properly
Animation frames stop when the component unmounts (no memory leaks)

# Reactivity
Using React’s useState, the fullscreen button instantly updates when toggled — no manual DOM manipulation needed.

# Future Extensibility
You can easily enhance the component later.

# Tech Stack
React Canvas

Project Structure

infinite-zoom/
│
├── public/
│   └── images/
│       ├── 1.jpg
│       ├── 2.jpg
│       ├── 3.jpg
│       └── ...
│
├── src/
│   ├── components/
│   │   └── ImageZoom.jsx
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
└── README.md


# To Run this Project
1. Clone from this project from [Git Hub Link ](https://github.com/chetan-vastrad/infinitezoom)
2. To run this project you have install npm install in the terminal 
3. And run run the project 

# Live Link
(https://infinityzoom.netlify.app/)


🧑‍💻 Author
Chetan Vastrad
Frontend Developer | React.js Specialist
📍 Bangalore, India

