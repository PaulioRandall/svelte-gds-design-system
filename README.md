# Sveltekit Template for GDS Design System projects

A [Sveltekit](https://kit.svelte.dev/) project template for building GOVUK services that use GDS Desgin System.

## Purpose (EXPERIMENTAL)

The purpose of this project is to explore the use of Svelte for crafting web content using GDS design system components.

This project is currently very experimental. Component interfaces and implementations are constantly being rewritten as new ideas are tried out. Over time a stable set of components and a standard interface pattern should emerge. But this seems far off at the moment because there is soo much to explore.

> **Authors note:** I really hope to try out [Deno](https://deno.land/) as an alternative to Node. Historically, Sveltekit required [Vite](https://vitejs.dev/) and [Node Package Manager (npm)](https://www.npmjs.com/) which Deno did not support. This seems to no longer be the case. Deno aligns better with my values and principles, particularly in terms of security and ease of development.

## Ready to go tools

The template comes with some pre-setup tools and is intentially minimal. This means keeping as close to pure HTML, CSS, and JS as feasible.

Most frontends don't need SASS, SCSS, TypeScript, YARN, or other supportive tooling but you can add these and swap existing out tooling to suite your needs and preferences:

> **Authors note:** The list below will likely change as ideas and options are explored. However, removals will be favoured over additions.

- [svelte-preprocess-import-assets](https://www.npmjs.com/package/svelte-preprocess-import-assets) for embedding static content when files are specific to only one page
- [Prettier](https://prettier.io/) for code formatting
- [jsonlint-dir](https://www.npmjs.com/package/jsonlint-dir) for validating and debugging JSON data files
- [Jest](https://jestjs.io/) for code testing
- [Cypress](https://www.cypress.io/) for service testing (uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test/v/1.11.7))

## GOVUK Frontend

This project copies distribution files from [govuk-frontend](https://github.com/alphagov/govuk-frontend). This is done by cloning a specific release tag from [govuk-frontend](https://github.com/alphagov/govuk-frontend) via Git and copying the required files to specific folder locations. The script for this is [/scripts/govuk-frontend-init.sh](/scripts/govuk-frontend-init.sh).

## Organisation by feature

In SvelteKit, the page layout is organised hierarchically as folders reflecting the URL paths. This is an example of _organisation by feature (or by slice)_. _Organisation by layer_ has historically been favoured in Web development and Web API code bases.

The real difference is in what concerns each separates and how they separate them:

- _Organisation by layer_ groups logically by type, e.g. separate folders for holding pages, models, controllers, utility components, etc. This aligns well with layered architectural theory (MVC etc) and is more optimal for code reuse.
  - `/models`
  - `/controllers`
  - `/page-templates`
- _Organisation by feature_ groups based on usage or relation, e.g. a single folder holding a page along with its specific models, controller, etc. This aligns well with top down user driven design methods, keeps related stuff together, and makes changing specific components easier.
  - `/home/model.js`, `/home/controller.js`, `/home/page-template.html`
  - `/products/model.js`, `/products/controller.js`, `/products/page-template.html`

_Organisation by feature_ is favoured in this project throughout. Of course you're free to move everything around to suite your preferences.

## Shared stuff

Shared and importable data, content, styling, scripts, and Svelte components goes in `/static` or `/libs`:

- [./static](/static) for statically served content akin to `/public` in other tools
- [./src/libs/govuk](./src/libs/govuk) for generic Svelte components that represent GOVUK GDS design system components along with supporting CSS and JS
- [./src/libs/shared](./src/libs/shared) for project specific shared components; this is where you put all your shared importable stuff like Svelte components, JS, and CSS
- [./src/libs/data](./src/libs/data) for bundled data that is shared project wide

## Import aliases

[Import aliases](/svelte.config.js) have been setup to make crafting pages simpler and inject some readability and meaning. Preference is to avoid relative referencing except for importing from the same folder or sub-folders:

> **Authors note:** Still needs a bit more experimentation but I think we're close on this one.

```html
<script>
	import GovukCaption from '$govuk/Caption.svelte'
	import GovukPanel from '$govuk/Panel.svelte'
	import GovukSearchForm from '$govuk/forms/SearchForm.svelte'

	import Section from '$shared/Section.svelte'
	import util from '$shared/util.js'

	import defaultBarChartConfig from '$data/default-bar-chart-config.json'
</script>
```

## Checking out

1. Clone the repo and delete the lock file (if present). You can fork the repository in Github first if you want:

```bash
git clone https://github.com/PaulioRandall/svelte-gds-design-system.git
cd svelte-gds-design-system
rm -f package-lock.json
```

2. Update project name in `package.json` with your project name.

3. Install [Node v18](https://nodejs.org/en/download/).

4. Install, build, and run:

```bash
npm i
npm run govuk-init
npm run build
npm run dev
```

5. Enjoy at [localhost:3000](http://localhost:3000)

6. When you are ready to commit and push changes use the following to run a full format, build, code test, and service test:

```bash
npm run commit
```

You'll know if everything is good because you'll get someones lovely curated ASCII scene which can be changed by modifying `${project_root}/scripts/well-done.txt`:

```bash
                                   .''.
       .''.      .        *''*    :_\/_:     .
      :_\/_:   _\(/_  .:.*_\/_*   : /\ :  .'.:.'.
  .''.: /\ :    /)\   ':'* /\ *  : '..'.  -=:o:=-
 :_\/_:'.:::.  | ' *''*    * '.\'/.'_\(/_ '.':'.'
 : /\ : :::::  =  *_\/_*     -= o =- /)\     '  *
  '..'  ':::' === * /\ *     .'/.\'.  ' ._____
      *        |   *..*         :       |.   |' .---"|
        *      |     _           .--'|  ||   | _|    |
        *      |  .-'|       __  |   |  |    ||      |
     .-----.   |  |' |  ||  |  | |   |  |    ||      |
 ___'       ' /"\ |  '-."".    '-'   '-.'    '`      |____
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ...o0o.            ~-~-~-~-~-~-~-~-~-~   /|
          ||     ~-~-~-~-~-~-~-~  /|~       /_|\
         _||_   -~-~-~-~-~-~     /_|\    -~======-~
~~~\XXXXXXXXX/~     ~-~-~-~     /__|_\ ~-~-~-~
~-~-~-~-~-~    ~-~~-~-~-~-~    ========  ~-~-~-~

```

## Stuck or curious

#### Format code?

```bash
npm run fmt
```

Modify `.prettierrc.json` to customise styling.

#### Reimport govuk-frontend files?

```bash
npm run govuk-clean
npm run govuk-init
```

#### Delete build directory?

```bash
npm run clean
```

#### Environment variables?

> **Authors note:** I feel like this isn't needed so it will likely be removed soon.

All environment variables must be prefixed with `VITE_` or they won't be accessible by Sveltekit.

At the start of a build `./scripts/build-env.sh` is run that generates a `.env` file in the root of the project. This file is ignored by Git. Add new variables by modifying the `build-env.sh` script. Changing `.env` will result in your changes being wiped on the next build.

To rebuild this file without rebuilding the project use the following:

```bash
npm run prebuild
```

#### Permission denied?

```bash
sh: 1: ./scripts/build-env.sh: Permission denied
```

If you get a permissions error like the one above then you'll just need to give yourself permissions to execute the file:

```bash
chmod 744 ./scripts/build-env.sh
```

If you're on Windows you'll have to figure that out your self. Sorry.

#### Production build warning

```bash
Could not detect a supported production environment...
```

Don't worry if you get a build warning like the one above.

When the time comes to deploy to development and production environments you'll want to research [SvelteKit adapters](https://kit.svelte.dev/docs/adapters).

> **Authors note:** I use Vercel to host my personal website so I use [@sveltejs/adapter-vercel](https://www.npmjs.com/package/@sveltejs/adapter-vercel). There are many others and you can write your own. I've written a custom Express adapter before and it's not too difficult. Just a little tedious due to extra work needed to test it.
