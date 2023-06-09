<script>
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleSecondary from './ExampleSecondary.svelte'
	import exampleCodeSecondary from './ExampleSecondary.svelte?raw'

	import ExampleWarning from './ExampleWarning.svelte'
	import exampleCodeWarning from './ExampleWarning.svelte?raw'

	import ExampleDisabled from './ExampleDisabled.svelte'
	import exampleCodeDisabled from './ExampleDisabled.svelte?raw'
</script>

<DocsPage
	group="Form components"
	title="Button"
	gds_name="Button"
	gds_link="https://design-system.service.gov.uk/components/button/"
	crumbs="{[
		['/home', 'Home'],
		['/form-components', 'Form components'],
		['/form-components/button', 'Button'],
	]}"
	examples="{[
		['example-minimalist', 'Minimalist'],
		['example-secondary', 'Secondary'],
		['example-warning', 'Warning'],
		['example-disabled', 'Disabled'],
	]}">
	<svelte:fragment slot="examples">
		<DocsExample
			first_example
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleCodeMinimalist}">
			<ExampleMinimalist />
		</DocsExample>

		<DocsExample
			id="example-secondary"
			heading="Secondary"
			src="{exampleCodeSecondary}">
			<ExampleSecondary />
		</DocsExample>

		<DocsExample
			id="example-warning"
			heading="Warning"
			src="{exampleCodeWarning}">
			<ExampleWarning />
		</DocsExample>

		<DocsExample
			id="example-disabled"
			heading="Disabled"
			src="{exampleCodeDisabled}">
			<ExampleDisabled />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp name="id" type="string" summary="Button element ID" />
		<DocsProp name="name" type="string" summary="Form field name" />
		<DocsProp
			name="type"
			type="string"
			default_value="button"
			allows="{['button', 'reset', 'submit']}"
			summary="Button type" />
		<DocsProp name="value" type="string" summary="Value (attribute)" />
		<DocsProp
			name="secondary"
			type="bool"
			default_value="false"
			summary="Flags as secondary button (grey). Mutually exclusive with the 'warning' prop" />
		<DocsProp
			name="warning"
			type="bool"
			default_value="false"
			summary="Flags as button with serious consequences. Mutually exclusive with the 'secondary' prop" />
		<DocsProp
			name="disabled"
			type="bool"
			default_value="false"
			summary="Disables button" />
		<DocsProp
			name="prevent_double_click"
			type="bool"
			default_value="false"
			summary="Adds double click prevention when used with forms" />
		<DocsProp
			name="onclick"
			type="function(event)"
			summary="Function invoked when the button is clicked prior to any form submission" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Button text" />
	</svelte:fragment>
</DocsPage>
