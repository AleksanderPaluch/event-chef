/**
 * SEO / AI prerender dla eventchef.pl
 *
 * Po każdym `npm run build` tworzy osobny plik HTML dla każdej podstrony
 * (/, /live, /masterclass, /omakase) z:
 *  - własnym tytułem, opisem, adresem kanonicznym i podglądem linku (Open Graph),
 *  - danymi firmy dla Google i AI (JSON-LD),
 *  - tekstem oferty, cen i FAQ widocznym bez JavaScriptu.
 *
 * Gdy strona się załaduje, React podmienia ten tekst na normalny wygląd strony.
 *
 * WAŻNE: gdy zmienisz na stronie ceny, FAQ albo opisy, zmień je też tutaj (sekcja DANE).
 */
import fs from "node:fs";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";

/* ============================== DANE ============================== */

const SITE = "https://eventchef.pl";
const OG_IMAGE = `${SITE}/og-image.jpg`;
const PHONE = "+48 519 776 124";
const PHONE_RAW = "+48519776124";
const EMAIL = "kontakt@eventchef.pl";
const INSTAGRAM = "https://www.instagram.com/eventchef.pl/";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61590571448009";
const AREA = "Warszawa i okolice, realizacje na terenie całej Polski";

type Tier = { group: string; basic?: number; premium: number };
type Faq = { q: string; a: string };
type Service = {
  slug: "live" | "masterclass" | "omakase";
  name: string;
  callout: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  process: { time: string; label: string }[];
  organization: string[];
  forCompanies: string[];
  forPrivate: string[];
  menu: string[];
  includes: string[];
  tiers: Tier[];
  faq: Faq[];
};

