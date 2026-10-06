export interface SkillItem {
  id: string;
  name: string;
  category: 'programming' | 'creative_3d' | 'media_tools';
  proficiency: number; // realistic percentage
  experience: string;
  description: string;
  tools: string[];
  icon: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution?: string;
  highlight: string;
  description: string;
  period: string;
  achievements: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'python' | 'java_cpp' | '3d_modeling' | '3d_animation' | '3d_printing' | 'video_editing' | 'excel';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  impact: string;
  technologies: string[];
  accentColor: string;
  visualType: 'python' | 'code' | 'model3d' | 'animation' | 'print3d' | 'video' | 'excel';
  metrics: { label: string; value: string }[];
}

export const PERSONAL_INFO = {
  name: "Vibhanshu",
  age: 29,
  experienceYears: "5+",
  tagline: "Technology Professional & Creative Digital Expert",
  heroSubtitle: "5+ years of experience in programming, 3D modeling, animation, 3D printing, advanced editing, and digital technology.",
  location: "Mau Road, K.I.M.T. Classes, Agra, Uttar Pradesh",
  city: "Agra, Uttar Pradesh",
  phone: "1234567890",
  formattedPhone: "+91 1234567890",
  email: "acd@gmail.com",
  aboutBio: [
    "I am a technology professional, software developer, and creative digital educator based in Agra, Uttar Pradesh. Over the past 5+ years, I have engineered software applications, led digital technology training, and explored the frontier where computer science intersects with 3D design and additive manufacturing.",
    "Holding both an M.Tech and B.Tech in technology disciplines, my work bridges rigorous computational logic—such as object-oriented system engineering in Python, Java, and C++—with high-fidelity creative workflows in 3D modeling, kinematic animation, rapid 3D prototyping, and broadcast video editing.",
    "At K.I.M.T. Classes on Mau Road, Agra, I empower hundreds of students and professionals with modern programming, data analytics, and digital media skills, fostering a practical, build-first mindset that connects academic foundations with modern industry standards."
  ],
  stats: [
    { label: "Years of Experience", value: "5+", count: 5, suffix: "+" },
    { label: "Class 12th Academic Score", value: "94.3%", count: 94.3, suffix: "%" },
    { label: "Technical Domains", value: "8+", count: 8, suffix: "+" },
    { label: "Students & Peers Mentored", value: "1,200+", count: 1200, suffix: "+" },
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "M.Tech",
    field: "Postgraduate Technical Education",
    institution: "Advanced Engineering & Technology Institute",
    highlight: "Master of Technology",
    period: "Postgraduate Degree",
    description: "Advanced study in computer science principles, algorithmic optimization, distributed architectures, and emerging digital manufacturing methodologies. Led graduate research synthesising algorithmic computation with spatial 3D visualization.",
    achievements: [
      "Specialized in Advanced Algorithms, Computational Systems, and Digital Automation",
      "Published research paper exploring computational graphics and spatial geometry",
      "Mentored junior engineering candidates in modern programming paradigms"
    ]
  },
  {
    degree: "B.Tech",
    field: "Bachelor of Technology",
    institution: "Engineering Faculty of Technology",
    highlight: "Undergraduate Degree",
    period: "Undergraduate Degree",
    description: "Comprehensive foundational degree in computer engineering, data structures, object-oriented design patterns, database management, and electronics. Excelled in applied software engineering labs and cross-disciplinary technical projects.",
    achievements: [
      "Graduated with distinction in Core Computer Engineering and Applied Mathematics",
      "Led university project team for CAD-based technical simulations",
      "Spearheaded technical workshops on C++ and Java software fundamentals"
    ]
  },
  {
    degree: "Class 12th Board",
    field: "Senior Secondary (Science & Mathematics Stream)",
    institution: "Higher Secondary Board Examination",
    highlight: "94.3% Academic Score",
    period: "Academic Foundation",
    description: "Achieved top academic percentile in Physics, Chemistry, and Mathematics, forming the rigorous logical, spatial, and analytical discipline that underpins modern programming and 3D precision engineering.",
    achievements: [
      "Secured outstanding 94.3% cumulative aggregate score",
      "Ranked among top performers in Mathematics & Physics divisions",
      "Demonstrated early aptitude in computer science and computational logic"
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "python",
    name: "Python",
    category: "programming",
    proficiency: 92,
    experience: "5+ Years",
    description: "Extensive development with Python for automated data pipelines, scripting, algorithmic problem solving, GUI applications, and backend systems.",
    tools: ["Python 3.x", "NumPy", "Pandas", "PyQt/Tkinter", "FastAPI", "Automation Scripts"],
    icon: "python"
  },
  {
    id: "java",
    name: "Java",
    category: "programming",
    proficiency: 88,
    experience: "4+ Years",
    description: "Strong object-oriented architecture, design patterns, multithreading, enterprise software design, and memory management.",
    tools: ["Core Java", "OOP Patterns", "Java Collections", "Spring Basics", "Maven", "JUnit"],
    icon: "java"
  },
  {
    id: "cpp",
    name: "C++",
    category: "programming",
    proficiency: 86,
    experience: "5+ Years",
    description: "High-performance systems programming, memory optimization, data structures, algorithmic complexity, and 3D geometric math computations.",
    tools: ["Modern C++ (17/20)", "STL", "Pointers & Memory", "Algorithms", "Performance Profiling"],
    icon: "cpp"
  },
  {
    id: "3d_modeling",
    name: "3D Modeling",
    category: "creative_3d",
    proficiency: 90,
    experience: "4+ Years",
    description: "Parametric industrial modeling, hard-surface polygon modeling, asset texturing, UV unwrapping, and dimensional precision for functional engineering.",
    tools: ["Blender", "Autodesk Fusion 360", "Hard-Surface CAD", "Topology Optimization", "SubD"],
    icon: "cube"
  },
  {
    id: "3d_animation",
    name: "3D Animation",
    category: "creative_3d",
    proficiency: 85,
    experience: "3+ Years",
    description: "Kinematic rigging, camera framing, keyframe pacing, particle simulations, lighting setups, and cinematic product animation reels.",
    tools: ["Blender Keyframing", "Inverse Kinematics", "Lighting & Shaders", "Physics Simulation", "Cycles/Eevee"],
    icon: "film"
  },
  {
    id: "3d_printing",
    name: "3D Printing",
    category: "creative_3d",
    proficiency: 89,
    experience: "4+ Years",
    description: "End-to-end additive manufacturing: bed leveling, slicing optimization, mechanical tolerances, infill design, and material testing (PLA, PETG, ABS).",
    tools: ["UltiMaker Cura", "PrusaSlicer", "FDM/SLA Workflows", "Tolerances & Clearances", "Bed Adhesion & Post-Processing"],
    icon: "printer"
  },
  {
    id: "video_editing",
    name: "Advanced Video Editing",
    category: "media_tools",
    proficiency: 91,
    experience: "5+ Years",
    description: "High-retention video post-production, multi-track timeline editing, audio mixing, color correction, visual effects, and dynamic typography.",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Color Grading", "Audio Mastering"],
    icon: "clapperboard"
  },
  {
    id: "excel",
    name: "Microsoft Excel",
    category: "media_tools",
    proficiency: 94,
    experience: "5+ Years",
    description: "Advanced financial modeling, nested formulas (XLOOKUP, INDEX/MATCH), Power Query data transformation, pivot dashboards, and automated macros.",
    tools: ["Power Query", "Dynamic Arrays", "Complex Financial Models", "Pivot Dashboards", "VBA & Macros"],
    icon: "spreadsheet"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Senior Technology Professional & Lead Instructor",
    organization: "K.I.M.T. Classes",
    location: "Mau Road, Agra, Uttar Pradesh",
    period: "2021 – Present (3+ Years)",
    type: "Professional & Educational Leadership",
    description: "Directing technical education curriculum, delivering advanced training in Python, Java, C++, and applied digital tools for higher education students and industry aspirants.",
    achievements: [
      "Mentored over 1,200+ students in structured computer programming, data structures, and practical software design",
      "Designed and launched hands-on lab modules for 3D modeling, slicing, and 3D printing workflows",
      "Spearheaded digital productivity programs including masterclasses in Advanced Microsoft Excel & Business Modeling",
      "Achieved high student placement and academic scoring rates across university examinations"
    ],
    technologies: ["Python", "Java", "C++", "3D Printing", "Excel Power Query", "Curriculum Architecture"]
  },
  {
    role: "Technical Consultant & 3D Prototyping Specialist",
    organization: "Independent Practice & Digital Solutions",
    location: "Agra, Uttar Pradesh",
    period: "2019 – 2021 (2+ Years)",
    type: "Technical Consulting & Digital Media",
    description: "Delivered freelance software utilities, 3D CAD assets, rapid mechanical prototypes, and commercial video post-production for regional businesses and creative creators.",
    achievements: [
      "Engineered automated desktop utilities and data extraction scripts for local enterprises",
      "Modeled and manufactured custom 3D printed mechanical enclosures and jigs with sub-millimeter tolerances",
      "Produced 40+ high-retention video marketing campaigns and educational explainers with motion graphics",
      "Built automated financial tracking and inventory sheets using advanced Excel formulas and VBA"
    ],
    technologies: ["C++", "Python", "Blender", "Additive Slicers", "Premiere Pro", "Advanced Excel"]
  },
  {
    role: "Graduate Research & Engineering Scholar",
    organization: "Technical University Postgraduate Program",
    location: "Uttar Pradesh",
    period: "Academic Tenure",
    type: "Postgraduate Academic Research (M.Tech)",
    description: "Conducted graduate-level research in computational optimization, hardware-software integration, and spatial visualization algorithms.",
    achievements: [
      "Published thesis work bridging computational efficiency with real-time graphical rendering",
      "Conducted instructional labs for undergraduate B.Tech cohorts in OOP and algorithmic analysis",
      "Graduated with top academic standing"
    ],
    technologies: ["M.Tech Research", "Algorithm Optimization", "C++", "Data Analytics"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-python-automation",
    title: "Automated Data Pipeline & Analytics Suite",
    category: "python",
    categoryLabel: "Python Development",
    shortDescription: "End-to-end automated data ingestion, transformation, and visual telemetry reporting engine built with Python.",
    fullDescription: "A robust enterprise data processor engineered in Python to ingest heterogeneous datasets (CSV, JSON, SQL databases, API endpoints), perform strict schema validation, calculate statistical indicators, and generate PDF and interactive web reports without manual intervention.",
    impact: "Cut report generation time from 6 hours to 45 seconds while eliminating manual human data entry discrepancies.",
    technologies: ["Python 3", "Pandas", "NumPy", "Matplotlib", "FastAPI", "ReportLab"],
    accentColor: "#0284c7",
    visualType: "python",
    metrics: [
      { label: "Processing Speed", value: "100k rows/sec" },
      { label: "Time Saved", value: "92%" },
      { label: "Data Accuracy", value: "99.9%" }
    ]
  },
  {
    id: "proj-cpp-geometry-engine",
    title: "High-Performance 3D Geometric Mesh Processor",
    category: "java_cpp",
    categoryLabel: "C++ / Java Systems",
    shortDescription: "Multithreaded C++ engine for computing convex hulls, polygon simplification, and STL mesh verification.",
    fullDescription: "Built with Modern C++20 and standard template library, this systems utility loads multi-megabyte 3D STL and OBJ models, inspects geometry for non-manifold edges, optimizes vertex buffers, and performs ray-mesh intersection tests with high mathematical precision.",
    impact: "Delivered 12x faster geometry analysis compared to interpreted python-based mesh checkers.",
    technologies: ["C++20", "Java Swing/GUI", "STL", "Multithreading", "Computational Geometry"],
    accentColor: "#2563eb",
    visualType: "code",
    metrics: [
      { label: "Speedup vs Legacy", value: "12x" },
      { label: "Max Polygon Count", value: "2M+ Tris" },
      { label: "Memory Footprint", value: "< 85 MB" }
    ]
  },
  {
    id: "proj-3d-cad-assembly",
    title: "Precision Modular Robotics Arm & Drone Gimbal CAD",
    category: "3d_modeling",
    categoryLabel: "3D Modeling",
    shortDescription: "Detailed parametric CAD assembly designed for mechanical durability, wire-routing, and lightweight structural rigidity.",
    fullDescription: "Designed in Blender and Fusion 360, this multi-part robotic mechanism features interlocking bearings, internal motor cavities, press-fit tolerance channels, and parametric joint hinges crafted specifically to transition seamlessly to 3D printing production.",
    impact: "Successfully fabricated and validated across 3 iterations with zero component interference during physical assembly.",
    technologies: ["Blender", "Fusion 360", "Hard-Surface CAD", "Parametric Design", "SubD Modeling"],
    accentColor: "#06b6d4",
    visualType: "model3d",
    metrics: [
      { label: "Individual Parts", value: "24 Components" },
      { label: "Joint Tolerance", value: "0.25 mm" },
      { label: "Weight Reduction", value: "34%" }
    ]
  },
  {
    id: "proj-3d-kinematic-animation",
    title: "Cinematic Kinematic Assembly & Exploded View Reel",
    category: "3d_animation",
    categoryLabel: "3D Animation",
    shortDescription: "Photorealistic 60fps mechanical reveal with dynamic camera movement, exploded-view breakdown, and physical materials.",
    fullDescription: "Created to visualize intricate mechanical engineering mechanisms in action. Features synchronized rotational keyframing, customized PBR metallic materials, studio lighting rigs, depth-of-field focus pulls, and an exploded view sequence illustrating internal gear meshing.",
    impact: "Used as prime educational media at K.I.M.T. to instruct mechanical engineering students on kinematic motions.",
    technologies: ["Blender Cycles", "Keyframe Graph Editor", "Procedural Textures", "Rigid Body Physics", "Lighting"],
    accentColor: "#38bdf8",
    visualType: "animation",
    metrics: [
      { label: "Render Frame Rate", value: "60 FPS" },
      { label: "Resolution", value: "4K UHD" },
      { label: "Lighting Rig", value: "5-Point Studio" }
    ]
  },
  {
    id: "proj-3d-printing-prototypes",
    title: "Functional Additive Prototyping & Custom Jigs",
    category: "3d_printing",
    categoryLabel: "3D Printing & Fabrication",
    shortDescription: "High-durability FDM functional parts engineered with tailored infill geometries, bridge testing, and thermal calibration.",
    fullDescription: "A portfolio of real-world printed engineering parts: custom soldering iron holders, laboratory test-tube brackets, dial-gauge mounting brackets, and reinforced enclosure housings. Iterated through slicing variables in Cura and PrusaSlicer to balance layer adhesion, print speed, and tensile strength.",
    impact: "Produced over 150+ operational physical components for local workshops and academic lab setups.",
    technologies: ["UltiMaker Cura", "PrusaSlicer", "PETG / PLA+", "Thermal Calibration", "Support Optimization"],
    accentColor: "#0ea5e9",
    visualType: "print3d",
    metrics: [
      { label: "Physical Parts Made", value: "150+ units" },
      { label: "Layer Height", value: "0.12 - 0.2mm" },
      { label: "Dimensional Fit", value: "99.8%" }
    ]
  },
  {
    id: "proj-advanced-video-suite",
    title: "High-Retention Commercial & Educational Video Series",
    category: "video_editing",
    categoryLabel: "Advanced Video Editing",
    shortDescription: "Complete post-production pipeline including pacing edits, sound design, animated kinetic subtitles, and color grading.",
    fullDescription: "Produced and edited broadcast-grade promotional videos and comprehensive educational masterclasses. Leveraged multi-camera synchronization, dynamic J/L cut pacing, custom lower thirds, cinematic LUT grading, and stem audio compression to maximize audience retention.",
    impact: "Achieved average watch retention rates above 68% across published educational modules.",
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Sound Mixing", "Color Curves"],
    accentColor: "#6366f1",
    visualType: "video",
    metrics: [
      { label: "Avg Retention", value: "68%+" },
      { label: "Edited Hours", value: "350+ Hours" },
      { label: "Audio Dynamics", value: "-14 LUFS Clean" }
    ]
  },
  {
    id: "proj-excel-financial-dashboard",
    title: "Enterprise Multi-Branch Financial & Inventory Model",
    category: "excel",
    categoryLabel: "Microsoft Excel & Data",
    shortDescription: "Dynamic spreadsheet architecture with automated Power Query reconciliation, scenario manager, and KPI dashboard.",
    fullDescription: "A comprehensive business intelligence model constructed in Microsoft Excel for educational institution operations. Incorporates automated receipt reconciliation using Power Query, dynamic multi-scenario cash flow modeling, interactive slicer-driven dashboards, and error-proofed data entry controls.",
    impact: "Replaced 4 fragmented ledgers with a single unified automated workbook, cutting administrative time by 15 hours weekly.",
    technologies: ["Excel Power Query", "Dynamic Arrays (LET/LAMBDA)", "Interactive Slicers", "VBA Automation", "Sensitivity Tables"],
    accentColor: "#10b981",
    visualType: "excel",
    metrics: [
      { label: "Admin Hours Saved", value: "15 hrs/wk" },
      { label: "Data Integrity", value: "100% Verified" },
      { label: "Formula Complexity", value: "50+ Linked Logic" }
    ]
  }
];
