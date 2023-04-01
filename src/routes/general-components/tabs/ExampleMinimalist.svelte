<script>
	import Paragraph from '$govuk/Paragraph.svelte'
	import TabLabel from '$govuk/TabLabel.svelte'
	import TabPanel from '$govuk/TabPanel.svelte'
	import Tabs from '$govuk/Tabs.svelte'
</script>

<Tabs>
	<svelte:fragment slot="labels">
		<TabLabel id="minimalist-1" selected>One</TabLabel>
		<TabLabel id="minimalist-2">Two</TabLabel>
		<TabLabel id="minimalist-3">Three</TabLabel>
	</svelte:fragment>

	<svelte:fragment slot="panels">
		<TabPanel id="minimalist-1" selected>
			<Paragraph>One's content.</Paragraph>
		</TabPanel>
		<TabPanel id="minimalist-2">
			<Paragraph>Two's content.</Paragraph>
		</TabPanel>
		<TabPanel id="minimalist-3">
			<Paragraph>Three's content.</Paragraph>
		</TabPanel>
	</svelte:fragment>
</Tabs>
