export const profile = {
  name: 'Khaled Lakhdher',
  roles: ['Computer Engineer', 'AI & Data Science', 'Full-Stack AI Developer'],
  tagline:
    'I build grounded conversational AI, RAG systems, and applied deep-learning products - from model to full-stack deployment.',
  summary:
    "I'm an AI and data engineer who turns models and data into dependable products. I build LLM and RAG systems, multi-agent platforms, and end-to-end ML pipelines, with a metrics-first focus on data quality, evaluation, and clean deployment. Comfortable across the stack: Python, SQL, FastAPI, and Docker.",
  location: 'Sousse, Tunisia',
  email: 'ing.khaledlakhdher@gmail.com',
  phone: '+216 29 843 899',
  linkedin: 'https://www.linkedin.com/in/khaled-lakhdher',
  resumeEn: '/resume/Khaled_Lakhdher_CV_EN.pdf',
  resumeFr: '/resume/Khaled_Lakhdher_CV_FR.pdf',
  avatar: '/khaled.jpg',
  github: 'https://github.com/KhaledLakhdher',
  availability: 'Open to AI / LLM engineering roles · France, Europe, Gulf or remote',
}

// Headline numbers shown under the hero. Keep them verifiable from the projects below.
export const stats = [
  { value: '9', label: 'LangGraph agents in production' },
  { value: '168', label: 'tests guarding my Text-to-SQL harness' },
  { value: '1.8×', label: 'overstatement a single LLM score hid' },
  { value: '3', label: 'full-stack AI products built end to end' },
]

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    role: 'AI Engineer',
    company: 'CTT - Carthage Training & Technologies',
    period: 'August 2026 - Present',
    location: 'Hammamet, Tunisia',
    bullets: [
      "Continued on Hotel Mind full-time after the end-of-studies internship, shipping new features and migrating the platform's data layer onto Nextcloud.",
    ],
    tags: ['LangChain', 'LangGraph', 'Multi-Agent', 'FastAPI', 'Next.js'],
  },
  {
    role: 'Artificial Intelligence Developer Intern (End-of-Studies Project)',
    company: 'CTT - Carthage Training & Technologies',
    period: 'February 2026 - July 2026',
    location: 'Hammamet, Tunisia',
    bullets: [
      'Designed and developed Hotel Mind, a multilingual, multi-agent hotel search and booking assistant: 9 LangChain/LangGraph agents call 32+ tools across 10 real SOAP endpoints for live hotel, room, and pricing data.',
      'Grounded every answer in live tool output, not model memory, via a hybrid flow (AI search, a guest-detail form, a sandboxed SOAP reservation) on a full-stack FastAPI + Next.js app with LangSmith tracing.',
    ],
    tags: ['LangChain', 'LangGraph', 'Multi-Agent', 'SOAP APIs', 'FastAPI', 'Next.js'],
  },
  {
    role: 'Artificial Intelligence Developer Intern',
    company: 'CTT - Carthage Training & Technologies',
    period: 'July 2025 - September 2025',
    location: 'Hammamet, Tunisia',
    bullets: [
      'Fine-tuned a Hugging Face NLP model to classify customer reviews into three sentiment classes, improving accuracy by 25% over the baseline.',
      'Built a Django backend to manage customer data and automate export of analysis results to Excel for reporting.',
      'Owned the end-to-end Python pipeline for preprocessing, training, and integration.',
    ],
    tags: ['NLP', 'Hugging Face', 'Django', 'Python'],
  },
]

export type ProjectMedia =
  | { kind: 'video'; src: string; poster: string }
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'bars'; caption: string; bars: { label: string; value: number }[] }

export type Project = {
  title: string
  blurb: string
  bullets: string[]
  tags: string[]
  featured?: boolean
  github?: string
  demo?: string
  private?: boolean
  inProgress?: boolean
  media?: ProjectMedia
}

