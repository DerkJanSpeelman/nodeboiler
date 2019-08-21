# Node.js Boilerplate

This repo is a Node.js server in TypeScript.

Features:
- [TypeScipt](https://www.typescriptlang.org/) as JavaScript
- [SASS](https://sass-lang.com/) as CSS
- [Pug.js](https://pugjs.org/api/getting-started.html) as HTML
- [Docker](https://www.docker.com/)

See `package.json` for the available `npm` script commands.

<br>

## Docker deployment (optional)

<br>

> Only do this when going to production, or extensively testing a production environment.

<br>

Please note that I cloned this repo into `~/Projects/nodeboiler`. So for me the `docker build` command would look like:

```sh
docker build -t nodeboiler ~/Projects/nodeboiler`
```

<br>

To view the created docker image (named nodeboiler) run: `docker images`. To run the docker image, run:

```sh
docker run -p 49160:3000 -d nodeboiler
```

<br>

To get the container's console logs, run `docker ps`, look for the container id that is using the nodeboiler image and run:

```sh
docker logs <container id>
```

<br>

Replace `<container id>` with the container id you saw when running `docker ps`, obviously. In this repo's case, it would log `Running on http://0.0.0.0:3000` (see `dist/server/server.js:16`).

<br>

 > **NOTE:** Since we're running the docker image, we need to connect to `localhost:49160`, instead of `http://0.0.0.0:3000`. But since that is what we're console.logging in `server.js`, that is what's being logged. Small detail.

<br>

To call the app inside docker, run `curl -i localhost:49160`. Or simply open your browser and go to `localhost:49160`.

To rebuild Docker after applying modifications, Run:

```sh
docker stop <container id>
docker rm <container id>
docker image rm <image id>
```

And run `docker build` from before again.
