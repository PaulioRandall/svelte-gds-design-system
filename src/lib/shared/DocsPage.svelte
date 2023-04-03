<script>
	import Breadcrumbs from '$govuk/Breadcrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import WarningText from '$govuk/WarningText.svelte'

	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'

	export let group // = ""
	export let title // = ""

	export let gds_name = ''
	export let gds_link = ''

	export let crumbs /* = [
		['href', 'label'],
		...
	] */

	export let parents = null /* = [
		['href', 'label'],
		...
	] */

	export let children = null /* = [
		['href', 'label'],
		...
	] */

	export let examples /* = [
		['id', 'label'],
		...
	] */

	const hasConfig =
		$$props.parents || $$props.children || $$slots.slots || $$slots.props
</script>

<StandardPage thick_content sticky_menu title="{title}">
	<Breadcrumbs slot="breadcrumbs" collapsable crumbs="{crumbs}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			{#each examples as [id, label]}
				<MenuItem href="#{id}">{label}</MenuItem>
			{/each}
		</List>
		{#if hasConfig}
			<MenuItem bold href="#interface">Interface</MenuItem>
			<List sub_list spaced>
				{#if $$props.parents}
					<MenuItem href="#parents">Parents</MenuItem>
				{/if}
				{#if $$props.children}
					<MenuItem href="#children">Children</MenuItem>
				{/if}
				{#if $$slots.slots}
					<MenuItem href="#slots">Slots</MenuItem>
				{/if}
				{#if $$slots.props}
					<MenuItem href="#props">Props</MenuItem>
				{/if}
			</List>
		{/if}
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>{group}</Caption>
		{title}
	</Heading>

	{#if gds_name && gds_link}
		<Paragraph lead>
			<Link href="{gds_link}">GDS Design System '{gds_name}' component</Link>
		</Paragraph>
	{/if}

	<slot name="intro" />

	<Section add_top_margin id="examples">
		<Heading h2 lg>Examples</Heading>

		<noscript>
			<WarningText>
				Pssst... some examples may not work without JavaScript enabled.
			</WarningText>
		</noscript>

		<slot name="examples" />
	</Section>

	{#if hasConfig}
		<div id="interface"></div>
	{/if}

	{#if $$props.parents}
		<Section add_top_margin id="parents">
			<Heading h2 lg>Parents</Heading>
			<List bullets spaced>
				{#each parents as [href, label]}
					<MenuItem href="{href}">{label}</MenuItem>
				{/each}
			</List>
		</Section>
	{/if}

	{#if $$props.children}
		<Section add_top_margin id="children">
			<Heading h2 lg>Children</Heading>
			<List bullets spaced>
				{#each children as [href, label]}
					<MenuItem href="{href}">{label}</MenuItem>
				{/each}
			</List>
		</Section>
	{/if}

	{#if $$slots.slots}
		<Section add_top_margin id="slots">
			<Heading h2 lg>Slots</Heading>
			<slot name="slots" />
		</Section>
	{/if}

	{#if $$slots.props}
		<Section add_top_margin id="props">
			<Heading h2 lg>Props</Heading>
			<slot name="props" />
		</Section>
	{/if}
</StandardPage>
