# Case Study Page Redesign

## Goal
Improve the UX/UI of the Case Study page (`app/projects/[slug]/page.tsx`) to be more visually appealing, professional, and readable. The design should follow modern UX/UI principles with better typography, spacing, and visual hierarchy.

## User Review Required
> [!NOTE]
> The current page has many hardcoded elements specific to "iBusiness Corporation". The redesign will keep some of these custom elements (like the specific showcase) but will structure the code to be cleaner and more polished.

## Proposed Changes

### Layout Refinement (Based on Reference Image)
- **Project Overview**: Dark background with centered text.
- **Problem & Goal**: specific section with "PROBLEM STATEMENT" header, split into two columns (Problem / Goal).
- **Process - Sitemap**: White background, displaying the sitemap structure.
- **Design System**: Distinct sections for Color Palette (Circles), Typography (Inter), and Components.
- **UI Design**: Vertical flow for Web Interface and Responsive View (Mobile).

### Visual Polish
- **Sitemap**: Polish the CSS-drawn sitemap for sharper lines and better alignment.
- **Design System**: Reorganize the Color and Typography sections for a cleaner look.
- **Mockups**: Add proper shadows and rounded corners to device frames.

### Gallery Layout
- Improve the grid layout for Desktop and Mobile UI screenshots.
- Ensure images have proper aspect ratios and loading states.

## Verification Plan
### Manual Verification
- Check the page at `/projects/ibusiness` (or relevant slug).
- Verify responsiveness on Mobile, Tablet, and Desktop.
- Check animations and transitions.