const allProjects: Project[] = [
  {
    title: 'Nexus AI - Artificial Intelligence Employee Management Platform',
    blurb:
      'A multi-tenant platform where LLM agents are governed like employees - scoped permissions, vector memory, orchestration, and per-agent cost tracking.',
    bullets: [
      'Engineered a multi-tenant full-stack platform (FastAPI, PostgreSQL/pgvector, Redis, Next.js, TypeScript) where LLM agents are governed like employees: scoped IAM-style permissions enforced at the tool-execution boundary, hierarchical vector memory with semantic recall, and a provider-agnostic model gateway (Anthropic / OpenRouter-Gemini) with per-agent cost tracking.',
      'Engineered a multi-agent orchestration engine over a Redis Streams message bus with real-time WebSocket monitoring and an append-only audit log, running live agents for a fraction of a cent per run.',
    ],
    tags: ['FastAPI', 'pgvector', 'Redis Streams', 'Next.js', 'Multi-Agent', 'WebSockets'],
    featured: true,
    github: 'https://github.com/KhaledLakhdher/nexus-ai',
    demo: '/demos/nexus-ai-demo.mp4',
    media: { kind: 'video', src: '/demos/nexus-ai-demo.mp4', poster: '/demos/nexus-ai-poster.jpg' },
  },
  {
    title: 'Steam Player Forecaster - Production MLOps Pipeline',
    blurb:
      'A production MLOps pipeline forecasting Steam player counts, with a versioned model registry, drift-triggered retraining, and live monitoring.',
    bullets: [
      'Engineered a reproducible ML lifecycle (scikit-learn, MLflow, FastAPI, Pandera, Docker): time-based training, a versioned model registry with @champion promotion, and a registry-backed prediction API with schema-validated inputs.',
      'Added production monitoring - PSI drift detection with an automated champion/challenger retraining loop (GitHub Actions) and a CI eval gate - plus a Streamlit dashboard and a scheduled collector that keeps the system live.',
    ],
    tags: ['MLOps', 'MLflow', 'FastAPI', 'scikit-learn', 'Docker', 'GitHub Actions', 'Streamlit'],
    featured: true,
    github: 'https://github.com/KhaledLakhdher/steam-player-mlops',
    demo: '/demos/steam-demo.mp4',
    media: { kind: 'video', src: '/demos/steam-demo.mp4', poster: '/demos/steam-poster.jpg' },
  },
  {
    title: 'CodeReview Evaluation - Benchmarked LLM Code Reviewer',
    blurb:
      'An AI code reviewer with a reproducible evaluation harness that separates localization from diagnosis, showing single-score benchmarks overstate true LLM capability.',
    bullets: [
      'Developed an AI code-review pipeline (Claude API, structured JSON findings) and a reproducible evaluation harness on a normalized BugsInPy dataset (501 real Python bugs with ground-truth fixes), scoring localization and diagnosis as separate metrics via an LLM-as-judge.',
      'On 49 real bugs, showed a single "bug-detection" score overstates true capability ~1.8× (78% localization vs 43% diagnosis); compared 3 model tiers (Opus / Sonnet / Haiku) on the same 24 bugs, and shipped an interactive Streamlit demo. Small samples, so the result is directional.',
    ],
    tags: ['LLM-as-a-Judge', 'Benchmarking', 'Claude API', 'Evaluation', 'Streamlit', 'Python'],
    featured: true,
    github: 'https://github.com/KhaledLakhdher/llm-code-review-eval',
    demo: '/demos/code-review-demo.mp4',
    media: { kind: 'video', src: '/demos/code-review-demo.mp4', poster: '/demos/code-review-poster.jpg' },
  },
  {
    title: 'Hotel Mind - Multi-Agent Travel Assistant',
    blurb:
      'A multilingual, multi-agent hotel search and booking assistant grounded entirely in live SOAP data, so it never invents a price, a room, or a booking.',
    bullets: [
      'Orchestrated 9 specialized LangChain/LangGraph agents across 32+ tools and 10 real SOAP endpoints (live hotel search, pricing, rooms, capacity, bookings), so every answer is grounded in tool output, never invented by the LLM, in any language the user writes in.',
      'Built a hybrid booking flow: AI-driven search and context-aware conversation (pronouns, follow-ups, city switches) hands off to a UI form for guest details and a sandboxed SOAP reservation returning a real voucher, on a full-stack FastAPI + Next.js app with LangSmith tracing.',
    ],
    tags: ['LangChain', 'LangGraph', 'Multi-Agent', 'SOAP APIs', 'FastAPI', 'Next.js', 'LangSmith'],
    featured: true,
    private: true,
    demo: '/demos/hotel-mind-demo.mp4',
    media: { kind: 'video', src: '/demos/hotel-mind-demo.mp4', poster: '/demos/hotel-mind-poster.jpg' },
  },
  {
    title: 'Personalized Voice Assistant',
    blurb:
      'A personalized voice assistant combining speech-to-text, text-to-speech, and realistic voice cloning.',
    bullets: [
      'Fine-tuned Whisper (STT) and SpeechT5 (TTS) for a personalized voice pipeline.',
      'Realistic voice cloning via CSM-1B for natural, on-brand responses.',
      'Cut response time by 30% while improving engagement.',
    ],
    tags: ['ASR', 'TTS', 'Voice Cloning', 'Fine-tuning'],
    featured: true,
    private: true,
  },
  {
    title: 'DecisionFlow - AI Business Analyst',
    blurb:
      'Upload a spreadsheet, get a data warehouse: cleaning, a star schema, forecasts, and an analyst you can ask questions.',
    bullets: [
      'Engineered a multi-tenant analytics platform (FastAPI, PostgreSQL, DuckDB, Polars, Redis, Next.js, TypeScript) carrying an uploaded CSV through a raw → clean → star pipeline, with tenant isolation enforced by PostgreSQL row-level security rather than application checks.',
      'Engineered the analytics layer: foreign keys inferred from value containment, Holt-Winters forecasting, MAD anomaly detection, and RFM churn scoring, fronted by a Gemini narrative layer whose generated SQL clears a three-layer sandbox and refuses rather than guesses when the data cannot support an answer.',
    ],
    tags: ['FastAPI', 'DuckDB', 'PostgreSQL', 'RLS', 'Polars', 'Gemini', 'scikit-learn', 'Next.js', 'Playwright'],
    featured: true,
    github: 'https://github.com/KhaledLakhdher/DecisionFlow',
    demo: '/demos/decisionflow-demo.mp4',
    media: { kind: 'video', src: '/demos/decisionflow-demo.mp4', poster: '/demos/decisionflow-poster.jpg' },
  },
  {
    title: 'Text-to-SQL with Guardrails',
    blurb:
      'A correctness-and-safety harness for LLM-generated SQL: it measures how often and how the model is wrong, and the answer can never be a DROP TABLE.',
    bullets: [
      'Built a deliberately nasty analytics schema seeded with 8 production correctness traps (soft deletes, join fan-out, multi-currency, fiscal year…); 4 of them return a silently wrong number rather than an error, with the error measured on the seeded data.',
      'Enforced safety as layers, not prompt text: a read-only database role, AST inspection with sqlglot (single SELECT, table allowlist, function denylist), an injected LIMIT and an EXPLAIN cost ceiling, plus a 150-pair evaluation set and 168 passing tests.',
    ],
    tags: ['Text-to-SQL', 'Guardrails', 'sqlglot', 'PostgreSQL', 'FastAPI', 'Evaluation'],
    featured: true,
    inProgress: true,
    github: 'https://github.com/KhaledLakhdher/text-to-sql',
    demo: '/demos/text-to-sql-demo.mp4',
    media: { kind: 'video', src: '/demos/text-to-sql-demo.mp4', poster: '/demos/text-to-sql-poster.jpg' },
  },
]

