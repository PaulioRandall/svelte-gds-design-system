<script>
	export let href // = ""

	if (!href) {
		throw new Error('A notification banner link requires a href value')
	}
</script>

<a class="govuk-notification-banner__link" href="{href}">
	<slot />
</a>
