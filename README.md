# personal_website_maitree

Personal website of Maitree Meher, built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (adapted from [jonasfrey96.github.io](https://github.com/JonasFrey96/jonasfrey96.github.io)).

Live at: https://maitreemet.github.io/personal_website_maitree/

## Edit content

| What | Where |
| --- | --- |
| Bio / home page | `_pages/about.md` |
| Profile photo | `assets/img/prof_pic.jpg` |
| Experience page | `_pages/experience.md` |
| Publications | `_bibliography/papers.bib` **and** `_bibliography/papers_tagged.bib` (the site reads `papers_tagged.bib`) |
| News | `_news/*.md` |
| Projects | `_projects/*.md` |
| Resume PDF | `assets/pdf/Maitree_Meher_Resume.pdf` |
| Name, email, URL | `_config.yml` |
| Social links | `_data/socials.yml` |

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/personal_website_maitree/

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site into the `gh-pages` branch.
In the GitHub repo, go to **Settings → Pages** and set the source to the `gh-pages` branch.
