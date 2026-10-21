// Centralized, verified data source for Mangaleswaran M N's portfolio
// Derived directly from the latest verified resume and professional experience

export const personalInfo = {
  name: "Mangaleswaran M N",
  shortName: "Mangaleswaran",
  initials: "MNM",
  title: "Frontend Developer | React.js | Next.js | TypeScript",
  headline: "Building Modern, High-Performance Web Applications with React, Next.js & TypeScript",
  bio: "Frontend Developer with 1+ year of professional product development experience at GegoSoft Technologies and a 10-month Full Stack Development internship. Proven track record delivering enterprise healthcare platforms (HIS/EHR) and omnichannel POS solutions. Deep expertise in real-time WebSockets, AG-Grid data tables, RBAC systems, and reusable component architectures.",
  location: "Paramakudi, Tamil Nadu, India",
  email: "mangaleswaran2001@gmail.com",
  phone: "+91 6374737942",
  github: "https://github.com/rohitmangal4",
  linkedin: "https://www.linkedin.com/in/mangaleswaran-mn/",
  portfolioUrl: "https://mangaleswaran-portfolio.netlify.app/",
  resumeDownloadUrl: "/Mangaleswaran_MN_Frontend_Developer.pdf",
  resumeFilename: "Mangaleswaran_MN_Frontend_Developer.pdf",
  availableForWork: true,
  availabilityText: "Open to Frontend, React & Next.js Roles (Remote / India-wide)",
  company: "GegoSoft Technologies (OPC) Pvt. Ltd.",
  companyLocation: "Madurai, Tamil Nadu",
};

export const stats = [
  { label: "Professional Experience", value: "1+ Year", detail: "At GegoSoft Technologies" },
  { label: "Core Platforms", value: "2", detail: "Enterprise HIS/EHR & Retail POS" },
  { label: "Full Stack Internship", value: "10 Mos", detail: "At Why Global Services" },
  { label: "MCA Graduation CGPA", value: "7.93", detail: "Hindustan College of Eng & Tech" },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "GegoSoft Technologies (OPC) Pvt. Ltd.",
    location: "Madurai, Tamil Nadu",
    period: "July 2025 – Present",
    employmentType: "Full-Time",
    isCurrent: true,
    description: "Developing and maintaining production-grade frontend applications for enterprise healthcare and commercial platforms.",
    responsibilities: [
      "Develop and maintain production-grade frontend applications using Next.js, React, TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, REST/GraphQL APIs, Axios, and WebSockets.",
      "Contribute to LifeBridge / SmartDocx AI, an enterprise Hospital Information System (HIS) & Electronic Health Records (EHR) platform.",
      "Implement RBAC and permission-based routing, authentication, and API error handling across modular, reusable TypeScript components.",
      "Build enterprise data interfaces with AG-Grid and TanStack Table, reusable forms, filters, and responsive dashboards.",
      "Optimize applications using lazy loading, code splitting, memoization, caching, and request deduplication.",
      "Collaborate with backend developers and UI/UX designers in an Agile/Scrum team to deliver responsive, cross-browser, mobile-first interfaces."
    ],
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "WebSockets", "GraphQL", "AG-Grid", "Axios"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Why Global Services",
    location: "Chennai / Remote, Tamil Nadu",
    period: "July 2024 – May 2025",
    employmentType: "Internship",
    isCurrent: false,
    description: "Built responsive full-stack applications with React, Node.js, Express, and MongoDB, integrating REST APIs and real-time Socket.io features.",
    responsibilities: [
      "Developed responsive full-stack web applications using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Node.js, Express.js, and MongoDB.",
      "Implemented REST APIs, JWT authentication, role-based authorization, and real-time features with WebSocket/Socket.io.",
      "Built reusable frontend components, responsive layouts, forms, and API integrations.",
      "Used Git/GitHub, deployment workflows, debugging, and testing in cross-functional development."
    ],
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Git"]
  }
];

