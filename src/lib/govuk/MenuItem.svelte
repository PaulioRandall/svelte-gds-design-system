<script>
	import Link from '$govuk/Link.svelte'

	export let href // = ""
	export let bold = false

	if (!href) {
		throw new Error('A menu item requires a href value')
	}
</script>

<li class="menu-item" class:govuk-!-font-weight-bold="{bold}">
	<Link href="{href}" no_underline thick_underline>
		<slot />
	</Link>
</li>
