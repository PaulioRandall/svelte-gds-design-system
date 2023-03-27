<script>
	import Col from '$govuk/Col.svelte'
	import Row from '$govuk/Row.svelte'

	import Page from '$shared/Page.svelte'

	export let non_sticky_menu = false

	const colClass = non_sticky_menu ? '' : 'info-page-one-third'
</script>

<Page title="General components">
	<svelte:fragment slot="breadcrumbs">
		<slot name="breadcrumbs" />
	</svelte:fragment>

	<Row>
		<Col one_third c="info-page-side-menu {colClass}">
			<slot name="side-menu" />
		</Col>

		<Col two_thirds>
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
		:global(.info-page-one-third) {
			position: sticky;
			top: var(--spacing-static-4);
		}
	}
</style>
