# Website Improvement Recommendations

**Analysis Date:** September 2026  
**Current Stack:** Jekyll 4.3 on GitHub Pages with bilingual support (EN/ES)

This document outlines potential improvements for the UCU Movement Engineering Lab website, based on analysis of the current site and best practices from leading research lab websites.

---

## Current Strengths

- Clean Jekyll architecture with modular components (17 includes)
- Automatic ORCID publication fetching with monthly CI updates
- Full bilingual support (English/Spanish)
- Responsive design with UCU Blue (#005492) institutional branding
- Modern Inter typography
- Well-organized data structure (YAML-driven content)

---

## High-Impact Improvements

### 1. Visual Storytelling & Hero Section

**Current State:** Placeholder hero background, minimal visual engagement

**Recommendations:**
- [ ] Add high-quality hero image/video showing lab work (motion capture, EMG equipment, research in action)
- [ ] Consider subtle CSS animations reflecting "movement" theme (particles, motion trails)
- [ ] Add an image carousel showcasing key research highlights
- [ ] Create custom illustrations for research areas

**Inspiration:** Bhamla Lab uses bold fonts and playful touches; Barrett Lab uses striking species imagery; Allan Lab has an effective image carousel.

### 2. Team Page Enhancement

**Current State:** Basic portraits with placeholder bios ("TODO")

**Recommendations:**
- [ ] Write detailed PI bios (background, research journey, interests)
- [ ] Create individual profile pages for each team member (not just listing)
- [ ] Include: research interests, current projects, publications, contact
- [ ] Add graduate students, PhD candidates with their research focus
- [ ] Include alumni section with career trajectories
- [ ] Add "Lab in action" photos (conferences, fieldwork, celebrations)
- [ ] Consider fun facts or personal touches to humanize the team

**Inspiration:** The Academic Designer recommends individual bio pages for all lab members to build their online presence.

### 3. News & Updates Section

**Current State:** Single welcome post from January 2024

**Recommendations:**
- [ ] Establish regular update cadence (monthly minimum)
- [ ] Content types to include:
  - New publications
  - Conference presentations
  - Student achievements (thesis defenses, awards)
  - Lab milestones
  - Media coverage
  - Equipment acquisitions
- [ ] Differentiate news types (important announcements vs. general updates)
- [ ] Feature latest 3-5 items on homepage
- [ ] Add RSS feed promotion for followers

**Inspiration:** Allan Lab shows chronological updates demonstrating active recruitment and achievements.

### 4. Research Projects Deep Dive

**Current State:** Three research line cards with descriptions but placeholder images

**Recommendations:**
- [ ] Create individual project pages with:
  - Objectives and research questions
  - Methodology and approach
  - Key results and findings
  - Team members involved
  - Related publications
  - Funding acknowledgments
- [ ] Add project-specific imagery (data visualizations, equipment photos, diagrams)
- [ ] Include project status (ongoing, completed) and timeline
- [ ] Link publications bidirectionally to their parent projects
- [ ] Consider interactive demos (e.g., motion visualization examples)

**Inspiration:** Campbell-Staton Group uses narrative-driven project pages with custom visuals.

---

## Design Enhancements

### 5. Dark Mode Toggle

**Rationale:** Dark mode has become a necessity with 23% more user interactions reported. Reduces eye strain and conserves battery.

**Recommendations:**
- [ ] Add light/dark mode toggle in header
- [ ] Persist user preference in localStorage
- [ ] Respect `prefers-color-scheme` system setting
- [ ] Ensure WCAG contrast compliance in both modes
- [ ] Update CSS variables for dark theme:
  ```css
  [data-theme="dark"] {
    --background: #1a1a2e;
    --text: #f5f6fa;
    --primary: #4d9ed6; /* lighter blue for dark mode */
  }
  ```

### 6. Microinteractions & Animations

**Recommendations:**
- [ ] Add scroll-triggered fade-in animations for sections
- [ ] Enhance hover effects on cards (slight transform + shadow)
- [ ] Add loading skeleton states for publications
- [ ] Implement smooth page transitions
- [ ] Add `prefers-reduced-motion` media query for accessibility
- [ ] Keep animations under 400ms for optimal perception

**Accessibility Note:** Provide option to reduce/disable motion for users with motion sensitivity.

### 7. Typography & Visual Hierarchy

**Recommendations:**
- [ ] Consider accent/display font for hero headings
- [ ] Add larger, bolder statistics for impact metrics (e.g., "15+ Publications", "3 Active Projects")
- [ ] Use pull quotes for key research statements
- [ ] Improve visual distinction between content types

---

## Content Additions

### 8. Speaking Engagements & Outreach

**Recommendations:**
- [ ] Create "Talks & Presentations" page
- [ ] Embed video presentations (YouTube, Vimeo)
- [ ] List conference appearances (upcoming and past)
- [ ] Document outreach activities (workshops, public lectures, media)
- [ ] Add downloadable presentation slides where appropriate

### 9. Opportunities & Recruitment

**Current State:** "Join Us" button exists but minimal detail

**Recommendations:**
- [ ] Create dedicated "Opportunities" or "Join Us" page
- [ ] List current open positions (PhD, Masters, Postdoc, Undergraduate)
- [ ] Describe lab culture and what it's like to work here
- [ ] Outline application process and requirements
- [ ] Add testimonials from current/former students
- [ ] Include FAQs for prospective students

**Inspiration:** Allan Lab prominently features: "We are looking for passionate new PhD students, Postdocs, and Master students."

### 10. Funding & Partners

**Current State:** Collaborators section exists

**Recommendations:**
- [ ] Add funding sources acknowledgment (grants, institutional support)
- [ ] Display partner institution logos with links
- [ ] Include equipment/software acknowledgments
- [ ] Consider a "Sponsors" or "Support" section

---

## Technical Improvements

### 11. Performance & SEO

**Recommendations:**
- [ ] Add OpenGraph meta tags for better social sharing
  ```html
  <meta property="og:title" content="...">
  <meta property="og:description" content="...">
  <meta property="og:image" content="...">
  ```
- [ ] Implement lazy loading for images (`loading="lazy"`)
- [ ] Add structured data (JSON-LD) for:
  - Organization
  - Publications (ScholarlyArticle)
  - Team members (Person)
- [ ] Optimize images (WebP format, responsive srcset)
- [ ] Add sitemap to Google Search Console

### 12. Enhanced Search & Filtering

**Current State:** Publications search exists

**Recommendations:**
- [ ] Filter publications by: year, type, project, author
- [ ] Add tag-based filtering across the site
- [ ] Consider Algolia or similar for advanced search
- [ ] Add search to team page (by research area)

### 13. Interactive Elements

**Recommendations:**
- [ ] Publication statistics visualization (papers per year chart)
- [ ] Research timeline/history visualization
- [ ] Interactive research focus diagram
- [ ] Lab equipment gallery with descriptions

---

## Priority Matrix

| Priority | Improvement | Impact | Effort |
|----------|-------------|--------|--------|
| 🔴 High | Hero visuals & imagery | High | Medium |
| 🔴 High | Expand team bios | High | Low |
| 🔴 High | Active news/blog | High | Ongoing |
| 🟡 Medium | Project detail pages | Medium | Medium |
| 🟡 Medium | Dark mode | Medium | Medium |
| 🟡 Medium | Opportunities page | Medium | Low |
| 🟡 Medium | SEO improvements | Medium | Low |
| 🟢 Low | Microinteractions | Low | Medium |
| 🟢 Low | Speaking engagements page | Low | Low |
| 🟢 Low | Interactive visualizations | Low | High |

---

## Implementation Phases

### Phase 1: Content Foundation (1-2 weeks)
1. Write detailed PI bios
2. Add real hero background image
3. Create 2-3 news posts
4. Add project images

### Phase 2: Structure Expansion (2-3 weeks)
1. Create individual project pages
2. Create "Join Us" / Opportunities page
3. Expand team profiles
4. Add speaking engagements section

### Phase 3: Design Polish (2-3 weeks)
1. Implement dark mode
2. Add microinteractions and animations
3. Improve visual hierarchy
4. Optimize performance

### Phase 4: Advanced Features (ongoing)
1. Interactive visualizations
2. Advanced search/filtering
3. Analytics and tracking
4. Regular content updates

---

## Resources & Inspiration

### Exemplary Research Lab Websites
- [Allan Lab](https://www.allanlab.org/) - Clean Jekyll template with effective carousel
- [Bhamla Lab](https://bhamla.gatech.edu/) - Bold design with "Cabinet of Curiosities" theme
- [Campbell-Staton Group](https://www.scampbell-staton.com/) - Narrative-driven, comic/Afro-futurism inspired
- [Barrett Lab](https://barrettlab.ca/) - High-quality species imagery
- [Crowther Lab](https://crowtherlab.com/) - Clean layouts, strong media presence

### Design Resources
- [Impact Media Lab - 8 Best Academic Lab Websites](https://www.impactmedialab.com/scicomm/8-best-academic-lab-websites-to-inspire-your-lab-site)
- [The Academic Designer - Research Lab Websites](https://theacademicdesigner.com/2024/research-lab-websites/)
- [Stanford Web Design Guidelines](https://identity.stanford.edu/digital/web-design/)
- [SAMPA Research Group Web Template](https://github.com/uwsampa/research-group-web)

### Design Trends (2025-2026)
- Dark mode as necessity, not novelty
- Microinteractions for user engagement
- Accessibility-first design (WCAG 2.2)
- Mobile-first responsive layouts
- Meaningful animations (under 400ms)

---

## Notes

- All improvements should maintain bilingual parity (EN/ES)
- Follow UCU branding guidelines
- Ensure WCAG 2.1 AA accessibility compliance
- Test on mobile devices before deployment
- Consider analytics to measure improvement impact
