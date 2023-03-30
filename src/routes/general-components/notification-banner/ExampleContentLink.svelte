<script>
	import NotificationBanner from '$govuk/NotificationBanner.svelte'
	import NotificationBannerLink from '$govuk/NotificationBannerLink.svelte'
	import Paragraph from '$govuk/Paragraph.svelte'
</script>

<NotificationBanner disable_auto_focus title="Content link">
	<Paragraph>
		For some reason there is a special CSS class for banner links. Here is a
		<NotificationBannerLink href="#">example</NotificationBannerLink>. A
		component has been created to encapsulate it.
	</Paragraph>
</NotificationBanner>
