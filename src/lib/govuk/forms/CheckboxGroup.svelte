<script>
	export let id = undefined // ""
</script>

<div class="govuk-form-group">
	<div id="{id}" class="govuk-checkboxes" data-module="govuk-checkboxes">
		<slot />
	</div>
</div>
