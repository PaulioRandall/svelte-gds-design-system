<script>
	import Col from '$govuk/Col.svelte'

	// TODO: Only works for one_third width ATM

	export let non_sticky = false

	const colClass = non_sticky ? '' : 'page_menu-col_one_third'
</script>

<Col c="page_menu-col-mobile {colClass}" one_third {...$$restProps}>
	<slot />
</Col>

<style>
	@media (max-width: 640px) {
		:global(.page_menu-col-mobile) {
			margin-bottom: var(--spacing-responsive-9);
			padding-left: var(--spacing-responsive-4);
			list-style: none;
		}
	}

	@media (min-width: 641px) {
		:global(.page_menu-col_one_third) {
			position: sticky;
			top: var(--spacing-static-4);
		}
	}
</style>
