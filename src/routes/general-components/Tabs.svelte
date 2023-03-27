<script>
	import Paragraph from '$govuk/Paragraph.svelte'
	import TabLabel from '$govuk/TabLabel.svelte'
	import TabPanel from '$govuk/TabPanel.svelte'
	import Tabs from '$govuk/Tabs.svelte'
</script>

<Tabs>
	<svelte:fragment slot="menu">
		<TabLabel id="thing-1" selected>Thing 1</TabLabel>
		<TabLabel id="thing-2">Thing 2</TabLabel>
		<TabLabel id="thing-3">Thing 3</TabLabel>
		<TabLabel id="thing-4">Thing 4</TabLabel>
		<TabLabel id="thing-5">Thing 5</TabLabel>
		<TabLabel id="thing-6">Thing 6</TabLabel>
	</svelte:fragment>

	<svelte:fragment slot="panels">
		<TabPanel id="thing-1" selected>
			<Paragraph>Thing 1 content.</Paragraph>
		</TabPanel>
		<TabPanel id="thing-2">
			<Paragraph>Thing 2 content.</Paragraph>
		</TabPanel>
		<TabPanel id="thing-3">
			<Paragraph>Thing 3 content.</Paragraph>
		</TabPanel>
		<TabPanel id="thing-4">
			<Paragraph>Thing 4 content.</Paragraph>
		</TabPanel>
		<TabPanel id="thing-5">
			<Paragraph>Thing 5 content.</Paragraph>
		</TabPanel>
		<TabPanel id="thing-6">
			<Paragraph>Thing 6 content.</Paragraph>
		</TabPanel>
	</svelte:fragment>
</Tabs>
