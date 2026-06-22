const services = [
  {
    name: "Kotisiivous",
    description: "Säännöllistä tai kertasiivousta juuri sinun kotisi tarpeisiin.",
    long: "Kotisiivous sisältää kodin yleisten pintojen, keittiön, kylpyhuoneen ja lattioiden huolellisen siivouksen. Palvelu voidaan tehdä kertasiivouksena tai säännöllisenä sopimuksena.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85",
    icon: "home"
  },
  {
    name: "Toimistosiivous",
    description: "Puhtaat ja viihtyisät työtilat tuottavampaan arkeen.",
    long: "Toimistosiivous sopii pienille ja keskisuurille yrityksille. Sovimme siivousrytmin, vastuualueet ja raportoinnin selkeästi, jotta työtilat pysyvät raikkaina joka viikko.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85",
    icon: "briefcase"
  },
  {
    name: "Ikkunanpesu",
    description: "Kristallinkirkkaat ikkunat kotiin tai yritykselle.",
    long: "Ikkunanpesu sisältää lasipintojen, karmien ja tarvittaessa parvekelasitusten puhdistuksen. Lopputulos on kirkas ja huoliteltu ilman raitoja.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=85",
    icon: "window"
  },
  {
    name: "Muuttosiivous",
    description: "Muuttosiivous takaa puhtaan lopputuloksen ilman stressiä.",
    long: "Muuttosiivouksessa käymme asunnon läpi perusteellisesti ennen luovutusta tai muuttoa. Siivous voidaan tehdä myös nopealla aikataululla.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=700&q=85",
    icon: "truck"
  },
  {
    name: "Suursiivous",
    description: "Perusteellinen siivous, joka raikastaa koko kodin.",
    long: "Suursiivous sopii kevätsiivoukseen, juhlia edeltävään siivoukseen tai silloin, kun koti kaipaa tavallista perusteellisempaa puhdistusta.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=700&q=85",
    icon: "sparkles"
  }
];

const reviews = [
  {
    text: "Erittäin hyvää palvelua alusta loppuun. Koti säihkyy ja kaikki sujui sovitusti. Suosittelen!",
    author: "Sanna K., Helsinki"
  },
  {
    text: "Toimistomme siivous on aina moitteetonta. Luotettava kumppani ja ystävällinen tiimi.",
    author: "Mikko L., Espoo"
  },
  {
    text: "Muuttosiivous hoidettiin täydellisesti ja nopeasti. Iso kiitos koko NordClean-tiimille!",
    author: "Laura M., Vantaa"
  },
  {
    text: "Selkeä tarjous, hyvä aikataulutus ja todella siisti lopputulos. Käytämme uudelleen.",
    author: "Jari P., Helsinki"
  }
];

const iconPaths = {
  home: `<path d="M4 11.5 12 5l8 6.5"/><path d="M6.5 10.5V20h11v-9.5"/><path d="M10 20v-6h4v6"/>`,
  briefcase: `<path d="M9 7V5.8C9 4.8 9.8 4 10.8 4h2.4C14.2 4 15 4.8 15 5.8V7"/><path d="M4 8h16v11H4z"/><path d="M4 12.5c4.7 1.7 11.3 1.7 16 0"/>`,
  window: `<path d="M5 4h14v16H5z"/><path d="M12 4v16"/><path d="M5 12h14"/>`,
  truck: `<path d="M3 6h11v10H3z"/><path d="M14 10h4l3 3v3h-7"/><path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>`,
  sparkles: `<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z"/><path d="M5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14Z"/><path d="M19 14l.7 1.7L21.5 16l-1.8.7L19 18.5l-.7-1.8-1.8-.7 1.8-.7L19 14Z"/>`
};

const serviceGrid = document.querySelector("#serviceGrid");
const reviewCarousel = document.querySelector("#reviewCarousel");
const reviewDots = document.querySelector("#reviewDots");
const navToggle = document.querySelector(".nav-toggle");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".main-nav a, .mobile-menu a");
let activeModal = null;

