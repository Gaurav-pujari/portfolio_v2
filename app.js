/* =========================================================
   ✅ FULL app.js — Template v2
   Same data as before (nothing removed) — new markup to match
   the approved template design:
     Header  = Business Card style
     Projects = Accordion List
     Clients  = Client Cards
     Skills   = Skill Matrix
     Articles = Featured Article Cards
     Resume   = Resume Preview Card
     Contact  = Split info + form
========================================================= */

if (window.Chart && window.ChartDataLabels) {
  Chart.register(ChartDataLabels);
}

/* ================================
   ✅ DEFAULT DATA (unchanged — all original content preserved)
================================ */
const DEFAULT_DATA = {
  profile: {
    name: "Gaurav Ravindra Pujari",

    summaryText: `Data Science and Analytics Professional with 1+ year of experience delivering data-driven solutions in a SaaS environment.
Skilled in SQL, PL/SQL, Excel, and dashboard development, with hands-on experience across the analytics
lifecycle including stakeholder requirement gathering, data cleaning, validation, and KPI reporting. Proven ability to
transform complex datasets into actionable insights and automate reporting workflows to support business decisionmaking.`,

    email: "gauravpujari2002@gmail.com",
    phone: "+91 8483959447",
    linkedin: "https://www.linkedin.com/in/gaurav-pujari-90296a1ba",
    github: "https://github.com/Gaurav-pujari/",
    location: "Pune, Maharashtra, India",
    photo: "./Profile Photo.jpg",
  },

  company: {
    name: "Aurochs Solutions",
    logo: "./Aurochs Solutions.png", // ⬅️ drop your logo file in with this exact name
    designation: "Business Analytics Associate",
    tagline: "SaaS Analytics & Business Intelligence"

  },

  stats: {
    completedProjects: 10,
    ongoingProjects: 1,
    dashboardsBuilt: 23,
    hoursDelivered: 1200,
    reportsAutomated: 23,
    domainBreakdown: {
      Pharma: 1,
      FMCG: 2,
      Retail: 2,
      Marketing: 1,
      "Venture Capital": 1,
      "Manufacturing & Packaging": 1,
    },
  },

  experience: [
    {
      id: "exp0",
      company: "Aurochs Solutions",
      logo: "./Aurochs Solutions.png", // ⬅️ drop your logo file in with this exact name
      title: "Business Analytics Associate",
      location: "Pune, India",
      start: "03/2026",
      end: "Present",
      points: [
        "Currently working on two client projects in a SaaS environment, supporting end-to-end analytics and business solution delivery.",
        "Perform data cleaning and preprocessing to ensure data accuracy, consistency, and readiness for analysis and reporting.",
        "Collaborate with clients through the complete project lifecycle, from requirement gathering and understanding business needs to final sign-off.",
        "Develop and maintain interactive dashboards and analytical reports to support data-driven decision-making.",
        "Provide regular project updates and status communication to both internal teams and external stakeholders, ensuring alignment and timely delivery.",
      ],
      toolsUsed: ["SQL", "Python", "Excel", "PostgreSQL", "MySQL", "SQL Server"],
    },
    {
      id: "exp1",
      company: "Fire AI",
      logo: "./Fire AI.png", // ⬅️ drop your logo file in with this exact name
      title: "Associate Data Science",
      location: "Mumbai, India",
      start: "03/2025",
      end: "10/2025",
      points: [
        "Led and successfully completed 10+ analytics and reporting projects across Pharma, Venture Capital, FMCG, Retail, and Marketing & Advertising sectors, delivering business-driven insights.",
        "Worked within a SaaS-based environment, contributing to data and reporting solutions delivered through a software as-a-service product model aligned with client business requirements.",
        "Managed end-to-end stakeholder engagement including requirement gathering, daily client communication, and regular project status updates with both internal and external stakeholders.",
        "Performed data preparation activities including data cleaning, structuring, and exploratory analysis to ensure high-quality, analysis-ready datasets aligned with project objectives.",
        "Collaborated with stakeholders to finalize dashboard design, KPIs, and visualization layouts before developing interactive dashboards to support performance monitoring and decision-making.",
        "Conducted data validation by cross-verifying outputs with source systems, ensured accuracy of deliverables, and facilitated final client reviews and sign-off upon successful project completion.",
      ],
      toolsUsed: ["SQL", "Python", "Excel", "PostgreSQL", "MySQL", "SQL Server"],
    },
    {
      id: "exp2",
      company: "Fire AI",
      logo: "./Fire AI.png", // ⬅️ drop your logo file in with this exact name
      title: "Data Scientist Intern",
      location: "Pune, India",
      start: "10/2024",
      end: "03/2025",
      points: [
        "Developed machine learning models including churn risk prediction and time-series forecasting models to predict future sales trends and demand patterns for business planning.",
        "Built forecasting-driven solutions supporting inventory optimization, helping reduce overstocking and improving replenishment decision-making.",
        "Performed end-to-end data analysis including data preparation, exploratory analysis, feature engineering, and model evaluation to generate actionable business insights.",
        "Contributed to analytics dashboard development by translating model outputs and analytical findings into visual reports for stakeholder monitoring and decision support.",
      ],
      toolsUsed: ["Python", "Machine Learning", "Time Series", "Regression", "Classification", "Clustering"],
    },
  ],

  clients: [
    { id: "c1", name: "Noise", logo: "./Noise Logo.jpg", industry: "Consumer Electronics | Sales & Product Analytics" },
    { id: "c2", name: "Living Liquidz", logo: "./Living Liquidz.png", industry: "FMCG · Sales, Purchase & Inventory Optimization" },
    { id: "c3", name: "Inflection Point Venture (IPV)", logo: "./ipventures.jpg", industry: "Venture Capital · Tally Insights & Analytics" },
    { id: "c4", name: "GSN Groups", logo: "./gsn groups.png", industry: "Packaging · Tally Analytics & Business Insights" },
    { id: "c5", name: "Coolfi", logo: "./coolfi.png", industry: "Business Analytics · Tally Insights & Analytics" },
    { id: "c6", name: "Daffoworth Pharmaceutical Pvt Ltd", logo: "./Daffoworth.jpg", industry: "Pharma · Marketing · Sales, Purchase & Inventory Optimization" },
  ],

  projects: [
    {
      id: "p1",
      title: "Marketing Analytics Report",
      desc: [
        "Built end-to-end marketing performance dashboard with drill-down analysis",
        "Created advanced DAX measures including MTD, YTD, ROAS, ROMI, CTR, CPC",
        "Enabled campaign performance tracking by region, product, and customer segment",
        "Improved marketing ROI visibility through interactive reporting",
      ],
      stack: ["Power BI", "DAX", "Excel"],
      images: ["./marketing 1.png", "./marketing2.png", "./marketing3.png"],
      github: "https://github.com/Gaurav-pujari/Marketing-Analytics-Report",
    },
    {
      id: "p3",
      title: "UT Mart Sales Analytics Dashboard",
      desc: [
        "Developed interactive Tableau dashboard for category and region-wise sales analysis",
        "Created KPI metrics, trend visuals, and geo-maps for decision support",
        "Enabled drill-down insights for product and state performance",
      ],
      stack: ["Tableau", "Excel"],
      images: ["./UT MART.png"],
      github: "https://github.com/Gaurav-pujari/UT-Mart-Sales-Analytics-Dashboard",
    },
    {
      id: "p4",
      title: "Superstore Business Performance Dashboard",
      desc: [
        "Built KPI dashboards covering Sales, Profit, Orders, and Quantity metrics",
        "Added dynamic filters for region, segment, and category analysis",
        "Improved reporting usability and executive-level visibility",
      ],
      stack: ["Tableau", "Excel"],
      images: ["./Superstore1.png", "./superstore2.png", "./superstore3.png"],
      github: "https://github.com/Gaurav-pujari/Superstore-Business-Performance-Dashboard",
    },
  ],

  articles: [
    {
      id: "a1",
      title: "5 DAX Patterns That Instantly Improve Any Power BI Dashboard",
      category: "Power BI",
      summary: "MTD, YTD, ROAS and ROMI measures I reuse on almost every client dashboard — with the exact logic and common mistakes to avoid.",
      date: "Aug 2026",
      readTime: "5 min read",
      content: [
        "Every client dashboard I've built in the last year, no matter the industry, ends up needing the same handful of DAX measures. Once you have a clean, reusable version of each, building a new dashboard's KPI layer takes a fraction of the time.",
        "Month-to-Date (MTD) and Year-to-Date (YTD) are the two most requested measures, and they're also the two most commonly gotten wrong. The mistake I see most often is using CALCULATE with a hardcoded date filter instead of DATESMTD/DATESYTD, which silently breaks the moment someone changes the reporting period.",
        "ROAS (Return on Ad Spend) and ROMI (Return on Marketing Investment) look similar but answer different questions — ROAS is a channel-level efficiency metric, ROMI is a business-level profitability metric. Mixing the two up in a single dashboard confuses stakeholders fast, so I always label them with the exact formula in a tooltip.",
        "The other pattern worth stealing is a single 'Selected Period' measure that dynamically swaps between MTD, QTD and YTD based on a slicer, instead of building three separate visuals. It cuts dashboard clutter significantly and stakeholders only ever ask for one number at a time anyway.",
        "The common thread across all of these: get the time-intelligence functions right once, wrap them in well-named measures, and reuse them everywhere. It's saved me hours on every single project since I started doing it this way.",
      ],
    },
    {
      id: "a2",
      title: "From Raw CSVs to Clean KPIs: My SQL Data-Cleaning Checklist",
      category: "SQL",
      summary: "The repeatable checklist I run before any stakeholder sees a dashboard — nulls, duplicates, type mismatches and validation joins.",
      date: "Jul 2026",
      readTime: "6 min read",
      content: [
        "Almost every analytics project starts the same way: a folder of CSVs or a raw database dump that nobody has fully audited. Before I let any of that touch a dashboard, it goes through the same checklist.",
        "Step one is always nulls — not just counting them, but understanding why they exist. A null in a 'discount applied' column usually means zero, but a null in 'customer_id' usually means a broken join upstream. Treating both the same way is how bad KPIs get published.",
        "Step two is duplicates, and specifically near-duplicates: same order ID with a one-second timestamp difference, same customer with two slightly different spellings of their name. I run a GROUP BY with a HAVING COUNT(*) > 1 on every key column combination before I trust a row count.",
        "Step three is type mismatches — dates stored as text, currency stored as strings with symbols still attached, IDs that are sometimes numeric and sometimes alphanumeric. These fail silently in aggregations, so I explicitly CAST everything and check for conversion errors rather than assuming the data is already clean.",
        "The last step is a validation join back to a source system total — comparing my cleaned dataset's SUM() against whatever the client's existing system reports. If those two numbers don't match within a reasonable margin, nothing goes to a dashboard until I know why.",
      ],
    },
    {
      id: "a3",
      title: "What Generative AI Actually Changes for BI Analysts",
      category: "Trending Tech",
      summary: "A practical look at where LLM copilots genuinely speed up analytics work (and where they still can't replace judgment).",
      date: "Jun 2026",
      readTime: "7 min read",
      content: [
        "There's a lot of noise right now about AI replacing analysts. From actually using these tools day to day, the honest picture is more specific than that.",
        "Where GenAI copilots genuinely help: writing first-draft DAX or SQL from a plain-English description, explaining an unfamiliar query someone else wrote, and generating boilerplate documentation for a dashboard. These are real, measurable time savings — often 30-40% faster on the first draft of a measure.",
        "Where they don't help, and can actively hurt if you trust them blindly: understanding what a stakeholder actually needs versus what they asked for, catching a data quality issue that doesn't look wrong on the surface, and making judgment calls about which metric best represents business performance. That still requires a human who understands the business.",
        "The analysts I've seen get the most value out of these tools treat them like a very fast junior analyst — useful for a first pass, but every output still gets reviewed against the actual data before it goes anywhere near a client.",
        "My honest prediction: the skill that matters more, not less, in a GenAI world is knowing exactly what question you're trying to answer. The tools got faster at writing code; they didn't get better at knowing which code is worth writing.",
      ],
    },
    {
      id: "a4",
      title: "Forecasting Demand with Time-Series Models: Lessons from the Field",
      category: "Data Science",
      summary: "What I learned building churn-risk and demand-forecasting models — feature engineering tricks that mattered more than the algorithm.",
      date: "Apr 2026",
      readTime: "6 min read",
      content: [
        "When I built my first demand-forecasting model, I assumed the choice of algorithm would matter most. It turned out feature engineering mattered far more than which model I picked.",
        "The single biggest improvement came from adding lag features and rolling averages (7-day, 14-day, 30-day) rather than feeding raw daily values straight into the model. Sudden spikes and dips get smoothed into a signal the model can actually learn from.",
        "The second biggest improvement was encoding calendar effects explicitly — day of week, is-holiday, days-until-next-holiday. Retail and FMCG demand is driven by the calendar far more than by anything the model can infer from historical values alone.",
        "For churn-risk specifically, the most predictive features weren't usage metrics directly, but the rate of change in usage — a customer whose activity dropped 40% in two weeks was a far stronger churn signal than a customer with consistently low activity.",
        "The model itself (I mostly used gradient boosting and simple ARIMA baselines) mattered much less than getting these features right. A simple model on well-engineered features consistently beat a complex model on raw data in every project I worked on.",
      ],
    },
    {
      id: "a5",
      title: "Client Requirement Gathering: Questions I Ask Before Touching Data",
      category: "Career Learnings",
      summary: "The stakeholder-alignment questions that save weeks of rework later, learned the hard way across 10+ client engagements.",
      date: "Feb 2026",
      readTime: "4 min read",
      content: [
        "The single biggest cause of rework I've seen across 10+ client engagements isn't bad data or the wrong tool — it's starting to build before requirements are actually locked down.",
        "The first question I now always ask: 'What decision will you make differently based on this dashboard?' If a stakeholder can't answer that clearly, the requirement isn't ready yet, no matter how detailed the spec looks on paper.",
        "The second: 'Who else needs to see this, and do they need the same view?' A dashboard built for one stakeholder's exact mental model often needs a second version, or at least a second filter set, for a different audience — better to know that upfront than after a full build.",
        "The third: 'What does good look like, with real numbers?' Getting a stakeholder to describe an example of a healthy KPI value versus a concerning one, in their own words, surfaces edge cases and definitional disagreements early — far cheaper to resolve before a single line of DAX is written.",
        "None of these questions are complicated. What matters is asking them before starting, not during a review call when the first draft is already built.",
      ],
    },
    {
      id: "a6",
      title: "PySpark for Analysts: When It's Worth the Extra Setup",
      category: "Big Data",
      summary: "A no-hype guide to knowing when a dataset is actually big enough to justify Spark over plain Python/Pandas.",
      date: "Dec 2025",
      readTime: "5 min read",
      content: [
        "PySpark gets recommended a lot as the default tool for 'big data,' but most analytics datasets I've worked with never actually need it. Here's the rough rule of thumb I use.",
        "If a dataset comfortably fits in memory (roughly under a few GB, depending on your machine) and the transformations are mostly joins, group-bys, and pivots, plain Pandas is faster to write, faster to debug, and just as fast to run. Reaching for Spark here adds setup overhead for no real benefit.",
        "The switch becomes worth it when a dataset is large enough that Pandas starts throwing memory errors, or when a job needs to run repeatedly on data that grows over time and you want horizontal scalability built in from day one rather than rewriting the pipeline later.",
        "The other case where PySpark earns its complexity: distributed environments already running Spark (Databricks being the common one), where staying in the same ecosystem avoids extra data movement and lets you reuse existing cluster infrastructure.",
        "My honest advice to analysts starting out: get comfortable with Pandas and SQL first. Learn PySpark when a specific project actually forces your hand on scale — not because it's the trendier tool to have on a resume.",
      ],
    },
  ],


  education: [
    { id: "edu1", degree: "Master of Computer Applications (MCA)", institute: "Sri Balaji University, Pune", year: "04/2025", score: "CGPA: 8.56" },
    { id: "edu2", degree: "Bachelor of Business Administration (Computer Applications)", institute: "Dr. D.Y. Patil ACS College, Pune", year: "04/2023", score: "CGPA: 9.48" },
  ],

  skills: {
    "BI Visualization Tools": ["Power BI", "Tableau", "Looker Studio", "Microsoft Excel"],
    Programming: ["Python", "SQL", "PL/SQL", "R programming"],
    Databases: ["PostgreSQL", "MySQL", "SQL Server", "ClickHouse"],
    "Big Data": ["Apache Spark", "PySpark"],
    "Tools & Cloud": ["Git/GitHub", "Docker", "Amazon Web Services", "Google Cloud Platform"],
    "Working Style": [
      "Requirement Gathering",
      "Stakeholder Management",
      "Data Validation",
      "Reporting",
      "Analytical Thinking & Problem Solving",
      "Attention to Detail & Data Accuracy Focus",
      "Cross-Functional Collaboration",
      "Report Storytelling & Data Interpretation",
      "Decision Support & Insight Translation",
      "Time Management & Delivery Ownership",
    ],
  },

  certifications: [
    "Databricks Certified Associate Developer for Apache Spark 3.0",
    "IBM Data Analyst Professional Certificate",
    "SQL Advanced Certificate",
    "SQL Intermediate Certificate",
  ],

  resume: {
    fileName: "Resume.pdf",
    fileUrl: "./assets/Resume.pdf",
    updatedOn: "2026-02-13",
    previewImg1: "./Resume_page-0001.jpg",
    previewImg2: "./Resume_page-0002.jpg",
  },
};

