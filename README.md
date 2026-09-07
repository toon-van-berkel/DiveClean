# DiveClean

DiveClean is a prototype application that encourages recreational divers to help remove waste from underwater environments.

The concept combines waste collection, environmental impact tracking and optional rewards to make cleanup efforts visible without turning diving into an obligation.

> Dive. Clean up. Make an impact.

---

## About the project

DiveClean was created as part of **TLE1 – Experimenteren** within the Creative Media and Game Technologies programme at Hogeschool Rotterdam.

The project explores how technology could support a future in which recreational activities actively contribute to a cleaner and more circular environment.

Divers can collect waste during a dive, register or report it and view the environmental impact of their actions afterwards.

---

## Core features

- Personal impact dashboard
- Start a new dive
- Report waste that is unsafe or impossible to remove
- Register collected waste at a collection point
- View cleanup results
- Track total waste removed
- DivePoints reward system
- Monthly and yearly impact statistics
- Safety information for underwater waste collection

---

## Research Through Design

DiveClean is developed using a **Research Through Design** approach.

The first prototype test produced several important insights:

- Personal environmental impact is more important to many users than rewards alone.
- Gamification can motivate some users, but can create pressure for others.
- Safety must remain more important than collecting waste.
- Heavy, sharp or dangerous waste should be reportable instead of requiring the diver to remove it.
- DiveClean should remain an optional addition to diving rather than turning every dive into a cleanup task.

These insights are used to improve the prototype during development.

---

## Prototype flow

```text
Home
  ↓
Start Dive
  ↓
Collect or Report Waste
  ↓
Register Waste
  ↓
View Result
  ↓
View Personal Impact
```

---

## Tech stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- PHP

PHP is used for the backend as required by the course assignment.

---

## Project structure

```text
DiveClean/
│
├── index.php
│
├── pages/
│   ├── dive.php
│   ├── report.php
│   ├── dropoff.php
│   ├── result.php
│   └── impact.php
│
├── css/
│   ├── main.css
│   └── components.css
│
├── js/
│   ├── app.js
│   ├── dive.js
│   └── impact.js
│
├── php/
│   ├── api/
│   ├── database/
│   └── config.php
│
├── assets/
│   ├── images/
│   └── icons/
│
├── README.md
└── LICENSE
```

The exact project structure may change during development.

---

## Running the project

DiveClean uses PHP and should therefore be run through a local web server.

### PHP development server

From the project directory:

```bash
php -S localhost:8000
```

Then open:

```text
http://localhost:8000
```

### XAMPP

Place the project inside:

```text
C:\xampp\htdocs\DiveClean
```

Start Apache and open:

```text
http://localhost/DiveClean
```

---

## Team

### Toon van Berkel

Creative Media and Game Technologies  
Hogeschool Rotterdam

### Liam

Creative Media and Game Technologies  
Hogeschool Rotterdam

---

## Status

**Prototype in development**

DiveClean is currently being developed and tested as an educational prototype.

It is not intended for real-world diving or safety-critical use.

---

## License

This project is proprietary and is not licensed for reuse, redistribution or modification.

See [`LICENSE`](./LICENSE) for more information.

---

© 2026 DiveClean