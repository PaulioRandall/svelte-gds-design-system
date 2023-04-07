<script>
	import Breadcrumbs from '$govuk/Breadcrumbs.svelte'
	import Breadcrumb from '$govuk/Breadcrumb.svelte'
	import Caption from '$govuk/Caption.svelte'
	import Heading from '$govuk/Heading.svelte'
	import Link from '$govuk/Link.svelte'
	import List from '$govuk/List.svelte'
	import MenuItem from '$govuk/MenuItem.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import TabLabel from '$govuk/TabLabel.svelte'
	import TabPanel from '$govuk/TabPanel.svelte'
	import Tabs from '$govuk/Tabs.svelte'
	import WarningText from '$govuk/WarningText.svelte'

	import SideMenuPage from '$shared/SideMenuPage.svelte'
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

	export let see_also = null /* = [
		['href', 'label'],
		...
	] */

	export let examples /* = [
		['id', 'label'],
		...
	] */

	const hasConfig =
		$$props.parents ||
		$$props.children ||
		$$props.see_also ||
		$$slots.slots ||
		$$slots.props
</script>

<SideMenuPage thick_content sticky_menu title="{title}">
	<Breadcrumbs slot="breadcrumbs" collapsable>
		{#each crumbs as [href, label]}
			<Breadcrumb href="{href}">{label}</Breadcrumb>
		{/each}
	</Breadcrumbs>

	<List slot="side-menu">
		<MenuItem bold href="#examples">Examples</MenuItem>
		<List bullets>
			{#each examples as [id, label]}
				<MenuItem href="#{id}">{label}</MenuItem>
			{/each}
		</List>
		{#if hasConfig}
			<MenuItem bold href="#interface">Interface</MenuItem>
			<List bullets>
				{#if $$props.parents}
					<MenuItem href="#parents">Parents</MenuItem>
				{/if}
				{#if $$slots.props}
					<MenuItem href="#props">Props</MenuItem>
				{/if}
				{#if $$slots.slots}
					<MenuItem href="#slots">Slots</MenuItem>
				{/if}
				{#if $$props.children}
					<MenuItem href="#children">Children</MenuItem>
				{/if}
				{#if $$props.see_also}
					<MenuItem href="#see-also">See also</MenuItem>
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
		<Section add_top_margin id="interface">
			<Heading h2 lg>Interface</Heading>
			<Tabs>
				<svelte:fragment slot="labels">
					{#if $$props.parents}
						<TabLabel id="parents">Parents</TabLabel>
					{/if}
					{#if $$slots.props}
						<TabLabel id="props">Props</TabLabel>
					{/if}
					{#if $$slots.slots}
						<TabLabel id="slots">Slots</TabLabel>
					{/if}
					{#if $$props.children}
						<TabLabel id="children">Children</TabLabel>
					{/if}
					{#if $$props.see_also}
						<TabLabel id="see-also">See also</TabLabel>
					{/if}
				</svelte:fragment>
				<svelte:fragment slot="panels">
					{#if $$props.parents}
						<TabPanel id="parents">
							<List spaced="{$$props.parents.length > 1}">
								{#each parents as [href, label]}
									<MenuItem href="{href}">{label}</MenuItem>
								{/each}
							</List>
						</TabPanel>
					{/if}
					{#if $$slots.props}
						<TabPanel id="props">
							<slot name="props" />
						</TabPanel>
					{/if}
					{#if $$slots.slots}
						<TabPanel id="slots">
							<slot name="slots" />
						</TabPanel>
					{/if}
					{#if $$props.children}
						<TabPanel id="children">
							<List spaced="{$$props.children.length > 1}">
								{#each children as [href, label]}
									<MenuItem href="{href}">{label}</MenuItem>
								{/each}
							</List>
						</TabPanel>
					{/if}
					{#if $$props.see_also}
						<TabPanel id="see-also">
							<List spaced="{$$props.see_also.length > 1}">
								{#each see_also as [href, label]}
									<MenuItem href="{href}">{label}</MenuItem>
								{/each}
							</List>
						</TabPanel>
					{/if}
				</svelte:fragment>
			</Tabs>
		</Section>
	{/if}
</SideMenuPage>