const SERVICES: Service[] = [
  {
    slug: "live",
    name: "Live Cooking",
    callout: "Sushi przygotowywane na żywo",
    title: "Sushi live cooking na eventy i wesela | Event Chef Warszawa",
    description:
      "Sushi przygotowywane na żywo na oczach gości: eventy firmowe, wesela, urodziny. Bez potrzeby dostępu do wody i prądu. Warszawa i cała Polska, od 80 zł/os.",
    h1: "Sushi live cooking na Twoim wydarzeniu",
    lead:
      "Live cooking to interaktywny pokaz przygotowywania sushi na żywo, połączony z degustacją serwowaną w trakcie wydarzenia. Przyjeżdżamy, przygotowujemy stanowisko i serwujemy świeże sushi na oczach Twoich gości.",
    process: [
      { time: "ok. 1 godz.", label: "Przygotowanie stanowiska" },
      { time: "2–4 godz.", label: "Sushi live cooking" },
      { time: "w trakcie", label: "Serwowanie i degustacja" },
    ],
    organization: [
      "Brak potrzeby dostępu do wody i prądu",
      "Możliwość realizacji w dowolnym miejscu",
      "Pełne zaplecze po stronie szefa kuchni",
    ],
    forCompanies: ["Eventy firmowe", "Konferencje, targi", "Premiery produktów", "Wigilie firmowe"],
    forPrivate: ["Wesela", "Urodziny", "Domówki", "Wieczory panieńskie"],
    menu: ["Futomaki Philadelphia", "Uramaki z krewetkami", "Hosomaki Spicy Tuna"],
    includes: ["Indywidualne menu", "Produkty premium", "Pełna organizacja kulinarna"],
    tiers: [
      { group: "8–14 os.", basic: 140, premium: 160 },
      { group: "15–19 os.", basic: 110, premium: 130 },
      { group: "20–29 os.", basic: 100, premium: 120 },
      { group: "30+ os.", basic: 90, premium: 100 },
      { group: "50+ os.", basic: 80, premium: 90 },
    ],
    faq: [
      { q: "Ile trwa live cooking?", a: "Standardowo 2–4 godziny, w zależności od liczby gości i wybranego pakietu." },
      { q: "Co muszę zapewnić na miejscu?", a: "Podstawową przestrzeń roboczą — resztę organizujemy po naszej stronie." },
      { q: "Czy sushi przygotowywane jest na bieżąco?", a: "Tak — wszystkie porcje powstają na oczach gości i są serwowane od razu." },
      { q: "Dla ilu osób jest ta usługa?", a: "Dopasowujemy się indywidualnie — obsługujemy zarówno kameralne eventy, jak i większe wydarzenia." },
      { q: "Czy zajmujecie się wszystkim na miejscu?", a: "Tak — przyjeżdżamy, przygotowujemy stanowisko i obsługujemy cały proces." },
    ],
  },
  {
    slug: "masterclass",
    name: "Masterclass",
    callout: "Warsztaty sushi",
    title: "Warsztaty sushi (masterclass) dla firm i grup | Event Chef Warszawa",
    description:
      "Praktyczne warsztaty sushi pod okiem doświadczonego sushi mastera — idealne na integrację firmową i spotkania ze znajomymi. Warszawa i cała Polska, od 100 zł/os.",
    h1: "Sushi masterclass — warsztaty przygotowywania sushi",
    lead:
      "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy uczą się przygotowywania sushi od podstaw pod okiem doświadczonego sushi mastera. Angażujące i pełne zabawy — świetne na integrację.",
    process: [
      { time: "ok. 1 godz.", label: "Przygotowanie stanowisk" },
      { time: "2–3 godz.", label: "Warsztaty krok po kroku" },
      { time: "1 godz.", label: "Degustacja sushi" },
    ],
    organization: [
      "Indywidualne stanowiska dla uczestników",
      "Komplet produktów i narzędzi",
      "Możliwość realizacji w dowolnej lokalizacji",
    ],
    forCompanies: ["Integracje zespołowe", "Eventy firmowe", "Szkolenia kulinarne", "Spotkania biznesowe"],
    forPrivate: ["Urodziny", "Spotkania z przyjaciółmi", "Wieczory tematyczne", "Prezent kulinarny"],
    menu: ["Futomaki Philadelphia", "Uramaki z krewetkami", "Hosomaki Spicy Tuna"],
    includes: ["Interaktywny pokaz", "Nauka krok po kroku", "Degustacja przygotowanych dań"],
    tiers: [
      { group: "8–14 os.", basic: 150, premium: 160 },
      { group: "15–19 os.", basic: 120, premium: 130 },
      { group: "20–29 os.", basic: 110, premium: 120 },
      { group: "30+ os.", basic: 100, premium: 110 },
    ],
    faq: [
      { q: "Dla kogo jest masterclass?", a: "Dla każdego — zarówno początkujących, jak i osób, które chcą uporządkować technikę." },
      { q: "Czy potrzebuję własnego sprzętu?", a: "Nie — zapewniamy wszystkie składniki i narzędzia potrzebne do pracy." },
      { q: "Ile trwa szkolenie?", a: "Zazwyczaj 2–3 godziny, w zależności od zakresu i poziomu grupy." },
      { q: "Czy po zajęciach można zjeść przygotowane sushi?", a: "Tak — wszystkie przygotowane rolki są degustowane na miejscu." },
      { q: "Czy to dobry pomysł na event firmowy lub integrację?", a: "Tak — to połączenie nauki i wspólnego doświadczenia, które świetnie sprawdza się jako integracja." },
    ],
  },
  {
    slug: "omakase",
    name: "Omakase",
    callout: "Ekskluzywna kolacja",
    title: "Kolacja omakase z szefem sushi w Twoim miejscu | Event Chef",
    description:
      "Ekskluzywna kolacja omakase: autorskie menu sushi i sashimi z sezonowych składników, przygotowywane na żywo przez szefa kuchni. Warszawa i cała Polska, od 300 zł/os.",
    h1: "Omakase — ekskluzywna kolacja z szefem sushi",
    lead:
      "Omakase to ekskluzywne doświadczenie kulinarne, w którym goście oddają się w ręce szefa kuchni. Menu powstaje na bieżąco, w oparciu o najlepsze, sezonowe produkty i autorską wizję sushi mastera.",
    process: [
      { time: "1–2 godz.", label: "Przygotowanie stanowiska i produktów" },
      { time: "2–3 godz.", label: "Serwis omakase na żywo" },
      { time: "w trakcie", label: "Opowieść o produktach i technikach" },
    ],
    organization: [
      "Pełne zaplecze po stronie szefa kuchni",
      "Indywidualny serwis dla gości",
      "Możliwość realizacji w dowolnej lokalizacji",
    ],
    forCompanies: ["Spotkania VIP", "Eventy premium", "Kolacje biznesowe", "Zamknięte wydarzenia"],
    forPrivate: ["Kolacje prywatne", "Rocznice", "Urodziny premium", "Wyjątkowe okazje"],
    menu: ["Sushi i sashimi", "Premium seafood", "Unikalne dodatki i sosy"],
    includes: ["Autorskie menu omakase", "Sezonowe składniki najwyższej jakości", "Indywidualny serwis szefa"],
    tiers: [
      { group: "8–14 os.", premium: 350 },
      { group: "15–19 os.", premium: 300 },
    ],
    faq: [
      { q: "Na czym polega omakase?", a: "To indywidualne doświadczenie — menu dobierane jest na bieżąco przez szefa kuchni." },
      { q: "Ile trwa kolacja omakase?", a: "Zazwyczaj 1,5–3 godziny — tempo dostosowane jest do gości." },
      { q: "Czy można zgłosić preferencje lub alergie?", a: "Tak — przed wydarzeniem zbieramy wszystkie informacje i dopasowujemy menu." },
      { q: "Gdzie odbywa się omakase?", a: "W przestrzeni klienta — tworzymy prywatne doświadczenie kulinarne na miejscu." },
      { q: "Czy to jest prywatne doświadczenie?", a: "Tak — wszystko odbywa się w kameralnej, dopasowanej formule." },
    ],
  },
];

