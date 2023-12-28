<!-- Content.svelte -->
<script lang="ts">
	import type { PageData } from './$types';
	import Navbar from './component/Navbar.svelte';
	import Footer from './component/Footer.svelte';
	import { enhance } from '$app/forms';
	import { Turnstile } from 'svelte-turnstile';
	import type { ActionData, Actions } from './$types';
	// import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
	// import TOS from './component/TOS.svelte';
	import Gift from './component/sendGift.svelte';
	import Corousel from './component/Corousel/Corousel.svelte';
	import imgURL1 from '$lib/images/imgHoku/1.webp';
	import imgURL2 from '$lib/images/imgHoku/2.webp';
	import imgURL3 from '$lib/images/imgHoku/3.webp';
	import imgURL4 from '$lib/images/imgHoku/4.webp';
	import OneOne from '$lib/images/imgHoku/1.1.webp';
	// import OneTwo from '$lib/images/imgHoku/1.2.webp';
	import OneOneOne from '$lib/images/imgHoku/1.1.1.webp';
	import OneOneTwo from '$lib/images/imgHoku/1.1.2.webp';
	import OneOneThree from '$lib/images/imgHoku/1.1.3.webp';

	export let data: PageData;
	export let form: ActionData;

	let title: string = "Happy Hoku's Birthday 2024";
	let description: string = '#HappyHokuDay2024, Hoku Wish sending page from fanclub';
	let image: string = '/Corousel/PLG3ANNIHoku.webp';

	let birthdayWishes = data.birthdayWishes?.birthdayWishes ?? [];
	let count = data.Total?.count ?? [];

	const picturename1 = 'hamham';
	const desc1 = 'ผู้ฝันใฝ่ธรรมดา ที่รัก และคิดถึงคุณบากุมาก ๆ';
	//const imgURL1 = '/imgHoku/1.webp';
	const bgColorCode1 = '#e1d7ed';
	const borderColor1 = '#bf4e2e';

	const picturename2 = 'hamham';
	const desc2 = '#หนูบากุน่ารักที่สุดในโลก';
	//const imgURL2 = '/imgHoku/2.webp';
	const bgColorCode2 = '#FFFFFF';
	const borderColor2 = '#f1962e';

	const picturename3 = 'banana';
	const desc3 = 'กล้วยน้อย ขนาดแมวดำยังชอบเล่นกล้วย แล้วใครล่ะจะไม่ชอบ';
	//const imgURL3 = '/imgHoku/3.webp';
	const bgColorCode3 = '#ffe8a8';
	const borderColor3 = '#d7ebff';

	const picturename4 = 'heart';
	const desc4 = 'ความรักที่มีต่อคุณบากุ';
	//const imgURL4 = '/imgHoku/4.webp';
	const bgColorCode4 = '#ffbaab';
	const borderColor4 = '#ffa083';

	let formModal = false;
	let thisForm: HTMLFormElement;
	let loading = false;

	const siteKey = '0x4AAAAAAAMk_GZOoiKNR8pU';
	let forms: ActionData;
	function handleSubmit() {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 7500);
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
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! ใส่น้อยไปหน่อยไหมนาย';
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
	<link rel="icon" type="image/svg+xml" href={image} />
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
				<h1 class="text-center text-2xl font-['itim']"><b>Happy Hoku's birthday</b></h1>
				<h2 class="pb-4 text-center text-xl font-['itim']">8 Jan 2024</h2>
				<Corousel />
			</div>
			<div class="mx-auto max-w-4xl text-ellipsis rounded-lg py-4 shadow-xl lg:px-8" id="sendwish">
				<h1 class="text-center text-2xl font-['itim']">ส่งคำอวยพรให้นายHOKU</h1>
				<h1 class="pb-4 text-center text-xl -mt-2 font-['itim']">Wish sending to HOKU</h1>
				<form
					bind:this={thisForm}
					on:submit|preventDefault={handleSubmit}
					use:enhance
					method="post"
					class=" bg-[#f4b38d] px-9 lg:px-20 pb-4 mx-auto items-center self-center justify-center rounded-lg"
				>
					<div class="form-item mx-auto items-center self-center justify-center py-2">
						<label for="name" class="block mb-2 text-sm font-medium"
							>ชื่อ<sup><small class="text-red-500">*</small></sup><label
								for="counter-input"
								class="label block"
								><small
									>จำกัด: <span id="counter-display" class="tag is-success">50 อักษร</span></small
								></label
							>
						</label>

						<input
							placeholder="ชื่อนายอะ ไอ่หนุ่ม!"
							maxlength="50"
							type="name"
							name="name"
							id="name"
							class=" p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							required
							on:invalid|preventDefault={nameInvalid}
						/>
						<p class=" text-sm text-[#b90e0a] my-2" id="errorName" />
					</div>
					<div class="form-item mx-auto items-center self-center justify-center">
						<label for="wish"
							>คำอวยพร<sup><small class="text-red-500">*</small></sup><label
								for="counter-input"
								class="label block"
								><small
									>จำกัด: <span id="counter-display" class="tag is-success">500 อักษร</span></small
								></label
							>
						</label>

						<textarea
							name="wish"
							rows="4"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							placeholder="นายอยากใส่คำอวยพร ความปรารถนา หรือ คำทักทาย ใส่เลย!"
							maxlength="500"
							minlength="6"
							required
							on:invalid|preventDefault={wishInvalid}
						/>
						<p class=" text-sm text-[#b90e0a] my-2" id="errorWish" />
					</div>

					<label for="" class=""
						>นายอยากใส่กรอบรูปแบบไหน เลือกเลย!<small class="text-red-500">*</small><label
							for="counter-input"
							class="label block"><small /></label
						>
						<Gift />
						<p class=" text-sm text-[#b90e0a] my-2" id="errorGift" />
						<div class="flex items-start my-2">
							<div class="flex items-center h-5 mt-3">
								<input
									type="checkbox"
									name="agreement"
									value="agreed"
									class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
									required
									on:invalid|preventDefault={agreeInvalid}
								/>
							</div>
							<div class="block">
								<div>
									<label for="agreed" class="ms-2 text-sm font-medium text-gray-900" id="agree"
										>ข้าพเจ้า<a
											href="#agree"
											class="text-blue-600 hover:underline dark:text-blue-500"
											>อนุญาตให้เผยแพร่คำอวยพร
										</a>
									</label>
								</div>
								<div>
									<label for="agreed" class="ms-2 text-sm font-medium text-gray-900"
										>I agree to<a
											href="#agree"
											class="text-blue-600 hover:underline dark:text-blue-500 ml-1"
										>
											share my wish with public
										</a>
									</label>
								</div>
							</div>
						</div>
						<p class=" text-sm text-[#b90e0a] my-2 block" id="errorRead" />
						<div class="grid grid-cols-1 gap-2">
							<div class="mx-auto grid grid-cols-1">
								<div class="">
									<Turnstile {siteKey} />
								</div>
								{#await form}
									<wbr />
								{:then form}
									{#if form?.reCapchaFalse}<p class="error text-[#b90e0a]">
											นายกดยืนยันreCaptchaด้วย
										</p>{/if}
									{#if form?.message}<p class="error text-[#b90e0a]">
											คำอวยพรของนายยังไม่ได้ส่ง
										</p>{/if}
									{#if loading}<p class="error text-cyan-500">กำลังส่งคำอวยพร</p>{/if}
									{#if form?.complete || form?.completeBefore}<p class="error text-cyan-500">
											{#if form?.completeBefore}
												<h2>
													ส่งคำอวยพรเรียบร้อยแล้ว คำอวยพรจะเปิดวันเกิดนะนาย! เจอกัน!
												</h2>{:else if form?.complete}
												<h2>
													ส่งคำอวยพรเรียบร้อยแล้ว หากไม่มีอะไรเกิดขึ้นภายใน 3 วินาที กรุณาrefresh
													page
												</h2>
											{/if}

											<script>
												setTimeout(function () {
													window.location.replace('/sendwish/completed');
												}, 3000);
											</script>
										</p>{/if}{/await}
							</div>
						</div>
						<button
							class="mt-3 p-2 bg-slate-900 text-white disabled:bg-slate-900/30 disabled:text-white/30 rounded-full"
							type="submit"
							disabled={forms?.message || loading}
							>ส่งคำอวยพร
						</button>
						<!--
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
										{#if form?.complete || form?.completeBefore}<p class="error text-cyan-500">
												{#if form?.completeBefore}
													<h2>
														ส่งคำอวยพรเรียบร้อยแล้ว คำอวยพรจะเปิดวันเกิดนะนาย! เจอกัน!
													</h2>{:else if data?.complete}
													<h2>
														ส่งคำอวยพรเรียบร้อยแล้ว หากไม่มีอะไรเกิดขึ้นภายใน 3 วินาที กรุณาrefresh
														page
													</h2>
												{/if}

												<script>
													setTimeout(function () {
														window.location.replace('/sendwish/completed');
													}, 3000);
												</script>
											</p>{/if}
										<div class="grid grid-cols-2 gap-2 my-2">
											<button
												class="p-2 bg-slate-900 text-white disabled:bg-slate-900/30 disabled:text-white/30 rounded-full"
												type="submit"
												disabled={forms?.message || loading}
												>ยอมรับข้อตกลงเงื่อนไข
											</button>
										</div>
									</div>
								</div>
							</svelte:fragment>
						</Modal> -->
					</label>
				</form>
			</div>
		</div>
	</div>

	<div class="-mt-7">
		<div class="mx-auto rounded-xl py-4 sm:px-6 lg:px-8">
			<div class="text-ellipsis rounded-lg">
				<h1 class="text-center text-2xl mt-4 font-['itim']" id="wish">
					<b>All Hoku's birthday wishes</b>
				</h1>
				{#await data}
					กำลังโหลดข้อมูล
				{:then data}
					{#await count}
						<h2 class="mx-auto text-center pt-4 text-cyan-500 text-xl" id="total">
							<b class="">กำลังโหลดจำนวนคำอวยพรทั้งหมด</b>
						</h2>
					{:then count}
						<h2 class="text-center text-2xl font-['itim']" id="total">
							<b>มีคำอวยพรแล้วทั้งหมด {count} คำอวยพร</b>
						</h2>
					{/await}

					{#if data?.notIntime}
						<h2 class="mx-auto text-lg text-black text-center font-['itim']">
							แต่ยังไม่ถึงเวลาอ่านคำอวยพรนะนาย เจอกันวันเกิด!
						</h2>
						<h2 class="mx-auto text-lg text-black text-center font-['itim'] mb-1">
							คำอวยพรจะเปิดวันที่ {data.openDate}
						</h2>
						<div
							class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-auto font-['itim']"
							data-aos="fade-up"
						>
							<div
								class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 shadow-2xl"
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
									/><path fill="#ffffff" d="m13 24.5v24.5h376v-49h-376z" /></svg
								><svg
									version="1.2"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 402 132"
									class=""
									><path fill={borderColor1} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
										fill="#ffffff"
										d="m13 92.5v79.5h376v-159h-376z"
									/></svg
								>

								<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
									<div class="flex">
										<img src={imgURL1} class="h-40 object-contain -mt-9 -ml-14 z-10" alt="gift" />
									</div>
								</div>
								<div class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11">
									<span
										class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
										>ตัวอย่างกล่องที่ 1</span
									>
									<div
										class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
									/>
								</div>

								<div
									class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
								>
									<img class="w-40 -mb-11 rotate-12" src={OneOneOne} alt="count" />
								</div>

								<div class="text-[#4E4670] text-base overflow-hidden -mb-16 ml-6 z-0 text-left">
									<p class=""><b>ชื่อ #อันดับ</b></p>
									<p>วดป</p>
								</div>
								<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
									><path
										fill={borderColor1}
										d="m-1 66.5v66.5h403v-133h-13v119h-376v-119h-14z"
									/><path fill="#ffffff" d="m13 59.5v59.5h376v-119h-376z" /></svg
								>
							</div>

							<div
								class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 shadow-2xl"
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
									/><path fill="#ffffff" d="m13 24.5v24.5h376v-49h-376z" /></svg
								><svg
									version="1.2"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 402 132"
									class=""
									><path fill={borderColor2} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
										fill="#ffffff"
										d="m13 92.5v79.5h376v-159h-376z"
									/></svg
								>
								<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
									<div class="flex">
										<img src={imgURL2} class="h-40 object-contain -mt-9 -ml-14 z-10" alt="gift" />
									</div>
								</div>
								<div class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11">
									<span
										class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
										>ตัวอย่างกล่องที่ 2</span
									>
									<div
										class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
									/>
								</div>

								<div
									class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
								>
									<img class="w-40 -mb-11 rotate-12" src={OneOneTwo} alt="count" />
								</div>

								<div class="text-[#4E4670] text-base overflow-hidden -mb-16 ml-6 z-0 text-left">
									<p class=""><b>ชื่อ #อันดับ</b></p>
									<p>วดป</p>
								</div>
								<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
									><path
										fill={borderColor2}
										d="m-1 66.5v66.5h403v-133h-13v119h-376v-119h-14z"
									/><path fill="#ffffff" d="m13 59.5v59.5h376v-119h-376z" /></svg
								>
							</div>

							<div
								class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 shadow-2xl"
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
									/><path fill="#ffffff" d="m13 24.5v24.5h376v-49h-376z" /></svg
								><svg
									version="1.2"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 402 132"
									class=""
									><path fill={borderColor3} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
										fill="#ffffff"
										d="m13 92.5v79.5h376v-159h-376z"
									/></svg
								>
								<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
									<div class="flex">
										<img
											class="w-fit h-auto absolute -top-36 md:-top-40 z-0 -ml-3 object-contain"
											src={OneOneThree}
											alt=""
										/>
										<img src={imgURL3} class="h-40 object-contain -mt-9 -ml-14 z-10" alt="gift" />
									</div>
								</div>
								<div class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11">
									<span
										class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
										>ตัวอย่างกล่องที่ 3</span
									>
									<div
										class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
									/>
								</div>

								<div class="text-[#4E4670] text-base overflow-hidden -mb-16 ml-6 z-0 text-left">
									<p class=""><b>ชื่อ #อันดับ</b></p>
									<p>วดป</p>
								</div>

								<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
									><path
										fill={borderColor3}
										d="m-1 66.5v66.5h403v-133h-13v119h-376v-119h-14z"
									/><path fill="#ffffff" d="m13 59.5v59.5h376v-119h-376z" /></svg
								>
							</div>

							<div
								class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 shadow-2xl"
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
									/><path fill="#ffffff" d="m13 24.5v24.5h376v-49h-376z" /></svg
								><svg
									version="1.2"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 402 132"
									class=""
									><path fill={borderColor4} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
										fill="#ffffff"
										d="m13 92.5v79.5h376v-159h-376z"
									/></svg
								>
								<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
									<div class="flex">
										<img src={imgURL4} class="h-40 object-contain -mt-9 -ml-14 z-10" alt="gift" />
									</div>
								</div>
								<div class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11">
									<span
										class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
										>ตัวอย่างกล่องที่ 4</span
									>
									<div
										class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
									/>
								</div>

								<div
									class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
								>
									<img class="w-40 -mb-9 -rotate-45" src={OneOne} alt="count" />
								</div>

								<div class="text-[#4E4670] text-base overflow-hidden -mb-16 ml-6 z-0 text-left">
									<p class=""><b>ชื่อ #อันดับ</b></p>
									<p>วดป</p>
								</div>
								<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
									><path
										fill={borderColor4}
										d="m-1 66.5v66.5h403v-133h-13v119h-376v-119h-14z"
									/><path fill="#ffffff" d="m13 59.5v59.5h376v-119h-376z" /></svg
								>
							</div>
						</div>
					{/if}
					{#if data?.dataFailed}
						<h2 class="mx-auto text-lg text-red-600 text-center">
							Data Fetching failled, Try again later But Wish sending might working
						</h2>{/if}
					{#await birthdayWishes}
						<h2 class="mx-auto text-center pb-16 pt-4 text-cyan-500 text-lg">
							<b>กำลังโหลดคำอวยพรทั้งหมด ใจเย็นๆนะหนุ่ม</b>
						</h2>
					{:then birthdayWishes}
						<div
							class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-auto font-['itim']"
							data-aos="fade-up"
						>
							{#each birthdayWishes as bwish, index}
								{#if bwish.picture == 1}
									<div
										class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 shadow-2xl"
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
											/><path fill="#ffffff" d="m13 24.5v24.5h376v-49h-376z" /></svg
										><svg
											version="1.2"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 402 132"
											class=""
											><path fill={borderColor1} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
												fill="#ffffff"
												d="m13 92.5v79.5h376v-159h-376z"
											/></svg
										>

										<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
											<div class="flex">
												<img
													src={imgURL1}
													class="h-40 object-contain -mt-9 -ml-14 z-10"
													alt="gift"
												/>
											</div>
										</div>
										<div
											class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11"
										>
											<span
												class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
												>{bwish.comment}</span
											>
											<div
												class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
											/>
										</div>

										<div
											class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
										>
											<img class="w-40 -mb-11 rotate-12" src={OneOneOne} alt="count" />
										</div>

										<div class="text-[#4E4670] text-base overflow-hidden -mb-16 ml-6 z-0">
											<p><b>{bwish.name} #{bwish.count}</b></p>
											<p>{bwish.DMY} {bwish.time}</p>
										</div>
										<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
											><path
												fill={borderColor1}
												d="m-1 66.5v66.5h403v-133h-13v119h-376v-119h-14z"
											/><path fill="#ffffff" d="m13 59.5v59.5h376v-119h-376z" /></svg
										>
									</div>
								{/if}
								{#if bwish.picture == 2}
									<div
										class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 shadow-2xl"
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
											/><path fill="#ffffff" d="m13 24.5v24.5h376v-49h-376z" /></svg
										><svg
											version="1.2"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 402 132"
											class=""
											><path fill={borderColor2} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
												fill="#ffffff"
												d="m13 92.5v79.5h376v-159h-376z"
											/></svg
										>
										<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
											<div class="flex">
												<img
													src={imgURL2}
													class="h-40 object-contain -mt-9 -ml-14 z-10"
													alt="gift"
												/>
											</div>
										</div>
										<div
											class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11"
										>
											<span
												class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
												>{bwish.comment}</span
											>
											<div
												class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
											/>
										</div>

										<div
											class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
										>
											<img class="w-40 -mb-11 rotate-12" src={OneOneTwo} alt="count" />
										</div>

										<div class="text-[#4E4670] text-base overflow-hidden -mb-16 ml-6 z-0">
											<p><b>{bwish.name} #{bwish.count}</b></p>
											<p>{bwish.DMY} {bwish.time}</p>
										</div>
										<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
											><path
												fill={borderColor2}
												d="m-1 66.5v66.5h403v-133h-13v119h-376v-119h-14z"
											/><path fill="#ffffff" d="m13 59.5v59.5h376v-119h-376z" /></svg
										>
									</div>
								{/if}
								{#if bwish.picture == 3}
									<div
										class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 shadow-2xl"
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
											/><path fill="#ffffff" d="m13 24.5v24.5h376v-49h-376z" /></svg
										><svg
											version="1.2"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 402 132"
											class=""
											><path fill={borderColor3} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
												fill="#ffffff"
												d="m13 92.5v79.5h376v-159h-376z"
											/></svg
										>
										<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
											<div class="flex">
												<img
													class="w-fit h-auto absolute -top-36 md:-top-40 z-0 -ml-3 object-contain"
													src={OneOneThree}
													alt=""
												/>
												<img
													src={imgURL3}
													class="h-40 object-contain -mt-9 -ml-14 z-10"
													alt="gift"
												/>
											</div>
										</div>
										<div
											class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11"
										>
											<span
												class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
												>{bwish.comment}</span
											>
											<div
												class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
											/>
										</div>

										<div class="text-[#4E4670] text-base overflow-hidden -mb-16 ml-6 z-0">
											<p><b>{bwish.name} #{bwish.count}</b></p>
											<p>{bwish.DMY} {bwish.time}</p>
										</div>

										<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
											><path
												fill={borderColor3}
												d="m-1 66.5v66.5h403v-133h-13v119h-376v-119h-14z"
											/><path fill="#ffffff" d="m13 59.5v59.5h376v-119h-376z" /></svg
										>
									</div>
								{/if}
								{#if bwish.picture == 4}
									<div
										class="rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50 shadow-2xl"
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
											/><path fill="#ffffff" d="m13 24.5v24.5h376v-49h-376z" /></svg
										><svg
											version="1.2"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 402 132"
											class=""
											><path fill={borderColor4} d="m0 86v86h13v-159h376v159h13v-172h-402z" /><path
												fill="#ffffff"
												d="m13 92.5v79.5h376v-159h-376z"
											/></svg
										>
										<div class="flex w-full flex-col px-4 py-2 absolute top-0 left-0 pb-11">
											<div class="flex">
												<img
													src={imgURL4}
													class="h-40 object-contain -mt-9 -ml-14 z-10"
													alt="gift"
												/>
											</div>
										</div>
										<div
											class="flex flex-1 h-full flex-col relative overflow-hidden px-4 py-2 pb-11"
										>
											<span
												class="text-center text-[#4E4670] sm:text-xl overflow-hidden justify-center items-center flex flex-1"
												>{bwish.comment}</span
											>
											<div
												class="w-full flex pt-4 min-[425px]:px-4 px-2 min-[425px]:text-base text-sm"
											/>
										</div>

										<div
											class=" absolute min-[425px]:bottom-0 -bottom-4 min-[425px]:right-14 right-10 -rotate-12 translate-x-[50%] z-[1] min-[425px]:scale-100 scale-[70%]"
										>
											<img class="w-40 -mb-9 -rotate-45" src={OneOne} alt="count" />
										</div>

										<div class="text-[#4E4670] text-base overflow-hidden -mb-16 ml-6 z-0">
											<p><b>{bwish.name} #{bwish.count}</b></p>
											<p>{bwish.DMY} {bwish.time}</p>
										</div>
										<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 402 92"
											><path
												fill={borderColor4}
												d="m-1 66.5v66.5h403v-133h-13v119h-376v-119h-14z"
											/><path fill="#ffffff" d="m13 59.5v59.5h376v-119h-376z" /></svg
										>
									</div>
								{/if}
							{/each}
						</div>
						<h2 class="mx-auto text-lg text-yellow-700 text-center pb-16 pt-4">
							หมดแล้ว! ไอ่หนุ่ม!
							<p class="mx-auto text-lg text-yellow-700 text-center" id="credit">Credit:</p>
							<p>DEV: สิราวิ้จจะบึ</p>
							<p>ART: CV_FSan</p>
							<p>Data structure: neaht</p>
							<p>Data structure: RikiNozomu</p>
							<p>Domain: Setsugi</p>
							<p>Project Approval: Polygon Project</p>
						</h2>
					{/await}{/await}
			</div>
		</div>
	</div>
</main>
<Footer />
