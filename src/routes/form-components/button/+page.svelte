<script>
	import Link from '$govuk/Link.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
	import SectionBreak from '$govuk/SectionBreak.svelte'

	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'
	import DocsExample from '$shared/DocsExample.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleMinimalistCode from './ExampleMinimalist.svelte?raw'

	import ExampleSecondary from './ExampleSecondary.svelte'
	import exampleSecondaryCode from './ExampleSecondary.svelte?raw'

	import ExampleWarning from './ExampleWarning.svelte'
	import exampleWarningCode from './ExampleWarning.svelte?raw'

	import ExampleDisabled from './ExampleDisabled.svelte'
	import exampleDisabledCode from './ExampleDisabled.svelte?raw'
</script>

<DocsPage
	title="Button"
	group="Form components"
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
	<Paragraph lead slot="intro">
		Official documentation: <Link
			href="https://design-system.service.gov.uk/components/button/"
			>GDS Design System 'Button' component</Link
		>.
	</Paragraph>

	<svelte:fragment slot="examples">
		<DocsExample
			id="example-minimalist"
			heading="Minimalist"
			src="{exampleMinimalistCode}">
			<ExampleMinimalist />
		</DocsExample>

		<SectionBreak md />

		<DocsExample
			id="example-secondary"
			heading="Secondary"
			src="{exampleSecondaryCode}">
			<ExampleSecondary />
		</DocsExample>

		<SectionBreak md />

		<DocsExample
			id="example-warning"
			heading="Warning"
			src="{exampleWarningCode}">
			<ExampleWarning />
		</DocsExample>

		<SectionBreak md />

		<DocsExample
			id="example-disabled"
			heading="Disabled"
			src="{exampleDisabledCode}">
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
