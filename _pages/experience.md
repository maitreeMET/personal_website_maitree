---
layout: page
permalink: /experience/
title: Experience
description: Research, industry, and education.
nav: true
nav_order: 2
---

<style>
  .xp-section h2 {
    font-weight: 600;
    margin-top: 1.8em;
    margin-bottom: 0.8em;
    padding-bottom: 0.35em;
    border-bottom: 2px solid var(--global-divider-color);
  }
  .xp-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.9em;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .xp-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 10px;
    padding: 0.9em 1.1em;
    box-shadow: 0 2px 10px rgba(20, 40, 90, 0.04);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .xp-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(20, 40, 90, 0.08);
  }
  .xp-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.3em 1em;
  }
  .xp-org {
    font-weight: 600;
    font-size: 1.05em;
  }
  .xp-date {
    color: var(--global-text-color-light);
    font-size: 0.88em;
    white-space: nowrap;
  }
  .xp-role {
    color: var(--global-theme-color);
    font-weight: 600;
    font-size: 0.92em;
    margin: 0.1em 0 0.4em 0;
  }
  .xp-card ul {
    margin: 0;
    padding-left: 1.2em;
    font-size: 0.93em;
    line-height: 1.55;
  }
  .xp-badge {
    background: #fff7e0;
    color: #a06800;
    border: 1px solid #f1d98a;
    padding: 0.1em 0.55em;
    border-radius: 999px;
    font-size: 0.78em;
    font-weight: 600;
    margin-left: 0.4em;
  }
  html[data-theme="dark"] .xp-card {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
  }
  html[data-theme="dark"] .xp-badge {
    background: rgba(241, 217, 138, 0.12);
    color: #f1d98a;
    border-color: rgba(241, 217, 138, 0.3);
  }
  .skills-table td:first-child {
    font-weight: 600;
    padding-right: 1.2em;
    white-space: nowrap;
    vertical-align: top;
  }
  .skills-table td {
    padding: 0.25em 0;
  }
</style>

<div class="xp-section">

<h2>Research</h2>
<ul class="xp-grid">
  <li class="xp-card">
    <div class="xp-top"><span class="xp-org">Berkeley AI Research (BAIR), EMBER Centre</span><span class="xp-date">Berkeley, CA · 04/2026 – Present</span></div>
    <div class="xp-role">Machine Learning Research</div>
    <ul>
      <li>Advised by Jonas Frey and Siming He in Prof. Jitendra Malik and Prof. Claire Tomlin's labs. Trained vision-language navigation (VLN) models to find objects under a time budget, reaching 72.7% of targets vs. 44.8% for the baseline.</li>
      <li>First author of the paper that won the <strong>Best Paper Award</strong> at the IROS 2026 Workshop on Intelligent Information Gathering. Won an NSF ACCESS grant worth $150,000 in compute. Extended version under review at ICRA 2027.</li>
    </ul>
  </li>
  <li class="xp-card">
    <div class="xp-top"><span class="xp-org">Relling Systems</span><span class="xp-date">Berkeley, CA · 10/2025 – 04/2026</span></div>
    <div class="xp-role">Machine Learning Research Intern</div>
    <ul>
      <li>Found and localized temporal blindness in robot foundation models (π0-FAST, π0.5) using a 255-episode evaluation framework and a 36-layer embedding probe. The findings drove the design of a plug-in temporal encoder.</li>
      <li>Fine-tuned π0.5 and π0-FAST with LoRA on in-house robot demonstration data to adapt them to new tasks. Shipped the episode collection and labeling tooling for the data generation platform, growing active users by 28.5%.</li>
    </ul>
  </li>
</ul>

