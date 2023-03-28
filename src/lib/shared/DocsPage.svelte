<script>
	import BreadCrumbs from '$govuk/BreadCrumbs.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'
	import WarningText from '$govuk/WarningText.svelte'

	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'

	export let title // = ""
	export let group // = ""
	export let crumbs /* = [
		['href', 'label']
	] */
	export let examples /* = [
		['id', 'label']
	] */
</script>

<StandardPage sticky_menu title="{title}">
	<BreadCrumbs slot="breadcrumbs" collapsable crumbs="{crumbs}" />

	<List slot="side-menu" spaced>
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List sub_list spaced>
			{#each examples as [id, label]}
				<MenuItem href="#{id}">{label}</MenuItem>
			{/each}
		</List>
		{#if $$slots.props || $$slots.slots || $$slots.sub_components}
			<MenuItem bold href="#interface">Interface</MenuItem>
			<List sub_list spaced>
				{#if $$slots.props}
					<MenuItem href="#interface-props">Props</MenuItem>
				{/if}
				{#if $$slots.slots}
					<MenuItem href="#interface-slots">Slots</MenuItem>
				{/if}
				{#if $$slots.sub_components}
					<MenuItem href="#interface-sub-components">Sub components</MenuItem>
				{/if}
			</List>
		{/if}
	</List>

	<Heading id="page-title" h1 xl>
		<Caption xl>{group}</Caption>
		{title}
	</Heading>

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

	{#if $$slots.props || $$slots.slots || $$slots.sub_components}
		<Section add_top_margin id="interface">
			<Heading h2 lg>Interface</Heading>

			{#if $$slots.props}
				<Heading id="interface-props" h2 md>Props</Heading>
				<slot name="props" />
			{/if}

			{#if $$slots.props && $$slots.slots}
				<SectionBreak md />
			{/if}

			{#if $$slots.slots}
				<Heading id="interface-slots" h2 md>Slots</Heading>
				<slot name="slots" />
			{/if}

			{#if ($$slots.props || $$slots.slots) && $$slots.sub_components}
				<SectionBreak md />
			{/if}

			{#if $$slots.sub_components}
				<Heading id="interface-sub-components" h2 md>Sub components</Heading>
				<slot name="sub_components" />
			{/if}
		</Section>
	{/if}
</StandardPage>
