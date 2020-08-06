## Gist Viewer
> A tiny react and redux based app that shows a listing of gists for a github user.

### Setup

```bash
    # clone repository
    λ git clone https://github.com/umayr/gist-viewer
    # change directory
    λ cd gist-viewer
    # install dependencies
    λ yarn # or alternatively use npm
    # start app in developer mode
    λ yarn start
```

### Build

with `yarn` (if you app and its pre-requisites set up in your system)
```bash
    λ yarn build
```

with `docker`
```bash
    # build docker image
    λ docker build --force-rm --rm -t gist-viewer .
    # run the docker image while mounting build folder
    λ docker run --rm -v $(pwd)/build:/app/build -it gist-viewer
```

You can serve the production build with any http server like nginx or apache, but for testing purposes:

```bash
    λ python -m SimpleHTTPServer 8000
```