export const projects = [
  {
    id: "lifebridge-his-ehr",
    title: "LifeBridge / SmartDocx AI",
    subtitle: "Enterprise Hospital Information System (HIS) & EHR Platform",
    category: "Enterprise Healthcare Platform",
    isFlagship: true,
    isProfessionalWork: true,
    company: "GegoSoft Technologies (OPC) Pvt. Ltd.",
    role: "Frontend Developer",
    period: "2025 – Present",
    confidentialityNotice: "Illustrative sanitized case study. Internal production URLs, proprietary credentials, and private patient health information are strictly withheld to preserve corporate confidentiality.",
    shortDescription: "Enterprise-grade Hospital Information System & Electronic Health Records platform with real-time bed board, clinical workflows, dynamic form builders, and AI-assisted SOAP note generation.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Axios",
      "GraphQL",
      "WebSockets",
      "AG-Grid",
      "Canvas API"
    ],
    image: "/src/assets/DoctorAppointment.jpg",
    problemStatement: "Hospitals required a unified, high-reliability platform to replace disjointed paper charts and legacy software with real-time clinical workflows, live bed management, and role-restricted interfaces for doctors, nurses, and administrators.",
    myContributions: [
      "End-to-End Clinical Workflows: Engineered patient registration with Medical Record Number (MRN) search, appointment scheduling, check-in, clinical visits, prescriptions, diagnostics, and longitudinal medical history.",
      "Real-Time Inpatient Bed Board: Built an interactive bed management system tracking ward, room, and bed statuses (occupied, clean, maintenance, reserved) synchronized in real-time via WebSocket events.",
      "Granular RBAC System: Architected role-specific dashboards for doctors, receptionists, and administrative personnel with permission-governed action buttons and route guards.",
      "EHR Modules & Digital Signature: Developed modules for allergies, medications, vitals, medical history, and clinical notes, incorporating an HTML5 Canvas signature pad integrated with PDF/print rendering.",
      "AI Clinical Assistant Integration: Implemented frontend interfaces for AI Scribe, speech-to-text recording, automated SOAP note generation, and clinical suggestions.",
      "Dynamic Questionnaire/Form Builder: Created a dynamic form builder engine featuring conditional field visibility, custom validation schemas, public patient intake forms, and print exports."
    ],
    challengesAndSolutions: [
      {
        challenge: "Real-time state drift in the Inpatient Bed Board when multiple ward nurses allocate beds concurrently.",
        solution: "Established a persistent WebSocket connection with heartbeat detection, queueing incoming bed state events and merging them into TanStack Query cache with optimistic UI transitions."
      },
      {
        challenge: "Rendering large patient registers with 1,000+ records without frame drops or memory leaks.",
        solution: "Implemented AG-Grid and TanStack Table with virtualized DOM scrolling, debounced multi-column filters, and memoized cell renderers."
      },
      {
        challenge: "Capturing smooth, lossless physician signatures across touchscreens and desktop tablets for legal discharge summaries.",
        solution: "Developed an HTML5 Canvas vector signature component with DPI normalization, Bezier curve smoothing, and vector-to-base64 serialization for PDF inclusion."
      }
    ],
    outcomes: [
      "Successfully deployed across active clinical environments with high reliability and zero downtime on core clinical screens.",
      "Reduced patient check-in and MRN retrieval time by providing instant debounced search and cached lookups.",
      "Standardized clinical note generation using the AI Scribe interface and dynamic form builder."
    ]
  },
  {
    id: "atm-crackers-pos",
    title: "ATM Crackers",
    subtitle: "Omnichannel E-Commerce & Point-of-Sale (POS) Platform",
    category: "Commerce & Retail POS",
    isFlagship: true,
    isProfessionalWork: false,
    role: "Frontend Developer",
    period: "2024 – 2025",
    shortDescription: "A unified customer storefront and high-velocity Admin/POS platform engineered for retail and wholesale fireworks operations, featuring offline draft billing, thermal printing, and multi-tier pricing.",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Formik",
      "Yup",
      "React Context API",
      "REST APIs",
      "Recharts",
      "jsPDF"
    ],
    image: "/src/assets/portfolio.jpg",
    problemStatement: "Seasonal retail and wholesale businesses suffer from peak-hour checkout bottlenecks, inventory discrepancies between store and warehouse, and slow invoice generation during festive rushes.",
    myContributions: [
      "High-Speed POS Billing: Developed a keyboard-friendly POS billing interface with instant product search, category shortcuts, persistent local draft cart, custom discounts, and automatic tax calculation.",
      "Thermal Receipt & A4 Invoicing: Built client-side document generators using jsPDF and html2canvas supporting 80mm thermal receipt printers and standard A4 commercial tax invoices.",
      "Unified Customer Storefront: Created an intuitive customer shopping experience with categorized browsing, search filters, cart, wishlist, checkout summary, and order tracking.",
      "Admin & Inventory Control: Implemented administrator panels for managing products, categories, stock thresholds, tiered wholesale pricing, and coupon promotions.",
      "Authentication & RBAC: Enforced JWT-based authorization for Customer, Super Admin, Store Manager, and Billing Staff roles with dedicated access privileges.",
      "Performance Optimizations: Implemented client-side caching, request deduplication, pagination/infinite scrolling, and responsive image compression."
    ],
    challengesAndSolutions: [
      {
        challenge: "Billing operators needed ultra-fast checkout during high-volume rush hours without waiting for slow round-trip server responses.",
        solution: "Engineered an in-memory draft cart with local persistence, hotkey navigation, and optimistic checkout validation before dispatching to the order API."
      },
      {
        challenge: "Printing crisp receipts on diverse 58mm/80mm thermal POS printers without browser layout distortion.",
        solution: "Constructed dedicated CSS print media queries and a headless jsPDF binary generation pipeline for accurate pixel-to-millimeter receipt layout."
      }
    ],
    outcomes: [
      "Streamlined counter billing speed with sub-second product addition and instant invoice generation.",
      "Enabled smooth dual operations for both retail counter walk-ins and wholesale bulk orders."
    ]
  },
  {
    id: "doctor-appointment",
    title: "Doctor Appointment & Teleconsultation",
    subtitle: "Healthcare Scheduling & Doctor Portal",
    category: "Healthcare Application",
    isFlagship: false,
    isProfessionalWork: false,
    role: "Full Stack Developer",
    period: "2024",
    shortDescription: "A responsive appointment booking platform enabling patients to search medical specialists, reserve consultation slots, and track appointment statuses.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Material UI", "Tailwind CSS"],
    image: "/src/assets/DoctorAppointment.jpg",
    myContributions: [
      "Designed patient appointment booking flows with doctor specialty filtering and time-slot selection.",
      "Built doctor availability management interface for accepting, rescheduling, or canceling appointments.",
      "Integrated email notifications and responsive appointment confirmation vouchers."
    ]
  },
  {
    id: "bike-spares-ecommerce",
    title: "Bike Spares E-Commerce Platform",
    subtitle: "Automotive Parts Catalog & Ordering System",
    category: "E-Commerce",
    isFlagship: false,
    isProfessionalWork: false,
    role: "Full Stack Developer",
    period: "2024",
    shortDescription: "Specialized online store for motorcycle spare parts with structured category hierarchies, stock availability indicators, and interactive cart workflows.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "MUI", "Socket.io"],
    image: "/src/assets/bikeSparesPhoto.jpg",
    myContributions: [
      "Created structured category navigation for bike models, engines, brakes, and electrical components.",
      "Built persistent shopping cart with live price calculations and checkout form validation.",
      "Integrated real-time order status updates using Socket.io."
    ]
  },
  {
    id: "movie-ticket-booking",
    title: "Movie Ticket Reservation System",
    subtitle: "Interactive Cinema Seat Booking",
    category: "Entertainment Platform",
    isFlagship: false,
    isProfessionalWork: false,
    role: "Frontend Developer",
    period: "2024",
    shortDescription: "Interactive seat reservation web app featuring visual theater seat maps, dynamic tier pricing, and instant booking summary generation.",
    technologies: ["React.js", "Tailwind CSS", "Ant Design", "JavaScript"],
    image: "/src/assets/movieBookingimage.avif",
    myContributions: [
      "Engineered an interactive 2D theater seat matrix with seat selection, VIP vs standard tiers, and real-time total calculation.",
      "Implemented step-by-step booking modal with movie showtime selection and payment simulation."
    ]
  }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Core & Frameworks",
    description: "Modern, component-driven UI development with strict typing and responsive ergonomics.",
    skills: [
      { name: "React.js", level: "Primary", highlight: "Hooks, Custom Hooks, Profiler, Virtual DOM" },
      { name: "Next.js", level: "Primary", highlight: "App/Pages Router, SSR, SSG, Route Handlers" },
      { name: "TypeScript", level: "Primary", highlight: "Generics, Strict Typing, Interfaces, Types" },
      { name: "JavaScript (ES6+)", level: "Primary", highlight: "Async/Await, Closures, Event Loop, Modules" },
      { name: "HTML5 & CSS3", level: "Foundation", highlight: "Semantic Markup, Flexbox, Grid, Animations" },
      { name: "Tailwind CSS", level: "Primary", highlight: "Design Tokens, Dark Mode, Custom Plugins" },
      { name: "Responsive Design", level: "Standard", highlight: "Mobile-First, Fluid Typography, Breakpoints" },
      { name: "Cross-Browser Compatibility", level: "Standard", highlight: "CSS Fallbacks, Autoprefixer, Standards" }
    ]
  },
  {
    id: "state-data",
    title: "State Management & Data Fetching",
    description: "Robust client state architecture, caching, and server state synchronization.",
    skills: [
      { name: "Redux Toolkit (RTK)", level: "Primary", highlight: "Slices, createAsyncThunk, Selectors, Middleware" },
      { name: "TanStack Query (React Query)", level: "Primary", highlight: "Cache Invalidation, Optimistic Updates, Prefetching" },
      { name: "React Context API", level: "Standard", highlight: "Compound Components, Theme & Auth Providers" },
      { name: "Axios & Interceptors", level: "Primary", highlight: "JWT Auto-Refresh, Request Deduplication, Error Handling" },
      { name: "REST API Integration", level: "Primary", highlight: "Pagination, Filtering, Status Code Architecture" },
      { name: "GraphQL & Apollo Client", level: "Proficient", highlight: "Queries, Mutations, Cache Normalization" }
    ]
  },
  {
    id: "realtime",
    title: "Real-Time & Communication",
    description: "Bi-directional WebSocket streaming and event-driven frontend reactivity.",
    skills: [
      { name: "WebSockets", level: "Primary", highlight: "Hospital Bed Board, Live Status Push, Heartbeat" },
      { name: "Socket.io", level: "Proficient", highlight: "Rooms, Event Namespaces, Auto-Reconnect" },
      { name: "GraphQL Subscriptions", level: "Familiar", highlight: "Event Listeners & Real-Time Sync" }
    ]
  },
  {
    id: "ui-tables",
    title: "Data Tables, Forms & UI Libraries",
    description: "Heavy data virtualization, complex forms, and reusable component libraries.",
    skills: [
      { name: "AG-Grid", level: "Primary", highlight: "Enterprise Data Grids, Virtualization, Custom Renderers" },
      { name: "TanStack Table", level: "Primary", highlight: "Headless Table Architecture, Column Filtering, Sorting" },
      { name: "Formik & Yup", level: "Primary", highlight: "Complex Multi-Step Forms, Schema-Driven Validation" },
      { name: "Zod", level: "Proficient", highlight: "Type-Safe Runtime Validation & Schema Inference" },
      { name: "shadcn/ui", level: "Proficient", highlight: "Radix UI Primitives, Accessible Components" },
      { name: "Material UI (MUI)", level: "Proficient", highlight: "Themes, Emotion, Datagrids, Modal Dialogs" },
      { name: "Recharts", level: "Proficient", highlight: "Interactive Analytics & Revenue Visualizations" }
    ]
  },
  {
    id: "docs-canvas",
    title: "Documents, Canvas & Printing",
    description: "Vector digital signatures, client-side document rendering, and thermal printing.",
    skills: [
      { name: "HTML5 Canvas", level: "Primary", highlight: "Touch/Mouse Signature Pad, High-DPI Smoothing" },
      { name: "jsPDF", level: "Primary", highlight: "Dynamic A4 Invoices, Medical Charts, Layout Math" },
      { name: "html2canvas", level: "Proficient", highlight: "DOM to Image Capture & Document Export" },
      { name: "Thermal Receipt Printing", level: "Primary", highlight: "58mm & 80mm ESC/POS Formatted Layouts" }
    ]
  },
  {
    id: "backend-security",
    title: "Backend Foundations & Security",
    description: "Full-stack literacy and enterprise security implementations.",
    skills: [
      { name: "Node.js & Express.js", level: "Working", highlight: "REST Endpoints, Middleware, Routing" },
      { name: "MongoDB & Mongoose", level: "Working", highlight: "Document Schemas, CRUD, Aggregations" },
      { name: "JWT Authentication", level: "Primary", highlight: "Bearer Tokens, Refresh Flow, Secure Storage" },
      { name: "Role-Based Access Control (RBAC)", level: "Primary", highlight: "Role Matrices, Route Guards, Permission UI" }
    ]
  },
  {
    id: "tools-performance",
    title: "Tools, Practices & Performance",
    description: "Optimization, build systems, and collaborative engineering workflows.",
    skills: [
      { name: "Code Splitting & Lazy Loading", level: "Standard", highlight: "React.lazy, Dynamic Imports, Bundle Reduction" },
      { name: "Debouncing & Deduplication", level: "Standard", highlight: "Search Inputs, API Throttling, Memoization" },
      { name: "Git & GitHub", level: "Primary", highlight: "Branching, Pull Requests, Version Control" },
      { name: "Vite & npm", level: "Primary", highlight: "Fast HMR, Build Scripts, Bundle Optimization" },
      { name: "Postman & Figma", level: "Proficient", highlight: "API Contract Testing, UI/UX Design Translation" },
      { name: "Agile / Scrum", level: "Practice", highlight: "Sprint Planning, Daily Standups, Cross-Functional" }
    ]
  }
];

