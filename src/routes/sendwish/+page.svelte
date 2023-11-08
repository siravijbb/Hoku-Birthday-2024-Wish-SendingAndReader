<script lang="ts">
	import { enhance } from '$app/forms';
	import { Turnstile } from 'svelte-turnstile';
	import type { ActionData, Actions } from './$types';
	import { fail } from '@sveltejs/kit';
	export let form: ActionData;

	let thisForm: HTMLFormElement;
	let loading = false;

	const siteKey = '3x00000000000000000000FF';
	let secretKey = '1x0000000000000000000000000000000AA';
	let forms: ActionData;
	function handleSubmit() {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 5000);
	}
</script>

<h2>Hoku Birthday Wish 2024</h2>

<main class="mx-auto mt-20 max-w-xl rounded-xl bg-neutral-200 pb-4 shadow-xl">
	<div class="-mt-20">
		<div class="mx-auto rounded-xl py-4">
			<div class="mx-auto max-w-4xl text-ellipsis rounded-lg bg-white py-4 shadow-xl lg:px-8">
				<h1 class="pb-4 text-center text-2xl md:text-left">My on working/archived project</h1>
				<form
					bind:this={thisForm}
					on:submit={handleSubmit}
					use:enhance
					method="post"
					class=" bg-slate-400 px-20 pb-4 mx-auto items-center self-center justify-center"
				>
					<div class="form-item mx-auto items-center self-center justify-center">
						<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Name<sup><small>*</small></sup></label
						>
						<input
							value={''}
							type="name"
							name="name"
							id="name"
							class=" p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>
					<div class="form-item mx-auto items-center self-center justify-center">
						<label for="wish">Wish<sup><small>*</small></sup></label>
						<textarea
							value={''}
							name="wish"
							id="wish"
							rows="4"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Write your thoughts here..."
						/>
					</div>
					<label for="" class=""
						>ของขวัญสำหรับนายHOKU<sup class="text-red-500"><small>*</small></sup></label
					>
					<ul class="grid w-full gap-2 md:grid-cols-4">
						<li>
							<input
								type="radio"
								id="hosting-small"
								name="picture"
								value="1"
								class="hidden peer"
								required
							/>
							<label
								for="hosting-small"
								class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div class="mx-auto">
									<img
										alt="hamham "
										src="/img/icon/20230727153257-10f56244-bd4b-47d2-90db-b5ee7c2cc743.png"
										class="flex mx-auto w-9 h-auto my-auto"
									/>
									<div class="flex mx-auto text-xs">Good for large websites</div>
								</div>
							</label>
						</li>
						<li>
							<input type="radio" id="hosting-big" name="picture" value="2" class="hidden peer" />
							<label
								for="hosting-big"
								class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div class="mx-auto">
									<img
										alt="hamham "
										src="/img/icon/20230727153227-31419e74-c30d-4662-ba3b-7fc77ab28968.png"
										class="flex mx-auto w-9 h-auto my-auto"
									/>
									<div class="flex mx-auto text-xs">Good for large websites</div>
								</div>
							</label>
						</li>
						<li>
							<input type="radio" id="hosting-3" name="picture" value="3" class="hidden peer" />
							<label
								for="hosting-3"
								class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div class="mx-auto">
									<img
										alt="hamham "
										src="/img/icon/20230727152958-f08c0f94-dcc0-4366-9eec-13b1c5c5d6e7.png"
										class="flex mx-auto w-9 h-auto my-auto"
									/>
									<div class="flex mx-auto text-xs">Good for large websites</div>
								</div>
							</label>
						</li>
						<li>
							<input type="radio" id="hosting-4" name="picture" value="4" class="hidden peer" />
							<label
								for="hosting-4"
								class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div class="mx-auto">
									<img
										alt="hamham "
										src="/img/icon/20230727153149-141a60ce-e086-4f4a-b624-966315f86c46.png"
										class="flex mx-auto w-9 h-auto my-auto"
									/>
									<div class="flex mx-auto text-xs">Good for large websites</div>
								</div>
							</label>
						</li>
					</ul>

					<div class="mx-auto grid grid-cols-1 my-2">
						<div class="mx-auto">
							<Turnstile {siteKey} />
							<input type="hidden" name="secret" bind:value={secretKey} />
						</div>
						{#if form?.message}<p class="error">
								กรุณายืนยันreCaptcha / Please verify the reCaptcha.
							</p>{/if}
						{#if form?.message}<p class="error">
								คำอวยพรของท่านยังไม่ได้ส่ง / You wish you hadn't been sent
							</p>{/if}
						{#if loading}<p class="error">กำลังส่งคำอวยพร / Sending wish</p>{/if}
					</div>
					<div class="grid grid-cols-2 gap-2 my-2">
						<button
							class="p-2 bg-slate-50 rounded-full"
							type="submit"
							disabled={forms?.message || loading}>Submit</button
						>
						<button
							class="p-2 bg-slate-50 rounded-full"
							type="submit"
							disabled={forms?.message || loading}>Submit</button
						>
					</div>
				</form>
			</div>
		</div>
	</div>
</main>
