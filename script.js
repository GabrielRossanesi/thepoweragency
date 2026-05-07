const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-mobile-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuClose = document.querySelector("[data-menu-close]");
const menuLinks = menu ? Array.from(menu.querySelectorAll("a")) : [];
const root = document.documentElement;
const methodSteps = Array.from(document.querySelectorAll(".method-step"));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let previousFocus = null;
let ticking = false;

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

const updateMotionState = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  root.style.setProperty("--scroll-progress", progress.toFixed(4));
  root.style.setProperty("--hero-drift", `${Math.round(window.scrollY * 0.18)}px`);

  if (methodSteps.length) {
    const viewportCenter = window.innerHeight * 0.52;
    let activeStep = methodSteps[0];
    let activeDistance = Number.POSITIVE_INFINITY;

    methodSteps.forEach((step) => {
      const rect = step.getBoundingClientRect();
      const stepCenter = rect.top + rect.height / 2;
      const distance = Math.abs(stepCenter - viewportCenter);

      if (distance < activeDistance) {
        activeDistance = distance;
        activeStep = step;
      }
    });

    methodSteps.forEach((step) => {
      step.classList.toggle("is-active", step === activeStep);
    });
  }
};

const requestMotionUpdate = () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    updateMotionState();
    ticking = false;
  });
};

const closeMenu = () => {
  if (!menu || !menuToggle) return;
  document.body.classList.remove("menu-open");
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");

  if (previousFocus) {
    previousFocus.focus();
  }
};

const openMenu = () => {
  if (!menu || !menuToggle) return;
  previousFocus = document.activeElement;
  document.body.classList.add("menu-open");
  menu.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fechar menu");

  const firstLink = menu.querySelector("a");
  window.setTimeout(() => firstLink && firstLink.focus(), 180);
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuClose?.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

menu?.addEventListener("click", (event) => {
  if (event.target === menu) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener(
  "scroll",
  () => {
    setHeaderState();
    requestMotionUpdate();
  },
  { passive: true },
);
window.addEventListener("resize", requestMotionUpdate, { passive: true });
setHeaderState();
updateMotionState();

if (!reducedMotion) {
  window.addEventListener(
    "pointermove",
    (event) => {
      if (window.innerWidth < 900) return;

      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      root.style.setProperty("--pointer-x", x.toFixed(3));
      root.style.setProperty("--pointer-y", y.toFixed(3));
    },
    { passive: true },
  );
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  revealItems.forEach((item, index) => {
    const localIndex = index % 6;
    item.style.setProperty("--reveal-delay", `${localIndex * 55}ms`);
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
