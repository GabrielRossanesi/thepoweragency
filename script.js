const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-mobile-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuClose = document.querySelector("[data-menu-close]");
const menuLinks = menu ? Array.from(menu.querySelectorAll("a")) : [];
const root = document.documentElement;
const methodSteps = Array.from(document.querySelectorAll(".method-step"));
const hotspotButtons = Array.from(document.querySelectorAll("[data-hotspot]"));
const languageButtons = Array.from(document.querySelectorAll("[data-lang-switch]"));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const LANGUAGE_STORAGE_KEY = "tpa-language";
const translations = {
  en: {
    "meta.title": "The Power Agency — Strategic marketing for growing brands",
    "meta.description":
      "International strategic marketing agency specialized in content, planning, campaigns, social media, paid traffic and performance analysis.",
    "skip.content": "Skip to content",
    "nav.main": "Main navigation",
    "nav.mobile": "Mobile navigation",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.method": "TPA Method",
    "nav.differentials": "Differentials",
    "nav.contact": "Contact",
    "cta.header": "Talk to the agency",
    "cta.mobile": "Start a strategy",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "menu.dialog": "Main menu",
    "hero.visualLabel": "Visual composition of the Think, Plan and Action methodology",
    "hero.eyebrow": "International Strategic Marketing Agency",
    "hero.headline": "Strategic marketing for brands ready to grow with direction.",
    "hero.text":
      "The Power Agency combines analysis, planning and execution to build authentic, intelligent communications connected to each brand's positioning.",
    "hero.primary": "Start a strategy",
    "hero.secondary": "Discover the method",
    "hero.chip.analysis": "Analysis",
    "hero.chip.content": "Content",
    "hero.chip.metrics": "Metrics",
    "hero.flow.think": "THINK",
    "hero.flow.plan": "PLAN",
    "hero.flow.action": "ACTION",
    "intro.label": "More than content",
    "intro.title": "More than content. Strategy with intention.",
    "intro.text":
      "Content without strategy creates shallow communication. That is why, before any post, campaign or publication, The Power Agency builds direction, intention and positioning.",
    "intro.listLabel": "Strategic differentials",
    "intro.bullet.strategy": "Strategy before execution",
    "intro.bullet.tailored": "Tailored communication",
    "intro.bullet.analysis": "Deep business analysis",
    "intro.bullet.creativity": "Creativity with direction",
    "intro.bullet.tracking": "Continuous performance tracking",
    "services.label": "Complete solutions",
    "services.title": "Complete solutions for brands in motion",
    "services.text":
      "From strategic planning to execution, The Power Agency develops communication systems designed to strengthen positioning, generate connection and support sustainable growth.",
    "services.strategy.title": "Strategy",
    "services.strategy.item1": "Content strategy",
    "services.strategy.item2": "Strategic communication planning",
    "services.strategy.item3": "Brand positioning",
    "services.strategy.item4": "Content funnel planning",
    "services.content.title": "Content",
    "services.content.item1": "Campaign development",
    "services.content.item2": "Content production",
    "services.content.item3": "Social media management",
    "services.content.item4": "Content publishing and management",
    "services.performance.title": "Performance",
    "services.performance.item1": "Paid traffic",
    "services.performance.item2": "Performance analysis",
    "services.performance.item3": "Metrics and results tracking",
    "services.performance.item4": "Campaign optimization",
    "services.direction.title": "Direction",
    "services.direction.item1": "Continuous strategic guidance",
    "services.direction.item2": "Seasonal campaigns",
    "services.direction.item3": "Creative direction",
    "services.direction.item4": "Communication formats",
    "method.label": "Proprietary methodology",
    "method.title": "TPA — Think, Plan and Action",
    "method.subtitle": "A proprietary methodology designed to turn communication into strategy.",
    "method.trackLabel": "TPA methodology stages",
    "method.think.index": "THINK",
    "method.think.title": "Think before executing",
    "method.think.text":
      "Before any content is created, the agency enters a deep stage of analysis and study to understand the business, the audience and the desired positioning.",
    "method.think.item1": "Persona research",
    "method.think.item2": "Competitive analysis",
    "method.think.item3": "Brand pillars",
    "method.think.item4": "SWOT analysis",
    "method.think.item5": "Current business moment",
    "method.think.item6": "Content DNA",
    "method.think.item7": "Editorial lines",
    "method.think.item8": "Tone of voice",
    "method.think.item9": "Brand personality",
    "method.plan.index": "PLAN",
    "method.plan.title": "Building the strategic path",
    "method.plan.text":
      "After the analysis, the agency develops a clear execution plan designed to take the brand from where it is to where it wants to go.",
    "method.plan.item1": "Content strategies",
    "method.plan.item2": "Campaigns",
    "method.plan.item3": "Timelines",
    "method.plan.item4": "Creative directions",
    "method.plan.item5": "Communication formats",
    "method.plan.item6": "Growth strategies",
    "method.plan.item7": "Execution planning",
    "method.action.index": "ACTION",
    "method.action.title": "Execution with continuous monitoring",
    "method.action.text":
      "Once the strategic structure is defined, the plan comes to life through production, publishing, campaigns, management and performance analysis.",
    "method.action.item1": "Content production",
    "method.action.item2": "Publishing",
    "method.action.item3": "Campaigns",
    "method.action.item4": "Social media management",
    "method.action.item5": "Results tracking",
    "method.action.item6": "Monthly meetings",
    "method.action.item7": "Strategic improvements",
    "method.action.item8": "Seasonal actions",
    "difference.label": "Differentials",
    "difference.title": "Strategy, intention and depth before every publication.",
    "difference.text":
      "The Power Agency considers the brand's real differentiators, audience behavior, business context, commercial objectives, tone of voice and personality before building any communication.",
    "difference.pointsLabel": "Strategic depth points",
    "difference.point.brand.title": "Brand reading",
    "difference.point.brand.text":
      "Understanding the market context, audience and what makes each business recognizable.",
    "difference.point.direction.title": "Creative direction",
    "difference.point.direction.text":
      "Ideas are shaped with purpose, format, intention and a clear relationship to business goals.",
    "difference.point.evolution.title": "Evolution rhythm",
    "difference.point.evolution.text":
      "Results are monitored to transform learnings into sharper strategic decisions.",
    "positioning.visualLabel": "Strategic hotspots from The Power Agency",
    "positioning.hotspot.brand": "Brand reading",
    "positioning.hotspot.brandText":
      "We analyze the brand's essence, positioning and differentiators to build coherent, strategic communication.",
    "positioning.hotspot.direction": "Direction",
    "positioning.hotspot.directionText":
      "We define clear communication, content and campaign paths based on goals, market context and audience behavior.",
    "positioning.hotspot.growth": "Growth",
    "positioning.hotspot.growthText":
      "We turn strategy into continuous execution, tracking results and creating actions that generate real evolution for the brand.",
    "positioning.label": "Positioning",
    "positioning.title": "A strategic, human and intelligent agency.",
    "positioning.text":
      "The brand believes in marketing with direction, intention and personality. Its focus is to develop strong brands through authentic communication and strategies that generate connection, positioning and real growth.",
    "values.label": "Values",
    "values.title": "Values that guide every project",
    "values.item1": "Strategy before execution",
    "values.item2": "Tailored communication",
    "values.item3": "Deep listening and analysis",
    "values.item4": "Creativity with direction",
    "values.item5": "Strategic clarity",
    "values.item6": "Brand intelligence",
    "values.item7": "Consistency",
    "values.item8": "Human communication",
    "values.item9": "Sustainable growth",
    "values.item10": "Continuous monitoring",
    "voice.label": "Tone of voice",
    "voice.title": "Authority without arrogance. Strategy with proximity.",
    "voice.text":
      "The Power Agency's communication should convey strategic intelligence, clarity, creativity, confidence, accessible sophistication and a vision for growth.",
    "final.label": "Contact",
    "final.title": "Ready to build a brand with strategy?",
    "final.text":
      "Let's turn communication into direction, content into positioning and campaigns into real growth.",
    "final.primary": "Talk to The Power Agency",
    "final.secondary": "Request a diagnosis",
    "final.primaryAria": "Talk to The Power Agency",
    "final.secondaryAria": "Request a strategic diagnosis",
    "footer.tagline": "Strategic marketing for brands that grow with direction.",
    "footer.navigation": "Navigation",
    "footer.navigationAria": "Footer navigation",
    "footer.contact": "Contact",
    "footer.email": "Email",
    "footer.emailAria": "Send an email to The Power Agency",
    "footer.whatsappAria": "Contact The Power Agency on WhatsApp",
    "footer.socialAria": "Social links",
    "footer.instagramAria": "Open The Power Agency Instagram in a new tab",
    "footer.linkedinAria": "Open The Power Agency LinkedIn in a new tab",
    "footer.language": "Language",
    "footer.copyright": "© 2026 The Power Agency. All rights reserved.",
    "footer.developedBy": "Developed by",
    "language.group": "Language selector",
    "language.enAria": "Switch language to English",
    "language.ptAria": "Mudar idioma para Português",
  },
  "pt-BR": {
    "meta.title": "The Power Agency — Marketing estratégico para marcas em crescimento",
    "meta.description":
      "Agência internacional de marketing estratégico especializada em conteúdo, planejamento, campanhas, redes sociais, tráfego pago e análise de performance.",
    "skip.content": "Ir para o conteúdo",
    "nav.main": "Navegação principal",
    "nav.mobile": "Navegação mobile",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.method": "Método TPA",
    "nav.differentials": "Diferenciais",
    "nav.contact": "Contato",
    "cta.header": "Fale com a agência",
    "cta.mobile": "Começar uma estratégia",
    "menu.open": "Abrir menu",
    "menu.close": "Fechar menu",
    "menu.dialog": "Menu principal",
    "hero.visualLabel": "Composição visual da metodologia Think, Plan and Action",
    "hero.eyebrow": "Agência internacional de marketing estratégico",
    "hero.headline": "Marketing estratégico para marcas que querem crescer com direção.",
    "hero.text":
      "A The Power Agency une análise, planejamento e execução para construir comunicações autênticas, inteligentes e conectadas ao posicionamento de cada marca.",
    "hero.primary": "Começar uma estratégia",
    "hero.secondary": "Conhecer metodologia",
    "hero.chip.analysis": "Análise",
    "hero.chip.content": "Conteúdo",
    "hero.chip.metrics": "Métricas",
    "hero.flow.think": "THINK",
    "hero.flow.plan": "PLAN",
    "hero.flow.action": "ACTION",
    "intro.label": "Mais do que conteúdo",
    "intro.title": "Mais do que conteúdo. Estratégia com intenção.",
    "intro.text":
      "Conteúdo sem estratégia gera comunicação rasa. Por isso, antes de qualquer post, campanha ou publicação, a The Power Agency constrói direção, intenção e posicionamento.",
    "intro.listLabel": "Diferenciais estratégicos",
    "intro.bullet.strategy": "Estratégia antes da execução",
    "intro.bullet.tailored": "Comunicação personalizada",
    "intro.bullet.analysis": "Análise profunda do negócio",
    "intro.bullet.creativity": "Criatividade com direção",
    "intro.bullet.tracking": "Acompanhamento contínuo de performance",
    "services.label": "Soluções completas",
    "services.title": "Soluções completas para marcas em movimento",
    "services.text":
      "Do planejamento estratégico à execução, a The Power Agency desenvolve sistemas de comunicação criados para fortalecer posicionamento, gerar conexão e sustentar crescimento.",
    "services.strategy.title": "Estratégia",
    "services.strategy.item1": "Estratégia de conteúdo",
    "services.strategy.item2": "Planejamento estratégico de comunicação",
    "services.strategy.item3": "Posicionamento de marca",
    "services.strategy.item4": "Planejamento de funil de conteúdo",
    "services.content.title": "Conteúdo",
    "services.content.item1": "Desenvolvimento de campanhas",
    "services.content.item2": "Produção de conteúdo",
    "services.content.item3": "Gestão de redes sociais",
    "services.content.item4": "Gerenciamento e publicação de conteúdos",
    "services.performance.title": "Performance",
    "services.performance.item1": "Tráfego pago",
    "services.performance.item2": "Análise de performance",
    "services.performance.item3": "Acompanhamento de métricas e resultados",
    "services.performance.item4": "Otimização de campanhas",
    "services.direction.title": "Direção",
    "services.direction.item1": "Direcionamento estratégico contínuo",
    "services.direction.item2": "Campanhas sazonais",
    "services.direction.item3": "Direção criativa",
    "services.direction.item4": "Formatos de comunicação",
    "method.label": "Metodologia proprietária",
    "method.title": "TPA — Think, Plan and Action",
    "method.subtitle": "Uma metodologia proprietária para transformar comunicação em estratégia.",
    "method.trackLabel": "Etapas da metodologia TPA",
    "method.think.index": "THINK",
    "method.think.title": "Pensar antes de executar",
    "method.think.text":
      "Antes de qualquer conteúdo ser criado, a agência entra em uma etapa profunda de análise e estudo para entender o negócio, o público e o posicionamento desejado.",
    "method.think.item1": "Estudo de persona",
    "method.think.item2": "Análise de concorrência",
    "method.think.item3": "Pilares da marca",
    "method.think.item4": "Análise SWOT",
    "method.think.item5": "Momento atual do negócio",
    "method.think.item6": "DNA de conteúdo",
    "method.think.item7": "Linhas editoriais",
    "method.think.item8": "Tom de voz",
    "method.think.item9": "Personalidade da marca",
    "method.plan.index": "PLAN",
    "method.plan.title": "Construção estratégica do caminho",
    "method.plan.text":
      "Depois da análise, a agência desenvolve um plano de execução claro para levar a marca de onde está para onde deseja chegar.",
    "method.plan.item1": "Estratégias de conteúdo",
    "method.plan.item2": "Campanhas",
    "method.plan.item3": "Cronogramas",
    "method.plan.item4": "Direcionamentos criativos",
    "method.plan.item5": "Formatos de comunicação",
    "method.plan.item6": "Estratégias de crescimento",
    "method.plan.item7": "Planejamento de execução",
    "method.action.index": "ACTION",
    "method.action.title": "Execução com acompanhamento contínuo",
    "method.action.text":
      "Com a estrutura estratégica definida, o plano ganha vida por meio de produção, publicação, campanhas, gestão e análise de performance.",
    "method.action.item1": "Produção de conteúdo",
    "method.action.item2": "Publicações",
    "method.action.item3": "Campanhas",
    "method.action.item4": "Gestão de redes sociais",
    "method.action.item5": "Acompanhamento de resultados",
    "method.action.item6": "Reuniões mensais",
    "method.action.item7": "Aprimoramentos estratégicos",
    "method.action.item8": "Ações sazonais",
    "difference.label": "Diferenciais",
    "difference.title": "Estratégia, intenção e profundidade antes de qualquer publicação.",
    "difference.text":
      "A The Power Agency considera os diferenciais reais da marca, comportamento do público, contexto do negócio, objetivos comerciais, tom de voz e personalidade antes de construir qualquer comunicação.",
    "difference.pointsLabel": "Pontos de profundidade estratégica",
    "difference.point.brand.title": "Leitura de marca",
    "difference.point.brand.text":
      "Entendimento do cenário, do público e do que torna cada negócio reconhecível.",
    "difference.point.direction.title": "Direção criativa",
    "difference.point.direction.text":
      "Ideias são moldadas com função, formato, intenção e relação clara com os objetivos.",
    "difference.point.evolution.title": "Ritmo de evolução",
    "difference.point.evolution.text":
      "Resultados são acompanhados para transformar aprendizados em decisões estratégicas mais precisas.",
    "positioning.visualLabel": "Hotspots estratégicos da The Power Agency",
    "positioning.hotspot.brand": "Leitura de marca",
    "positioning.hotspot.brandText":
      "Analisamos a essência, o posicionamento e os diferenciais da marca para construir uma comunicação coerente e estratégica.",
    "positioning.hotspot.direction": "Direção",
    "positioning.hotspot.directionText":
      "Definimos caminhos claros de comunicação, conteúdo e campanhas com base em objetivos, contexto de mercado e comportamento do público.",
    "positioning.hotspot.growth": "Crescimento",
    "positioning.hotspot.growthText":
      "Transformamos estratégia em execução contínua, acompanhando resultados e criando ações que geram evolução real para a marca.",
    "positioning.label": "Posicionamento",
    "positioning.title": "Uma agência estratégica, humana e inteligente.",
    "positioning.text":
      "A marca acredita em marketing com direção, intenção e personalidade. O foco é desenvolver marcas fortes por meio de comunicação autêntica e estratégias que geram conexão, posicionamento e crescimento real.",
    "values.label": "Valores",
    "values.title": "Valores que direcionam cada projeto",
    "values.item1": "Estratégia antes da execução",
    "values.item2": "Comunicação personalizada",
    "values.item3": "Escuta e análise profunda",
    "values.item4": "Criatividade com direção",
    "values.item5": "Clareza estratégica",
    "values.item6": "Inteligência de marca",
    "values.item7": "Consistência",
    "values.item8": "Comunicação humana",
    "values.item9": "Crescimento sustentável",
    "values.item10": "Acompanhamento contínuo",
    "voice.label": "Tom de voz",
    "voice.title": "Autoridade sem arrogância. Estratégia com proximidade.",
    "voice.text":
      "A comunicação da The Power Agency deve transmitir inteligência estratégica, clareza, criatividade, segurança, sofisticação acessível e visão de crescimento.",
    "final.label": "Contato",
    "final.title": "Pronta para construir uma marca com estratégia?",
    "final.text":
      "Vamos transformar comunicação em direção, conteúdo em posicionamento e campanhas em crescimento real.",
    "final.primary": "Fale com a The Power Agency",
    "final.secondary": "Solicitar diagnóstico",
    "final.primaryAria": "Fale com a The Power Agency",
    "final.secondaryAria": "Solicitar diagnóstico estratégico",
    "footer.tagline": "Marketing estratégico para marcas que crescem com direção.",
    "footer.navigation": "Navegação",
    "footer.navigationAria": "Navegação do rodapé",
    "footer.contact": "Contato",
    "footer.email": "E-mail",
    "footer.emailAria": "Enviar e-mail para a The Power Agency",
    "footer.whatsappAria": "Entrar em contato com a The Power Agency pelo WhatsApp",
    "footer.socialAria": "Links sociais",
    "footer.instagramAria": "Abrir Instagram da The Power Agency em uma nova aba",
    "footer.linkedinAria": "Abrir LinkedIn da The Power Agency em uma nova aba",
    "footer.language": "Idioma",
    "footer.copyright": "© 2026 The Power Agency. Todos os direitos reservados.",
    "footer.developedBy": "Desenvolvido por",
    "language.group": "Seletor de idioma",
    "language.enAria": "Switch language to English",
    "language.ptAria": "Mudar idioma para Português",
  },
};
let previousFocus = null;
let ticking = false;
let currentLanguage = "en";

const getStoredLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return Object.prototype.hasOwnProperty.call(translations, storedLanguage) ? storedLanguage : "en";
  } catch {
    return "en";
  }
};

const storeLanguage = (language) => {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // localStorage can be unavailable in private contexts; the page still switches language for this session.
  }
};

const translate = (key) => translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;

const applyLanguage = (language, shouldPersist = false) => {
  currentLanguage = Object.prototype.hasOwnProperty.call(translations, language) ? language : "en";
  root.lang = currentLanguage;

  document.title = translate("meta.title");

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  description?.setAttribute("content", translate("meta.description"));
  ogTitle?.setAttribute("content", translate("meta.title"));
  ogDescription?.setAttribute("content", translate("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (menuToggle) {
    const menuIsOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-label", translate(menuIsOpen ? "menu.close" : "menu.open"));
  }

  if (shouldPersist) {
    storeLanguage(currentLanguage);
  }
};

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
  menuToggle.setAttribute("aria-label", translate("menu.open"));

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
  menuToggle.setAttribute("aria-label", translate("menu.close"));

  const firstLink = menu.querySelector("a");
  window.setTimeout(() => firstLink && firstLink.focus(), 180);
};

const closeHotspots = (exceptButton = null) => {
  hotspotButtons.forEach((button) => {
    if (button === exceptButton) return;
    button.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  });
};

applyLanguage(getStoredLanguage());

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch, true);
  });
});

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

hotspotButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const wasOpen = button.classList.contains("is-open");
    closeHotspots(button);
    button.classList.toggle("is-open", !wasOpen);
    button.setAttribute("aria-expanded", String(!wasOpen));
  });

  button.addEventListener("focus", () => closeHotspots(button));
});

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element) || !event.target.closest(".positioning__frame")) {
    closeHotspots();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeMenu();
  closeHotspots();
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
