<script>
	import Heading from '$govuk/Heading.svelte'
	import InsetText from '$govuk/InsetText.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import Restyle from '$govuk/Restyle.svelte'

	import CodeBlock from '$shared/CodeBlock.svelte'
	import StandardPage from '$shared/StandardPage.svelte'
</script>

<StandardPage title="Home">
	<List slot="side-menu" spaced>
		<MenuItem href="/general-components">General components</MenuItem>
		<MenuItem href="/form-components">Form components</MenuItem>
	</List>

	<InsetText>
		<Restyle bold>Authors note:</Restyle> At the moment this is just a copy of the
		README. I will change it to something more appropriate later... probably.
	</InsetText>

	<Heading h1 xl>Sveltekit Template for GDS Design System projects</Heading>

	<Paragraph>
		A <Link href="https://kit.svelte.dev/">Sveltekit</Link> project template for
		building GOVUK services that use GDS Desgin System.
	</Paragraph>

	<InsetText>
		<Restyle bold>Authors note:</Restyle> The name of the project and repository
		will be definitely be changing once I figure out what I'm actually creating here.
	</InsetText>

	<Heading h2 lg>EXPERIMENTAL</Heading>

	<Paragraph>
		This project is currently very experimental. Component interfaces and
		implementations are constantly being rewritten as new ideas are tried out.
		Over time a stable set of components and a standard interface pattern should
		emerge. But this seems far off at the moment because there is soo much to
		explore.
	</Paragraph>

	<InsetText>
		<Restyle bold>Authors note:</Restyle> I really hope to try out <Link
			href="https://deno.land/">Deno</Link>
		as an alternative to Node. Historically, Sveltekit required <Link
			href="https://vitejs.dev/">Vite</Link>
		and <Link href="https://www.npmjs.com/">Node Package Manager (npm)</Link> which
		Deno did not support. This seems to no longer be the case. Deno aligns better
		with the values and principles of this project, particularly in terms of security
		and development ease.
	</InsetText>

	<Heading h2 lg>Ready to go tools</Heading>

	<Paragraph>
		The template comes with some pre-setup tools and is intentially minimal.
		This means keeping as close to pure HTML, CSS, and JS as feasible.
	</Paragraph>

	<Paragraph>
		Most frontends don't need SASS, SCSS, TypeScript, YARN and other supportive
		tooling but you can add these and swap existing tools in and out to suite
		your needs and preferences:
	</Paragraph>

	<InsetText>
		<Restyle bold>Authors note:</Restyle> The list below will likely change as ideas
		and options are explored. However, removals will be favoured over additions.
	</InsetText>

	<List bullets>
		<li>
			<Link href="https://www.npmjs.com/package/svelte-preprocess-import-assets"
				>svelte-preprocess-import-assets</Link> for embedding static content when
			files are specific to only one page
		</li>
		<li>
			<Link href="https://prettier.io/">Prettier</Link> for embedding static content
			when files are specific to only one page
		</li>
		<li>
			<Link href="https://www.npmjs.com/package/jsonlint-dir"
				>jsonlint-dir</Link> for validating and debugging JSON data files
		</li>
		<li>
			<Link href="https://jestjs.io/">Jest</Link> for code level testing
		</li>
		<li>
			<Link href="https://www.cypress.io/">Cypress</Link> for service testing <Link
				href="https://www.npmjs.com/package/start-server-and-test/v/1.11.7"
				>start-server-and-test</Link>
		</li>
	</List>

	<Heading h2 lg>GOVUK Frontend</Heading>

	<Paragraph>
		This project copies distribution files from <Link
			href="https://github.com/alphagov/govuk-frontend">govuk-frontend</Link
		>. This is done by cloning a specific release tag from <Link
			href="https://github.com/alphagov/govuk-frontend">govuk-frontend</Link> via
		Git and copying the required files to specific folder locations. The script for
		this is <code>/scripts/govuk-frontend-init.sh</code>.
	</Paragraph>

	<Heading h2 lg>Organisation by feature</Heading>

	<Paragraph>
		In SvelteKit, the page layout is organised hierarchically as folders
		reflecting the URL paths. This is an example of <Restyle bold
			>organisation by feature (or by slice)</Restyle
		>. This is an alternative to <Restyle bold>organisation by layer</Restyle> which
		has historically been favoured in Web development and Web API code bases.
	</Paragraph>

	<Paragraph>
		The real difference is in what concerns each separates and how they separate
		them:
	</Paragraph>

	<List>
		<li>
			<Restyle bold>Organisation by layer</Restyle> groups logically by type, e.g.
			separate folders for holding pages, models, controllers, utility components,
			etc. This aligns well with layered architectural theory (MVC etc) and is more
			optimal for code reuse.
			<List indent>
				<li><code>/models</code></li>
				<li><code>/controllers</code></li>
				<li><code>/page-templates</code></li>
			</List>
		</li>
		<li>
			<Restyle bold>Organisation by feature</Restyle> groups based on usage or relation,
			e.g. a single folder holding a page along with its specific models, controller,
			etc. This aligns well with top down user driven design methods, keeps related
			stuff together, and makes changing specific components easier.
			<List indent>
				<li><code>/home</code></li>
				<li><code>/products</code></li>
				<li><code>/components/forms</code></li>
			</List>
		</li>
	</List>

	<Paragraph>
		<Restyle bold>Organisation by feature</Restyle> is favoured throughout. Of course
		you're free to move everything around to suite your preferences.
	</Paragraph>

	<Heading h2 lg>Shared stuff</Heading>

	<Paragraph>
		Shared and importable data, content, styling, scripts, and Svelte components
		goes in <code>/static</code> or <code>/libs</code>:
	</Paragraph>

	<List bullets>
		<li>
			<Restyle bold><code>/static</code></Restyle> for statically served content
			akin to `/public` in other tools
		</li>
		<li>
			<Restyle bold><code>/src/libs/govuk</code></Restyle> for generic Svelte components
			that represent GOVUK GDS design system components along with supporting CSS
			and JS; these may or may not end up in a Svelte component library
		</li>
		<li>
			<Restyle bold><code>/src/libs/shared</code></Restyle> for project specific
			shared components; this is where you put all your shared importable stuff like
			Svelte components, JS, and CSS
		</li>
		<li>
			<Restyle bold><code>/src/libs/data</code></Restyle> for data that is shared
			project wide (if any)
		</li>
	</List>

	<Heading h2 lg>Import aliases</Heading>

	<Paragraph>
		Import aliases (<code>/svelte.config.js</code>) have been setup to make
		crafting pages simpler and inject some readability and meaning into imports.
		Preference is to avoid relative referencing except for importing from the
		same folder or sub-folders:
	</Paragraph>

	<InsetText>
		<Restyle bold>Authors note:</Restyle> Still needs a bit more experimentation
		but I think we're close on this one.
	</InsetText>

	<CodeBlock
		lines="{[
			`<script>`,
			`	import GovukCaption from '$govuk/Caption.svelte'`,
			`	import GovukPanel from '$govuk/Panel.svelte'`,
			`	import GovukSearchForm from '$govuk/forms/SearchForm.svelte'`,
			``,
			`	import Section from '$shared/Section.svelte'`,
			`	import util from '$shared/util.js'`,
			``,
			`	import defaultBarChartConfig from '$data/default-bar-chart-config.json'`,
			`</script>`,
		]}" />
</StandardPage>
