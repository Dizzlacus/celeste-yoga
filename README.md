# celeste-yoga

Static site for Celeste Yoga — Rocket™, Ashtanga and Vinyasa classes in Newcastle.

## Docker

Requires [Docker Desktop](https://www.docker.com/products/docker-desktop/) or Docker Engine with Compose v2.

### Local preview

Build and serve the site at http://localhost:8080:

```bash
docker compose up --build
```

The `images/` directory must be present before building (it is referenced by `index.html`).

### Live edit mode

Mount the project directory into nginx so HTML, JS, and image changes appear without rebuilding:

```bash
docker compose --profile dev-live up
```

### Production

Build and run the image directly:

```bash
docker build -t celeste-yoga .
docker run -p 80:80 celeste-yoga
```

Terminate HTTPS at your reverse proxy or load balancer in production; the container serves HTTP on port 80.

The contact form posts to [Formspree](https://formspree.io) and works from localhost during local preview.
