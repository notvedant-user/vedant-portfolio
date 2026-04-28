"use client";

import { useState } from "react";

const skills = [
  "Python","Java","C++","TypeScript","React","Next.js",
  "FastAPI","SQL","PostgreSQL","Docker","Jenkins","Linux",
  "AI/ML","Test Automation","CI/CD","Git","REST APIs"
];

const academicHighlights = [
  { title: "3.9 GPA", detail: "Strong academic performance in Computer Science." },
  { title: "AI/ML Stream", detail: "Bachelor of Computer Science Honours, Artificial Intelligence and Machine Learning stream." },
  { title: "Dean’s Honour List", detail: "Recognized for academic excellence in multiple years." },
  { title: "$21,000 Scholarship", detail: "Awarded scholarship support for strong academic achievement." },
 ];

const metrics = [
  { value: "2+", label: "Co-op Roles" },
  { value: "35+", label: "Critical Bugs Found" },
  { value: "30%", label: "Manual Errors Reduced" },
  { value: "3.9", label: "GPA" },
  { value: "15+", label: "Technologies Used" },
];

const projectMetrics = [
  { value: "AI", label: "Smart Recommendation Logic" },
  { value: "C++/Python", label: "Hybrid Edge System" },
  { value: "Jenkins", label: "Automated Telemetry Pipeline" },
  { value: "PostgreSQL", label: "Role-Based DBMS System" },
  { value: "Testing", label: "Validation & Automation Focus" },
];

const coursework = [
  {
    title: "COMP 3105 – Introduction to Machine Learning",
    summary: "Click to view ML concepts, models, and practical skills learned.",
    details: [
      "Supervised learning and predictive modeling.",
      "Linear regression and logistic regression.",
      "Decision trees, model evaluation, overfitting, regularization.",
      "Training/testing workflows and performance metrics.",
      "Feature engineering and practical machine learning implementation."
    ]
  },
  {
    title: "COMP 3106 – Introduction to Artificial Intelligence",
    summary: "Click to view AI search, reasoning, and intelligent systems topics.",
    details: [
      "Search algorithms such as BFS, DFS, A*.",
      "Knowledge representation and logic.",
      "Constraint satisfaction problems.",
      "Reasoning under uncertainty.",
      "Foundations of intelligent agents and decision making."
    ]
  },
  {
    title: "COMP 3000 – Operating Systems",
    summary: "Click to view systems-level programming and OS internals.",
    details: [
      "Processes, threads, synchronization, scheduling.",
      "Memory management and virtual memory.",
      "File systems and I/O.",
      "System calls and Linux process behavior.",
      "C programming in Unix/Linux environments."
    ]
  },
  {
    title: "COMP 3005 – Database Management Systems",
    summary: "Click to view relational databases and SQL concepts.",
    details: [
      "ER modeling and schema design.",
      "SQL queries, joins, aggregation, subqueries.",
      "Normalization and functional dependencies.",
      "Indexes, transactions, concurrency.",
      "Built PostgreSQL application projects."
    ]
  },
  {
    title: "COMP 3804 – Design & Analysis of Algorithms",
    summary: "Click to view algorithm design and complexity analysis.",
    details: [
      "Asymptotic analysis and Big-O reasoning.",
      "Divide and conquer strategies.",
      "Greedy algorithms and dynamic programming.",
      "Graph algorithms and shortest paths.",
      "Proofs of correctness and runtime analysis."
    ]
  },
  {
    title: "COMP 2406 – Fundamentals of Web Applications",
    summary: "Click to view full-stack web development skills.",
    details: [
      "HTML, CSS, JavaScript, DOM manipulation.",
      "Node.js backend development.",
      "REST APIs and frontend/backend interaction.",
      "Responsive UI design.",
      "Interactive web application deployment."
    ]
  },
  {
    title: "COMP 1406 – Introduction to Computer Science II",
    summary: "Click to view core programming foundations.",
    details: [
      "Object-oriented programming.",
      "Functions, arrays, recursion.",
      "Problem solving with Java/Python concepts.",
      "Data structures foundations.",
      "Debugging and structured software design."
    ]
  },
  {
    title: "COMP 2402 – Abstract Data Types & Algorithms",
    summary: "Click to view data structures and algorithm implementation.",
    details: [
      "Stacks, queues, linked lists.",
      "Trees, heaps, hash tables.",
      "Searching and sorting.",
      "Runtime tradeoffs.",
      "Efficient data structure design."
    ]
  },
  {
    title: "COMP 3007 – Programming Paradigms",
    summary: "Click to view multiple programming styles.",
    details: [
      "Functional programming concepts.",
      "Logic programming.",
      "Declarative problem solving.",
      "Language comparison and paradigms.",
      "Thinking beyond object-oriented design."
    ]
  }
];

