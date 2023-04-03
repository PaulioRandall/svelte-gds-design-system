<script>
	export let href // = ""

	if (!href) {
		throw new Error('A Breadcrumb must have a href value')
	}

	if (!$$slots.default) {
		throw new Error(
			'A Breadcrumb must have a label slotted via the default slot'
		)
	}
</script>

<li class="govuk-breadcrumbs__list-item">
	<a class="govuk-breadcrumbs__link" href="{href}">
		<slot />
	</a>
</li>
