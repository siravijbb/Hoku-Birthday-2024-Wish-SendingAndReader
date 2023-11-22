<meta http-equiv="refresh" content="1; URL=/" />







<!--
<script lang="ts">
	import { enhance } from '$app/forms';
	import { Turnstile } from 'svelte-turnstile';
	import type { ActionData, Actions } from './$types';
	import Navbar from '../component/Navbar.svelte';
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
	import TOS from '../component/TOS.svelte';
	import Gift from '../component/sendGift.svelte';
	export let form: ActionData;

	let formModal = false;
	let thisForm: HTMLFormElement;
	let loading = false;
	let title: string = 'Hoku Birth Day 2024';
	let description: string = 'Hoku Birth Day 2024';
	let image: string = 'Hoku Birth Day 2024';

	const siteKey = '0x4AAAAAAAMk_GZOoiKNR8pU';
	let forms: ActionData;
	function handleSubmit() {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 10000);
	}

	function nameInvalid() {
		const resultElement = document.getElementById('errorName');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกต้องบอกชื่อด้วย ไอ่หนุ่ม!';
		}
	}
	function wishInvalid() {
		const resultElement = document.getElementById('errorWish');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกลืมคำอวยพรแก';
		}
	}
	function agreeInvalid() {
		const resultElement = document.getElementById('errorRead');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกต้องอ่านให้หมดด้วย';
		}
	}
</script>

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="view-transition" content="same-origin" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />

	<meta name="description" content="Astro description" />
	<meta name="viewport" content="width=device-width" />
	<link rel="icon" type="image/svg+xml" href="/favicon.jpg" />
	<title>{title}</title>

	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />

	<meta property="og:image" content={image} />
	<meta property="twitter:image" content={image} />
</head>
<Navbar />
<main class="mx-auto mt-20 max-w-xl rounded-xl bg-neutral-200 pb-4 shadow-xl">
	<div class="-mt-20">
		<div class="mx-auto rounded-xl py-4">
			<div class="mx-auto max-w-4xl text-ellipsis rounded-lg bg-white py-4 shadow-xl lg:px-8">
				<h1 class="text-center text-2xl md:text-left">ส่งคำอวยพรให้นายHOKU</h1>
				<h1 class="pb-4 text-center text-xl md:text-left -mt-2">Wish sending to HOKU</h1>
				<form
					bind:this={thisForm}
					on:submit={handleSubmit}
					use:enhance
					method="post"
					class=" bg-slate-400 px-9 lg:px-20 pb-4 mx-auto items-center self-center justify-center rounded-lg"
				>
					<div class="form-item mx-auto items-center self-center justify-center py-2">
						<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>ชื่อ (Name)<sup><small>*</small></sup></label
						>
						<input
							value={''}
							type="name"
							name="name"
							id="name"
							class=" p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							required
							on:invalid={nameInvalid}
						/>
						<p class=" text-sm text-[#b90e0a] my-2" id="errorName" />
					</div>
					<div class="form-item mx-auto items-center self-center justify-center">
						<label for="wish">คำอวยพร (Wish)<sup><small>*</small></sup></label>
						<textarea
							value={''}
							name="wish"
							id="wish"
							rows="4"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							placeholder="ไอ่หนุ่ม! คำอวยพร ความปรารถนา หรือ คำทักทาย ที่ท่านต้องการจะส่ง | Your wish, greeting, or message to HOKU"
							required
							on:invalid={wishInvalid}
						/>
						<p class=" text-sm text-[#b90e0a] my-2" id="errorWish" />
					</div>
					<label for="" class=""
						>ของขวัญสำหรับนายHOKU<sup class="text-red-500"><small>*</small></sup></label
					>
					<Gift />
					<p class=" text-sm text-[#b90e0a] my-2" id="errorGift" />

					<Button
						on:click={() => (formModal = true)}
						class="p-2 bg-slate-900 rounded-full my-2 mx-auto justify-center"
						>ส่งคำอวยพร (Send the Wish)</Button
					>
					<Modal
						bind:open={formModal}
						size="xs"
						autoclose={false}
						class="w-full touch-auto h-1/2 max-h-[35rem] "
						title="ข้อตกลงการประมวลผลข้อมูลส่วนบุคคล "
					>
						<TOS />
						<svelte:fragment slot="footer">
							<div class="grid grid-cols-1 gap-2">
								<div class="mx-auto grid grid-cols-1">
									<div class="flex items-start my-2">
										<div class="flex items-center h-5">
											<input
												type="checkbox"
												name="agreement"
												value="agreed"
												class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
												required
												on:invalid={agreeInvalid}
											/>
										</div>
										<div class="block -mt-3">
											<div>
												<label
													for="agreed"
													class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
													>ข้าพยอมรับ<a
														href="#term"
														class="text-blue-600 hover:underline dark:text-blue-500"
														>ข้อตกลงเงื่อนไข
													</a>
												</label>
											</div>
											<div>
												<label
													for="agreed"
													class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
													>I agree with the<a
														href="#term"
														class="text-blue-600 hover:underline dark:text-blue-500"
														>terms and conditions
													</a>
												</label>
											</div>
										</div>
									</div>
									<p class=" text-sm text-[#b90e0a] my-2 block" id="errorRead" />
									<div class="">
										<Turnstile {siteKey} />
									</div>

									{#if form?.message}<p class="error text-[#b90e0a]">
											กรุณายืนยันreCaptcha / Please verify the reCaptcha.
										</p>{/if}
									{#if form?.message}<p class="error text-[#b90e0a]">
											คำอวยพรของท่านยังไม่ได้ส่ง / You wish you hadn't been sent
										</p>{/if}
									{#if loading}<p class="error text-cyan-500">
											กำลังส่งคำอวยพร / Sending wish
										</p>{/if}
									<div class="grid grid-cols-2 gap-2 my-2">
										<button
											class="p-2 bg-slate-50 rounded-full"
											type="submit"
											disabled={forms?.message || loading}
											>ยอมรับข้อตกลงเงื่อนไข
										</button>
									</div>
								</div>
							</div>
						</svelte:fragment>
					</Modal>
				</form>
			</div>
		</div>
	</div>
</main>
-->