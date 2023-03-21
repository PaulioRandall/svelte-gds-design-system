<script>
	export let heading // = ""

	if (!heading) {
		throw new Error('A panel must have a heading')
	}
</script>

<div class="govuk-panel govuk-panel--confirmation">
	<h1 class="govuk-panel__title">
		{@html heading}
	</h1>
	<div class="govuk-panel__body">
		<slot />
	</div>
</div>
