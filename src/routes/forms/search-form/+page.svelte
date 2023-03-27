<script>
	import SearchForm from '$govuk/forms/SearchForm.svelte'
	import Fieldset from '$govuk/forms/Fieldset.svelte'
	import Legend from '$govuk/forms/Legend.svelte'

	import StandardPage from '$shared/StandardPage.svelte'
	import Section from '$shared/Section.svelte'
</script>

<StandardPage title="Form components">
	<Section no_break>
		<SearchForm GET="/forms/search-form">
			<Fieldset>
				<Legend slot="legend" h1 xl>A legend</Legend>
			</Fieldset>
		</SearchForm>
	</Section>
</StandardPage>
