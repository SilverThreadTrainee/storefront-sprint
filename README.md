# 🛍️ Storefront Sprint – Git Collaboration Project

This repository showcases a simulated real-world collaborative development workflow using Git and GitHub. The project involved multiple contributors working on different UI components of an e-commerce storefront, using branching, pull requests, and conflict resolution strategies.

---

## 🚀 Project Objective

- Set up a shared GitHub repository
- Define and follow a branching model (main, feature, bugfix)
- Develop UI/logic components in isolation using branches
- Collaboratively resolve at least one merge conflict
- Practice code review via GitHub pull requests

---

## 🗂️ Branching Strategy

```plaintext
main
├── feature/inventory-badge
├── feature/product-card
└── feature/Promo-banner
└── feature/Checkout-button

main: Stable production-ready branch

feature/*: New features developed individually

bugfix/*: Isolated fixes handled independently

🛠️ Features Worked On
Branch	Contributor	Description
feature/inventory-badge	AartiPatel401	Added a badge to display inventory status
feature/product-card	(Optional) Team Member	Product card UI structure
bugfix/*	(Optional) Team Member	Fixes for minor visual/UI issues

🔁 Pull Requests & Collaboration
Each contributor submitted a pull request from their feature branch

Peer reviews were conducted before merging into main

One merge conflict occurred in src/App.jsx while merging feature/inventory-badge

Conflict was resolved manually using GitHub’s web editor, ensuring logic from both branches was preserved

🧠 Conflict Details
File Involved: src/App.jsx

Conflict: Simultaneous edits in the same JSX section by both main and feature/inventory-badge

Resolution:

Used GitHub conflict markers (<<<<<<<, =======, >>>>>>>)

Team discussed and merged both changes cleanly

Commit created to finalize resolution

✅ Final Outcome
All features merged into main successfully

No post-merge errors

Project demonstrates effective use of:

Git branching

Pull requests

Conflict resolution

Team collaboration

📚 Lessons Learned
Importance of branching in parallel development

Hands-on practice with resolving merge conflicts

Real-world GitHub workflows using PRs and code reviews

Improved communication and coordination among team members

📸 Poster & Documentation
View the Summary Poster (PDF) – Visual explanation of conflict resolution and team Git workflow

👥 Contributors
AartiPatel401 – Feature: Inventory Badge

Ruchit3601 – Reviewed PRs, facilitated merging & documentation

Dhara - Feature: Checkout-button
Ajay - Feature: Promo-Banner


