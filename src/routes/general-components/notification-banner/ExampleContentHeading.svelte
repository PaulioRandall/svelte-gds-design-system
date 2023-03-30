<script>
	import NotificationBanner from '$govuk/NotificationBanner.svelte'
	import NotificationBannerHeading from '$govuk/NotificationBannerHeading.svelte'
</script>

<NotificationBanner disable_auto_focus title="Content heading">
	<NotificationBannerHeading>
		For some reason there is a special CSS class for banner content headings. A
		component has been created to encapsulate it.
	</NotificationBannerHeading>
</NotificationBanner>
