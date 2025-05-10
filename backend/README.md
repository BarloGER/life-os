# Backend – life-os

This folder contains the PHP backend of the `life-os` project. It is containerized using Docker and supports separate development and production environments.

---

## 📦 Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🧪 Development Setup

To start the development environment:

```bash
  cd backend
  docker-compose -f docker-compose.dev.yml up --build
````

* PHP 8.3 (or 8.4) with Apache is used.
* PHP errors are written to `logs/php_errors.log`.
* Source code is mounted live from `./backend` via bind-mount.

### 🔍 Live Log Monitoring

```bash
  tail -f logs/php_errors.log
```

### 🛑 Stop containers

```bash
  docker-compose -f docker-compose.dev.yml down
```

---

## 🚀 Production Build

To build and run the production backend:

```bash
  cd backend
  docker-compose -f docker-compose.prod.yml up --build -d
```

* PHP errors are **not displayed** and are logged via Docker logs (`stderr`).
* The code is **baked into the image** – no bind mounts.
* No `.env`, test, or log files are included in the image (see `.dockerignore`).

### 🔍 View production logs

```bash
  docker-compose -f docker-compose.prod.yml logs -f backend
```

---

## 🔐 Security Notes

* PHP version and Apache server tokens are hidden in production.
* `session.cookie_secure = 1` is enabled (requires HTTPS in production).
* Logs and `.env` files are excluded from Git and Docker builds.

---

## 🧼 Clean up everything

```bash
  docker-compose -f docker-compose.dev.yml down -v --remove-orphans
  docker system prune -f
```

---

## 📌 Notes

* You can switch PHP versions by changing the `dockerfile:` line in your Compose files.
* Do **not** commit `.env`, `logs/`, or `tests/` to production.
