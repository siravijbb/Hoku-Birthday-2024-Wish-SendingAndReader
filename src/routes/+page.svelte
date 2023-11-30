<!-- Content.svelte -->
<script lang="ts">
	import type { PageData } from './$types';
	import Navbar from './component/Navbar.svelte';
	import Footer from './component/Footer.svelte';
	import { enhance } from '$app/forms';
	import { Turnstile } from 'svelte-turnstile';
	import type { ActionData, Actions } from './$types';
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
	import TOS from './component/TOS.svelte';
	import Gift from './component/sendGift.svelte';
	import Corousel from './component/Corousel/Corousel.svelte';
	export let data: PageData;
	export let form: ActionData;

	let title: string = 'Hoku Birth Day 2024';
	let description: string = 'Hoku Birth Day 2024';
	let image: string = '/30novComing.png';

	let birthdayWishes = data.birthdayWishes?.birthdayWishes ?? [];

	const picturename1 = 'hamham';
	const desc1 = 'ผู้ฝันใฝ่ธรรมดา ที่รัก และคิดถึงคุณบากุมาก ๆ';
	const imgURL1 = '/imgHoku/1.png';
	const bgColorCode1 = '#e1d7ed';
	const borderColor1 = '#8d2239';

	const picturename2 = 'hamham';
	const desc2 = '#หนูบากุน่ารักที่สุดในโลก';
	const imgURL2 = '/imgHoku/2.png';
	const bgColorCode2 = '#FFFFFF';
	const borderColor2 = '#bb433d';

	const picturename3 = 'banana';
	const desc3 = 'กล้วยน้อย ขนาดแมวดำยังชอบเล่นกล้วย แล้วใครล่ะจะไม่ชอบ';
	const imgURL3 = '/imgHoku/3.png';
	const bgColorCode3 = '#ffe8a8';
	const borderColor3 = '#aeb84c';

	const picturename4 = 'heart';
	const desc4 = 'ความรักที่มีต่อคุณบากุ';
	const imgURL4 = '/imgHoku/3.png';
	const bgColorCode4 = '#ffbaab';
	const borderColor4 = '#ffbaab';

	let formModal = false;
	let thisForm: HTMLFormElement;
	let loading = false;

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
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกต้องบอกชื่อด้วย';
		}
	}
	function wishInvalid() {
		const resultElement = document.getElementById('errorWish');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกลืมคำอวยพรนะ';
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
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>
<Navbar />

<main class="mx-auto my-[40px] mb-0 mt-7 max-w-7xl rounded-xl">
	<div
		class="-mt-3 -pb-0 bg-gradient-to-b from-[#c7722e] to-[#f4a443] mx-auto max-w-xl shadow-xl rounded-lg"
	>
		<div class="mx-auto rounded-xl py-4">
			<div class="mx-auto max-w-4xl text-ellipsis rounded-lg py-4 lg:px-8">
				<h1 class="text-center text-2xl"><b>Happy Hoku's birthday</b></h1>
				<h2 class="pb-4 text-center text-xl">8 Jan 2024</h2>
				<Corousel />
			</div>
			<div class="mx-auto max-w-4xl text-ellipsis rounded-lg py-4 shadow-xl lg:px-8" id="sendwish">
				<h1 class="text-center text-2xl">ส่งคำอวยพรให้นายHOKU</h1>
				<h1 class="pb-4 text-center text-xl -mt-2">Wish sending to HOKU</h1>
				<form
					bind:this={thisForm}
					on:submit={handleSubmit}
					use:enhance
					method="post"
					class=" bg-[#f4b38d] px-9 lg:px-20 pb-4 mx-auto items-center self-center justify-center rounded-lg"
				>
					<div class="form-item mx-auto items-center self-center justify-center py-2">
						<label for="name" class="block mb-2 text-sm font-medium text-gray-900"
							>ชื่อ<sup><small>*</small></sup></label
						>
						<input
							placeholder="ชื่อนายอะ ไอ่หนุ่ม!"
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
						<label for="wish">คำอวยพร<sup><small>*</small></sup></label>
						<textarea
							name="wish"
							rows="4"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							placeholder="นายอยากใส่คำอวยพร ความปรารถนา หรือ คำทักทาย ใส่เลย!"
							required
							on:invalid={wishInvalid}
						/>
						<p class=" text-sm text-[#b90e0a] my-2" id="errorWish" />
					</div>
					<label for="" class=""
						>นายอยากใส่กรอบรูปแบบไหน เลือกเลย!<sup class="text-red-500"><small>*</small></sup
						></label
					>
					<Gift />
					<p class=" text-sm text-[#b90e0a] my-2" id="errorGift" />

					<Button
						on:click={() => (formModal = true)}
						class="p-2 bg-slate-900 rounded-full my-2 mx-auto justify-center">ส่งคำอวยพร</Button
					>
					<Modal
						bind:open={formModal}
						size="xs"
						autoclose={false}
						class=" touch-auto  max-h-[80vh] md:max-h-screen"
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
														class="text-blue-600 hover:underline dark:text-blue-500 ml-1"
													>
														terms and conditions
													</a>
												</label>
											</div>
										</div>
									</div>
									<p class=" text-sm text-[#b90e0a] my-2 block" id="errorRead" />
									<div class="">
										<Turnstile {siteKey} />
									</div>

									{#if form?.reCapchaFalse}<p class="error text-[#b90e0a]">
											นายกดยืนยันreCaptchaด้วย
										</p>{/if}
									{#if form?.message}<p class="error text-[#b90e0a]">
											คำอวยพรของนายยังไม่ได้ส่ง
										</p>{/if}
									{#if loading}<p class="error text-cyan-500">กำลังส่งคำอวยพร</p>{/if}
									{#if form?.complete}<p class="error text-cyan-500">
											ส่งคำอวยพรเรียบร้อยแล้ว หากไม่มีอะไรเกิดขึ้น กรุณาrefresh page
											<script>
												setTimeout(function () {
													window.location.replace('/sendwish/completed');
												}, 100);
											</script>
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

	<div class="-mt-7">
		<div class="mx-auto rounded-xl py-4 sm:px-6 lg:px-8">
			<div class="text-ellipsis rounded-lg">
				<h1 class="text-center text-2xl mt-4" id="wish"><b>All Hoku's birthday wishes</b></h1>

				{#await birthdayWishes}
					<p class="mx-auto">loading...</p>
				{:then birthdayWishes}
					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-auto"
						data-aos="fade-up"
					>
						{#each birthdayWishes as bwish, index}
							{#if bwish.picture == 1}
								<div
									class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 bg-[{borderColor1}]"
									style="opacity: 1; transform: none; transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 666ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
								>
									<svg
										preserveAspectRatio="none"
										version="1.2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 402 49"
										class="absolute top-0 left-0 w-full h-[300vh] object-fill -z-[1]"
										><path
											fill={borderColor1}
											d="m0 24.5v24.5h13v-49h-13zm389 0v24.5h13v-49h-13z"
										/><path fill="#FFFFFF" d="m13 24.5v24.5h376v-49h-376z" /></svg
									><svg
										version="1.2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 402 132"
										class=""
										><path fill={borderColor1} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
											fill="#FFFFFF"
											d="m13 92.5v79.5h376v-159c-19.8 0-25.3 0.1-25 0.4 0.3 0.2 2.9 2 5.8 4 3.1 2.2 6.4 3.6 8.2 3.6 1.6 0 3.7 0.8 4.6 1.8 0.9 0.9 1.5 3 1.3 4.7-0.1 1.6 0.5 4.8 1.5 7l1.7 4c-6.7 6.9-10.8 11.2-13.6 14q-5 5.1-10 6.9c-2.7 0.9-9 2-13.8 2.4-5.2 0.4-9.4 1.2-10 2-0.7 0.7-2.6 1.3-4.2 1.2-2.4 0-4.5-1.6-10-7.3-5.2-5.2-7.5-8.6-8.8-12.2-0.9-2.8-1.8-7.5-2-10.5-0.2-3-1.1-6.7-2-8.3-1.4-2.3-1.5-3.1-0.4-5.4 0.8-1.9 2.4-3.1 5.2-3.8 2.2-0.6 5.1-1.9 6.5-2.8 2.3-1.6-7-1.7-154.3-1.7h-156.7z"
										/></svg
									>
									<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
										<div class="flex">
											<img src={imgURL1} class="h-40 object-contain -mt-9 -ml-14" alt="gift" />
										</div>
									</div>
									<div class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11">
										<span
											class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
											>{bwish.comment}</span
										>
										<div
											class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
										>
											
										</div>
									</div>

									<div
										class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
									>
										<img class="w-40 -mb-9 -rotate-45" src="/imgHoku/1.1.png" alt="count" />
										<div class="text-[#672e38] absolute left-[80px] top-[76px] text-xl font-bold">
											{bwish.count}
										</div>
									</div>

									<div class="text-[#4E4670] text-base overflow-hidden -mb-16 ml-6">
										<p><b>{bwish.name}</b></p>
										<p>{bwish.DMY} {bwish.time}</p>
									</div>
									<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
										><path
											fill={borderColor1}
											d="m-1 66.5v66.5h403v-133h-13v119h-376v-119h-14z"
										/></svg
									>
								</div>
							{/if}
							{#if bwish.picture == 2}
								<div
									class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 bg-[{borderColor1}]"
									style="opacity: 1; transform: none; transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 666ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
								>
									<svg
										preserveAspectRatio="none"
										version="1.2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 402 49"
										class="absolute top-0 left-0 w-full h-[300vh] object-fill -z-[1]"
										><path
											fill={borderColor2}
											d="m0 24.5v24.5h13v-49h-13zm389 0v24.5h13v-49h-13z"
										/><path fill="#FFFFFF" d="m13 24.5v24.5h376v-49h-376z" /></svg
									><svg
										version="1.2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 402 132"
										class=""
										><path fill={borderColor2} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
											fill="#FFFFFF"
											d="m13 92.5v79.5h376v-159c-19.8 0-25.3 0.1-25 0.4 0.3 0.2 2.9 2 5.8 4 3.1 2.2 6.4 3.6 8.2 3.6 1.6 0 3.7 0.8 4.6 1.8 0.9 0.9 1.5 3 1.3 4.7-0.1 1.6 0.5 4.8 1.5 7l1.7 4c-6.7 6.9-10.8 11.2-13.6 14q-5 5.1-10 6.9c-2.7 0.9-9 2-13.8 2.4-5.2 0.4-9.4 1.2-10 2-0.7 0.7-2.6 1.3-4.2 1.2-2.4 0-4.5-1.6-10-7.3-5.2-5.2-7.5-8.6-8.8-12.2-0.9-2.8-1.8-7.5-2-10.5-0.2-3-1.1-6.7-2-8.3-1.4-2.3-1.5-3.1-0.4-5.4 0.8-1.9 2.4-3.1 5.2-3.8 2.2-0.6 5.1-1.9 6.5-2.8 2.3-1.6-7-1.7-154.3-1.7h-156.7z"
										/></svg
									>
									<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
										<div class="flex">
											<img src={imgURL2} class="h-40 object-contain -mt-9 -ml-14" alt="gift" /><b
												class="text-[#4E4670] min-[425px]:text-[20px] text-[14px] overflow-hidden pt-4 min-[425px]:pr-20 min-[375px]:pr-16 pr-14"
												>{bwish.name}</b
											>
										</div>
									</div>
									<div class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11">
										<span
											class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
											>{bwish.comment}</span
										>
										<div
											class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
										>
											<span class="">{bwish.DMY}</span><span class="flex-1 text-right"
												>{bwish.time}</span
											>
										</div>
									</div>
									<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
										><path
											fill={borderColor2}
											d="m0 66v66h402v-132h-13c0 57.5-0.1 60.1-1.8 60.9-1.1 0.7-3.2 0.5-6.2-0.6-2.5-0.8-7.4-1.5-11-1.6-5.4 0-7.5 0.5-12.5 3.1-3.3 1.7-7.5 3.6-9.3 4.4-1.9 0.7-3.6 2.3-4.1 3.8-0.5 1.4-0.5 3.3 0 4.3 0.6 1.1 0.4 3.4-0.5 6.5-0.8 2.6-1.7 6.3-2 8.2-0.4 1.9-0.7 6-0.7 9-0.1 3.4 0.7 7.6 2.1 11 1.2 3 2.8 6.2 3.6 7 0.7 0.8 1.4 1.8 1.4 2.3 0 0.4-64.6 0.7-143.5 0.7-78.9 0-143.5-0.2-143.5-0.5 0-0.3 0.6-1.1 1.3-1.7 0.6-0.7 2.3-1.9 3.7-2.6 1.4-0.7 3.4-2.6 4.5-4.2 1.1-1.6 3.3-3.7 5-4.7 1.7-0.9 3.8-2.5 4.8-3.5 0.9-1 1.7-2.7 1.7-3.8 0-1.1-1-3-2.2-4.3-1.3-1.2-3.2-4.5-4.2-7.2-1.1-2.8-3.1-6.8-4.6-9-1.5-2.2-4.5-5.2-6.6-6.7-2.2-1.5-4.5-2.8-5.2-2.8-0.6 0-2.9-1.2-4.9-2.7-2.1-1.5-4.9-2.6-6.3-2.6-1.4 0.1-3.6 1.3-5 2.6-1.4 1.4-4.3 3-6.5 3.7-2.2 0.7-5.8 2.3-8 3.4-2.2 1.2-5.7 3.2-7.7 4.6-2 1.4-4.6 4.1-5.7 6l-2.1 3.5v-86.5h-13z"
										/><path
											fill="#FFFFFF"
											d="m13 0h376v30c0 27.5-0.1 30.1-1.8 30.9-1.1 0.7-3.2 0.5-6.2-0.6-2.5-0.8-7.4-1.5-11-1.6-5.4 0-7.5 0.5-12.5 3.1-3.3 1.7-7.5 3.6-9.3 4.4-1.9 0.7-3.6 2.3-4.1 3.8-0.5 1.4-0.5 3.3 0 4.3 0.6 1.1 0.4 3.4-0.5 6.5-0.8 2.6-1.7 6.3-2 8.2-0.4 1.9-0.7 6-0.7 9-0.1 3.4 0.7 7.6 2.1 11 1.2 3 2.8 6.2 3.6 7 0.7 0.8 1.4 1.8 1.4 2.3 0 0.4-64.6 0.7-143.5 0.7-78.9 0-143.5-0.2-143.5-0.5 0-0.3 0.6-1.1 1.3-1.7 0.6-0.7 2.3-1.9 3.7-2.6 1.4-0.7 3.4-2.6 4.5-4.2 1.1-1.6 3.3-3.7 5-4.7 1.7-0.9 3.8-2.5 4.8-3.5 0.9-1 1.7-2.7 1.7-3.8 0-1.1-1-3-2.2-4.3-1.3-1.2-3.2-4.5-4.2-7.2-1.1-2.8-3.1-6.8-4.6-9-1.5-2.2-4.5-5.2-6.6-6.7-2.2-1.5-4.5-2.8-5.2-2.8-0.6 0-2.9-1.2-4.9-2.7-2.1-1.5-4.9-2.6-6.3-2.6-1.4 0.1-3.6 1.3-5 2.6-1.4 1.4-4.3 3-6.5 3.7-2.2 0.7-5.8 2.3-8 3.4-2.2 1.2-5.7 3.2-7.7 4.6-2 1.4-4.6 4.1-7.8 9.5zm375.3 110c0.4 0 0.7 2 0.7 9h-11l4.8-4.5c2.6-2.4 5.1-4.4 5.5-4.5zm-366 7c1 0 1.9 0.5 2.1 1 0.2 0.6-1.3 1-3.3 1-2.6 0-3.2-0.3-2.1-1 0.9-0.5 2.3-1 3.3-1z"
										/></svg
									>
									<div
										class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
									>
										<img class="w-40 -mb-9 -rotate-45" src="/imgHoku/1.1.png" alt="count" />
										<div class="text-[#672e38] absolute left-[80px] top-[76px] text-xl font-bold">
											{bwish.count}
										</div>
									</div>
								</div>
							{/if}
							{#if bwish.picture == 3}
								<div
									class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 bg-[{borderColor3}]"
									style="opacity: 1; transform: none; transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 666ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
								>
									<svg
										preserveAspectRatio="none"
										version="1.2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 402 49"
										class="absolute top-0 left-0 w-full h-[300vh] object-fill -z-[1]"
										><path
											fill={borderColor3}
											d="m0 24.5v24.5h13v-49h-13zm389 0v24.5h13v-49h-13z"
										/><path fill="#FFFFFF" d="m13 24.5v24.5h376v-49h-376z" /></svg
									><svg
										version="1.2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 402 132"
										class=""
										><path fill={borderColor3} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
											fill="#FFFFFF"
											d="m13 92.5v79.5h376v-159c-19.8 0-25.3 0.1-25 0.4 0.3 0.2 2.9 2 5.8 4 3.1 2.2 6.4 3.6 8.2 3.6 1.6 0 3.7 0.8 4.6 1.8 0.9 0.9 1.5 3 1.3 4.7-0.1 1.6 0.5 4.8 1.5 7l1.7 4c-6.7 6.9-10.8 11.2-13.6 14q-5 5.1-10 6.9c-2.7 0.9-9 2-13.8 2.4-5.2 0.4-9.4 1.2-10 2-0.7 0.7-2.6 1.3-4.2 1.2-2.4 0-4.5-1.6-10-7.3-5.2-5.2-7.5-8.6-8.8-12.2-0.9-2.8-1.8-7.5-2-10.5-0.2-3-1.1-6.7-2-8.3-1.4-2.3-1.5-3.1-0.4-5.4 0.8-1.9 2.4-3.1 5.2-3.8 2.2-0.6 5.1-1.9 6.5-2.8 2.3-1.6-7-1.7-154.3-1.7h-156.7z"
										/></svg
									>
									<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
										<div class="flex">
											<img src={imgURL3} class="h-40 object-contain -mt-9 -ml-14" alt="gift" /><b
												class="text-[#4E4670] min-[425px]:text-[20px] text-[14px] overflow-hidden pt-4 min-[425px]:pr-20 min-[375px]:pr-16 pr-14"
												>{bwish.name}</b
											>
										</div>
									</div>
									<div class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11">
										<span
											class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
											>{bwish.comment}</span
										>
										<div
											class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
										>
											<span class="">{bwish.DMY}</span><span class="flex-1 text-right"
												>{bwish.time}</span
											>
										</div>
									</div>
									<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
										><path
											fill={borderColor3}
											d="m0 66v66h402v-132h-13c0 57.5-0.1 60.1-1.8 60.9-1.1 0.7-3.2 0.5-6.2-0.6-2.5-0.8-7.4-1.5-11-1.6-5.4 0-7.5 0.5-12.5 3.1-3.3 1.7-7.5 3.6-9.3 4.4-1.9 0.7-3.6 2.3-4.1 3.8-0.5 1.4-0.5 3.3 0 4.3 0.6 1.1 0.4 3.4-0.5 6.5-0.8 2.6-1.7 6.3-2 8.2-0.4 1.9-0.7 6-0.7 9-0.1 3.4 0.7 7.6 2.1 11 1.2 3 2.8 6.2 3.6 7 0.7 0.8 1.4 1.8 1.4 2.3 0 0.4-64.6 0.7-143.5 0.7-78.9 0-143.5-0.2-143.5-0.5 0-0.3 0.6-1.1 1.3-1.7 0.6-0.7 2.3-1.9 3.7-2.6 1.4-0.7 3.4-2.6 4.5-4.2 1.1-1.6 3.3-3.7 5-4.7 1.7-0.9 3.8-2.5 4.8-3.5 0.9-1 1.7-2.7 1.7-3.8 0-1.1-1-3-2.2-4.3-1.3-1.2-3.2-4.5-4.2-7.2-1.1-2.8-3.1-6.8-4.6-9-1.5-2.2-4.5-5.2-6.6-6.7-2.2-1.5-4.5-2.8-5.2-2.8-0.6 0-2.9-1.2-4.9-2.7-2.1-1.5-4.9-2.6-6.3-2.6-1.4 0.1-3.6 1.3-5 2.6-1.4 1.4-4.3 3-6.5 3.7-2.2 0.7-5.8 2.3-8 3.4-2.2 1.2-5.7 3.2-7.7 4.6-2 1.4-4.6 4.1-5.7 6l-2.1 3.5v-86.5h-13z"
										/><path
											fill="#FFFFFF"
											d="m13 0h376v30c0 27.5-0.1 30.1-1.8 30.9-1.1 0.7-3.2 0.5-6.2-0.6-2.5-0.8-7.4-1.5-11-1.6-5.4 0-7.5 0.5-12.5 3.1-3.3 1.7-7.5 3.6-9.3 4.4-1.9 0.7-3.6 2.3-4.1 3.8-0.5 1.4-0.5 3.3 0 4.3 0.6 1.1 0.4 3.4-0.5 6.5-0.8 2.6-1.7 6.3-2 8.2-0.4 1.9-0.7 6-0.7 9-0.1 3.4 0.7 7.6 2.1 11 1.2 3 2.8 6.2 3.6 7 0.7 0.8 1.4 1.8 1.4 2.3 0 0.4-64.6 0.7-143.5 0.7-78.9 0-143.5-0.2-143.5-0.5 0-0.3 0.6-1.1 1.3-1.7 0.6-0.7 2.3-1.9 3.7-2.6 1.4-0.7 3.4-2.6 4.5-4.2 1.1-1.6 3.3-3.7 5-4.7 1.7-0.9 3.8-2.5 4.8-3.5 0.9-1 1.7-2.7 1.7-3.8 0-1.1-1-3-2.2-4.3-1.3-1.2-3.2-4.5-4.2-7.2-1.1-2.8-3.1-6.8-4.6-9-1.5-2.2-4.5-5.2-6.6-6.7-2.2-1.5-4.5-2.8-5.2-2.8-0.6 0-2.9-1.2-4.9-2.7-2.1-1.5-4.9-2.6-6.3-2.6-1.4 0.1-3.6 1.3-5 2.6-1.4 1.4-4.3 3-6.5 3.7-2.2 0.7-5.8 2.3-8 3.4-2.2 1.2-5.7 3.2-7.7 4.6-2 1.4-4.6 4.1-7.8 9.5zm375.3 110c0.4 0 0.7 2 0.7 9h-11l4.8-4.5c2.6-2.4 5.1-4.4 5.5-4.5zm-366 7c1 0 1.9 0.5 2.1 1 0.2 0.6-1.3 1-3.3 1-2.6 0-3.2-0.3-2.1-1 0.9-0.5 2.3-1 3.3-1z"
										/></svg
									>
									<div
										class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
									>
										<img class="w-40 -mb-9 -rotate-45" src="/imgHoku/1.1.png" alt="count" />
										<div class="text-[#672e38] absolute left-[80px] top-[76px] text-xl font-bold">
											{bwish.count}
										</div>
									</div>
								</div>
							{/if}
							{#if bwish.picture == 4}
								<div
									class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 bg-[{borderColor4}]"
									style="opacity: 1; transform: none; transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 666ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
								>
									<svg
										preserveAspectRatio="none"
										version="1.2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 402 49"
										class="absolute top-0 left-0 w-full h-[300vh] object-fill -z-[1]"
										><path
											fill={borderColor4}
											d="m0 24.5v24.5h13v-49h-13zm389 0v24.5h13v-49h-13z"
										/><path fill="#FFFFFF" d="m13 24.5v24.5h376v-49h-376z" /></svg
									><svg
										version="1.2"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 402 132"
										class=""
										><path fill={borderColor4} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
											fill="#FFFFFF"
											d="m13 92.5v79.5h376v-159c-19.8 0-25.3 0.1-25 0.4 0.3 0.2 2.9 2 5.8 4 3.1 2.2 6.4 3.6 8.2 3.6 1.6 0 3.7 0.8 4.6 1.8 0.9 0.9 1.5 3 1.3 4.7-0.1 1.6 0.5 4.8 1.5 7l1.7 4c-6.7 6.9-10.8 11.2-13.6 14q-5 5.1-10 6.9c-2.7 0.9-9 2-13.8 2.4-5.2 0.4-9.4 1.2-10 2-0.7 0.7-2.6 1.3-4.2 1.2-2.4 0-4.5-1.6-10-7.3-5.2-5.2-7.5-8.6-8.8-12.2-0.9-2.8-1.8-7.5-2-10.5-0.2-3-1.1-6.7-2-8.3-1.4-2.3-1.5-3.1-0.4-5.4 0.8-1.9 2.4-3.1 5.2-3.8 2.2-0.6 5.1-1.9 6.5-2.8 2.3-1.6-7-1.7-154.3-1.7h-156.7z"
										/></svg
									>
									<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
										<div class="flex">
											<img src={imgURL4} class="h-40 object-contain -mt-9 -ml-14" alt="gift" /><b
												class="text-[#4E4670] min-[425px]:text-[20px] text-[14px] overflow-hidden pt-4 min-[425px]:pr-20 min-[375px]:pr-16 pr-14"
												>{bwish.name}</b
											>
										</div>
									</div>
									<div class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11">
										<span
											class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
											>{bwish.comment}</span
										>
										<div
											class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
										>
											<span class="">{bwish.DMY}</span><span class="flex-1 text-right"
												>{bwish.time}</span
											>
										</div>
									</div>
									<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
										><path
											fill={borderColor4}
											d="m0 66v66h402v-132h-13c0 57.5-0.1 60.1-1.8 60.9-1.1 0.7-3.2 0.5-6.2-0.6-2.5-0.8-7.4-1.5-11-1.6-5.4 0-7.5 0.5-12.5 3.1-3.3 1.7-7.5 3.6-9.3 4.4-1.9 0.7-3.6 2.3-4.1 3.8-0.5 1.4-0.5 3.3 0 4.3 0.6 1.1 0.4 3.4-0.5 6.5-0.8 2.6-1.7 6.3-2 8.2-0.4 1.9-0.7 6-0.7 9-0.1 3.4 0.7 7.6 2.1 11 1.2 3 2.8 6.2 3.6 7 0.7 0.8 1.4 1.8 1.4 2.3 0 0.4-64.6 0.7-143.5 0.7-78.9 0-143.5-0.2-143.5-0.5 0-0.3 0.6-1.1 1.3-1.7 0.6-0.7 2.3-1.9 3.7-2.6 1.4-0.7 3.4-2.6 4.5-4.2 1.1-1.6 3.3-3.7 5-4.7 1.7-0.9 3.8-2.5 4.8-3.5 0.9-1 1.7-2.7 1.7-3.8 0-1.1-1-3-2.2-4.3-1.3-1.2-3.2-4.5-4.2-7.2-1.1-2.8-3.1-6.8-4.6-9-1.5-2.2-4.5-5.2-6.6-6.7-2.2-1.5-4.5-2.8-5.2-2.8-0.6 0-2.9-1.2-4.9-2.7-2.1-1.5-4.9-2.6-6.3-2.6-1.4 0.1-3.6 1.3-5 2.6-1.4 1.4-4.3 3-6.5 3.7-2.2 0.7-5.8 2.3-8 3.4-2.2 1.2-5.7 3.2-7.7 4.6-2 1.4-4.6 4.1-5.7 6l-2.1 3.5v-86.5h-13z"
										/><path
											fill="#FFFFFF"
											d="m13 0h376v30c0 27.5-0.1 30.1-1.8 30.9-1.1 0.7-3.2 0.5-6.2-0.6-2.5-0.8-7.4-1.5-11-1.6-5.4 0-7.5 0.5-12.5 3.1-3.3 1.7-7.5 3.6-9.3 4.4-1.9 0.7-3.6 2.3-4.1 3.8-0.5 1.4-0.5 3.3 0 4.3 0.6 1.1 0.4 3.4-0.5 6.5-0.8 2.6-1.7 6.3-2 8.2-0.4 1.9-0.7 6-0.7 9-0.1 3.4 0.7 7.6 2.1 11 1.2 3 2.8 6.2 3.6 7 0.7 0.8 1.4 1.8 1.4 2.3 0 0.4-64.6 0.7-143.5 0.7-78.9 0-143.5-0.2-143.5-0.5 0-0.3 0.6-1.1 1.3-1.7 0.6-0.7 2.3-1.9 3.7-2.6 1.4-0.7 3.4-2.6 4.5-4.2 1.1-1.6 3.3-3.7 5-4.7 1.7-0.9 3.8-2.5 4.8-3.5 0.9-1 1.7-2.7 1.7-3.8 0-1.1-1-3-2.2-4.3-1.3-1.2-3.2-4.5-4.2-7.2-1.1-2.8-3.1-6.8-4.6-9-1.5-2.2-4.5-5.2-6.6-6.7-2.2-1.5-4.5-2.8-5.2-2.8-0.6 0-2.9-1.2-4.9-2.7-2.1-1.5-4.9-2.6-6.3-2.6-1.4 0.1-3.6 1.3-5 2.6-1.4 1.4-4.3 3-6.5 3.7-2.2 0.7-5.8 2.3-8 3.4-2.2 1.2-5.7 3.2-7.7 4.6-2 1.4-4.6 4.1-7.8 9.5zm375.3 110c0.4 0 0.7 2 0.7 9h-11l4.8-4.5c2.6-2.4 5.1-4.4 5.5-4.5zm-366 7c1 0 1.9 0.5 2.1 1 0.2 0.6-1.3 1-3.3 1-2.6 0-3.2-0.3-2.1-1 0.9-0.5 2.3-1 3.3-1z"
										/></svg
									>
									<div
										class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
									>
										<img class="w-40 -mb-9 -rotate-45" src="/imgHoku/1.1.png" alt="count" />
										<div class="text-[#672e38] absolute left-[80px] top-[76px] text-xl font-bold">
											{bwish.count}
										</div>
									</div>
								</div>
							{/if}
						{/each}
					</div>
					<h2 class="mx-auto text-lg text-yellow-700 text-center pb-16">หมดแล้ว! ไอ่หนุ่ม!</h2>
				{/await}

				{#if data?.dataFailed}
					<h2 class="mx-auto text-lg text-red-600 text-center">
						Data Fetching failled, Try again later But Wish sending might working
					</h2>{/if}
			</div>
		</div>
	</div>
	<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
	<script>
		AOS.init({ once: true });
	</script>
</main>
<Footer />