const WEDDING = {
  name: "Wesela",
  callout: "Catering weselny",
  includes: ["Specjalne menu weselne", "Sushi w formie bufetu", "Realizacja na terenie całej Polski"],
  tiers: [
    { group: "20–29 os.", basic: 3000, premium: 3500 },
    { group: "30+ os.", basic: 3500, premium: 4000 },
  ] as Tier[],
};

const HOME = {
  title: "Event Chef — sushi na żywo na eventy, wesela i kolacje | Warszawa",
  description:
    "Sushi live cooking, warsztaty sushi i kolacje omakase na eventy firmowe, wesela i przyjęcia prywatne. Przyjeżdżamy z pełnym stanowiskiem. Warszawa i cała Polska.",
  h1: "Event Chef — sushi tworzone w Twojej przestrzeni",
  lead:
    "Tworzymy wyjątkowe sushi na Twoim wydarzeniu. Przyjeżdżamy, przygotowujemy stanowisko i serwujemy świeże sushi na oczach Twoich gości. To nie tylko catering — to doświadczenie.",
  about:
    "Event Chef to firma stworzona przez doświadczonych kucharzy, których pasją jest sushi. Dbamy o to, aby każde wydarzenie, które obsługujemy, było wyjątkowym, niezapomnianym doświadczeniem kulinarnym. Ponad 10 lat doświadczenia zawodowego.",
};

/* ============================== POMOCNICZE ============================== */

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const zl = (n: number) => `${n.toLocaleString("pl-PL").replace(/\u00a0/g, " ")} zł`;
const minPrice = (t: Tier[]) => Math.min(...t.map((x) => x.basic ?? x.premium));
const maxPrice = (t: Tier[]) => Math.max(...t.map((x) => x.premium));
const list = (items: string[]) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

