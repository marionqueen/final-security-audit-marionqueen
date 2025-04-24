# Final Security Audit: Marion Queen
# Travel Adventure Game

## Project Overview
This is an interactive, choose-your-own-adventure travel game built using HTML, CSS, and JavaScript. Players explore adventures across Asia and Europe with randomized storylines and image outcomes.
This project was submitted as part of a Secure Coding audit. It intentionally contains and demonstrates common OWASP vulnerabilities to raise awareness of secure front-end development practices.

## Peer Code Review
- Collaborator: @tlavallee4
- Reviewed via pull request and inline comments.

## Security Testing Tools
- **GitHub CodeQL Action** for static analysis
- **Bandit** (Python security linter)

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript (DOM-based rendering)

## OWASP Top 10 Vulnerabilities (Front-End Focus)

| OWASP ID | Name | Risk Summary |
|----------|------|----------------|
| A01:2021 | Broken Access Control | Game logic is fully exposed in client-side JS; players can manipulate outcomes using browser dev tools |
| A03:2021 | Injection | Image filenames are sourced directly from a JS object without validation or sanitization |
| A05:2021 | Security Misconfiguration | Game assets (images) and logic are exposed without any access restrictions or CSP headers |
| A07:2021 | Identification and Authentication Failures | There is no session handling, login, or user validation — anyone can modify outcomes |
| A09:2021 | Security Logging and Monitoring Failures | There is no tracking of user actions, rendering tampering or abuse undetectable |


## How to Run Locally
1. Download the project files.
2. Open `index.html` in your browser.
3. Enjoy the adventure and try different outcomes!


## Author
Created by Marion Queen for a final Secure Coding project.