export const engineeringHighlights = [
  {
    id: "bed-board",
    title: "Real-Time Inpatient Bed Board Architecture",
    badge: "WebSockets + TanStack Query",
    description: "Engineered a live ward and room occupancy system for hospital clinical staff. Replaced slow polling with event-driven WebSocket streaming, delivering instant updates as patients are admitted, transferred, or discharged.",
    keyPoints: [
      "Persistent WebSocket connection with automated heartbeat and exponential reconnect logic.",
      "Optimistic UI updates for bed reservations with automatic rollback if the server rejects the lock.",
      "Color-coded occupancy matrix (Occupied, Available, Cleaning, Maintenance, Reserved) with real-time room filters."
    ],
    codeSnippet: `// WebSocket Bed Board Event Dispatcher & Cache Sync
socket.on('BED_STATUS_CHANGED', ({ bedId, wardId, newStatus, patientInfo }) => {
  queryClient.setQueryData(['wardBeds', wardId], (previousBeds) => {
    if (!previousBeds) return previousBeds;
    return previousBeds.map((bed) =>
      bed.id === bedId
        ? { ...bed, status: newStatus, patient: patientInfo, updatedAt: Date.now() }
        : bed
    );
  });
});`
  },
  {
    id: "dynamic-forms",
    title: "Dynamic Form & Questionnaire Engine",
    badge: "TypeScript + Yup + Conditional Logic",
    description: "Built a schema-driven questionnaire engine used for patient intake and clinical questionnaires. Enables medical staff to configure fields dynamically with runtime dependency validation.",
    keyPoints: [
      "JSON schema parsing supporting text, select, radio, multi-checkbox, date, and nested tables.",
      "Conditional visibility evaluation: child questions dynamically render based on previous answers.",
      "Dual render mode: interactive web intake form and printable medical record layout."
    ],
    codeSnippet: `// Conditional Logic Form Field Resolver
export const evaluateFieldVisibility = (fieldRule, formValues) => {
  if (!fieldRule?.dependsOn) return true;
  const parentValue = formValues[fieldRule.dependsOn];
  switch (fieldRule.operator) {
    case 'EQUALS': return parentValue === fieldRule.targetValue;
    case 'CONTAINS': return Array.isArray(parentValue) && parentValue.includes(fieldRule.targetValue);
    default: return true;
  }
};`
  },
  {
    id: "canvas-signature",
    title: "HTML5 Canvas Digital Signature & PDF Integration",
    badge: "Canvas API + jsPDF Vector Pipeline",
    description: "Created a smooth, high-precision digital signature pad for doctors and patients on hospital tablets. Seamlessly exports tamper-resistant vector signatures directly into legal discharge summaries and electronic prescriptions.",
    keyPoints: [
      "High-DPI retina display normalization to prevent pixelation on modern mobile and iPad devices.",
      "Bezier curve interpolation for natural, fluid pen strokes during touch or stylus input.",
      "Direct conversion to base64 PNG embedded directly into structured jsPDF clinical documents."
    ],
    codeSnippet: `// High-DPI Canvas Smoothing & Vector Output
const exportSignatureData = (canvasRef) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  // Check if stroke exists
  if (isCanvasBlank(canvas)) return null;
  return canvas.toDataURL('image/png'); // Embeds into jsPDF doc.addImage()
};`
  },
  {
    id: "rbac-interceptors",
    title: "Enterprise RBAC & Axios Token Refresh Flow",
    badge: "Security + Route Guards",
    description: "Architected client-side role-based access control protecting clinical and administrative modules. Handled silent JWT token refreshes with request queueing to prevent user logout during active rounds.",
    keyPoints: [
      "Unified Axios response interceptor intercepting 401 Unauthorized errors and refreshing tokens via refresh endpoint.",
      "Failed request queue that retries blocked API calls seamlessly without interrupting doctor workflows.",
      "Reusable <ProtectedRoute allowedRoles={['DOCTOR', 'ADMIN']} /> wrapper component."
    ],
    codeSnippet: `// Axios Silent Token Refresh Interceptor with Request Queue
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshAuthToken();
      originalRequest.headers['Authorization'] = \`Bearer \${newAccessToken}\`;
      return apiClient(originalRequest);
    }
    return Promise.reject(error);
  }
);`
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Hindustan College of Engineering & Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "2022 – 2024",
    grade: "CGPA: 7.93 / 10",
    relevantCoursework: [
      "Web Technologies",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management Systems",
      "Object-Oriented Programming"
    ]
  }
];

export const certifications = [
  {
    title: "Full Stack Development",
    issuer: "Why Tap Academy",
    year: "2024",
    credentialType: "Professional Certification",
    focus: "MERN Stack, REST APIs, Real-Time WebSockets & Database Architecture"
  },
  {
    title: "Embedded Systems with IoT",
    issuer: "Gateway Software Solutions",
    year: "2024",
    credentialType: "Technical Certification",
    focus: "Hardware-Software Interfacing, Microcontrollers & Sensor Protocols"
  }
];