function priceTable(tiers: Tier[], unit: string) {
  const hasBasic = tiers.some((t) => t.basic);
  const head = `<tr><th>Liczba gości</th>${hasBasic ? "<th>Basic</th>" : ""}<th>Premium</th></tr>`;
  const rows = tiers
    .map(
      (t) =>
        `<tr><td>${esc(t.group)}</td>${hasBasic ? `<td>${t.basic ? zl(t.basic) + unit : "—"}</td>` : ""}<td>${zl(t.premium)}${unit}</td></tr>`,
    )
    .join("");
  return `<table>${head}${rows}</table>`;
}

const contactHtml = `
<section>
  <h2>Kontakt</h2>
  <p>Telefon: <a href="tel:${PHONE_RAW}">${PHONE}</a><br>
  E-mail: <a href="mailto:${EMAIL}">${EMAIL}</a><br>
  Instagram: <a href="${INSTAGRAM}">@eventchef.pl</a><br>
  Obszar działania: ${AREA}.</p>
</section>`;

const nav = `<nav><a href="/">Strona główna</a> · ${SERVICES.map((s) => `<a href="/${s.slug}">${s.name}</a>`).join(" · ")}</nav>`;

const STYLE = `<style>#seo-static{max-width:860px;margin:0 auto;padding:48px 20px;font-family:Manrope,system-ui,sans-serif;color:#d6d3d1;background:#0c0a09;line-height:1.6}#seo-static h1,#seo-static h2,#seo-static h3{color:#fafaf9;line-height:1.25}#seo-static a{color:#f59e0b}#seo-static table{border-collapse:collapse;margin:8px 0 16px}#seo-static td,#seo-static th{border-bottom:1px solid #292524;padding:6px 14px 6px 0;text-align:left}html.dark body{background:#0c0a09}</style>`;

/* ============================== JSON-LD ============================== */

const business = {
  "@type": "FoodEstablishment",
  "@id": `${SITE}/#business`,
  name: "Event Chef",
  alternateName: "Event Chef — sushi na żywo",
  description: HOME.description,
  url: SITE,
  image: OG_IMAGE,
  telephone: PHONE_RAW,
  email: EMAIL,
  founder: { "@type": "Person", name: "Aleksander Paluch", jobTitle: "Szef kuchni i właściciel" },
  address: { "@type": "PostalAddress", addressLocality: "Warszawa", addressCountry: "PL" },
  areaServed: [
    { "@type": "City", name: "Warszawa" },
    { "@type": "Country", name: "Polska" },
  ],
  servesCuisine: ["Sushi", "Kuchnia japońska"],
  priceRange: "80–350 zł / os.",
  knowsLanguage: ["pl", "en"],
  sameAs: [INSTAGRAM, FACEBOOK],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oferta Event Chef",
    itemListElement: [
      ...SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${s.name} — ${s.callout}`, url: `${SITE}/${s.slug}` },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "PLN",
          minPrice: minPrice(s.tiers),
          maxPrice: maxPrice(s.tiers),
          unitText: "osoba",
        },
      })),
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sushi na wesele — catering weselny" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "PLN",
          minPrice: minPrice(WEDDING.tiers),
          maxPrice: maxPrice(WEDDING.tiers),
        },
      },
    ],
  },
};

const website = { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: "Event Chef", inLanguage: "pl-PL" };

function jsonLd(page: Service | null) {
  const graph: object[] = [business, website];
  if (page) {
    graph.push({
      "@type": "Service",
      name: `${page.name} — ${page.callout}`,
      description: page.lead,
      url: `${SITE}/${page.slug}`,
      provider: { "@id": `${SITE}/#business` },
      areaServed: business.areaServed,
      offers: {
        "@type": "Offer",
        priceCurrency: "PLN",
        price: minPrice(page.tiers),
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "PLN",
          minPrice: minPrice(page.tiers),
          maxPrice: maxPrice(page.tiers),
          unitText: "osoba",
        },
      },
    });
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}</script>`;
}

/* ============================== TREŚĆ PODSTRON ============================== */

function homeBody() {
  return `<main id="seo-static">${nav}
