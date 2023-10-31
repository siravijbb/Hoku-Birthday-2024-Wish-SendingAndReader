<script lang="ts">
	import { enhance } from '$app/forms';

	let form = {
		Name: '', // Initialize with an empty string or a default value
		Wish: '' ,// Initialize with an empty string or a default value
		Picture: '' // Initialize with an empty string or a default value
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
	<ul class="grid w-full gap-6 md:grid-cols-2">
		<li>
			<input type="radio" id="hosting-small" name="picture" value="1" class="hidden peer" required>
			<label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
				<div class="block">
					<div class="w-full text-lg font-semibold">0-50 MB</div>
					<div class="w-full">Good for small websites</div>
				</div>
				<svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
				</svg>
			</label>
		</li>
		<li>
			<input type="radio" id="hosting-big" name="picture" value="2" class="hidden peer">
			<label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
				<div class="block">
					<div class="w-full text-lg font-semibold">500-1000 MB</div>
					<div class="w-full">Good for large websites</div>
				</div>
				<svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
				</svg>
			</label>
		</li>
		<li>
			<input type="radio" id="hosting-3" name="picture" value="3" class="hidden peer">
			<label for="hosting-3" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
				<div class="block">
					<div class="w-full text-lg font-semibold">500-1000 MB</div>
					<div class="w-full">Good for large websites</div>
				</div>
				<svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
				</svg>
			</label>
		</li>
		<li>
			<input type="radio" id="hosting-4" name="picture" value="4" class="hidden peer">
			<label for="hosting-4" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
				<div class="block">
					<div class="w-full text-lg font-semibold">500-1000 MB</div>
					<div class="w-full">Good for large websites</div>
				</div>
				<svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
				</svg>
			</label>
		</li>
	</ul>

	<div class="form-item">
		<button type="submit">Submit</button>
	</div>
</form>
