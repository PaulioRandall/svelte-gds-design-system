<script>
	import DocsExample from '$shared/DocsExample.svelte'
	import DocsPage from '$shared/DocsPage.svelte'
	import DocsProp from '$shared/DocsProp.svelte'
	import DocsSlot from '$shared/DocsSlot.svelte'

	import ExampleMinimalist from './ExampleMinimalist.svelte'
	import exampleCodeMinimalist from './ExampleMinimalist.svelte?raw'

	import ExampleDisablingAutoFocus from './ExampleDisablingAutoFocus.svelte'
	import exampleCodeDisablingAutoFocus from './ExampleDisablingAutoFocus.svelte?raw'

	import ExampleContentHeading from './ExampleContentHeading.svelte'
	import exampleCodeContentHeading from './ExampleContentHeading.svelte?raw'

	import ExampleContentLink from './ExampleContentLink.svelte'
	import exampleCodeContentLink from './ExampleContentLink.svelte?raw'

	import ExampleSuccess from './ExampleSuccess.svelte'
	import exampleCodeSuccess from './ExampleSuccess.svelte?raw'
</script>

<DocsPage
	group="General components"
	title="Notification banner"
	gds_name="Notification banner"
	gds_link="https://design-system.service.gov.uk/components/notification-banner/"
	crumbs="{[
		['/home', 'Home'],
		['/general-components', 'General components'],
		['/general-components/notification-banner', 'Notification banner'],
	]}"
	examples="{[
		['example-minimalist', 'Minimalist'],
		['example-disabling-auto-focus', 'Disabling auto focus'],
		['example-content-heading', 'Content heading'],
		['example-content-link', 'Content link'],
		['example-success', 'Success'],
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
			id="example-disabling-auto-focus"
			heading="Disabling auto focus"
			src="{exampleCodeDisablingAutoFocus}">
			<ExampleDisablingAutoFocus />
		</DocsExample>

		<DocsExample
			id="example-content-heading"
			heading="Content heading"
			src="{exampleCodeContentHeading}">
			<ExampleContentHeading />
		</DocsExample>

		<DocsExample
			id="example-content-link"
			heading="Content link"
			src="{exampleCodeContentLink}">
			<ExampleContentLink />
		</DocsExample>

		<DocsExample
			id="example-success"
			heading="Success"
			src="{exampleCodeSuccess}">
			<ExampleSuccess />
		</DocsExample>
	</svelte:fragment>

	<svelte:fragment slot="props">
		<DocsProp
			name="title"
			type="string"
			summary="Specifies the title that runs along the top of the banner" />
		<DocsProp
			name="disable_auto_focus"
			type="bool"
			default_value="false"
			summary="Disables auto focus when the page loads" />
		<DocsProp
			name="success"
			type="bool"
			default_value="false"
			summary="Styles the banner as a success message" />
	</svelte:fragment>

	<svelte:fragment slot="slots">
		<DocsSlot default_slot summary="Banner content" />
	</svelte:fragment>
</DocsPage>
