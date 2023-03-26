<script>
	import { onMount } from 'svelte'

	export let heading = null // = ""
	export let disableAutoFocus = false

	let elem = null
	let govukComponent = null

	onMount(() => {
		const config = { disableAutoFocus }
		govukComponent = new window.GOVUKFrontend.ErrorSummary(elem, config)
		govukComponent.init()
	})
</script>

<div
	bind:this="{elem}"
	class="govuk-error-summary"
	data-module="govuk-error-summary">
	<div role="alert">
		{#if heading}
			<h2 class="govuk-error-summary__title">
				{@html heading}
			</h2>
		{/if}
		<div class="govuk-error-summary__body">
			<ul class="govuk-list govuk-error-summary__list">
				<!-- This component requires <li> as slot content! -->
				<slot />
			</ul>
		</div>
	</div>
</div>
