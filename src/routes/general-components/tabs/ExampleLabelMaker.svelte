<script>
	import Paragraph from '$govuk/Paragraph.svelte'
	import TabLabelMaker from '$govuk/TabLabelMaker.svelte'
	import TabPanel from '$govuk/TabPanel.svelte'
	import Tabs from '$govuk/Tabs.svelte'
</script>

<Tabs>
	<TabLabelMaker
		slot="labels"
		labels="{[
			['label-maker-1', 'One'],
			['label-maker-2', 'Two'],
			['label-maker-3', 'Three'],
		]}" />

	<svelte:fragment slot="panels">
		<TabPanel id="label-maker-1" selected>
			<Paragraph>One's content.</Paragraph>
		</TabPanel>
		<TabPanel id="label-maker-2">
			<Paragraph>Two's content.</Paragraph>
		</TabPanel>
		<TabPanel id="label-maker-3">
			<Paragraph>Three's content.</Paragraph>
		</TabPanel>
	</svelte:fragment>
</Tabs>
