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
    "nav.about": "Founders",
    "nav.services": "Expertise",
    "nav.method": "TPA Method",
    "nav.boutique": "Why boutique?",
    "nav.contact": "Contact",
    "cta.header": "Talk to the agency",
    "cta.mobile": "Start a strategy",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "menu.dialog": "Main menu",
    "hero.visualLabel": "Visual composition of the Think, Plan and Action methodology",
    "hero.eyebrow": "International Strategic Marketing Agency",
    "hero.headline": "Boutique marketing for brands ready to grow with direction.",
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
    "services.label": "Expertise",
    "services.title": "Strategic expertise for every stage of brand communication.",
    "services.strategy.title": "Brand Strategy & Positioning",
    "services.strategy.text": "Positioning, audience intelligence, brand personality, communication strategy.",
    "services.content.title": "Content & Creative Direction",
    "services.content.text": "Content systems, storytelling, campaigns, visual and creative direction.",
    "services.performance.title": "Growth & Performance",
    "services.performance.text": "Paid media, performance insights, funnel thinking and campaign optimization.",
    "services.direction.title": "Strategic Partnership",
    "services.direction.text": "Ongoing direction, monthly strategic meetings, seasonal opportunities and continuous refinement.",
    "partnership.label": "Partnership model",
    "partnership.title": "Direction that stays with you.",
    "partnership.detailsLabel": "How the partnership works",
    "partnership.text": "We work alongside the business through ongoing strategic direction.",
    "partnership.item1": "Monthly strategic meetings",
    "partnership.item2": "Seasonal opportunities",
    "partnership.item3": "Continuous refinement",
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
      "We translate insights into a clear communication system by defining what the brand should say, how it should show up, which narratives it should own and how campaigns connect to business goals.",
    "method.plan.item1": "Content strategies",
    "method.plan.item2": "Campaigns",
    "method.plan.item3": "Timelines",
    "method.plan.item4": "Creative directions",
    "method.plan.item5": "Communication formats",
    "method.plan.item6": "Growth strategies",
    "method.plan.item7": "Execution planning",
    "method.action.index": "ACTION",
    "method.action.title": "Strategy that stays involved.",
    "method.action.text":
      "Strategy only matters when it survives the real world. That’s why we remain involved in content, campaigns, performance and ongoing decisions. We learn from the market and refine the direction continuously.",
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
    "fit.label": "Not for everyone",
    "fit.title": "The right fit matters.",
    "fit.intro1": "We do our best work with brands that see marketing as part of the business and not just as a content calendar.",
    "fit.intro2": "The Power Agency is built for companies that value strategy, positioning and creative direction as much as visibility.",
    "fit.listTitle": "We work best with brands that:",
    "fit.item1": "want strategic involvement, not just execution;",
    "fit.item2": "are open to direction, refinement and new perspectives;",
    "fit.item3": "value consistency over isolated actions;",
    "fit.item4": "understand that strong communication starts with clear positioning;",
    "fit.item5": "want a close, ongoing relationship with the people thinking about their brand.",
    "fit.closing": "If you’re looking for a partner who can think with you, challenge ideas when needed and turn strategy into consistent action, we may be the right fit.",
    "agency.label": "About the agency",
    "agency.title": "A boutique agency built on strategy, creativity and close collaboration.",
    "agency.text1": "The Power Agency combines strategic thinking, creative direction and execution to build brands with clarity, relevance and intention.",
    "agency.text2": "We work closely with a select number of clients, creating tailored strategies rather than replicating formulas.",
    "agency.text3": "Every project is shaped around the business, the audience and the moment of the brand.",
    "boutique.label": "The boutique difference",
    "boutique.title": "Boutique by choice.",
    "boutique.selective.title": "Limited client portfolio",
    "boutique.selective.text": "We intentionally work with a limited number of brands so each partnership receives real attention, context and strategy depth.",
    "boutique.senior.title": "Founder-led strategy",
    "boutique.senior.text": "Strategy stays close to the people leading the agency. The thinking is not passed through layers before reaching execution.",
    "boutique.tailored.title": "Tailored communication systems",
    "boutique.tailored.text": "Every strategy is built around the brand, its audience, its market and its current moment. No generic frameworks applied the same way to everyone.",
    "boutique.closer.title": "Continuous strategic involvement",
    "boutique.closer.text": "We stay involved beyond the planning stage, following the execution, reading the response and refining the direction over time.",
    "final.label": "Contact",
    "final.title": "Ready to build a brand with strategy?",
    "final.text":
      "Let's turn communication into direction, content into positioning and campaigns into real growth.",
    "final.primary": "Talk to The Power Agency",
    "final.secondary": "Request a diagnosis",
    "final.primaryAria": "Talk to The Power Agency",
    "final.secondaryAria": "Request a strategic diagnosis",
    "application.heading": "Tell us about your brand",
    "application.name": "Name",
    "application.namePlaceholder": "Your name",
    "application.whatsapp": "WhatsApp",
    "application.whatsappPlaceholder": "+55 (00) 00000-0000",
    "application.company": "Company name",
    "application.companyPlaceholder": "Your company name",
    "application.industry": "Industry",
    "application.industryPlaceholder": "E.g. healthcare, retail, industry...",
    "application.instagram": "Instagram link",
    "application.instagramPlaceholder": "https://instagram.com/yourcompany",
    "application.website": "Website link",
    "application.websitePlaceholder": "https://yourcompany.com",
    "application.revenue": "Average monthly revenue",
    "application.revenue1": "R$ 70,000 to R$ 100,000",
    "application.revenue2": "R$ 100,000 to R$ 200,000",
    "application.revenue3": "R$ 200,000 to R$ 300,000",
    "application.revenue4": "Above R$ 300,000",
    "application.paid": "Do you invest in paid media?",
    "application.paidGoogle": "Yes, Google only",
    "application.paidMeta": "Yes, Meta only",
    "application.paidBoth": "Yes, Google and Meta",
    "application.paidNone": "I don't invest",
    "application.submit": "Send application",
    "application.note": "Your answers will open as a WhatsApp message for you to review and send.",
    "application.messageTitle": "New application — The Power Agency",
    "application.invalidPhone": "Enter a WhatsApp number with 10 to 15 digits.",
    "footer.tagline": "Strategic marketing for brands that grow with direction.",
    "footer.navigation": "Navigation",
    "footer.navigationAria": "Footer navigation",
    "footer.contact": "Contact",
    "footer.email": "Email",
    "footer.emailAria": "Send an email to The Power Agency",
    "footer.whatsappAria": "Contact The Power Agency on WhatsApp",
    "footer.socialAria": "Social links",
    "footer.instagramAria": "Open The Power Agency Instagram in a new tab",
    "footer.language": "Language",
    "footer.copyright": "© 2026 The Power Agency. All rights reserved.",
    "footer.developedBy": "Developed by",
    "language.group": "Language selector",
    "language.enAria": "Switch language to English",
    "language.ptAria": "Mudar idioma para Português",
    "founders.label": "Meet the founders",
    "founders.title": "Two minds. One direction.",
    "founders.lead": "The Power Agency is led by Rafaela and Ana, two different perspectives brought together by more than a decade of friendship, trust and shared ambition.",
    "founders.contrast": "Rafaela brings the strategic mind and Ana brings the creative lens.",
    "founders.story1": "That combination shapes the way we work at The Power Agency, because strategy and creativity are never treated as separate disciplines. Every idea needs direction. Every strategy needs a way to come alive.",
    "founders.story2": "And because we have worked, thought and built alongside each other for years, our clients don’t get disconnected departments or layers of communication.",
    "founders.closing": "They get two complementary minds thinking closely about the same brand. Different strengths, the same standard.",
    "founders.profileLabel": "The founders",
    "about.rafaela.title": "Rafaela",
    "about.rafaela.alt": "Portrait of Rafaela, co-founder of The Power Agency",
    "about.rafaela.role": "Strategy & Brand Direction",
    "about.rafaela.text1": "I’m Rafaela, but you can call me Rafa. I’m one of the creative minds behind The Power Agency. I lead the strategic side by connecting business vision, positioning and communication to build clearer, stronger brands.",
    "about.rafaela.text2": "For over five years, I’ve been helping brands and professionals communicate who they truly are through intentional positioning, meaningful storytelling, and content that creates real connection.",
    "about.rafaela.text3": "Outside of work, I’m passionate about the little things that make life lighter and more personal, like spending time with my five Spitz dogs or playing beach tennis, which has become my favorite sport lately.",
    "about.ana.title": "Ana",
    "about.ana.alt": "Portrait of Ana, co-founder of The Power Agency",
    "about.ana.role": "Creative & Content Direction",
    "about.ana.text1": "Hi, I’m Ana! I lead the creative and content side of The Power Agency, combining cultural research, social media behavior and creative thinking to turn strategy into relevant communication.",
    "about.ana.text2": "I’m a Brazilian content creator and social media currently living in Paris, passionate about building brands that people genuinely connect with.",
    "about.ana.text3": "Between campaigns, creative direction, and strategy meetings, you’ll probably find me running through the streets of Paris, planning my next trip, or looking for inspiration in fashion, storytelling, and everyday life.",
    "about.ana.text4": "My journey in digital began long before the agency, as a content creator. I learned how to transform ideas into communities and brands into experiences. Today, I bring that same vision into every project we create at The Power Agency combining strategy, creativity and authenticity to help brands grow with purpose and personality.",
  },
  "pt-BR": {
    "meta.title": "The Power Agency — Marketing estratégico para marcas em crescimento",
    "meta.description":
      "Agência internacional de marketing estratégico especializada em conteúdo, planejamento, campanhas, redes sociais, tráfego pago e análise de performance.",
    "skip.content": "Ir para o conteúdo",
    "nav.main": "Navegação principal",
    "nav.mobile": "Navegação mobile",
    "nav.about": "Fundadoras",
    "nav.services": "Expertise",
    "nav.method": "Método TPA",
    "nav.boutique": "Por que boutique?",
    "nav.contact": "Contato",
    "cta.header": "Fale com a agência",
    "cta.mobile": "Começar uma estratégia",
    "menu.open": "Abrir menu",
    "menu.close": "Fechar menu",
    "menu.dialog": "Menu principal",
    "hero.visualLabel": "Composição visual da metodologia Think, Plan and Action",
    "hero.eyebrow": "Agência internacional de marketing estratégico",
    "hero.headline": "Marketing boutique para marcas que querem crescer com direção.",
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
    "services.label": "Expertise",
    "services.title": "Expertise estratégica para cada etapa da comunicação da marca.",
    "services.strategy.title": "Estratégia e posicionamento de marca",
    "services.strategy.text": "Posicionamento, inteligência de público, personalidade da marca e estratégia de comunicação.",
    "services.content.title": "Conteúdo e direção criativa",
    "services.content.text": "Sistemas de conteúdo, storytelling, campanhas e direção visual e criativa.",
    "services.performance.title": "Crescimento e performance",
    "services.performance.text": "Mídia paga, análise de performance, visão de funil e otimização de campanhas.",
    "services.direction.title": "Parceria estratégica",
    "services.direction.text": "Direção contínua, reuniões estratégicas mensais, oportunidades sazonais e aprimoramento constante.",
    "partnership.label": "Modelo de parceria",
    "partnership.title": "Direção que acompanha você.",
    "partnership.detailsLabel": "Como funciona a parceria",
    "partnership.text": "Trabalhamos ao lado do negócio com direcionamento estratégico contínuo.",
    "partnership.item1": "Reuniões estratégicas mensais",
    "partnership.item2": "Oportunidades sazonais",
    "partnership.item3": "Aprimoramento contínuo",
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
      "Traduzimos os aprendizados em um sistema de comunicação claro, definindo o que a marca deve dizer, como deve se apresentar, quais narrativas deve assumir e como as campanhas se conectam aos objetivos do negócio.",
    "method.plan.item1": "Estratégias de conteúdo",
    "method.plan.item2": "Campanhas",
    "method.plan.item3": "Cronogramas",
    "method.plan.item4": "Direcionamentos criativos",
    "method.plan.item5": "Formatos de comunicação",
    "method.plan.item6": "Estratégias de crescimento",
    "method.plan.item7": "Planejamento de execução",
    "method.action.index": "ACTION",
    "method.action.title": "Estratégia com presença contínua.",
    "method.action.text":
      "A estratégia só importa quando funciona no mundo real. Por isso, seguimos envolvidos no conteúdo, nas campanhas, na performance e nas decisões do dia a dia. Aprendemos com o mercado e refinamos a direção continuamente.",
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
    "fit.label": "Não é para todos",
    "fit.title": "A conexão certa importa.",
    "fit.intro1": "Fazemos nosso melhor trabalho com marcas que veem o marketing como parte do negócio, e não apenas como um calendário de conteúdo.",
    "fit.intro2": "A The Power Agency foi criada para empresas que valorizam estratégia, posicionamento e direção criativa tanto quanto visibilidade.",
    "fit.listTitle": "Trabalhamos melhor com marcas que:",
    "fit.item1": "querem envolvimento estratégico, não apenas execução;",
    "fit.item2": "estão abertas a direcionamento, refinamento e novas perspectivas;",
    "fit.item3": "valorizam consistência mais do que ações isoladas;",
    "fit.item4": "entendem que uma comunicação forte começa com um posicionamento claro;",
    "fit.item5": "querem uma relação próxima e contínua com quem pensa na sua marca.",
    "fit.closing": "Se você procura uma parceria que pense junto, questione ideias quando necessário e transforme estratégia em ação consistente, talvez sejamos a escolha certa.",
    "agency.label": "Sobre a agência",
    "agency.title": "Uma agência boutique construída com estratégia, criatividade e colaboração próxima.",
    "agency.text1": "A The Power Agency une pensamento estratégico, direção criativa e execução para construir marcas com clareza, relevância e intenção.",
    "agency.text2": "Trabalhamos de perto com um número seleto de clientes, criando estratégias sob medida em vez de repetir fórmulas.",
    "agency.text3": "Cada projeto é moldado pelo negócio, pelo público e pelo momento da marca.",
    "boutique.label": "O diferencial boutique",
    "boutique.title": "Boutique por escolha.",
    "boutique.selective.title": "Portfólio limitado de clientes",
    "boutique.selective.text": "Trabalhamos intencionalmente com um número limitado de marcas para que cada parceria receba atenção real, contexto e profundidade estratégica.",
    "boutique.senior.title": "Estratégia liderada pelas fundadoras",
    "boutique.senior.text": "A estratégia permanece próxima de quem lidera a agência. As ideias não passam por camadas de comunicação antes de chegar à execução.",
    "boutique.tailored.title": "Sistemas de comunicação sob medida",
    "boutique.tailored.text": "Cada estratégia é construída em torno da marca, do público, do mercado e do momento atual. Sem aplicar as mesmas fórmulas genéricas a todos.",
    "boutique.closer.title": "Envolvimento estratégico contínuo",
    "boutique.closer.text": "Seguimos envolvidas além do planejamento, acompanhando a execução, observando a resposta do mercado e refinando a direção ao longo do tempo.",
    "final.label": "Contato",
    "final.title": "Pronta para construir uma marca com estratégia?",
    "final.text":
      "Vamos transformar comunicação em direção, conteúdo em posicionamento e campanhas em crescimento real.",
    "final.primary": "Fale com a The Power Agency",
    "final.secondary": "Solicitar diagnóstico",
    "final.primaryAria": "Fale com a The Power Agency",
    "final.secondaryAria": "Solicitar diagnóstico estratégico",
    "application.heading": "Conte sobre a sua marca",
    "application.name": "Nome",
    "application.namePlaceholder": "Digite seu nome",
    "application.whatsapp": "WhatsApp",
    "application.whatsappPlaceholder": "(00) 00000-0000",
    "application.company": "Nome da empresa",
    "application.companyPlaceholder": "Digite o nome da empresa",
    "application.industry": "Ramo de atuação",
    "application.industryPlaceholder": "Ex.: Indústria, saúde, varejo...",
    "application.instagram": "Link do Instagram",
    "application.instagramPlaceholder": "https://instagram.com/suaempresa",
    "application.website": "Link do site",
    "application.websitePlaceholder": "https://suaempresa.com.br",
    "application.revenue": "Média de faturamento mensal",
    "application.revenue1": "R$ 70.000 a R$ 100.000",
    "application.revenue2": "R$ 100.000 a R$ 200.000",
    "application.revenue3": "R$ 200.000 a R$ 300.000",
    "application.revenue4": "Acima de R$ 300.000",
    "application.paid": "Investe em tráfego pago?",
    "application.paidGoogle": "Sim, apenas Google",
    "application.paidMeta": "Sim, apenas Meta",
    "application.paidBoth": "Sim, Google e Meta",
    "application.paidNone": "Não invisto",
    "application.submit": "Enviar aplicação",
    "application.note": "Suas respostas serão abertas em uma mensagem no WhatsApp para você revisar e enviar.",
    "application.messageTitle": "Nova aplicação — The Power Agency",
    "application.invalidPhone": "Digite um número de WhatsApp com 10 a 15 dígitos.",
    "footer.tagline": "Marketing estratégico para marcas que crescem com direção.",
    "footer.navigation": "Navegação",
    "footer.navigationAria": "Navegação do rodapé",
    "footer.contact": "Contato",
    "footer.email": "E-mail",
    "footer.emailAria": "Enviar e-mail para a The Power Agency",
    "footer.whatsappAria": "Entrar em contato com a The Power Agency pelo WhatsApp",
    "footer.socialAria": "Links sociais",
    "footer.instagramAria": "Abrir Instagram da The Power Agency em uma nova aba",
    "footer.language": "Idioma",
    "footer.copyright": "© 2026 The Power Agency. Todos os direitos reservados.",
    "footer.developedBy": "Desenvolvido por",
    "language.group": "Seletor de idioma",
    "language.enAria": "Switch language to English",
    "language.ptAria": "Mudar idioma para Português",
    "founders.label": "Conheça as fundadoras",
    "founders.title": "Duas mentes. Uma direção.",
    "founders.lead": "A The Power Agency é liderada por Rafaela e Ana, duas perspectivas diferentes unidas por mais de uma década de amizade, confiança e ambição compartilhada.",
    "founders.contrast": "Rafaela traz a visão estratégica e Ana, o olhar criativo.",
    "founders.story1": "Essa combinação molda nossa forma de trabalhar na The Power Agency, porque estratégia e criatividade nunca são tratadas como disciplinas separadas. Toda ideia precisa de direção. Toda estratégia precisa ganhar vida.",
    "founders.story2": "E, como trabalhamos, pensamos e construímos juntas há anos, nossos clientes não encontram departamentos desconectados nem camadas de comunicação.",
    "founders.closing": "Encontram duas mentes complementares pensando de perto sobre a mesma marca. Forças diferentes, o mesmo padrão.",
    "founders.profileLabel": "As fundadoras",
    "about.rafaela.title": "Rafaela",
    "about.rafaela.alt": "Retrato de Rafaela, cofundadora da The Power Agency",
    "about.rafaela.role": "Estratégia e direção de marca",
    "about.rafaela.text1": "Sou Rafaela, mas você pode me chamar de Rafa. Sou uma das mentes criativas por trás da The Power Agency. Lidero o lado estratégico ao conectar visão de negócio, posicionamento e comunicação para construir marcas mais claras e fortes.",
    "about.rafaela.text2": "Há mais de cinco anos, ajudo marcas e profissionais a comunicarem quem realmente são por meio de posicionamento intencional, storytelling significativo e conteúdos que geram conexão real.",
    "about.rafaela.text3": "Fora do trabalho, sou apaixonada pelas pequenas coisas que deixam a vida mais leve e pessoal, como passar tempo com meus cinco cães da raça Spitz ou jogar beach tennis, que se tornou meu esporte favorito ultimamente.",
    "about.ana.title": "Ana",
    "about.ana.alt": "Retrato de Ana, cofundadora da The Power Agency",
    "about.ana.role": "Direção criativa e de conteúdo",
    "about.ana.text1": "Oi, eu sou a Ana! Lidero o lado criativo e de conteúdo da The Power Agency, combinando pesquisa cultural, comportamento nas redes sociais e pensamento criativo para transformar estratégia em comunicação relevante.",
    "about.ana.text2": "Sou criadora de conteúdo e profissional de mídias sociais brasileira, atualmente vivendo em Paris, apaixonada por construir marcas com as quais as pessoas realmente se conectam.",
    "about.ana.text3": "Entre campanhas, direção criativa e reuniões de estratégia, você provavelmente vai me encontrar correndo pelas ruas de Paris, planejando minha próxima viagem ou buscando inspiração na moda, no storytelling e na vida cotidiana.",
    "about.ana.text4": "Minha jornada no digital começou muito antes da agência, como criadora de conteúdo. Aprendi a transformar ideias em comunidades e marcas em experiências. Hoje, levo essa mesma visão para cada projeto que criamos na The Power Agency, unindo estratégia, criatividade e autenticidade para ajudar marcas a crescer com propósito e personalidade.",
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

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", translate(element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
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

const formatApplicationMessage = (answers, revenue) => {
  const lines = [translate("application.messageTitle"), ""];
  const addAnswer = (labelKey, value) => {
    if (value) lines.push(`${translate(labelKey)}: ${value}`);
  };

  addAnswer("application.name", answers.get("name")?.trim());
  addAnswer("application.whatsapp", answers.get("whatsapp")?.trim());
  addAnswer("application.company", answers.get("company")?.trim());
  addAnswer("application.industry", answers.get("industry")?.trim());
  addAnswer("application.instagram", answers.get("instagram")?.trim());
  addAnswer("application.website", answers.get("website")?.trim());
  addAnswer("application.revenue", revenue);

  const paidMediaKey = {
    google: "application.paidGoogle",
    meta: "application.paidMeta",
    both: "application.paidBoth",
    none: "application.paidNone",
  }[answers.get("paidMedia")];
  addAnswer("application.paid", paidMediaKey ? translate(paidMediaKey) : "");

  return lines.join("\n");
};

applyLanguage(getStoredLanguage());

const applicationForm = document.querySelector("[data-application-form]");
const applicationPhone = applicationForm?.elements.whatsapp;

applicationPhone?.addEventListener("input", () => applicationPhone.setCustomValidity(""));
applicationForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const phoneDigits = applicationPhone.value.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    applicationPhone.setCustomValidity(translate("application.invalidPhone"));
    applicationPhone.reportValidity();
    return;
  }

  const answers = new FormData(applicationForm);
  const revenue = applicationForm.elements.revenue.selectedOptions[0].textContent.trim();
  const message = formatApplicationMessage(answers, revenue);
  window.location.assign(`https://wa.me/33749716210?text=${encodeURIComponent(message)}`);
});

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
