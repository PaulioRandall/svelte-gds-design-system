<script>
	import { onMount } from 'svelte'

	export let title // = ""
	export let success = false
	export let disable_auto_focus = false

	let elem = null
	let govukComponent = null

	if (!title) {
		throw new Error('A notification banner must have a title')
	}

	onMount(async () => {
		const config = {
			disableAutoFocus: disable_auto_focus,
		}

		govukComponent = new window.GOVUKFrontend.NotificationBanner(elem, config)
		govukComponent.init()
	})
</script>

<div
	bind:this="{elem}"
	class="govuk-notification-banner"
	class:govuk-notification-banner--success="{success}"
	role="{success ? 'alert' : 'region'}"
	aria-labelledby="govuk-notification-banner-title"
	data-module="govuk-notification-banner">
	<div class="govuk-notification-banner__header">
		<h2
			class="govuk-notification-banner__title"
			id="govuk-notification-banner-title">
			{@html title}
		</h2>
	</div>
	<div class="govuk-notification-banner__content">
		<slot />
	</div>
</div>