const links = [
  { label: "Resume", href: "/resume.pdf", icon: "📄" },
  { label: "Transcript", href: "/transcript.pdf", icon: "🎓" },
  { label: "Python Cert", href: "/python-certificate.pdf", icon: "🐍" },
  { label: "SQL Cert", href: "/sql-certificate.pdf", icon: "🗄️" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vedant-gandhi-45967624b/", icon: "💼" },
  { label: "GitHub", href: "https://github.com/notvedant-user", icon: "💻" },
];

const experiences = [
  {
    role: "DevOps Software Designing Specialist Co-op",
    company: "March Networks",
    date: "Dec 2024 – Sep 2025",
    summary: "Click to view detailed DevOps, Python automation, Jenkins, and telemetry work.",
    details: [
      "Developed object-oriented Python tools using REST APIs to analyze release workflows.",
      "Built Jenkins-driven automation to extract AWS user telemetry monthly.",
      "Worked on Linux-based software and firmware systems.",
      "Created reusable Python libraries using abstraction and inheritance.",
      "Reduced manual reporting through automation."
    ],
    examples: [
      "User Telemetry Automation through Jenkins pipelines.",
      "Release workflow tools for tracking and reporting.",
      "Validation scripts for diagnostics and regression testing."
    ]
  },
  {
    role: "QA Test Engineer Co-op",
    company: "March Networks",
    date: "Sep 2024 – Dec 2024",
    summary: "Click to view detailed QA automation, debugging, firmware validation, and testing work.",
    details: [
      "Investigated embedded Linux platform failures.",
      "Found critical defects in C/C++ firmware pipelines.",
      "Used logs and traces to isolate production bugs.",
      "Created Python scripts to validate engineering fixes.",
      "Improved final product reliability."
    ],
    examples: [
      "Regression validation after firmware fixes.",
      "System health audits using logs.",
      "Reproduced high-priority bugs in controlled environments."
    ]
  },
  {
    role: "Front-End Web Applications Developer",
    company: "CDAC",
    date: "Jan 2023 – May 2023",
    summary: "Click to view detailed React, UI, REST API, and web development work.",
    details: [
      "Designed responsive web interfaces using React, JS, HTML, CSS.",
      "Built dashboards and internal web applications.",
      "Integrated REST APIs.",
      "Improved browser compatibility and usability.",
      "Worked in Agile teams using Git."
    ],
    examples: [
      "Responsive dashboard UI development.",
      "Frontend API integration.",
      "UI debugging and deployment support."
    ]
  }
];

const projects = [
  {
    title: "Smart Mirror AI",
    tags: "C++ • Python • Linux • AI/ML • Automation",
    summary: "Click to view the full AI edge-system project description.",
    details: [
      "Built intelligent edge AI system using C/C++ and Python.",
      "Created AI recommendation logic.",
      "Used Linux modules for timing and communication.",
      "Automated output and performance testing."
    ]
  },
  {
    title: "User Telemetry Automation",
    tags: "Python • REST APIs • Jenkins • AWS • CI/CD",
    summary: "Click to view the full workplace automation project description.",
    details: [
      "Automated AWS user telemetry extraction monthly.",
      "Integrated scripts into Jenkins pipelines.",
      "Improved internal reporting visibility.",
      "Designed maintainable automation workflow."
    ]
  },
  {
    title: "Health & Fitness Club Management System",
    tags: "Python • PostgreSQL • DBMS • SQL",
    summary: "Click to view the full database project description.",
    details: [
      "Built role-based DB system for members, trainers, admins.",
      "Implemented tables, constraints, triggers, views.",
      "Used Python with PostgreSQL.",
      "Included bookings, payments, sessions, memberships."
    ]
  }
];

export default function Home() {
  const [openExperience, setOpenExperience] = useState<number | null>(null);
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed44,transparent_35%)]" />

      <section className="relative max-w-7xl mx-auto px-6 py-8">

        {/* NAVBAR */}
        <nav className="sticky top-4 z-50 mb-24">
          <div className="bg-white/10 border border-white/15 backdrop-blur-2xl rounded-3xl px-6 py-5 shadow-2xl">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                  Vedant Gandhi
                </h1>
                <p className="text-blue-300 mt-2 text-sm md:text-base font-medium">
                  Software Developer • AI/ML • Test Automation
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-gray-200 transition hover:-translate-y-1 hover:bg-blue-500/20"
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-blue-400 font-medium mb-4">
              Portfolio for Software, AI/ML, and Automation Roles
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building reliable software, automation systems, and AI-powered tools.
            </h2>

            <p className="text-lg text-gray-300 leading-8 mb-8">
              Carleton University Computer Science student with co-op experience
              in DevOps automation, QA engineering, Linux systems, CI/CD pipelines,
              web development, and AI/ML projects.
            </p>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-6">Current Focus</h3>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-2xl p-4">
                Industry Experience: March Networks + CDAC
              </div>
              <div className="bg-black/30 rounded-2xl p-4">
                Python Automation • Linux • React • Databases • AI/ML
              </div>
              <div className="bg-black/30 rounded-2xl p-4">
                BCS Honours • 3.9 GPA • Carleton University
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Impact Snapshot</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="bg-white/10 border border-white/15 rounded-3xl p-6 text-center backdrop-blur-xl"
              >
                <p className="text-4xl font-black text-blue-300">{item.value}</p>
                <p className="text-gray-300 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Project Impact Snapshot
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectMetrics.map((item) => (
              <div
                key={item.label}
                className="bg-white/10 border border-white/15 rounded-3xl p-6 text-center backdrop-blur-xl"
              >
                <p className="text-3xl font-black text-purple-300">
                  {item.value}
                </p>

                <p className="text-gray-300 mt-2 text-sm leading-6">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <button
                key={exp.role}
                onClick={() =>
                  setOpenExperience(openExperience === index ? null : index)
                }
                className="text-left bg-white/10 border border-white/15 rounded-3xl p-6 hover:bg-white/15 transition"
              >
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-blue-300">{exp.company}</p>
                <p className="text-gray-400 mb-3">{exp.date}</p>
                <p className="text-gray-300">{exp.summary}</p>

                {openExperience === index && (
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <ul className="space-y-2 text-gray-300 mb-5">
                      {exp.details.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                    <ul className="space-y-2 text-blue-200">
                      {exp.examples.map((e) => (
                        <li key={e}>• {e}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() =>
                  setOpenProject(openProject === index ? null : index)
                }
                className="text-left bg-white/10 border border-white/15 rounded-3xl p-6 hover:bg-white/15 transition"
              >
                <p className="text-blue-300 text-sm mb-2">{project.tags}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.summary}</p>

                {openProject === index && (
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <ul className="space-y-2 text-gray-300">
                      {project.details.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* COURSEWORK */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Relevant Coursework</h2>

          <div className="grid gap-6">
            {coursework.map((course, index) => (
              <button
                key={course.title}
                onClick={() =>
                  setOpenProject(openProject === 100 + index ? null : 100 + index)
                }
                className="text-left bg-white/10 border border-white/15 rounded-3xl p-6 hover:bg-white/15 transition"
              >
                <h3 className="text-2xl font-bold">{course.title}</h3>
                <p className="text-gray-300 mt-2">{course.summary}</p>

                {openProject === 100 + index && (
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <ul className="space-y-2 text-gray-300">
                      {course.details.map((detail) => (
                        <li key={detail}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* ACADEMIC EXCELLENCE */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Academic Excellence</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {academicHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-7">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white/10 border border-white/15 rounded-full px-5 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-white/10 border border-white/15 rounded-3xl p-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="flex justify-center gap-6 flex-wrap mt-6">
            <a href="mailto:vedantgandhi@cmail.carleton.ca" className="text-blue-300">
              Email
            </a>
            <a href="tel:+13435539528" className="text-blue-300">
              +1 (343) 553-9528
            </a>
            <a href="https://github.com/notvedant-user" target="_blank" className="text-blue-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vedant-gandhi-45967624b/" target="_blank" className="text-blue-300">
              LinkedIn
            </a>
          </div>
        </section>

      </section>
    </main>
  );
}