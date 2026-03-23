# Online Wedding Invitation

A modern, responsive wedding invitation website built with React, Vite, and Tailwind CSS v4.

## Features

- **Hero Section**: Full-screen introduction with parallax background.
- **Couple Profiles**: Dedicated section for the bride and groom.
- **Event Details**: Information about the ceremony and reception.
- **Gallery**: Photo grid showcasing the couple's moments.
- **Map Integration**: Interactive Google Maps location.
- **RSVP Form**: Functional form for guests to confirm attendance.
- **Wishes Guestbook**: Interactive section for guest messages.
- **Audio Player**: Background music with autoplay handling (user interaction prompt).

## Project Structure

This project has been refactored for easy maintainability.

- `src/components/`: Contains all the UI components (Hero, Couple, etc.).
- `src/data/content.js`: **The single source of truth for all content.**
- `src/index.css`: Global styles and Tailwind configuration.

## How to Edit Content

You do **not** need to touch the code in `src/components/` to change text, images, or settings.

1.  Open `src/data/content.js`.
2.  Edit the values within the `content` object.
    - **To change names**: Update `hero.title`, `couple.groom.name`, etc.
    - **To change photos**: Replace the URLs in `hero.backgroundImage`, `gallery.images`, etc.
    - **To change music**: Update `audio.url`.
    - **To change location**: Update `map.googleMapsUrl` and `map.embedUrl`.

## Development

1.  Install dependencies:

    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

## deployment

To build for production:

```bash
npm run build
```

The output will be in the `dist` folder, ready to be deployed to Vercel, Netlify, or any static host.