<h2>Quantitative Research</h2>
<ul class="xp-grid">
  <li class="xp-card">
    <div class="xp-top"><span class="xp-org">Squarepoint Capital</span><span class="xp-date">London, UK · 06/2025 – 08/2025</span></div>
    <div class="xp-role">PhD-level Quantitative Research Intern</div>
    <ul>
      <li>Deployed strategies replicating variance swaps under real-world volatility smiles; findings adopted for internal calibration review. Highest PnL in an intern class of PhD and Master's students; received a return offer.</li>
    </ul>
  </li>
  <li class="xp-card">
    <div class="xp-top"><span class="xp-org">Engelhart Trading</span><span class="xp-date">Houston, TX · 06/2024 – 08/2024</span></div>
    <div class="xp-role">PhD-level Quantitative Research Intern</div>
    <ul>
      <li>Built a SABR Monte Carlo pricer (Milstein scheme, implied correlation per strike) for illiquid natural gas calendar spread options. The desk adopted it to price and hedge unquoted spreads and track the Oct–Jan skew daily.</li>
      <li>Built a tail-risk monitor for power price shocks that flags 5th/95th percentile scenarios by peak and off-peak hours each morning, so traders can position ahead of moves.</li>
    </ul>
  </li>
</ul>

<h2>Software Engineering</h2>
<ul class="xp-grid">
  <li class="xp-card">
    <div class="xp-top"><span class="xp-org">Handle.com</span><span class="xp-date">San Francisco, CA · 06/2024 – 08/2024</span></div>
    <div class="xp-role">Software Engineering Intern</div>
    <ul>
      <li>Built LLM-powered scrapers and APIs over Google Maps, DataTree, and state license websites to verify property owners and contractors, raising search accuracy by 35% and automating the lookups behind payment compliance.</li>
    </ul>
  </li>
  <li class="xp-card">
    <div class="xp-top"><span class="xp-org">LinkedIn</span><span class="xp-date">San Francisco, CA · 02/2024 – 05/2024</span></div>
    <div class="xp-role">Software Engineering Intern</div>
    <ul>
      <li>Built and shipped to production a Java tool on the Machine Learning team that automates integrations between OpenAPI clients and 7 third-party providers, using NLP to classify errors and speed up failure triage.</li>
    </ul>
  </li>
</ul>

<h2>Education</h2>
<ul class="xp-grid">
  <li class="xp-card">
    <div class="xp-top"><span class="xp-org">University of California, Berkeley</span><span class="xp-date">Berkeley, CA</span></div>
    <div class="xp-role">M.E.T. Dual Degree — EECS & Business Administration (Haas) · GPA 3.8/4.0</div>
    <ul>
      <li>One of 50 students selected globally for the M.E.T. program (&lt;0.8% acceptance rate).</li>
      <li>$52,000 in scholarships from LinkedIn, NBC, and UC Berkeley.</li>
      <li>Communities: Net Impact Berkeley, AI Entrepreneurs @ Berkeley, CS Mentors, CIB Quant.</li>
    </ul>
  </li>
  <li class="xp-card">
    <div class="xp-top"><span class="xp-org">Air Force School</span><span class="xp-date">Pune, India</span></div>
    <ul>
      <li>JEE All India Rank 1768 out of 1.2 million candidates; admitted to IIT Bombay, Delhi, and Madras for Electrical Engineering / Computer Science.</li>
    </ul>
  </li>
</ul>

<h2>Honors</h2>
<ul class="xp-grid">
  <li class="xp-card"><span class="xp-org">Best Paper Award</span><span class="xp-badge">2026</span><div>IROS 2026 Workshop on Intelligent Information Gathering (first author)</div></li>
  <li class="xp-card"><span class="xp-org">NSF ACCESS Compute Grant</span><div>$150,000 in compute for vision-language navigation research</div></li>
  <li class="xp-card"><span class="xp-org">Jane Street Estimathon</span><div>Winning team</div></li>
  <li class="xp-card"><span class="xp-org">Kalshi Predictions at Berkeley</span><div>Winner</div></li>
</ul>

<h2>Skills</h2>
<table class="skills-table">
  <tr><td>Languages</td><td>Python, C++, Rust, JavaScript, Java, SQL, RISC-V Assembly, React, Swift, HTML/CSS, LaTeX</td></tr>
  <tr><td>Areas</td><td>Machine Learning, Quant Finance, Statistics, Graph Theory, Docker, Kubernetes, AWS</td></tr>
  <tr><td>Libraries</td><td>PyTorch, TensorFlow, Keras, Torchvision, NumPy, SciPy, Pandas</td></tr>
</table>

</div>
