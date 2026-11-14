# Tibyan Wattahfizul Qur'an — School Portal

This repository preserves and improves the original Tibyan school landing page for Unguwar Alhaji, Hadejia, Jigawa State.

## Current files

- `index.html` — public school landing page, preserving the original sections and school identity.
- `style.css` — responsive styling for desktop, tablet and mobile.
- `script.js` — accessible mobile navigation and automatic footer year.
- `index.original.html` — untouched copy of the uploaded original HTML for reference.

## Publish the public website with GitHub Pages

1. Upload the files in this folder to the root of the GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. The published URL will appear in the Pages settings.

## Backend limitation and planned architecture

GitHub stores the source code and GitHub Pages serves static website files. GitHub Pages does **not** execute a persistent server, provide a production database, manage secure sign-in, store uploaded media privately, or run real-time chat.

The complete school portal needs a separately running backend and database. The planned modules are:

- Student registration with class selection and administrator approval.
- Teacher registration, administrator approval and class assignment.
- Secure administrator, teacher and student authentication with role-based permissions.
- Announcements and school gallery/media management.
- Teacher progress reports and student results.
- Moderated school community chat.

Do not put passwords, database service keys, private API keys, or administrator credentials in frontend JavaScript or commit them to GitHub. The backend design and database schema should be added only after choosing the server host and database provider.

## Before production

The public landing page is ready for static hosting. Login and portal links are placeholders until the secure backend is implemented; they are not working authentication endpoints yet. Replace illustrative stock images with school-approved photographs before launch.
