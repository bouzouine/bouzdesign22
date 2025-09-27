// demo data (30 images with tags)
const demo = [];
const tags = ["packaging", "logo", "illustration", "poster"];
for (let i = 1; i <= 30; i++) {
  const tag = tags[i % tags.length];
  demo.push({
    id: i,
    title: `${tag.toUpperCase()} — Project ${i}`,
    tags: [tag],
    src: `https://picsum.photos/seed/bouziane${i}/800/600`
  });
}

const gallery = document.getElementById("gallery");
const search = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filters .chip");
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbClose = document.getElementById("lbClose");

function createCard(item) {
  const el = document.createElement("article");
  el.className = "card";
  el.setAttribute("data-tags", item.tags.join(" "));
  el.setAttribute("data-title", item.title.toLowerCase());
  el.innerHTML = `
    <img src="${item.src}" alt="${item.title}">
    <div class="meta"><h3>${item.title}</h3><p>${item.tags.join(" • ")}</p></div>
  `;
  el.addEventListener("click", () => openLightbox(item));
  return el;
}

function render(items) {
  gallery.innerHTML = "";
  if (!items.length) {
    gallery.innerHTML = "<p>Aucun projet trouvé.</p>";
    return;
  }
  items.forEach((i) => gallery.appendChild(createCard(i)));
}

function openLightbox(item) {
  lbImage.src = item.src;
  lbImage.alt = item.title;
  lightbox.classList.add("open");
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lbImage.src = "";
}

function applyFilter(filter) {
  const q = search.value.trim().toLowerCase();
  let items = demo.slice();
  if (filter !== "all") items = items.filter((it) => it.tags.includes(filter));
  if (q) items = items.filter((it) => it.title.toLowerCase().includes(q));
  render(items);
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilter(btn.dataset.filter);
  });
});

search.addEventListener("input", () => {
  const active = document.querySelector(".filters .chip.active").dataset.filter;
  applyFilter(active);
});

lbClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

// initial render
render(demo);
