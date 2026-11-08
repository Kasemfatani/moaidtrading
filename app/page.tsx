"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "ar" | "en";

const copy = {
  ar: {
    nav: ["الرئيسية", "من نحن", "خدماتنا", "منهجيتنا", "تواصل معنا"],
    eyebrow: "شريكك في النمو والتأثير",
    heroTitleA: "نحو حضور أقوى",
    heroTitleB: "ونموّ يصنع الفرق.",
    heroBody: "نساعد الشركات والعلامات التجارية على فهم السوق، بناء رسالتها، وتنفيذ تسويق مدروس يربط الأفكار بالنتائج.",
    explore: "اكتشف خدماتنا",
    contact: "ابدأ الحديث معنا",
    heroCardLabel: "رحلة نمو متكاملة",
    heroCardTitle: "من الفكرة إلى الأثر",
    heroSteps: ["نفهم السوق", "نصوغ الاتجاه", "نقيس الأداء"],
    aboutTag: "من نحن",
    aboutTitle: "تسويق يرى الصورة كاملة.",
    aboutBody: "في Moaid Trading، نطمح لأن نكون شريكاً استراتيجياً للشركات والعلامات التجارية التي تسعى إلى تعزيز حضورها وزيادة مبيعاتها وإدارة حملاتها بكفاءة، دون الحاجة إلى بناء قسم تسويق داخلي كبير.",
    aboutQuote: "خطة واضحة. رسالة مؤثرة. قرارات مبنية على فهم حقيقي.",
    servicesTag: "ما الذي نقدّمه",
    servicesTitle: "خدمات تغطي رحلة التسويق بالكامل",
    servicesBody: "نربط التخطيط بالتنفيذ، ثم نعود إلى الأرقام لنتعلّم ونطوّر.",
    services: [
      { n: "01", title: "الاستراتيجية وأبحاث السوق", body: "دراسة السوق والمنافسين وسلوك المستهلكين، وبناء خطط تحدد الأهداف والجمهور والميزانية والجدول الزمني." },
      { n: "02", title: "الهوية والعلامة التجارية", body: "تحديد قيم العلامة ورسائلها، وتطوير هوية تترك انطباعاً واضحاً ومتسقاً لدى الجمهور." },
      { n: "03", title: "المحتوى والظهور الرقمي", body: "كتابة المحتوى والنصوص الإعلانية وأوصاف المنتجات، وتحسين الظهور في نتائج البحث العضوية." },
      { n: "04", title: "القياس وإدارة السمعة", body: "متابعة مؤشرات الأداء وإعداد التقارير والتوصيات، مع التخطيط الاستباقي للتعامل مع أزمات السمعة." },
    ],
    methodTag: "منهجيتنا",
    methodTitle: "خطوات واضحة، من البداية إلى التطوير.",
    method: [
      { title: "نكتشف", body: "نبدأ بفهم نشاطك وسوقك وجمهورك وتحدياتك." },
      { title: "نخطط", body: "نحدد الأولويات والرسائل والقنوات المناسبة لأهدافك." },
      { title: "ننفّذ ونقيس", body: "نحوّل الخطة إلى عمل ونتابع الأداء لنحسّن المسار." },
    ],
    ctaTag: "الخطوة التالية",
    ctaTitle: "لنبنِ خطوتك القادمة معاً.",
    ctaBody: "حدثنا عن أهدافك، وسنبدأ من حيث أنت لنرسم مساراً أوضح للنمو.",
    emailLabel: "راسلنا عبر البريد الإلكتروني",
    footerLine: "شريكك في التسويق والنمو.",
    rights: "جميع الحقوق محفوظة.",
    langLabel: "English",
    menu: "فتح القائمة",
  },
  en: {
    nav: ["Home", "About", "Services", "Approach", "Contact"],
    eyebrow: "Your partner in meaningful growth",
    heroTitleA: "A stronger presence.",
    heroTitleB: "Growth with purpose.",
    heroBody: "We help companies and brands understand their market, shape their message, and put thoughtful marketing to work.",
    explore: "Explore our services",
    contact: "Let's talk",
    heroCardLabel: "A connected growth journey",
    heroCardTitle: "From idea to impact",
    heroSteps: ["Understand the market", "Shape the direction", "Measure performance"],
    aboutTag: "About us",
    aboutTitle: "Marketing that sees the whole picture.",
    aboutBody: "At Moaid Trading, we aim to be a strategic partner for companies and brands seeking a stronger market presence, increased sales, and effective campaign management without building a large internal marketing department.",
    aboutQuote: "A clear plan. A compelling message. Decisions grounded in real insight.",
    servicesTag: "What we do",
    servicesTitle: "Services for the full marketing journey",
    servicesBody: "We connect planning with execution, then use the numbers to learn and improve.",
    services: [
      { n: "01", title: "Strategy & market research", body: "Market, competitor, and consumer research, with plans that define objectives, audiences, budgets, and timelines." },
      { n: "02", title: "Brand identity", body: "Defining brand values and messaging, and developing an identity that feels clear and consistent to your audience." },
      { n: "03", title: "Content & digital visibility", body: "Writing content, ad copy, and product descriptions, while improving organic search visibility." },
      { n: "04", title: "Measurement & reputation", body: "Tracking performance, reporting insights and recommendations, and planning ahead for reputation challenges." },
    ],
    methodTag: "Our approach",
    methodTitle: "Clear steps, from discovery to improvement.",
    method: [
      { title: "Discover", body: "We learn about your business, market, audience, and challenges." },
      { title: "Plan", body: "We set priorities, messages, and channels around your goals." },
      { title: "Deliver & measure", body: "We put the plan into action and track what can be improved." },
    ],
    ctaTag: "Your next step",
    ctaTitle: "Let's build what comes next.",
    ctaBody: "Tell us about your goals. We'll start where you are and map a clearer path to growth.",
    emailLabel: "Email us",
    footerLine: "Your partner in marketing and growth.",
    rights: "All rights reserved.",
    langLabel: "العربية",
    menu: "Open menu",
  },
};

