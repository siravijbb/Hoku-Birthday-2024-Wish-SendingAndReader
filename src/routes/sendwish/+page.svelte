<script lang="ts">
	import { enhance } from '$app/forms';

	let form = {
		Name: '', // Initialize with an empty string or a default value
		Wish: '' // Initialize with an empty string or a default value
	};

	let thisForm: HTMLFormElement;
</script>

<h2>Hoku Birthday Wish 2024</h2>

<form bind:this={thisForm} use:enhance method="post" action="?/sendwish">
	<div class="form-item">
		<label for="name">Name<sup><small>*</small></sup></label>
		<input value={form.Name ?? ''} type="text" name="name" id="name" required />
	</div>
	<div class="form-item">
		<label for="wish">Wish<sup><small>*</small></sup></label>
		<input value={form.Wish ?? ''} type="text" name="wish" id="wish" required />
	</div>

	<div class="form-item">
		<button type="submit">Submit</button>
	</div>
</form>
