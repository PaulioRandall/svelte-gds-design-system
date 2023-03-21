<script>
	export let title // = ""
	export let success = false

	if (!title) {
		throw new Error('A notification banner must have a title')
	}
</script>

<div
	class="govuk-notification-banner"
	class:govuk-notification-banner--success="{success}"
	role="{success ? 'alert' : 'region'}"
	aria-labelledby="govuk-notification-banner-title"
	data-module="govuk-notification-banner">
	<div class="govuk-notification-banner__header">
		<h2
			class="govuk-notification-banner__title"
			id="govuk-notification-banner-title">
			{title}
		</h2>
	</div>
	<div class="govuk-notification-banner__content">
		<slot />
	</div>
</div>
