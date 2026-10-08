---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
---

<style>
/* Publication entries */
#all-publications ol.bibliography > li {
  padding: 0.9rem 0.75rem;
  border-radius: 10px;
  transition: background 0.15s;
}
#all-publications ol.bibliography > li:hover {
  background: var(--global-card-bg-color);
}
#all-publications ol.bibliography > li + li {
  border-top: 1px solid var(--global-divider-color);
}
#all-publications .publication-entry .title {
  font-weight: 600;
}
</style>

<div class="publications" id="all-publications">
  {% bibliography --group_by none %}
</div>