/* ================================
   ✅ Storage
================================ */
const LS_KEY = "gaurav_static_site_data_v1";
const THEME_KEY = "gaurav_static_theme_v1";

function getData() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return structuredClone(DEFAULT_DATA);

    const saved = JSON.parse(raw);

    return {
      ...structuredClone(DEFAULT_DATA),
      ...saved,
      profile: { ...DEFAULT_DATA.profile, ...(saved.profile || {}) },
      company: { ...DEFAULT_DATA.company, ...(saved.company || {}) },
      stats: { ...DEFAULT_DATA.stats, ...(saved.stats || {}) },
      resume: { ...DEFAULT_DATA.resume, ...(saved.resume || {}) },

      experience: Array.isArray(saved.experience) ? saved.experience : DEFAULT_DATA.experience,
      clients: Array.isArray(saved.clients) ? saved.clients : DEFAULT_DATA.clients,
      projects: Array.isArray(saved.projects) ? saved.projects : DEFAULT_DATA.projects,
      articles: Array.isArray(saved.articles) ? saved.articles : DEFAULT_DATA.articles,
      education: Array.isArray(saved.education) ? saved.education : DEFAULT_DATA.education,

      certifications: Array.isArray(saved.certifications) ? saved.certifications : DEFAULT_DATA.certifications,
      skills: saved.skills ? saved.skills : DEFAULT_DATA.skills,
    };
  } catch {
    return structuredClone(DEFAULT_DATA);
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  const t = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(t);

  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) {
    btn.textContent = t === "dark" ? "Light" : "Dark";

    btn.onclick = () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
      btn.textContent = next === "dark" ? "Light" : "Dark";
      if (typeof renderDonut === "function") renderDonut();
    };
  }
}