<h1>${esc(HOME.h1)}</h1>
<p>${esc(HOME.lead)}</p>
<p><strong>Wesela • Eventy firmowe • Prywatne kolacje</strong> — ${esc(AREA)}.</p>
<section><h2>Nasza oferta</h2>
${SERVICES.map((s) => `<h3><a href="/${s.slug}">${s.name}</a> — ${esc(s.callout)}</h3><p>${esc(s.lead)}</p><p>Cena: od ${zl(minPrice(s.tiers))} / os.</p>`).join("\n")}
<h3>${WEDDING.name} — ${esc(WEDDING.callout)}</h3>${list(WEDDING.includes)}<p>Cena: od ${zl(minPrice(WEDDING.tiers))} za wydarzenie.</p>
</section>
<section><h2>O nas</h2><p>${esc(HOME.about)}</p></section>
<section><h2>Cennik</h2>
<p>Ceny mają charakter orientacyjny i mogą się różnić w zależności od lokalizacji, liczby gości oraz indywidualnych ustaleń.</p>
${SERVICES.map((s) => `<h3>${s.name} — ${esc(s.callout)}</h3>${priceTable(s.tiers, " / os.")}`).join("\n")}
<h3>${WEDDING.name} — ${esc(WEDDING.callout)}</h3>${priceTable(WEDDING.tiers, " / wydarzenie")}
</section>
${contactHtml}
</main>`;
}

function serviceBody(s: Service) {
  return `<main id="seo-static">${nav}
<h1>${esc(s.h1)}</h1>
<p>${esc(s.lead)}</p>
<p>Obszar działania: ${esc(AREA)}.</p>
<section><h2>Jak to wygląda</h2><ul>${s.process.map((p) => `<li>${esc(p.label)} — ${esc(p.time)}</li>`).join("")}</ul></section>
<section><h2>Organizacja</h2>${list(s.organization)}</section>
<section><h2>Dla kogo</h2><h3>Dla firm</h3>${list(s.forCompanies)}<h3>Dla osób prywatnych</h3>${list(s.forPrivate)}</section>
<section><h2>Przykładowe menu</h2>${list(s.menu)}</section>
<section><h2>Cennik — ${s.name}</h2><p>W cenie: ${s.includes.map(esc).join(", ")}.</p>${priceTable(s.tiers, " / os.")}
<p>Ceny mają charakter orientacyjny i mogą się różnić w zależności od lokalizacji, liczby gości oraz indywidualnych ustaleń.</p></section>
<section><h2>Najczęściej zadawane pytania</h2>${s.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}</section>
${contactHtml}
</main>`;
}

/* ============================== PLUGIN ============================== */

function headTags(title: string, description: string, url: string) {
  return `
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#0c0a09" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pl_PL" />
    <meta property="og:site_name" content="Event Chef" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />`;
}

function render(template: string, title: string, description: string, url: string, body: string, ld: string) {
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${esc(description)}" />`)
    .replace("</head>", `${headTags(title, description, url)}\n    ${ld}\n    ${STYLE}\n  </head>`);
  if (!html.includes('<div id="root"></div>')) throw new Error('[seo-prerender] Nie znaleziono <div id="root"></div> w index.html');
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

export function seoPrerender(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "event-chef-seo-prerender",
    apply: "build",
    configResolved(c) {
      config = c;
    },
    writeBundle() {
      const outDir = path.resolve(config.root, config.build.outDir);
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");

      fs.writeFileSync(
        path.join(outDir, "index.html"),
        render(template, HOME.title, HOME.description, `${SITE}/`, homeBody(), jsonLd(null)),
      );
      for (const s of SERVICES) {
        const dir = path.join(outDir, s.slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(
          path.join(dir, "index.html"),
          render(template, s.title, s.description, `${SITE}/${s.slug}`, serviceBody(s), jsonLd(s)),
        );
      }
      config.logger.info(`\n[seo-prerender] Gotowe: /, ${SERVICES.map((s) => "/" + s.slug).join(", ")}`);
    },
  };
}