// Display order: strongest proof first (live demo, production system, headline result).
const projectOrder = ['DecisionFlow', 'Hotel Mind', 'CodeReview', 'Nexus AI', 'Text-to-SQL', 'Steam', 'Voice']
export const projects: Project[] = projectOrder.map((key) => {
  const p = allProjects.find((x) => x.title.includes(key))
  if (!p) throw new Error(`projectOrder: no project matches "${key}"`)
  return p
})

// Smaller public projects, listed under the project grid.
export const moreProjects = [
  { title: 'Neapolis', blurb: 'AI operating platform for accounting firms', github: 'https://github.com/KhaledLakhdher/neapolis' },
  {
    title: 'Freight rate prediction',
    blurb: 'LightGBM with temporal validation on 48k loads',
    github: 'https://github.com/KhaledLakhdher/freight-rate-prediction',
  },
]

export type SkillGroup = { label: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    label: 'Programming Languages',
    items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Java', 'C'],
  },
  {
    label: 'AI & LLM Engineering',
    items: ['PyTorch', 'TensorFlow', 'Transformers', 'Hugging Face', 'scikit-learn', 'LangChain', 'LangGraph'],
  },
  {
    label: 'Backend & Data',
    items: ['FastAPI', 'Django', 'Flask', 'PostgreSQL', 'Pandas', 'NumPy'],
  },
  {
    label: 'Frontend, Cloud & Tools',
    items: ['Next.js', 'React.js', 'Tailwind CSS', 'Docker', 'AWS', 'Git', 'GitHub', 'Power BI', 'Streamlit', 'Postman'],
  },
  {
    label: 'Concepts & Methods',
    items: [
      'Large Language Models (LLMs)',
      'RAG (Retrieval-Augmented Generation)',
      'AI Agents',
      'Agentic AI',
      'Multi-Agent Systems',
      'Natural Language Processing (NLP)',
      'Machine Learning (ML)',
      'Deep Learning (DL)',
      'Agile/Scrum',
    ],
  },
]

export type Certification = { name: string; issuer: string; date: string }

export const certifications: Certification[] = [
  { name: 'Building Transformer-Based NLP Applications', issuer: 'NVIDIA', date: 'Dec 2025' },
  { name: 'Fundamentals of Deep Learning', issuer: 'NVIDIA', date: 'Nov 2025' },
  { name: 'Applications of AI for Predictive Maintenance', issuer: 'NVIDIA', date: 'Oct 2025' },
  { name: 'CCNA 1: Introduction to Networks', issuer: 'Cisco Networking Academy', date: 'Mar 2024' },
  { name: 'CCNA 2: Switching, Routing & Wireless Essentials', issuer: 'Cisco Networking Academy', date: 'Mar 2024' },
]

export type Education = { degree: string; school: string; period: string; location: string }

export const education: Education[] = [
  {
    degree: 'Computer Engineering - AI & Data Science',
    school: 'EPI - International Polytechnic School',
    period: '2023 - 2026',
    location: 'Sousse, Tunisia',
  },
  {
    degree: 'Preparatory Cycle',
    school: 'EPI - Private International Polytechnic School',
    period: '2021 - 2023',
    location: 'Sousse, Tunisia',
  },
]

export const languages = [
  { language: 'French', level: 'DELF B2' },
  { language: 'English', level: 'TOEIC 825/990' },
  { language: 'Arabic', level: 'Native' },
]
