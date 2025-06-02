// --- COMPANY CONFIG ---
const companyConfig = {
    name: "BAOBYTE",
    logoSrc: "LOGO_COLOR.png", // Asegúrate que esta ruta sea correcta relativa al index.html
    contactEmail: "tom.zg12@icloud.com"
};

// --- TRANSLATIONS OBJECT ---
const translations = {
    es: {
        // Nav
        navWhyBaobyte: "Propuesta de Valor", navServices: "Servicios", navMethodology: "Metodología", navUseCases: "Casos de Uso", navContact: "Contacto",
        // Hero
        heroTagline: "Soluciones en Machine Learning, I.A. e Ingeniería de Datos",
        heroMission: "Transformamos datos en decisiones estratégicas con IA y Machine Learning de vanguardia, impulsando el éxito empresarial.",
        heroCTA: "Descubre Nuestro Potencial",
        // Why BAOBYTE
        whyBaobyteTitle: "¿Por Qué Elegir BAOBYTE?",
        value1Title: "Experiencia Empresarial Real", value1Desc: "Conocimiento profundo de múltiples industrias y sus desafíos.",
        value2Title: "Soluciones a la Medida", value2Desc: "Enfoque personalizado, diseñando soluciones específicas para cada cliente.",
        value3Title: "Resultados Tangibles y Eficiencia", value3Desc: "Servicios de alta calidad implementados con agilidad y costos optimizados.",
        value4Title: "Expertise Certificado", value4Desc: "Equipo certificado en tecnologías cloud líderes y metodologías ágiles.",
        // Company Intro
        companyIntroTitle: "Sobre BAOBYTE",
        companyIntroText: `<span style="display:block;font-size:1.25em;font-weight:500;">Somos una empresa mexicana, formalmente establecida en el año 2020, con un equipo de profesionistas de alto desempeño. Operamos en todo el país y el extranjero, y somos agnósticos de las tecnologías: creemos en el valor de la información como un activo estratégico. A diferencia de las grandes consultorías, nuestra diferenciación es una propuesta de valor orientada a la mejor relación costo/beneficio para nuestros clientes.</span><br><span style="display:block;margin-top:0.7em;font-size:1.15em;font-weight:400;">Nuestra misión es transformar datos en decisiones estratégicas y valor para nuestros clientes.</span>`,
        // Approach
        approachTitle: "Nuestro Enfoque Estratégico",
        approach1Title: "Objetivo de Valor Claro", approach1Desc: "Iniciamos cada proyecto definiendo el valor tangible a generar.",
        approach2Title: "Productos Sostenibles", approach2Desc: "Desarrollamos soluciones robustas y escalables a largo plazo.",
        approach3Title: "Agilidad con MVPs", approach3Desc: "Entregamos Productos Mínimos Viables para valor rápido e iteración.",
        approach4Title: "Marcos Flexibles", approach4Desc: "Adaptamos metodologías ágiles para una ejecución eficiente.",
        // Services
        servicesTitle: "Nuestros Servicios",
        serviceDataStrategy: "Estrategia de Datos e IA", serviceDataStrategyDesc: "Definimos la hoja de ruta para convertir tus datos en activos estratégicos.",
        simDataStrategy: "Diagrama Estratégico Interactivo",
        serviceDataEng: "Ingeniería de Datos", serviceDataEngDesc: "Construimos infraestructuras de datos robustas y escalables en la nube.",
        pipelineIngest: "Ingesta", pipelineProcess: "Proceso", pipelineStore: "Almacenamiento", pipelineVisualize: "Visualización",
        serviceAdvAnalytics: "Analítica Avanzada (ML)", serviceAdvAnalyticsDesc: "Aplicamos Machine Learning y modelos predictivos para insights accionables.",
        simClustering: "Simulación de Clustering",
        serviceAISolutions: "Soluciones con IA Generativa", serviceAISolutionsDesc: "Implementamos LLMs y herramientas GenAI para innovar y automatizar.",
        simLLMQuery: "Usuario: Resumir ventas...", simLLMResponse: "IA: Analizando... Resumen:",
        serviceCustomDev: "Desarrollo Ad-hoc y Dashboards", serviceCustomDevDesc: "Desde tableros interactivos hasta aplicaciones analíticas completas.",
        webappMenuFinance: "Finanzas", webappMenuSales: "Comercial", webappMenuBilling: "Facturación", webappMenuHR: "RRHH", webappMenuOps: "Operaciones",
        webappContentTitleFinance: "Resumen Financiero", webappContentDescFinance: "Indicadores clave de rendimiento e informes financieros detallados.", webappContentChart: "Área de Gráfico",
        serviceTraining: "Capacitación y Cultura de Datos", serviceTrainingDesc: "Formamos equipos en ML, Power BI y tecnologías emergentes.",
        simTraining: " ",
        // Methodology
        methodologyTitle: "Nuestra Metodología Probada",
        methodStep1: "Definir Problema y Objetivos", methodStep2: "Colectar y Explorar Datos", methodStep3: "Limpieza y Preparación", methodStep4: "Modelado (ML/AI)", methodStep5: "Evaluación y Calibración", methodStep6: "Despliegue (MVP)", methodStep7: "Monitoreo y Ajuste", methodStep8: "Insights y Monetización",
        // Use Cases
        useCasesTitle: "Casos de Uso Estratégicos",
        useCasesIntro: "Transformamos desafíos complejos en resultados medibles para diversas industrias.",
        aiSimEffectText: "Procesando IA...",
        uc1Sector: "Logística y Distribución", uc1Title: "Optimización Inteligente de Rutas Logísticas", uc1ImpactSubtitle: "Menor consumo de combustible, optimización de flota y personal.", uc1Description: "<strong>Desafío:</strong> Ineficiencias en planificación de rutas, altos costos y desgaste vehicular. <strong>Solución BAOBYTE:</strong> Modelo de ML para optimizar asignación de vehículos/personal, cálculo de tiempos y minimización de distancias.",
        uc2Sector: "Retail y Comercial", uc2Title: "Agente IA para Promociones Personalizadas", uc2ImpactSubtitle: "Mejora en rotación de productos y gestión efectiva de inventarios.", uc2Description: "<strong>Desafío:</strong> Baja efectividad de promociones genéricas y gestión ineficiente de inventarios. <strong>Solución BAOBYTE:</strong> Agente de IA Avanzada para recomendar bundles promocionales personalizados en tiempo real.",
        uc3Sector: "Servicios de Seguridad", uc3Title: "Plataforma Web de Gestión Integral para Operaciones", uc3ImpactSubtitle: "Reducción de tiempos operativos y mejora en atención al cliente.", uc3Description: "<strong>Desafío:</strong> Procesos manuales, falta de centralización y necesidad de mejorar respuesta al cliente. <strong>Solución BAOBYTE:</strong> App web a medida para gestión operativa completa (asignación, seguimiento, facturación).",
        uc4Sector: "Finanzas y Cobranza", uc4Title: "Detección Proactiva de Anomalías Financieras", uc4ImpactSubtitle: "Recuperación proactiva de cartera y optimización del flujo de caja.", uc4Description: "<strong>Desafío:</strong> Dificultad para identificar patrones de pago inusuales y retrasos. <strong>Solución BAOBYTE:</strong> Modelos de ML para analizar transacciones, identificar anomalías y generar alertas tempranas.",
        uc5Sector: "Retail / Expansión Comercial", uc5Title: "Análisis Predictivo para Ubicación Óptima de Tiendas", uc5ImpactSubtitle: "Mayor rentabilidad de nuevas tiendas y reducción de riesgos.", uc5Description: "<strong>Desafío:</strong> Plan de expansión efectivo minimizando canibalización y maximizando cobertura. <strong>Solución BAOBYTE:</strong> Modelos de ML para predecir rendimiento de ubicaciones (demografía, tráfico, competencia).",
        uc6Sector: "Operaciones / Retail", uc6Title: "Mantenimiento Inteligente de Activos Críticos", uc6ImpactSubtitle: "Ahorros en energía y reducción de averías en equipos.", uc6Description: "<strong>Desafío:</strong> Altos costos de mantenimiento y pérdidas por fallos inesperados en equipos. <strong>Solución BAOBYTE:</strong> Modelos de IA (redes neuronales) para predecir averías y optimizar mantenimiento preventivo.",
        // Technologies
        techTitle: "Tecnologías que Dominamos",
        // Clients
        clientsTitle: "Clientes que Confían en Nosotros",
        // Security
        securityTitle: "Seguridad y Confidencialidad: Nuestro Compromiso",
        securityDesc1: "En BAOBYTE, la seguridad y confidencialidad de los datos de nuestros clientes son fundamentales. Implementamos rigurosas medidas de protección en todas las fases de nuestros proyectos.",
        securityDesc2: "Todos nuestros compromisos se formalizan mediante Acuerdos de No Divulgación (NDA), garantizando que tu información sensible y estrategias de negocio están completamente resguardadas.",
        // Contact
        contactTitlePrompt: "¿Listo para Desbloquear el Poder de tus Datos?",
        contactSubPrompt: "Hablemos de cómo BAOBYTE puede ayudarte a alcanzar tus objetivos de negocio con soluciones de IA personalizadas.",
        contactCTA: "Iniciar Conversación",
        // Footer
        footerRights: "Todos los derechos reservados."
    },
    en: { // English translations
        navWhyBaobyte: "Value Proposition", navServices: "Services", navMethodology: "Methodology", navUseCases: "Use Cases", navContact: "Contact",
        heroTagline: "Solutions in Machine Learning, AI, and Data Engineering",
        heroMission: "We transform data into strategic decisions with cutting-edge AI and Machine Learning, driving business success.",
        heroCTA: "Discover Our Potential",
        whyBaobyteTitle: "Why Choose BAOBYTE?",
        value1Title: "Real Business Experience", value1Desc: "Deep understanding of multiple industries and their challenges.",
        value2Title: "Customized Solutions", value2Desc: "Tailored approach, designing specific solutions for each client.",
        value3Title: "Tangible Results & Efficiency", value3Desc: "High-quality services implemented with agility and optimized costs.",
        value4Title: "Certified Expertise", value4Desc: "Team certified in leading cloud technologies and agile methodologies.",
        // Company Intro
        companyIntroTitle: "About BAOBYTE",
        companyIntroText: `<span style="display:block;font-size:1.25em;font-weight:500;">We are a Mexican company, formally established in 2020, with a high-performance professional team. We operate throughout Mexico and abroad, and are technology-agnostic: we believe in the value of information as a strategic asset. Unlike large consultancies, our differentiation is a value proposition focused on the best cost/benefit ratio for our clients.</span><br><span style="display:block;margin-top:0.7em;font-size:1.15em;font-weight:400;">Our mission is to transform data into strategic decisions and value for our clients.</span>`,
        approachTitle: "Our Strategic Approach",
        approach1Title: "Clear Value Objective", approach1Desc: "We start every project by defining the tangible value to be generated.",
        approach2Title: "Sustainable Products", approach2Desc: "We develop robust and scalable long-term solutions.",
        approach3Title: "Agility with MVPs", approach3Desc: "We deliver Minimum Viable Products for quick value and iteration.",
        approach4Title: "Flexible Frameworks", approach4Desc: "We adapt agile methodologies for efficient execution.",
        servicesTitle: "Our Services",
        serviceDataStrategy: "Data & AI Strategy", serviceDataStrategyDesc: "We define the roadmap to turn your data into strategic assets.",
        simDataStrategy: "Interactive Strategy Diagram",
        serviceDataEng: "Data Engineering", serviceDataEngDesc: "We build robust, secure, and scalable data infrastructures in the cloud.",
        pipelineIngest: "Ingest", pipelineProcess: "Process", pipelineStore: "Store", pipelineVisualize: "Visualize",
        serviceAdvAnalytics: "Advanced Analytics (ML)", serviceAdvAnalyticsDesc: "We apply Machine Learning and predictive models for actionable insights.",
        simClustering: "Clustering Simulation",
        serviceAISolutions: "Generative AI Solutions", serviceAISolutionsDesc: "We implement LLMs and GenAI tools to innovate and automate processes.",
        simLLMQuery: "User: Summarize sales...", simLLMResponse: "AI: Analyzing... Summary:",
        serviceCustomDev: "Custom Development & Dashboards", serviceCustomDevDesc: "From interactive dashboards to complete analytical applications.",
        webappMenuFinance: "Finance", webappMenuSales: "Sales", webappMenuBilling: "Billing", webappMenuHR: "HR", webappMenuOps: "Operations",
        webappContentTitleFinance: "Financial Dashboard", webappContentDescFinance: "Key performance indicators and detailed financial reports.", webappContentChart: "Chart Area",
        serviceTraining: "Training & Data Culture", serviceTrainingDesc: "We train teams in ML, Power BI, and emerging technologies.",
        simTraining: "Knowledge & Growth Icons",
        methodologyTitle: "Our Proven Methodology",
        methodStep1: "Define Problem & Objectives", methodStep2: "Collect & Explore Data", methodStep3: "Cleaning & Preparation", methodStep4: "Modeling (ML/AI)", methodStep5: "Evaluation & Calibration", methodStep6: "Deployment (MVP)", methodStep7: "Monitoring & Adjustment", methodStep8: "Insights & Monetization",
        useCasesTitle: "Strategic Use Cases",
        useCasesIntro: "We transform complex challenges into measurable results for diverse industries.",
        aiSimEffectText: "AI Processing...",
        uc1Sector: "Logistics & Distribution", uc1Title: "Intelligent Logistics Route Optimization", uc1ImpactSubtitle: "Reduced fuel consumption, fleet and personnel optimization.", uc1Description: "<strong>Challenge:</strong> Inefficiencies in route planning, high fuel costs, and vehicle wear. <strong>BAOBYTE Solution:</strong> ML model to optimize vehicle/personnel assignment, calculate optimal times, and minimize distances.",
        uc2Sector: "Retail & Commercial", uc2Title: "AI Agent for Personalized Promotions", uc2ImpactSubtitle: "Improved product turnover and effective inventory management.", uc2Description: "<strong>Challenge:</strong> Low effectiveness of generic promotions and inefficient management of promotional inventories. <strong>BAOBYTE Solution:</strong> Advanced AI agent to recommend personalized promotional bundles in real-time.",
        uc3Sector: "Security Services", uc3Title: "Comprehensive Web Platform for Operations Management", uc3ImpactSubtitle: "Reduced operational times and improved customer service.", uc3Description: "<strong>Challenge:</strong> Manual operational processes, lack of information centralization, and need for better customer response. <strong>BAOBYTE Solution:</strong> Custom web application for complete operational management (assignment, tracking, billing).",
        uc4Sector: "Finance & Collections", uc4Title: "Proactive Financial Anomaly Detection System", uc4ImpactSubtitle: "Proactive recovery of overdue portfolio and cash flow optimization.", uc4Description: "<strong>Challenge:</strong> Difficulty identifying unusual payment patterns and delays. <strong>BAOBYTE Solution:</strong> ML models to analyze transactions, identify anomalous behaviors, and generate early warnings.",
        uc5Sector: "Retail / Commercial Expansion", uc5Title: "Predictive Analysis for Optimal Store Location", uc5ImpactSubtitle: "Increased profitability of new stores and risk reduction.", uc5Description: "<strong>Challenge:</strong> Effective expansion plan minimizing cannibalization and maximizing market coverage. <strong>BAOBYTE Solution:</strong> ML models to predict location performance (demographics, traffic, competition).",
        uc6Sector: "Operations / Retail", uc6Title: "Intelligent Maintenance of Critical Assets", uc6ImpactSubtitle: "Energy savings and reduction in equipment breakdowns.", uc6Description: "<strong>Challenge:</strong> High costs of corrective maintenance and losses from unexpected equipment failures. <strong>BAOBYTE Solution:</strong> AI models (neural networks) to predict breakdowns and optimize preventive maintenance.",
        techTitle: "Technologies We Master",
        clientsTitle: "Clients Who Trust Us",
        securityTitle: "Security & Confidentiality: Our Commitment",
        securityDesc1: "At BAOBYTE, the security and confidentiality of our clients' data are fundamental. We implement rigorous protection measures in all phases of our projects.",
        securityDesc2: "All our engagements are formalized through Non-Disclosure Agreements (NDAs), ensuring your sensitive information and business strategies are completely safeguarded.",
        contactTitlePrompt: "Ready to Unlock the Power of Your Data?",
        contactSubPrompt: "Let's talk about how BAOBYTE can help you achieve your business goals with custom AI solutions.",
        contactCTA: "Start Conversation",
        footerRights: "All rights reserved."
    }
};

