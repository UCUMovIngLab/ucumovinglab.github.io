# TODO

## Completed
- [x] phase 2 homepage redesign (hero, impact strip, highlights, featured publication/news, PI spotlight, CTA)
- [x] make sure this builds at ucumovinglab.github.io - Updated all references
- [x] logo in footer is too small, barely visible - Increased from 40px to 70px
- [x] need pictures for team members - Downloaded from UCU investigadores portal
- [x] homepage needs to be cleaner: a full list of publications is overwhelming - Limited to 5 with "See all" link
- [x] contact us page seems marketing-y - Rewritten with academic tone
- [x] collaborators from physiotherapy should read "Departamento de Bienestar y Salud" - Fixed
- [x] collaborators should list individuals too, such as Hamlet SuÃ¡rez (emÃ©rito SNI) - Added External Collaborators section
- [x] collaborators should have a former students section - Added with Juan Gandolfo, Melissa Imbert

## Pending (requires manual action)
- [x] need pictures for research projects/lines
  - Need images for: `images/projects/motor-control.jpg`, `images/projects/rehabilitation.jpg`, `images/projects/digitalization.jpg`
  - Suggested sources: Unsplash, Pexels, or Pixabay (search for biomechanics, motion capture, rehabilitation)
- [x] need hero background image
  - Need image for: `images/hero-bg.jpg`
  - Suggested: High-res photo of the lab or a MoCap skeleton
### Images

#### Research Area 1: Locomotion & Gait Analysis

This area needs to convey movement, measurement, and data.

**Option A: The Kinematic Skeleton (Classic & Clear)**

> A minimalist scientific visualization of human gait analysis on a clean white background. A stylized translucent blue wireframe skeleton is in mid-stride. Trailing behind the skeleton are motion vector lines and subtle graphs showing joint angles in shades of cyan and dark blue. The aesthetic is clean data visualization, not photorealistic.

**Option B: The Force Plate View (Abstract & Tech)**

> An abstract visualization of ground reaction forces. A pair of glowing blue footprints on a dark grey grid surface. Arrows composed of light rise vertically from the footprints, indicating force magnitude. The style is futuristic digital interface, blueprints, dark mode.

**Option C: The Motion Trail (Dynamic)**

> A long-exposure data visualization of a runner. The human figure is composed entirely of flowing blue data points and light trails against a light grey gradient background. It conveys speed and biomechanical flow without showing a specific person's features.

#### Research Area 2: Rehabilitation Tech & Wearables

This area needs to show hardware interacting with the human body.

**Option A: The Sensor Close-Up (Product Focus)**

> A macro shot of a sleek, prototype wearable inertial measurement unit (IMU) sensor strapped to a person's ankle with a black band. The sensor casing is white with a subtle glowing blue indicator light. The background is a blurred, clean laboratory environment. Focus is sharp on the technology.

**Option B: The Robotic Assist (Future of Rehab)**

> A close-up photograph of a lightweight, modern exoskeleton joint prototype attached to a human arm. The device is made of white polymer and brushed aluminum with subtle blue wiring accents. It looks clinical and advanced.

**Option C: The Data Stream (The Output)**

> A screen showing real-time biomechanical sensor data. Multiple wavy lines of accelerometer and gyroscope data in varying shades of electric blue scroll across a dark grid background. A digital rendering of a limb orientation is in the corner.

#### Research Area 3: Computer Vision & AI in Health

This needs to visualize the "computer brain" analyzing human movement.

**Option A: The Pose Estimation Overlay (The Standard)**

> A camera frame showing a person performing a movement test. Overlaid on the person is a bright blue artificial intelligence skeletal tracking rig, connecting joints with lines and dots. Numbers indicating joint angles float next to the knees and elbows. The style is augmented reality interface.

**Option B: The Point Cloud (3D Depth Sensing)**

> A 3D visualization of a human body created entirely from a dense cloud of blue dots (LiDAR or depth camera data) suspended in a dark digital void. The figure is captured mid-movement.

**Option C: The Neural Network (Abstract AI)**

> An abstract representation of computer vision. A stylized human silhouette at the center is being analyzed by a converging network of glowing blue nodes and connections, representing a neural network. The background is clean white.

#### Recommendation for Implementation

1. Generate 3-4 variations of the options you like best.
2. Choose the winners, ensuring they look good together as a set (similar lighting and color density).
3. Save them as optimized JPGs or PNGs (e.g., `gait-analysis-thumb.jpg`, `wearables-thumb.jpg`).
4. Pass these filenames to your AI coding agent along with the technical document we created previously.

---

### Other Improvements

> **Website Enhancement Specification: ucumovinglab.github.io**
>
> **Objective:** Improve the visual hierarchy, branding consistency, and content completeness of the UCU Moving Lab website while maintaining a professional academic aesthetic.

#### 1. Visual Branding & UI Polishing

- [x] **Color Palette Enforcement:** Ensure the primary CSS variables use UCU Blue (`#005492` or the specific institutional hex code) and White.
  - *Action:* Update `_sass/variables.scss` (or equivalent) to map primary links, buttons, and hover states to these colors.

- [x] **Typography:** Transition headers from the default theme font to a cleaner Sans-Serif (e.g., Inter or Montserrat).
  - *Action:* Import Google Fonts in `_includes/head.html` and update the `font-family` in the CSS.

- [x] **Hero Section:** Replace the static text-only landing with a "Hero" layout.
  - *Action:* Create a div in `index.md` or `home.html` with a semi-transparent UCU Blue overlay and a high-quality background image (placeholder: `assets/images/hero-bg.jpg`).

#### 2. Component Refactoring

- [x] **Project Cards:** Increase vertical padding and add a subtle border-radius (e.g., 8px) with a very light grey border to define project boundaries better.

- [ ] **People Section Styling:**
  - *Action:* Implement a CSS class to force all profile-pic images to a circular crop with a consistent 2px blue border.
  - *Action:* Add a "Bio" toggle or shortened preview to keep the list scannable.

- [x] **Mobile Responsiveness:**
  - *Action:* Apply `overflow-x: auto` to all tables in the Publications section to prevent layout breaking on mobile screens.

#### 3. Missing Media Asset Management

The agent should create placeholders or specific paths for the following missing images:

| Section    | Image Requirement    | Preferred Aesthetic                                |
|------------|----------------------|----------------------------------------------------|
| Hero       | `hero-bg.jpg`        | High-res photo of the lab or a MoCap skeleton.     |
| Research 1 | `locomotion.png`     | Kinematic gait cycle graph or stick-figure walking.|
| Research 2 | `rehab-tech.png`     | Close-up of an IMU sensor or orthotic device.      |
| Research 3 | `computer-vision.png`| Pose estimation overlay (skeleton) on a video frame.|

#### 4. Automation & Data Handling

- [ ] **BibTeX Cleanup:** Check `_publications/` files for long abstract strings that might be cluttering the UI.

- [x] **Social Icons:** Ensure the lab's GitHub and Twitter/X (if applicable) are in the footer using FontAwesome icons.
