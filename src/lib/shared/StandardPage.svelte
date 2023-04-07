<script>
	import Col from '$govuk/Col.svelte'
	import Row from '$govuk/Row.svelte'

	import BasePage from '$shared/BasePage.svelte'

	export let title = null
	export let sticky_menu = false
	export let thick_content = false

	const stickyMenuClass = sticky_menu ? 'info-page-sticky-menu' : ''

	const menuWidth = thick_content ? 'one-quarter' : 'one-third'
	const contentWidth = thick_content ? 'three-quarters' : 'two-thirds'
</script>

<BasePage title="{title}">
	<svelte:fragment slot="breadcrumbs">
		<slot name="breadcrumbs" />
	</svelte:fragment>

	<Row>
		<Col width="{menuWidth}" c="info-page-side-menu {stickyMenuClass}">
			<slot name="side-menu" />
		</Col>

		<Col width="{contentWidth}">
			<slot />
		</Col>
	</Row>
</BasePage>

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
