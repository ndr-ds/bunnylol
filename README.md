# Andre's BunnyLOL

This version of `bunnylol` *does not* need to be hosted on a server.

Currently, this is hosted on my GitHub Pages [http://andresilva91.github.io/bunnylol](http://andresilva91.github.io/bunnylol). However, you can host it on any website that you would like. Since this is going to be your primary search engine for every new tab you open, I would suggest that you don't host it somewhere that may take a while to spin up the static page (like Heroku where your VM could go to sleep).

## Example Commands

Command | Name | URL
--- | --- | ---
gh | GitHub | [https://github.com/](https://github.com/)
g | Google | [https://google.com/](https://google.com/)
DEFAULT | Default - Google Search | [https://google.com/](https://google.com/)

## Setup

1. Open Chrome and click the three dots. Click `Settings` and scroll down to `Search Engines`.

2. Click `Manage Search Engines`.

3. Add a new search engine with the URL being `http://andresilva91.github.io/bunnylol?search=%s`. Of course, you should change the `andresilva91.github.io` part to your own domain.

4. Make this the default search engine.

## Adding a command

1. Run `npm install` so that `flow` (JavaScript type checker) can run.

2. Open up the `src/commands.js` file. Add your command to the `COMMANDS` object. You must include a `name` and `url` attribute and you can add an additional `searchurl` attribute if you would to be able to type a command like `yt NBA Highlights` (in which case, `bunnylol` will automatically search for NBA Highlights on YouTube).

3. Run `npm run build && npm run bundle && npm run minify && npm run flow`

4. Push the commit

5. GitHub Pages should pick it up within a couple minutes

## Running locally

Since we use `import` module syntax, we need to run a server to bypass CORS issues. You can setup the server by running `npm install`, followed by `node server.js`. The server should be up and visible at `localhost:3000`.
