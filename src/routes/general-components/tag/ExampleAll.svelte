<script>
	import Tag from '$govuk/Tag.svelte'
</script>

<div class="column">
	<Tag>Completed</Tag>
	<Tag inactive>Inactive</Tag>
	<Tag fresh>New (fresh)</Tag>
	<Tag active>Active</Tag>
	<Tag pending>Pending</Tag>
	<Tag received>Received</Tag>
	<Tag sent>Sent</Tag>
	<Tag rejected>Rejected</Tag>
	<Tag declined>Declined</Tag>
	<Tag delayed>Delayed</Tag>
</div>

<style>
	.column {
		overflow: auto;
	}

	.column > :global(*) {
		clear: left;
		float: left;
	}
</style>
