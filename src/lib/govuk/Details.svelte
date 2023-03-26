<script>
	import { onMount } from 'svelte'

	export let summary // = ""

	let elem = null
	let govukComponent = null

	if (!summary) {
		throw new Error('A details toggle must have some summary text')
	}

	onMount(() => {
		govukComponent = new window.GOVUKFrontend.Details(elem)
		govukComponent.init()
	})
</script>

<details bind:this="{elem}" class="govuk-details" data-module="govuk-details">
	<summary class="govuk-details__summary">
		<span class="govuk-details__summary-text">
			{summary}
		</span>
	</summary>
	<div class="govuk-details__text">
		<slot />
	</div>
</details>
