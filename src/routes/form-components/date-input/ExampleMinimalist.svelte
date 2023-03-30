<script>
	import DateInput from '$govuk/forms/DateInput.svelte'
	import DateUnit from '$govuk/forms/DateUnit.svelte'
</script>

<DateInput>
	<DateUnit name="birth-day" label="Day" />
	<DateUnit name="birth-month" label="Month" />
	<DateUnit name="birth-year" label="Year" />
</DateInput>
