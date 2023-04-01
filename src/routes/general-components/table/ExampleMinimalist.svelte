<script>
	import Table from '$govuk/Table.svelte'
</script>

<Table
	caption_md="Monthly costs"
	headers="{[
		{ key: 'duration', label: 'Duration', rowHead: true },
		{ key: 'notes', label: 'Notes' },
		{ key: 'cost', label: 'Cost', numeric: true },
	]}"
	records="{[
		{
			duration: '1 Month',
			notes: 'Least cost effective',
			cost: '£3.50',
		},
		{ duration: '3 months', cost: '£10' },
		{ duration: '6 months', cost: '£18' },
		{
			duration: '12 months',
			notes: 'Most cost effective',
			cost: '£32',
		},
	]}" />
