<script>
	import Col from '$govuk/Col.svelte'
	import Row from '$govuk/Row.svelte'

	import Page from '$shared/Page.svelte'

	export let title = null
	export let sticky_menu = false
	export let thick_content = false

	const stickyMenuClass = sticky_menu ? 'info-page-sticky-menu' : ''
</script>

<Page title="{title}">
	<svelte:fragment slot="breadcrumbs">
		<slot name="breadcrumbs" />
	</svelte:fragment>

	<Row>
		<Col
			one_third="{!thick_content}"
			one_quarter="{thick_content}"
			c="info-page-side-menu {stickyMenuClass}">
			<slot name="side-menu" />
		</Col>

		<Col two_thirds="{!thick_content}" three_quarters="{thick_content}">
			<slot />
		</Col>
	</Row>
</Page>

<style>
	@media (max-width: 640px) {
		:global(.info-page-side-menu) {
			margin-bottom: var(--spacing-responsive-9);
			padding-left: var(--spacing-responsive-4);
			list-style: none;
		}
	}

	@media (min-width: 641px) {
		:global(.info-page-sticky-menu) {
			position: sticky;
			top: var(--spacing-static-4);
		}
	}
</style>