function iconSvg(type) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[type]}</svg>`;
}

function renderServices() {
  if (!serviceGrid) return;
  serviceGrid.innerHTML = services.map((service, index) => `
    <article class="service-card reveal" tabindex="0" role="button" data-service-index="${index}" aria-label="Avaa palvelu ${service.name}">
      <div class="service-image" style="background-image: url('${service.image}')" aria-hidden="true"></div>
      <span class="service-icon" aria-hidden="true">${iconSvg(service.icon)}</span>
      <div class="service-content">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
      </div>
      <span class="card-arrow" aria-hidden="true">›</span>
    </article>
  `).join("");
}

function renderReviews(activeIndex = 0) {
  if (!reviewCarousel || !reviewDots) return;
  reviewCarousel.innerHTML = reviews.map((review) => `
    <article class="review-card">
      <div class="stars" aria-label="Viisi tähteä">★★★★★</div>
      <p>“${review.text}”</p>
      <strong>– ${review.author}</strong>
    </article>
  `).join("");

  reviewDots.innerHTML = reviews.map((_, index) => `
    <button class="${index === activeIndex ? "active" : ""}" type="button" aria-label="Näytä arvostelu ${index + 1}"></button>
  `).join("");
}

function closeMobileNavigation() {
  siteHeader?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

function setupNavigation() {
  navToggle?.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".main-nav a, .mobile-menu a").forEach((link) => {
    link.addEventListener("click", closeMobileNavigation);
  });

  const sections = ["top", "palvelut", "hinnat", "yrityksille", "yhteys"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const href = link.getAttribute("href")?.replace("#", "");
          link.classList.toggle("active", href === entry.target.id);
        });
      });
    }, { rootMargin: "-42% 0px -52% 0px" });
    sections.forEach((section) => observer.observe(section));
  }
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function updateReviewDots(activeIndex) {
  if (!reviewDots) return;
  [...reviewDots.querySelectorAll("button")].forEach((button, index) => {
    button.classList.toggle("active", index === activeIndex);
  });
}

function setupReviews() {
  if (!reviewCarousel || !reviewDots) return;

  reviewDots.addEventListener("click", (event) => {
    if (!event.target.matches("button")) return;
    const buttons = [...reviewDots.querySelectorAll("button")];
    const index = buttons.indexOf(event.target);
    const card = reviewCarousel.querySelectorAll(".review-card")[index];
    updateReviewDots(index);
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  });

  let timer;
  reviewCarousel.addEventListener("scroll", () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      const cards = [...reviewCarousel.querySelectorAll(".review-card")];
      const left = reviewCarousel.scrollLeft;
      const closestIndex = cards.reduce((best, card, index) => {
        const current = Math.abs(card.offsetLeft - left);
        const previous = Math.abs(cards[best].offsetLeft - left);
        return current < previous ? index : best;
      }, 0);
      updateReviewDots(closestIndex);
    }, 80);
  });
}

function createModal(id, title, contentHtml) {
  const modal = document.createElement("section");
  modal.className = "modal";
  modal.id = id;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", `${id}-title`);
  modal.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <div class="modal-panel" tabindex="-1">
      <button class="modal-close" type="button" aria-label="Sulje" data-close-modal>×</button>
      <h2 id="${id}-title">${title}</h2>
      ${contentHtml}
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function openModal(modal) {
  if (!modal) return;
  activeModal = modal;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-panel")?.focus();
}

function closeModal() {
  if (!activeModal) return;
  activeModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  activeModal = null;
}

function setupModals() {
  const quoteModal = createModal("quoteModal", "Pyydä tarjous", `
    <p>Kerro lyhyesti, millaista siivousta tarvitset. Tämä demo näyttää onnistumisviestin, mutta asiakaskäytössä lomake voidaan yhdistää sähköpostiin tai varausjärjestelmään.</p>
    <form class="quote-form" id="quoteForm">
      <label>Nimi <input required name="name" autocomplete="name" placeholder="Etunimi Sukunimi" /></label>
      <label>Sähköposti <input required type="email" name="email" autocomplete="email" placeholder="nimi@email.fi" /></label>
      <div class="form-row">
        <label>Palvelu <select name="service"><option>Kotisiivous</option><option>Toimistosiivous</option><option>Ikkunanpesu</option><option>Muuttosiivous</option><option>Suursiivous</option></select></label>
        <label>Toivottu päivä <input type="date" name="date" /></label>
      </div>
      <label>Lisätiedot <textarea name="message" rows="4" placeholder="Kerro asunnon koko, sijainti ja toiveet"></textarea></label>
      <button class="btn btn-primary" type="submit">Lähetä tarjouspyyntö</button>
      <p class="form-status" aria-live="polite"></p>
    </form>
  `);

  const aboutModal = createModal("aboutModal", "Meistä", `
    <p>NordClean on fiktiivinen demo modernista siivouspalvelusta. Sivun tarkoitus on näyttää, miltä oikean yrityksen laadukas kotisivu voisi näyttää.</p>
    <p>Oikeassa asiakasprojektissa palvelut, kuvat, hinnat, yhteystiedot ja lomakkeet vaihdetaan yrityksen omiin tietoihin.</p>
  `);

  const faqModal = createModal("faqModal", "Usein kysytyt kysymykset", `
    <div class="faq-list">
      <details open><summary>Voiko ajan varata verkossa?</summary><p>Kyllä. Lomake voidaan yhdistää sähköpostiin, kalenteriin tai erilliseen varausjärjestelmään.</p></details>
      <details><summary>Tarvitaanko oma siivousvälineistö?</summary><p>Useimmiten NordClean tuo tarvittavat välineet ja aineet mukanaan.</p></details>
      <details><summary>Teettekö yrityssiivouksia?</summary><p>Kyllä. Sivulla on erikseen yrityksille suunnattu osio ja tarjouspyyntö.</p></details>
    </div>
  `);

  const policyModal = createModal("policyModal", "Evästekäytäntö", `
    <p>Tämä demosivu ei käytä seurantaevästeitä. Oikeassa julkaisussa evästekäytäntö lisätään sen mukaan, mitä analytiikkaa tai lomaketyökaluja sivulla käytetään.</p>
  `);

  document.querySelectorAll(".js-open-quote").forEach((button) => {
    button.addEventListener("click", () => openModal(quoteModal));
  });
  document.querySelectorAll(".js-open-about").forEach((button) => {
    button.addEventListener("click", () => openModal(aboutModal));
  });
  document.querySelectorAll(".js-open-faq").forEach((button) => {
    button.addEventListener("click", () => openModal(faqModal));
  });
  document.querySelectorAll(".js-open-policy").forEach((button) => {
    button.addEventListener("click", () => openModal(policyModal));
  });

  serviceGrid?.addEventListener("click", (event) => {
    const card = event.target.closest(".service-card");
    if (!card) return;
    openServiceModal(Number(card.dataset.serviceIndex));
  });

  serviceGrid?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".service-card");
    if (!card) return;
    event.preventDefault();
    openServiceModal(Number(card.dataset.serviceIndex));
  });

  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileNavigation();
      closeModal();
    }
  });

  quoteModal.querySelector("form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = quoteModal.querySelector(".form-status");
    status.textContent = "Kiitos! Tarjouspyyntö on vastaanotettu demossa.";
    event.currentTarget.reset();
  });
}

function openServiceModal(index) {
  const service = services[index];
  if (!service) return;
  const modal = createModal(`serviceModal${index}`, service.name, `
    <p>${service.long}</p>
    <p><strong>Seuraava vaihe:</strong> pyydä tarjous, niin saat palvelulle sopivan aikataulun ja hinta-arvion.</p>
    <button class="btn btn-primary js-service-quote" type="button">Pyydä tarjous</button>
  `);
  modal.querySelector(".js-service-quote")?.addEventListener("click", () => {
    closeModal();
    document.querySelector(".js-open-quote")?.click();
  });
  openModal(modal);
}

function setupNewsletter() {
  const form = document.querySelector("#newsletterForm");
  const status = document.querySelector("#newsletterStatus");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Kiitos tilauksesta!";
    form.reset();
  });
}

function setCurrentYear() {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
}

renderServices();
renderReviews();
setupNavigation();
setupReviews();
setupModals();
setupNewsletter();
setCurrentYear();
setupRevealAnimations();