// --- DOMContentLoaded EVENT LISTENER ---
document.addEventListener('DOMContentLoaded', () => {
    const { name: companyName, logoSrc: companyLogoSrc, contactEmail: companyContactEmail } = companyConfig;

    // --- COMPANY CONFIG APPLICATION ---
    const navLogoImg = document.getElementById('navLogo');
    if (navLogoImg) {
        navLogoImg.src = companyLogoSrc;
        navLogoImg.alt = companyName + " Logo";
    }
    const navCompanyNameEl = document.getElementById('navCompanyName');
    if (navCompanyNameEl) navCompanyNameEl.textContent = companyName;

    const heroLogoImg = document.getElementById('heroLogo');
    if (heroLogoImg) heroLogoImg.src = companyLogoSrc;

    const heroCompanyNameEl = document.getElementById('heroCompanyName');
    if (heroCompanyNameEl) heroCompanyNameEl.textContent = companyName;
    
    const footerLogoImg = document.getElementById('footerLogo');
    if (footerLogoImg) footerLogoImg.src = companyLogoSrc;

    const footerCompanyNameEl = document.getElementById('footerCompanyName');
    if (footerCompanyNameEl) footerCompanyNameEl.textContent = companyName;


    // --- LANGUAGE SWITCHER ---
    let currentLang = localStorage.getItem('baobyteLang_v6') || 'es'; // Nueva clave para esta versión
    const langEsBtn = document.getElementById('langEsBtn');
    const langEnBtn = document.getElementById('langEnBtn');

    function applyTranslations(lang) {
        document.documentElement.lang = lang;
        currentLang = lang;
        localStorage.setItem('baobyteLang_v6', lang);
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key]; // Usar innerHTML para permitir <strong> etc.
            }
        });
         document.querySelectorAll('[data-text-key]').forEach(el => { // Para atributos de texto simple como en placeholders
            const key = el.getAttribute('data-text-key');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.textContent = translations[lang][key];
            }
        });
        if(langEsBtn) langEsBtn.classList.toggle('active', lang === 'es');
        if(langEnBtn) langEnBtn.classList.toggle('active', lang === 'en');
        createServiceSimulations(lang);
    }
    
    if(langEsBtn && langEnBtn){
        applyTranslations(currentLang);
        langEsBtn.addEventListener('click', () => applyTranslations('es'));
        langEnBtn.addEventListener('click', () => applyTranslations('en'));
    }

    // --- HEADER SCROLL EFFECT ---
    const header = document.getElementById('mainHeader');
    if(header){
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 30);
        });
    }

    // --- ANIMATED BACKGROUND (Energy Lines) ---
    const bgContainer = document.getElementById('animatedBackground');
    if (bgContainer) {
        const numLines = 35;
        for (let i = 0; i < numLines; i++) {
            const line = document.createElement('div');
            line.classList.add('energy-line');
            line.style.left = Math.random() * 100 + 'vw';
            line.style.top = Math.random() * 100 + 'vh';
            line.style.width = Math.random() * 120 + 40 + 'px';
            line.style.transform = `rotate(${Math.random() * 360}deg) scaleX(0)`;
            const randomDelay = Math.random() * 4;
            const randomDuration = Math.random() * 2.5 + 2.5;
            line.style.animation = `flowAndFade ${randomDuration}s ${randomDelay}s linear infinite`;
            bgContainer.appendChild(line);
        }
    }

    // --- FADE-IN ELEMENTS ON SCROLL ---
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    if (typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeInElements.forEach(el => observer.observe(el));
    } else {
        fadeInElements.forEach(el => el.classList.add('is-visible'));
    }

    // --- CONTACT BUTTON ---
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            const subject = encodeURIComponent(currentLang === 'es' ? 'Solicitud de Información - BAOBYTE' : 'Information Request - BAOBYTE');
            window.location.href = `mailto:${companyContactEmail}?subject=${subject}`;
        });
    }

    // --- CURRENT YEAR IN FOOTER ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- MOBILE MENU TOGGLE ---
    const mobileMenuButton = document.getElementById('mobileMenuToggle');
    const navLinksUl = document.getElementById('mainNavLinks');
    if (mobileMenuButton && navLinksUl) {
        mobileMenuButton.addEventListener('click', () => {
            navLinksUl.classList.toggle('active-mobile');
            const isExpanded = navLinksUl.classList.contains('active-mobile');
            mobileMenuButton.setAttribute('aria-expanded', isExpanded);
            mobileMenuButton.textContent = isExpanded ? '✕' : '☰';
        });
        navLinksUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksUl.classList.contains('active-mobile')) {
                    navLinksUl.classList.remove('active-mobile');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                    mobileMenuButton.textContent = '☰';
                }
                // Smooth scroll logic
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    const headerOffset = document.getElementById('mainHeader').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth'});
                }
            });
        });
    }
    
    // --- SERVICE SIMULATIONS ---
    function createServiceSimulations(lang) {
        // Data Strategy Simulation
        const dataStrategySimContainer = document.getElementById('dataStrategySim');
        if (dataStrategySimContainer) {
            dataStrategySimContainer.innerHTML = '';
            // SVG simple tipo diagrama de flujo
            const svgNS = 'http://www.w3.org/2000/svg';
            const width = 220, height = 90;
            const svg = document.createElementNS(svgNS, 'svg');
            svg.setAttribute('width', width);
            svg.setAttribute('height', height);
            svg.style.display = 'block';
            svg.style.margin = '0 auto';
            // Cajas principales
            const steps = [
                { label: lang === 'es' ? 'Datos' : 'Data', x: 20,  y: 35, color: '#4F8EF7' },
                { label: lang === 'es' ? 'Procesamiento' : 'Processing', x: 90,  y: 35, color: '#F7B32B' },
                { label: lang === 'es' ? 'IA/ML' : 'AI/ML', x: 160, y: 35, color: '#6FCF97' }
            ];
            // Flechas
            svg.innerHTML += `
                <defs>
                  <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L8,3 z" fill="#fff" />
                  </marker>
                </defs>
                <line x1="55" y1="45" x2="85" y2="45" stroke="#fff" stroke-width="2" marker-end="url(#arrow)"/>
                <line x1="125" y1="45" x2="155" y2="45" stroke="#fff" stroke-width="2" marker-end="url(#arrow)"/>
            `;
            // Cajas y textos
            steps.forEach(step => {
                const rect = document.createElementNS(svgNS, 'rect');
                rect.setAttribute('x', step.x);
                rect.setAttribute('y', step.y);
                rect.setAttribute('width', 50);
                rect.setAttribute('height', 22);
                rect.setAttribute('rx', 7);
                rect.setAttribute('fill', step.color);
                rect.setAttribute('opacity', 0.92);
                svg.appendChild(rect);
                const text = document.createElementNS(svgNS, 'text');
                text.setAttribute('x', step.x + 25);
                text.setAttribute('y', step.y + 15);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('font-size', '12');
                text.setAttribute('fill', '#fff');
                text.textContent = step.label;
                svg.appendChild(text);
            });
            // Etiqueta
            const label = document.createElementNS(svgNS, 'text');
            label.setAttribute('x', width / 2);
            label.setAttribute('y', height - 8);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('font-size', '13');
            label.setAttribute('fill', '#fff');
            label.textContent = lang === 'es' ? 'Flujo de Estrategia de Datos e IA' : 'Data & AI Strategy Flow';
            svg.appendChild(label);
            dataStrategySimContainer.appendChild(svg);
        }

        // Data Engineering Pipeline Simulation
        const dataEngSimContainer = document.getElementById('dataEngSim');
        if (dataEngSimContainer) {
            dataEngSimContainer.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; font-size:0.75em; color: var(--text-color-darker); width:100%; padding:5px;">
                    <div class="pipeline-box">${translations[lang]?.pipelineIngest || 'Ingest'} 📥</div>
                    <div class="pipeline-arrow">▼</div>
                    <div class="pipeline-box">${translations[lang]?.pipelineProcess || 'Process'} ⚙️</div>
                    <div class="pipeline-arrow">▼</div>
                    <div class="pipeline-box">${translations[lang]?.pipelineStore || 'Store'} 💾</div>
                    <div class="pipeline-arrow">▼</div>
                    <div class="pipeline-box">${translations[lang]?.pipelineVisualize || 'Visualize'} 📊</div>
                </div>`;
        }
        
        // Clustering Simulation
        const clusteringServiceSimContainer = document.getElementById('clusteringServiceSim');
        if(clusteringServiceSimContainer){
            clusteringServiceSimContainer.innerHTML = ''; // Limpiar para regenerar puntos
            const numPoints = 8; // Más puntos para mejor visualización
            const pointColors = ['var(--primary-color)', 'var(--secondary-color)', '#28a745', '#ffc107']; // Verde, Amarillo
            for(let i=0; i<numPoints; i++){
               const point = document.createElement('div');
               // Aplicar estilo aleatorio para simular diferentes clusters
               point.style.width = '10px';
               point.style.height = '10px';
               point.style.borderRadius = '50%';
               point.style.position = 'absolute'; // Para que JS los posicione si quisiera
               point.style.background = pointColors[i % pointColors.length];
               point.style.animation = `simPulse ${1 + Math.random()}s infinite alternate`;
               point.style.animationDelay = Math.random() * 0.5 + 's';
               // Posicionamiento simple con CSS (dentro de .cluster-sim):
               // Si quieres JS para posicionar, necesitarías más lógica aquí.
               // Por ahora, el CSS de .cluster-sim (flex) los distribuirá.
               clusteringServiceSimContainer.appendChild(point);
            }
        }


        // LLM Simulation
        const llmServiceSimContainer = document.getElementById('llmServiceSim');
        if (llmServiceSimContainer) {
             llmServiceSimContainer.innerHTML = `
                <div class="llm-sim">
                    <span class="user-query">${translations[lang]?.simLLMQuery || 'User: Summarize sales...'}</span>
                    <span class="llm-response">${translations[lang]?.simLLMResponse || 'AI: Analyzing... Summary:'}<span class="cursor"></span></span>
                </div>`;
        }

        // Web App / Dashboard Simulation
        const webAppServiceSimContainer = document.getElementById('webAppServiceSim');
        if (webAppServiceSimContainer) {
             webAppServiceSimContainer.innerHTML = `
                <div class="webapp-sim-placeholder">
                    <div class="webapp-sim-placeholder-sidebar">
                        <div class="active">${translations[lang]?.webappMenuFinance || 'Finance'}</div>
                        <div>${translations[lang]?.webappMenuSales || 'Sales'}</div>
                        <div>${translations[lang]?.webappMenuBilling || 'Billing'}</div>
                    </div>
                    <div class="webapp-sim-placeholder-main">
                        <strong>${translations[lang]?.webappContentTitleFinance || 'Financial Dashboard'}</strong>
                        <div class="chart-bar1"></div>
                        <div class="chart-bar2"></div>
                    </div>
                </div>`;
        }
        
        // Training Simulation
        const trainingSimContainer = document.getElementById('trainingSim');
        if(trainingSimContainer) {
            trainingSimContainer.innerHTML = `<div style="font-size:0.8em; color: var(--text-color-darker); padding:10px; text-align:center;">${translations[lang]?.simTraining || 'Knowledge & Growth Icons'} <br/><span style="font-size:2.5em; color:var(--primary-color); line-height:1.5;">💡🌱🧠</span></div>`;
        }
    }
    
    createServiceSimulations(currentLang); // Llamada inicial
    // setupSmoothScrolling ya no es necesaria aquí, se maneja en el listener del menú móvil.

});

// Simulación sencilla de clustering para Analítica Avanzada (ML)
document.addEventListener('DOMContentLoaded', function() {
    const clusterSim = document.getElementById('clusteringServiceSim');
    if (clusterSim) {
        // Limpia el contenido por si acaso
        clusterSim.innerHTML = '';
        // Crea SVG
        const svgNS = 'http://www.w3.org/2000/svg';
        const width = 220, height = 120;
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.style.display = 'block';
        svg.style.margin = '0 auto';
        // Define clusters (3 grupos de puntos)
        const clusters = [
            { color: '#4F8EF7', cx: 60,  cy: 50 },
            { color: '#F7B32B', cx: 160, cy: 40 },
            { color: '#6FCF97', cx: 110, cy: 90 }
        ];
        // Genera puntos para cada cluster
        clusters.forEach((cluster, i) => {
            for (let j = 0; j < 7; j++) {
                const angle = (Math.PI * 2 / 7) * j;
                const r = 18 + Math.random() * 8;
                const x = cluster.cx + Math.cos(angle) * r + (Math.random() - 0.5) * 6;
                const y = cluster.cy + Math.sin(angle) * r + (Math.random() - 0.5) * 6;
                const circle = document.createElementNS(svgNS, 'circle');
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', y);
                circle.setAttribute('r', 8);
                circle.setAttribute('fill', cluster.color);
                circle.setAttribute('opacity', 0.85);
                svg.appendChild(circle);
            }
        });
        // Opcional: Etiqueta
        const text = document.createElementNS(svgNS, 'text');
        text.setAttribute('x', width / 2);
        text.setAttribute('y', height - 8);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '13');
        text.setAttribute('fill', '#333');
        text.textContent = ' ';
        svg.appendChild(text);
        clusterSim.appendChild(svg);
    }
});