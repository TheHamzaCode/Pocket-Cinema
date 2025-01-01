// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initIcons();
    initTabs();
    initUpload();
    renderVideos();
    renderPlaylists();
});

function renderVideos() {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = videos.map(video => `
        <div class="video-card">
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <div class="video-meta">
                    <span>${video.views} views</span>
                    <span>${video.duration}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPlaylists() {
    const playlistGrid = document.getElementById('playlistGrid');
    playlistGrid.innerHTML = playlists.map(playlist => `
        <div class="playlist-card">
            <img src="${playlist.thumbnail}" alt="${playlist.name}" class="video-thumbnail">
            <div class="video-info">
                <h3 class="video-title">${playlist.name}</h3>
                <div class="video-meta">
                    <span>${playlist.videos} videos</span>
                </div>
            </div>
        </div>
    `).join('');
}

particlesJS("particles-js", {
    particles: {
      number: { value: 200, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.4478208716513396,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: true, speed: 0, size_min: 0.1, sync: true }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 0
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  
  