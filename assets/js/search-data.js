// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/personal_website_maitree/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal_website_maitree/publications/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "Research, industry, and education.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal_website_maitree/experience/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Things I&#39;ve built outside of research and work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal_website_maitree/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Resume — preview below or download the PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal_website_maitree/cv/";
          },
        },{id: "news-finished-my-quantitative-research-internship-at-squarepoint-capital-in-london-with-the-highest-pnl-in-the-intern-class-and-a-return-offer",
          title: 'Finished my quantitative research internship at Squarepoint Capital in London, with the highest...',
          description: "",
          section: "News",},{id: "news-joined-berkeley-ai-research-bair-ember-centre-to-work-on-vision-language-navigation-in-the-labs-of-prof-jitendra-malik-and-prof-claire-tomlin",
          title: 'Joined Berkeley AI Research (BAIR), EMBER Centre, to work on vision-language navigation in...',
          description: "",
          section: "News",},{id: "news-trophy-our-paper-on-time-budgeted-vision-language-navigation-won-the-best-paper-award-at-the-iros-2026-workshop-on-intelligent-information-gathering-an-extended-version-is-under-review-at-icra-2027",
          title: ':trophy: Our paper on time-budgeted vision-language navigation won the Best Paper Award at...',
          description: "",
          section: "News",},{id: "projects-fourth-down",
          title: 'Fourth Down',
          description: "A live event-trading dashboard for college football prediction markets",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website_maitree/projects/1_fourth_down/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