function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".links a").forEach((a) => {
    const href = a.getAttribute("href");
    a.classList.toggle("active", href === path);
  });
}

function el(id) {
  return document.getElementById(id);
}

/* ================================
   ✅ Monogram Logo Generator
================================ */
const MONOGRAM_PALETTES = [
  ["#4f7cff", "#6fe7dd"],
  ["#f28e2b", "#e15759"],
  ["#59a14f", "#8cd867"],
  ["#af7aa1", "#ff9da7"],
  ["#2f5bff", "#0ea5e9"],
  ["#e15759", "#f2b279"],
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function initialsOf(name) {
  return (name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function monogramHTML(name, sizeClass = "") {
  const initials = initialsOf(name) || "?";
  const palette = MONOGRAM_PALETTES[hashString(name || "x") % MONOGRAM_PALETTES.length];
  return `<span class="company-logo ${sizeClass}" style="background:linear-gradient(135deg, ${palette[0]}, ${palette[1]})" title="${name}">${initials}</span>`;
}

/* If the real logo file exists, show it; if it fails to load (e.g. you
   haven't added the file yet), automatically fall back to the colored
   initials badge — nothing ever looks broken. */
function handleLogoError(imgEl, name) {
  const mono = monogramHTML(name, imgEl.dataset.size || "");
  const wrapper = document.createElement("span");
  wrapper.innerHTML = mono;
  imgEl.replaceWith(wrapper.firstChild);
}

function companyLogoHTML(name, logoUrl, sizeClass = "") {
  if (!logoUrl) return monogramHTML(name, sizeClass);
  const safeName = (name || "").replace(/'/g, "\\'");
  return `<img src="${logoUrl}" alt="${name}" class="company-logo-img ${sizeClass}" data-size="${sizeClass}" onerror="handleLogoError(this, '${safeName}')" />`;
}

/* ================================
   ✅ Hero (Business Card style)
================================ */
function renderHero() {
  const data = getData();
  const p = data.profile;
  const c = data.company;
  const s = data.stats;

  if (el("photo")) el("photo").src = p.photo;
  if (el("name")) el("name").textContent = p.name;
  if (el("role")) el("role").textContent = c.designation;

  if (el("companyLine")) {
    el("companyLine").innerHTML = `
      ${companyLogoHTML(c.name, c.logo, "sm")}
      <span>${c.name}</span>
      <span class="muted">• ${p.location}</span>
    `;
  }

  if (el("heroStatValue")) el("heroStatValue").textContent = `${s.completedProjects}+`;
  if (el("heroStatValue2")) el("heroStatValue2").textContent = s.dashboardsBuilt;

  if (el("lnkResume")) el("lnkResume").href = "resume.html";
  if (el("lnkProjects")) el("lnkProjects").href = "projects.html";
  if (el("lnkContact")) el("lnkContact").href = "contact.html";

  document.querySelectorAll("[data-brand-logo]").forEach((node) => {
    node.innerHTML = companyLogoHTML(c.name, c.logo, "sm");
  });
  document.querySelectorAll("[data-brand-name]").forEach((node) => {
    node.textContent = `${p.name.split(" ")[0]} Portfolio`;
  });
}

/* ================================
   ✅ KPI Strip
================================ */
function renderKpiStrip() {
  const data = getData();
  const s = data.stats;
  const wrap = el("kpiStrip");
  if (!wrap) return;

  wrap.innerHTML = `
    <div class="kpi"><b>${s.completedProjects ?? 0}</b><span>Projects Completed</span></div>
    <div class="kpi"><b>${s.ongoingProjects ?? 0}</b><span>Ongoing Projects</span></div>
    <div class="kpi"><b>${s.dashboardsBuilt ?? 0}</b><span>Dashboards Built</span></div>
    <div class="kpi"><b>${s.hoursDelivered ?? 0}</b><span>Hours Delivered</span></div>
    <div class="kpi"><b>${s.reportsAutomated ?? 0}</b><span>Reports Automated</span></div>
  `;
}

/* ================================
   ✅ Experience Timeline
================================ */
function renderExperience() {
  const data = getData();
  const wrap = el("expList");
  if (!wrap) return;

  wrap.innerHTML = (data.experience || [])
    .map((item) => {
      const isCurrent = (item.end || "").toLowerCase() === "present";
      return `
        <div class="timeitem">
          <i class="dot"></i>
          <div class="head-row">
            ${companyLogoHTML(item.company, item.logo, "sm")}
            <b>${item.title} — ${item.company}</b>
            ${isCurrent ? '<span class="current-badge">Current</span>' : ""}
          </div>
          <div class="date">${item.start} — ${item.end} · ${item.location}</div>
          <ul>
            ${(item.points || []).map((x) => `<li>${x}</li>`).join("")}
          </ul>
          <div class="chips">
            ${(item.toolsUsed || []).map((t) => `<span class="chip">${t}</span>`).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

/* ================================
   ✅ Skills Matrix
================================ */
function renderSkills() {
  const data = getData();
  const wrapA = el("skillsCardA");
  const wrapB = el("skillsCardB");
  if (!wrapA || !wrapB) return;

  const skillsObj = data.skills || {};
  const keys = Object.keys(skillsObj);
  const half = Math.ceil(keys.length / 2);
  const groupA = keys.slice(0, half);
  const groupB = keys.slice(half);

  const groupHTML = (k) => `
    <div class="skillgroup">
      <b>${k}</b>
      <div class="skilltags">
        ${(skillsObj[k] || []).map((s) => `<span class="chip">${s}</span>`).join("")}
      </div>
    </div>
  `;

  wrapA.innerHTML = groupA.map(groupHTML).join("");
  wrapB.innerHTML = groupB.map(groupHTML).join("");
}

/* ================================
   ✅ Education & Certifications
================================ */
function renderEducationCertifications() {
  const data = getData();
  const eduWrap = el("eduList");
  const certWrap = el("certList");

  if (eduWrap) {
    eduWrap.innerHTML = (data.education || [])
      .map(
        (e) => `
          <div class="edu-item">
            <b>${e.degree}</b>
            <div>${e.institute}</div>
            <div>${e.year} • ${e.score}</div>
          </div>
        `
      )
      .join("");
  }

  if (certWrap) {
    certWrap.innerHTML = `
      <div class="cert-list">
        ${(data.certifications || []).map((c) => `<div class="cert-item">🎓 ${c}</div>`).join("")}
      </div>
    `;
  }
}

/* ================================
   ✅ Projects — Accordion List
================================ */
function renderProjects(containerId) {
  const data = getData();
  const wrap = el(containerId);
  if (!wrap) return;

  wrap.innerHTML = (data.projects || [])
    .map((item, i) => {
      const imgs = Array.isArray(item.images) ? item.images : [];
      const gallery = imgs.map((img) => `<img src="${img}" alt="${item.title}" loading="lazy" />`).join("");
      const githubHtml = item.github
        ? `<a class="proj-github" href="${item.github}" target="_blank" rel="noreferrer">🔗 View on GitHub</a>`
        : "";

      return `
        <div class="project ${i === 0 ? "open" : ""}">
          <div class="projecttop" onclick="toggleProject(this)">
            <img class="projectimg" src="${imgs[0] || ""}" alt="${item.title}" />
            <div>
              <h3>${item.title}</h3>
              <small>${(item.stack || []).join(" · ")}</small>
            </div>
            <span class="arrow">⌄</span>
          </div>
          <div class="projectbody">
            <div class="gallery">${gallery}</div>
            <ul>
              ${(item.desc || []).map((d) => `<li>${d}</li>`).join("")}
            </ul>
            <div class="chips" style="margin:10px 0 4px">
              ${(item.stack || []).map((t) => `<span class="chip">${t}</span>`).join("")}
            </div>
            ${githubHtml}
          </div>
        </div>
      `;
    })
    .join("");
}

function toggleProject(head) {
  const p = head.parentElement;
  document.querySelectorAll(".project").forEach((x) => {
    if (x !== p) x.classList.remove("open");
  });
  p.classList.toggle("open");
}

/* ================================
   ✅ Clients — Client Cards
================================ */
function renderClients(containerId) {
  const data = getData();
  const wrap = el(containerId);
  if (!wrap) return;

  wrap.innerHTML = (data.clients || [])
    .map(
      (c) => `
        <div class="clientcard">
          <img class="clogo" src="${c.logo}" alt="${c.name}" />
          <div>
            <b>${c.name}</b>
            <span>${c.industry || ""}</span>
          </div>
        </div>
      `
    )
    .join("");
}

/* ================================
   ✅ Articles — Featured Cards
================================ */
function renderArticlesFromList(containerId, items, limit) {
  const wrap = el(containerId);
  if (!wrap) return;
  if (limit) items = items.slice(0, limit);

  wrap.innerHTML = items
    .map(
      (a) => `
        <article class="card article">
          <div class="articleTop"><span class="cat">${a.category} · ${a.readTime}</span></div>
          <h3>${a.title}</h3>
          <div class="body">${a.summary}</div>
          <div class="articlefoot">
            <span>${a.date}</span>
            <a href="article.html?id=${a.id}"><b>Read →</b></a>
          </div>
        </article>
      `
    )
    .join("");
}

/* ================================
   ✅ Domain Donut (bonus insight card)
================================ */
let donutChart = null;

function renderDonut() {
  const data = getData();
  const wrap = el("donut");
  if (!wrap) return;

  const labels = Object.keys(data.stats.domainBreakdown || {});
  const values = Object.values(data.stats.domainBreakdown || {});
  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  const palette = ["#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7"];

  if (donutChart) donutChart.destroy();

  donutChart = new Chart(wrap, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: labels.map((_, i) => palette[i % palette.length]),
          borderColor: theme === "dark" ? "#0c0e1a" : "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: theme === "dark" ? "#ffffff" : "#111111", font: { size: 12, weight: "600" }, padding: 12, boxWidth: 12, boxHeight: 12 },
        },
        tooltip: {
          enabled: true,
          titleColor: theme === "dark" ? "#ffffff" : "#111111",
          bodyColor: theme === "dark" ? "#ffffff" : "#111111",
          backgroundColor: theme === "dark" ? "#171335" : "#ffffff",
          borderColor: theme === "dark" ? "#2a2350" : "#e5e7eb",
          borderWidth: 1,
        },
        datalabels: {
          color: theme === "dark" ? "#ffffff" : "#111111",
          font: { weight: "900", size: 11 },
          formatter: (value, ctx) => {
            const arr = ctx.chart.data.datasets[0].data;
            const total = arr.reduce((a, b) => a + b, 0);
            return ((value / total) * 100).toFixed(0) + "%";
          },
        },
      },
    },
  });
}

/* ================================
   ✅ Resume Page
================================ */
function renderResumePage() {
  const data = getData();
  const r = data.resume || {};
  const s = data.stats || {};
  const p = data.profile;
  const c = data.company;

  if (el("resumeImg1")) el("resumeImg1").src = r.previewImg1 || "./Resume_page-0001.jpg";
  if (el("resumeImg2")) el("resumeImg2").src = r.previewImg2 || "./Resume_page-0002.jpg";
  if (el("resumeDownload")) el("resumeDownload").href = r.fileUrl || "./assets/Resume.pdf";
  if (el("resumeOpen")) el("resumeOpen").href = r.fileUrl || "./assets/Resume.pdf";
  if (el("resumeUpdated")) el("resumeUpdated").textContent = r.updatedOn || "-";

  if (el("resumeBio")) {
    el("resumeBio").textContent = `${c.designation} with experience across SQL, BI dashboards, stakeholder management, data preparation and SaaS analytics.`;
  }

  if (el("resumeChips")) {
    el("resumeChips").innerHTML = `
      <span class="chip">${s.completedProjects ?? 0}+ Projects</span>
      <span class="chip">${s.dashboardsBuilt ?? 0} Dashboards</span>
      <span class="chip">SQL + BI</span>
    `;
  }

  trackVisit();
}

/* ================================
   ✅ Contact Page
================================ */
function renderContactPage() {
  const data = getData();
  const p = data.profile;

  if (el("contactEmail")) el("contactEmail").textContent = p.email;
  if (el("contactLinkedIn")) el("contactLinkedIn").textContent = p.linkedin.replace("https://www.", "");
  if (el("contactGitHub")) el("contactGitHub").textContent = p.github.replace("https://", "");
  if (el("contactLocation")) el("contactLocation").textContent = p.location;

  if (el("lnkLinkedIn2")) el("lnkLinkedIn2").href = p.linkedin;
  if (el("lnkGitHub2")) el("lnkGitHub2").href = p.github;

  const form = el("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = el("cfName") ? el("cfName").value : "";
      const email = el("cfEmail") ? el("cfEmail").value : "";
      const subject = el("cfSubject") ? el("cfSubject").value : "Portfolio enquiry";
      const message = el("cfMessage") ? el("cfMessage").value : "";

      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      window.location.href = `mailto:${p.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  trackVisit();
}

/* ================================
   ✅ Page Renderers
================================ */
function renderDashboard() {
  renderHero();
  renderKpiStrip();
  renderExperience();
  renderSkills();
  renderEducationCertifications();
  renderDonut();
  trackVisit();
}

function renderProjectsPage() {
  renderHero();
  renderProjects("projectsList");
  trackVisit();
}

function renderClientsPage() {
  renderHero();
  renderClients("clientsList");
  trackVisit();
}

function renderArticlesPage() {
  renderHero();
  loadArticles().then((articles) => renderArticlesFromList("articlesList", articles));
  trackVisit();
}

/* ================================
   ✅ Single Article Page (article.html?id=a1)
   This is the page you actually paste on LinkedIn — each article
   gets its own shareable, permanent URL on your own site.
================================ */
function renderArticlePage() {
  renderHero();

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const isAdmin = sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";

  loadArticles().then((articles) => {
    const article = articles.find((a) => a.id === id);
    const wrap = el("articleContent");

    if (!article) {
      if (wrap) {
        wrap.innerHTML = `
          <div class="notice">
            Couldn't find that article. <a href="articles.html"><b>← Back to all articles</b></a>
          </div>
        `;
      }
      return;
    }

    if (el("articleCat")) el("articleCat").textContent = `${article.category} · ${article.readTime}`;
    if (el("articleTitle")) el("articleTitle").textContent = article.title;
    if (el("articleDate")) el("articleDate").textContent = article.date;
    document.title = `${article.title} — Gaurav Pujari`;

    if (wrap) {
      wrap.innerHTML = (article.content || [article.summary]).map((para) => `<p>${para}</p>`).join("");
    }

    // ✅ Copy Link is admin-only — regular visitors never see it
    const shareBox = el("adminOnlyShare");
    if (shareBox) {
      shareBox.style.display = isAdmin ? "block" : "none";

      if (isAdmin) {
        const shareUrl = window.location.href;
        if (el("shareUrlBox")) el("shareUrlBox").textContent = shareUrl;
        const copyBtn = el("btnCopyLink");
        if (copyBtn) {
          copyBtn.onclick = () => {
            navigator.clipboard
              .writeText(shareUrl)
              .then(() => {
                copyBtn.textContent = "Copied!";
                setTimeout(() => (copyBtn.textContent = "Copy Link"), 1500);
              })
              .catch(() => alert(shareUrl));
          };
        }
      }
    }
  });

  trackVisit();
}

/* =========================================================
   ✅ VISITOR ANALYTICS (Admin Log)
   -----------------------------------------------------------
   No backend server is available for this static site, so this
   records visits into the BROWSER's own localStorage. That means:
     • Opening the site yourself and checking /admin.html will
       show your own visits immediately — zero setup.
     • A visit from someone else's phone/laptop (e.g. an HR
       recruiter) is stored on THEIR device, not yours, so it
       will not automatically appear in your admin log unless
       you connect a free cloud sync (see CLOUD_SYNC_URL below
       and the setup note on the Admin page).
========================================================= */
const VISITS_KEY = "gaurav_portfolio_visits_v1";
const MAX_VISITS_STORED = 300;

const CLOUD_SYNC_URL = ""; // e.g. "https://api.jsonbin.io/v3/b/XXXXXXXX"
const CLOUD_SYNC_KEY = ""; // your X-Master-Key from jsonbin.io

function detectDevice(ua) {
  if (/mobile/i.test(ua)) return "Mobile";
  if (/tablet|ipad/i.test(ua)) return "Tablet";
  return "Desktop";
}

function detectBrowser(ua) {
  if (/edg/i.test(ua)) return "Edge";
  if (/chrome/i.test(ua) && !/edg/i.test(ua)) return "Chrome";
  if (/safari/i.test(ua) && !/chrome/i.test(ua)) return "Safari";
  if (/firefox/i.test(ua)) return "Firefox";
  return "Other";
}

function getVisits() {
  try {
    return JSON.parse(localStorage.getItem(VISITS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveVisits(list) {
  try {
    localStorage.setItem(VISITS_KEY, JSON.stringify(list.slice(-MAX_VISITS_STORED)));
  } catch {}
}

function trackVisit() {
  if (document.body.getAttribute("data-page") === "admin") return;

  const ua = navigator.userAgent || "";
  const record = {
    id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    time: new Date().toISOString(),
    page: document.title || location.pathname,
    referrer: document.referrer || "Direct / Unknown",
    device: detectDevice(ua),
    browser: detectBrowser(ua),
    lang: navigator.language || "-",
    location: "Resolving…",
  };

  const list = getVisits();
  list.push(record);
  saveVisits(list);

  fetch("https://ipapi.co/json/")
    .then((r) => (r.ok ? r.json() : null))
    .then((geo) => {
      if (!geo) return;
      const loc = [geo.city, geo.region, geo.country_name].filter(Boolean).join(", ");
      const org = geo.org ? ` (${geo.org})` : "";
      const updated = getVisits().map((v) => (v.id === record.id ? { ...v, location: (loc || "Unknown") + org } : v));
      saveVisits(updated);
      if (document.body.getAttribute("data-page") === "admin") renderVisitorLog();
    })
    .catch(() => {
      const updated = getVisits().map((v) => (v.id === record.id ? { ...v, location: "Unavailable" } : v));
      saveVisits(updated);
    });

  if (CLOUD_SYNC_URL && CLOUD_SYNC_KEY) {
    fetch(CLOUD_SYNC_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Master-Key": CLOUD_SYNC_KEY },
      body: JSON.stringify({ record }),
    }).catch(() => {});
  }
}

/* =========================================================
   ✅ ARTICLES — shared storage (so admin edits show to everyone)
   -----------------------------------------------------------
   Same static-site limitation as visits: without a shared store,
   anything saved in the Admin panel is only visible in the same
   browser that saved it. To make articles actually visible to
   real visitors, configure a free jsonbin.io bin below — steps
   are also shown on the Admin page.
========================================================= */
const ARTICLES_SYNC_URL = "https://api.jsonbin.io/v3/b/6ab91765ffd5d160533470d4"; // e.g. "https://api.jsonbin.io/v3/b/XXXXXXXX"
const ARTICLES_SYNC_KEY = "$2a$10$z2eiCYzq/fuz6ewgeZECbud7mfCabWVnzfbmx.rCAQLfyS2m4tQei"; // your X-Master-Key from jsonbin.io

function articlesSyncConfigured() {
  return Boolean(ARTICLES_SYNC_URL && ARTICLES_SYNC_KEY);
}

/* Resolves the list of articles to show: cloud bin if configured
   (so every visitor sees the same list), otherwise whatever is
   saved locally (or the built-in defaults). */
async function loadArticles() {
  if (articlesSyncConfigured()) {
    try {
      const res = await fetch(`${ARTICLES_SYNC_URL}/latest`, {
        headers: { "X-Master-Key": ARTICLES_SYNC_KEY },
      });
      if (res.ok) {
        const json = await res.json();
        const arr = json && json.record && Array.isArray(json.record.articles) ? json.record.articles : null;
        if (arr) return arr;
      }
    } catch {
      /* fall through to local */
    }
  }
  return getData().articles || [];
}

async function saveArticlesCloud(articles) {
  if (!articlesSyncConfigured()) return false;
  try {
    const res = await fetch(ARTICLES_SYNC_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Master-Key": ARTICLES_SYNC_KEY },
      body: JSON.stringify({ articles }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/* Always saves locally (so it works instantly for you), and also
   pushes to the cloud bin when configured (so it works for everyone). */
async function persistArticles(articles) {
  const data = getData();
  data.articles = articles;
  localStorage.setItem(LS_KEY, JSON.stringify(data));
  return await saveArticlesCloud(articles);
}

/* ================================
   Admin Page
================================ */
const ADMIN_SESSION_KEY = "gaurav_admin_session_v1";
const ADMIN_PASSWORD = "Gaurav@8483"; // ⚠️ change this before sharing the repo publicly

function renderVisitorLog() {
  const wrap = el("visitTableWrap");
  const countEl = el("visitCount");
  if (!wrap) return;

  const visits = getVisits().slice().reverse();
  if (countEl) countEl.textContent = visits.length;

  if (!visits.length) {
    wrap.innerHTML = `<div class="notice">No visits recorded yet on this device. Open your live portfolio link and browse a few pages, then come back here.</div>`;
    return;
  }

  wrap.innerHTML = `
    <table class="visit-table">
      <thead>
        <tr><th>Time</th><th>Page</th><th>Referrer</th><th>Device</th><th>Browser</th><th>Approx. Location</th></tr>
      </thead>
      <tbody>
        ${visits
          .map(
            (v) => `
              <tr>
                <td>${new Date(v.time).toLocaleString()}</td>
                <td>${v.page}</td>
                <td>${v.referrer}</td>
                <td>${v.device}</td>
                <td>${v.browser}</td>
                <td>${v.location}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderAdminPage() {
  renderHero();

  const loginBox = el("adminLogin");
  const panel = el("adminPanel");
  const visitsPanel = el("adminPanelVisits");
  const articlesPanel = el("adminPanelArticles");
  const isLoggedIn = sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";

  function showPanel() {
    if (loginBox) loginBox.style.display = "none";
    if (panel) panel.style.display = "block";
    if (visitsPanel) visitsPanel.style.display = "block";
    if (articlesPanel) articlesPanel.style.display = "block";

    const data = getData();
    if (el("inpCompleted")) el("inpCompleted").value = data.stats.completedProjects ?? 0;
    if (el("inpOngoing")) el("inpOngoing").value = data.stats.ongoingProjects ?? 0;
    if (el("inpDashboards")) el("inpDashboards").value = data.stats.dashboardsBuilt ?? 0;
    if (el("inpHours")) el("inpHours").value = data.stats.hoursDelivered ?? 0;
    if (el("inpReports")) el("inpReports").value = data.stats.reportsAutomated ?? 0;

    renderVisitorLog();
    renderArticleAdmin();
  }

  if (isLoggedIn) showPanel();

  const btnLogin = el("btnAdminLogin");
  if (btnLogin) {
    btnLogin.onclick = () => {
      const pw = el("adminPw") ? el("adminPw").value : "";
      if (pw === ADMIN_PASSWORD) {
        sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
        showPanel();
      } else {
        alert("Incorrect password.");
      }
    };
  }

  const btnLogout = el("btnLogout");
  if (btnLogout) {
    btnLogout.onclick = () => {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      if (loginBox) loginBox.style.display = "block";
      if (panel) panel.style.display = "none";
      if (visitsPanel) visitsPanel.style.display = "none";
      if (articlesPanel) articlesPanel.style.display = "none";
    };
  }

  const btnSave = el("btnSaveKpis");
  if (btnSave) {
    btnSave.onclick = () => {
      const data = getData();
      data.stats.completedProjects = Number(el("inpCompleted").value) || 0;
      data.stats.ongoingProjects = Number(el("inpOngoing").value) || 0;
      data.stats.dashboardsBuilt = Number(el("inpDashboards").value) || 0;
      data.stats.hoursDelivered = Number(el("inpHours").value) || 0;
      data.stats.reportsAutomated = Number(el("inpReports").value) || 0;

      localStorage.setItem(LS_KEY, JSON.stringify(data));
      alert("Saved! (Reflects on this browser — refresh the dashboard to see it.)");
    };
  }

  const btnClearVisits = el("btnClearVisits");
  if (btnClearVisits) {
    btnClearVisits.onclick = () => {
      if (confirm("Clear all locally recorded visits?")) {
        localStorage.removeItem(VISITS_KEY);
        renderVisitorLog();
      }
    };
  }

  wireArticleAdminControls();
}

/* ================================
   ✅ Admin — Manage Articles
================================ */
function clearArticleForm() {
  ["afId", "afTitle", "afCategory", "afReadTime", "afDate", "afSummary", "afContent"].forEach((id) => {
    if (el(id)) el(id).value = "";
  });
}

async function renderArticleAdmin() {
  const listWrap = el("articleAdminList");
  const notice = el("articleSyncNotice");
  if (!listWrap) return;

  if (notice) {
    notice.innerHTML = articlesSyncConfigured()
      ? "✅ Cloud sync is configured — articles you save here will be visible to <b>all visitors</b>, on any device."
      : "⚠️ Cloud sync isn't configured yet, so articles you add here only save to <b>this browser</b> and won't be visible to real visitors. See setup steps below.";
  }

  const articles = await loadArticles();

  listWrap.innerHTML = articles
    .map(
      (a) => `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; padding:10px 0; border-bottom:1px solid var(--border)">
          <div>
            <b style="font-size:13px">${a.title}</b>
            <div class="muted" style="font-size:11px; margin-top:2px">${a.category} • ${a.date}</div>
          </div>
          <div style="display:flex; gap:6px; flex-shrink:0">
            <button class="btn" data-edit-article="${a.id}">Edit</button>
            <button class="btn" data-delete-article="${a.id}">Delete</button>
          </div>
        </div>
      `
    )
    .join("");

  listWrap.querySelectorAll("[data-edit-article]").forEach((btn) => {
    btn.onclick = async () => {
      const id = btn.getAttribute("data-edit-article");
      const list = await loadArticles();
      const a = list.find((x) => x.id === id);
      if (!a) return;
      if (el("afId")) el("afId").value = a.id;
      if (el("afTitle")) el("afTitle").value = a.title || "";
      if (el("afCategory")) el("afCategory").value = a.category || "";
      if (el("afReadTime")) el("afReadTime").value = a.readTime || "";
      if (el("afDate")) el("afDate").value = a.date || "";
      if (el("afSummary")) el("afSummary").value = a.summary || "";
      if (el("afContent")) el("afContent").value = (a.content || []).join("\n\n");
      if (el("articleForm")) el("articleForm").style.display = "block";
    };
  });

  listWrap.querySelectorAll("[data-delete-article]").forEach((btn) => {
    btn.onclick = async () => {
      if (!confirm("Delete this article? This can't be undone.")) return;
      const id = btn.getAttribute("data-delete-article");
      const list = await loadArticles();
      const next = list.filter((x) => x.id !== id);
      await persistArticles(next);
      renderArticleAdmin();
    };
  });
}

function wireArticleAdminControls() {
  const btnNew = el("btnNewArticle");
  if (btnNew) {
    btnNew.onclick = () => {
      clearArticleForm();
      if (el("articleForm")) el("articleForm").style.display = "block";
    };
  }

  const btnCancel = el("btnCancelArticle");
  if (btnCancel) {
    btnCancel.onclick = () => {
      if (el("articleForm")) el("articleForm").style.display = "none";
      clearArticleForm();
    };
  }

  const btnSaveArticle = el("btnSaveArticle");
  if (btnSaveArticle) {
    btnSaveArticle.onclick = async () => {
      const title = el("afTitle") ? el("afTitle").value.trim() : "";
      if (!title) {
        alert("Please enter a title.");
        return;
      }

      const articles = await loadArticles();
      const id = (el("afId") && el("afId").value) || `a${Date.now()}`;

      const updated = {
        id,
        title,
        category: el("afCategory") ? el("afCategory").value.trim() : "",
        readTime: (el("afReadTime") && el("afReadTime").value.trim()) || "5 min read",
        date: el("afDate") ? el("afDate").value.trim() : "",
        summary: el("afSummary") ? el("afSummary").value.trim() : "",
        content: el("afContent")
          ? el("afContent")
              .value.split(/\n\s*\n/)
              .map((p) => p.trim())
              .filter(Boolean)
          : [],
      };

      const idx = articles.findIndex((a) => a.id === id);
      const next = idx >= 0 ? articles.map((a, i) => (i === idx ? updated : a)) : [updated, ...articles];

      const synced = await persistArticles(next);
      if (el("articleForm")) el("articleForm").style.display = "none";
      clearArticleForm();
      renderArticleAdmin();

      if (!synced && articlesSyncConfigured()) {
        alert("Saved locally, but the cloud sync request failed — check your ARTICLES_SYNC_URL/KEY.");
      }
    };
  }
}

/* ================================
   Boot
================================ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setActiveNav();

  const page = document.body.getAttribute("data-page");

  if (page === "dashboard") renderDashboard();
  if (page === "projects") renderProjectsPage();
  if (page === "clients") renderClientsPage();
  if (page === "articles") renderArticlesPage();
  if (page === "article") renderArticlePage();
  if (page === "resume") renderResumePage();
  if (page === "contact") renderContactPage();
  if (page === "admin") renderAdminPage();
});