const ids = ["home", "about", "services", "approach", "contact"];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("moaid-language");
    if (saved === "ar" || saved === "en") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = language === "ar" ? "Moaid Trading | شريكك في النمو" : "Moaid Trading | Strategic Marketing Partner";
  }, [language]);

  function toggleLanguage() {
    const next = language === "ar" ? "en" : "ar";
    setLanguage(next);
    window.localStorage.setItem("moaid-language", next);
    setMenuOpen(false);
  }

  return (
    <main className={language === "ar" ? "site arabic" : "site english"}>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Moaid Trading — Home" onClick={() => setMenuOpen(false)}>
            <Image src="/logo-removebg-preview.png" alt="Moaid Trading" width={205} height={112} priority />
          </a>
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
            {t.nav.map((label, i) => <a key={ids[i]} href={`#${ids[i]}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <button className="language-switch" onClick={toggleLanguage} aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}>{t.langLabel}</button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={t.menu}><span /><span /><span /></button>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div>
            <h1>{t.heroTitleA}<br /><span>{t.heroTitleB}</span></h1>
            <p>{t.heroBody}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{t.contact}<ArrowIcon /></a>
              <a className="text-link" href="#services">{t.explore}<span>↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label={t.heroCardTitle}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="growth-panel">
              <div className="panel-top"><span className="panel-mark"><i /><i /><i /></span><span className="panel-label">MOAID / GROWTH</span></div>
              <div className="panel-content"><span className="panel-kicker">{t.heroCardLabel}</span><strong>{t.heroCardTitle}</strong></div>
              <div className="growth-path"><div className="path-line" /><div className="path-points"><span /><span /><span /></div></div>
              <div className="panel-steps">{t.heroSteps.map((step, i) => <div key={step}><b>0{i + 1}</b><span>{step}</span></div>)}</div>
            </div>
            <div className="art-accent art-accent-one" /><div className="art-accent art-accent-two" />
          </div>
        </div>
        <div className="hero-bottom container"><span>MOAID TRADING</span><span className="hero-bottom-line" /><span>01 / 04</span></div>
      </section>

      <section id="about" className="about section-pad">
        <div className="container about-grid">
          <div><span className="section-tag">{t.aboutTag}</span><h2>{t.aboutTitle}</h2></div>
          <div className="about-right"><p>{t.aboutBody}</p><div className="quote"><span className="quote-mark">“</span><strong>{t.aboutQuote}</strong></div></div>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <div className="container">
          <div className="section-heading"><div><span className="section-tag">{t.servicesTag}</span><h2>{t.servicesTitle}</h2></div><p>{t.servicesBody}</p></div>
          <div className="services-grid">{t.services.map((service) => <article className="service-card" key={service.n}><div className="service-top"><span>{service.n}</span><span className="service-arrow">↗</span></div><div className="service-symbol" aria-hidden="true"><span /><span /><span /></div><h3>{service.title}</h3><p>{service.body}</p></article>)}</div>
        </div>
      </section>

      <section id="approach" className="approach section-pad">
        <div className="container approach-grid"><div className="approach-intro"><span className="section-tag">{t.methodTag}</span><h2>{t.methodTitle}</h2><div className="approach-decoration"><span /><span /><span /></div></div><div className="method-list">{t.method.map((item, i) => <div className="method-item" key={item.title}><span className="method-number">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><span className="method-dot" /></div>)}</div></div>
      </section>

      <section id="contact" className="contact section-pad"><div className="container contact-inner"><div><span className="section-tag">{t.ctaTag}</span><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p></div><a className="contact-button" href="mailto:Mojefry12@gmail.com"><span><small>{t.emailLabel}</small><strong>Mojefry12@gmail.com</strong></span><ArrowIcon /></a></div></section>

      <footer className="footer"><div className="container footer-inner"><div className="footer-brand"><Image src="/logo-removebg-preview.png" alt="Moaid Trading" width={155} height={84} /><p>{t.footerLine}</p></div><div className="footer-end"><a href="mailto:Mojefry12@gmail.com">Mojefry12@gmail.com</a><span>© {new Date().getFullYear()} Moaid Trading. {t.rights}</span></div></div></footer>
    </main>
  );
}
