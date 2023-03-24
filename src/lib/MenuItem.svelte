<script>
	import Link from '$govuk/Link.svelte'

	export let href // = ""

	if (!href) {
		throw new Error('A menu item requires a href value')
	}
</script>

<li class="menu-item">
	<Link href="{href}">
		<slot />
	</Link>
</li>

<style>
	@media (max-width: 640px) {
		.menu-item::before {
			content: '—';
			margin-left: calc(0 - var(--spacing-responsive-4));
			padding-right: var(--spacing-responsive-1);
		}
	}
</style>
