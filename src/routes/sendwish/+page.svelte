<script lang="ts">
	import { enhance } from '$app/forms';
	import { Turnstile } from 'svelte-turnstile';
	import type { ActionData, Actions } from './$types';
	import { fail } from '@sveltejs/kit';
	export let form: ActionData;
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
	let formModal = false;

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

<main class="mx-auto mt-20 max-w-xl rounded-xl bg-neutral-200 pb-4 shadow-xl">
	<div class="-mt-20">
		<div class="mx-auto rounded-xl py-4">
			<div class="mx-auto max-w-4xl text-ellipsis rounded-lg bg-white py-4 shadow-xl lg:px-8">
				<h1 class="pb-4 text-center text-2xl md:text-left">ส่งคำอวยพรให้นายHOKU</h1>
				<form
					bind:this={thisForm}
					on:submit={handleSubmit}
					use:enhance
					method="post"
					class=" bg-slate-400 px-9 lg:px-20 pb-4 mx-auto items-center self-center justify-center"
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
					<ul class="grid w-full gap-2 grid-cols-2 md:grid-cols-4">
						<li>
							<input
								type="radio"
								id="hosting-small"
								name="picture"
								value="1"
								class="peer"
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
							<input type="radio" id="hosting-big" name="picture" value="2" class="peer" />
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
							<input type="radio" id="hosting-3" name="picture" value="3" class="peer" />
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
							<input type="radio" id="hosting-4" name="picture" value="4" class="peer" />
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

					<Button
						on:click={() => (formModal = true)}
						class="p-2 bg-slate-900 rounded-full my-2 mx-auto"
						>อ่านข้อตกลงการประมวลผลข้อมูลส่วนบุคคล</Button
					>
					<Modal
						bind:open={formModal}
						size="xs"
						autoclose={false}
						class="w-full touch-auto h-1/2 max-h-[35rem] overflow-scroll"
						title="ข้อตกลงการประมวลผลข้อมูลส่วนบุคคล "
					>
						<article
							class=" max-w-full shadow-inner bg-primary/10 rounded-xl space-y-1 md:space-y-4 text-xs md:text-md touch-auto"
						>
							<p id="term">
								หากท่านได้กดยอมรับปุ่ม "ยอมรับ" หรือ "Accept" ที่ปุ่มด้านล่าง หมายความว่า
								ท่านได้ยอมรับ <b class="text-red-500"
									>การอนุญาตเผยแพร่คำอวยพรของท่าน
								</b>และนโยบายการใช้คุกกี้ และ นโยบายการคุ้มครองข้อมูลส่วนบุคคล
							</p>
							<p>
								เว็บไซต์ของเรา Polygang.fan
								ขอชี้แจงให้ท่านทราบเกี่ยวกับการใช้งานข้อมูลส่วนบุคคลของท่าน
							</p>
							<p>ประกาศนโยบายความเป็นส่วนตัวนี้ใช้สำหรับบุคคลดังต่อไปนี้</p>
							<p>ผู้ให้บริการหรือเจ้าของเว็บไซต์ ต่อไปนี้จะเรียกว่า Polygang.fan</p>
							<p>
								ผู้เยี่ยมชมเว็บไซต์ คือ ผู้ที่เปิดหน้าเว็บไซต์ หรือ อ่านข้อมูลบนหน้าเว็บไซต์
								Polygang.fan ไม่ว่าจะเป็นหน้าใดก็ตาม
							</p>
							<p>
								เว็บไซต์ Polygang.fan ได้กำหนดนโยบายเกี่ยวกับข้อมูลส่วนบุคคลเพื่อยกระดับมาตรฐาน
								ความปลอดภัย ของข้อมูลส่วนบุคคล ของผู้เยี่ยมชม และ ผู้ใช้บริการเว็บไซต์ให้ดียิ่งขึ้น
								และ เพื่อให้สอดคล้องกับพระราชบัญญัติ คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
							</p>
							<h2>วัตถุประสงค์ของการจัดเก็บข้อมูลส่วนบุคคล</h2>
							<p>
								Polygang.fan เก็บข้อมูลส่วนบุคคลของท่านตามวัตถุประสงค์ ของการดำเนินงานเว็บไซต์ดังนี้
							</p>
							<ul>
								<li>เพื่อใช้ในกิจกรรมทางการตลาดออนไลน์ และ การโฆษณา</li>
								<li>เพื่อใช้ในวิเคราะห์ข้อมูลผู้เยี่ยมชมเว็บไซต์ และ วิจัยทางการตลาด</li>
								<li>
									เพื่อใช้ในการพัฒนาเว็บไซต์ และ มอบประสบการณ์เฉพาะบุคคลใหักับผู้เยี่ยมชมเว็บไซต์
								</li>
							</ul>
							<h2>การเก็บข้อมูลส่วนบุคคลที่จัดเก็บโดย บุคคลที่สาม</h2>
							<p>
								เว็บไซต์ Polygang.fan มีการใช้งาน ซอฟท์แวร์ และ บริการจาก บุคคลที่สาม
								สำหรับเพิ่มประสิทธิภาพการทำงานของเว็บไซต์ โดยบริการที่เว็บไซต์ใช้มีดังนี้
							</p>
							<ul>
								<li>CloudFlare Analytics</li>
								<li>CloudFlare Manager</li>
							</ul>
							<p>
								กรณีที่มีการเชื่อมโยงกับแพลตฟอร์มของบุคคลที่สาม เช่น เครือข่ายการโฆษณา
								สื่อสังคมออนไลน์ ผู้ให้บริการเว็บไซต์ภายนอกอื่นๆ คุกกี้บางประเภท และ
								ข้อมูลจราจรทางคอมพิวเตอร์ อาจมีการจัดการโดยบุคคลที่สาม
								จึงแนะนำให้ผู้เยี่ยมชมเว็บไซต์
								ศึกษาและทำความเข้าใจนโยบายการใช้คุกกี้และนโยบายการคุ้มครองข้อมูลส่วนบุคคลของบุคคลที่สามเพิ่มเติมด้วย
							</p>
							<h2>สิทธิของเจ้าของข้อมูลส่วนบุคคล</h2>
							<p>
								ผู้เยี่ยมชมเว็บไซต์ สามารถปฎิเสธ การใช้งานคุกกี้ ได้จาก
								หน้าต่างแจ้งเตือนการใช้งานคุกกี้ ที่หน้าเว็บไซต์
							</p>
							<p>
								ผู้เยี่ยมชมเว็บไซต์ สามารถลบข้อมูลคุกกี้ทั้งหมด
								ได้จากเว็บบราวเซอร์ที่ผู้เยี่ยมชมเว็บไซต์ ใช้งาน โดยท่านสามารถศึกษาวิธีการลบคุกกี้
								ออกจากเว็บบราวเซอร์ จากเว็บไซต์ของผู้พัฒนาเว็บบราวเซอร์นั้น
							</p>
							<h2>ความปลอดภัยของข้อมูลส่วนบุคคล</h2>
							<p>
								บนเว็บไซต์ Polygang.fan อาจจะมีลิงก์เชื่อมโยงไปยังเว็บไซต์อื่นๆ
								หรือท่านอาจใช้ลิงก์ในเว็บไซต์อื่นเพื่อเข้ามาในเว็บไซต์ของเรา เราขอให้ท่านเข้าใจว่า
								เว็บไซต์ Polygang.fan ไม่สามารถที่จะรับผิดชอบต่อนโยบาย
								และวิธีการปฏิบัติเกี่ยวกับการคุ้มครองความเป็นส่วนตัวของเว็บไซต์อื่นๆได้
								ดังนั้นขอให้ท่านศึกษา นโยบาย และ แนวทางปฏิบัติเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล
								ของเว็บไซต์ ที่ท่านเยี่ยมชม
								ก่อนและหลังเยี่ยมชมเว็บไซต์ของเราผ่านลิงก์เชื่อมโยงบนเว็บไซต์ด้วย
							</p>
							<p>
								อย่างไรก็ตามเว็บไซต์ Polygang.fan ไม่สามารถที่จะควบคุมดูแล
								หรือรับผิดชอบต่อการใช้ข้อมูลส่วนตัวโดยบุคคลภายนอก หรือ องค์กรภายนอก
								ที่ได้รับข้อมูลจากท่านผ่านทางเว็บไซต์นี้ เราจึงขอแนะนำให้ท่านพิจารณา
								การยอมรับหรือการปฏิเสธการใช้งานคุกกี้ จากบุคคลที่สาม
								ตามที่เราได้แจ้งข้างต้นถึงสิทธิที่ท่านสามารถปฏิเสธการใช้งานคุกกี้เหล่านี้ได้ด้วยตนเอง
							</p>
							<h2>ท่านจะติดต่อ Polygang.fan และเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล ได้อย่างไร</h2>
							<p>
								หากท่านมีข้อเสนอแนะ หรือต้องการสอบถามข้อมูลเกี่ยวกับรายละเอียดการเก็บรวบรวม ใช้
								และ/หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน รวมถึงการขอใช้สิทธิตามนโยบายฉบับนี้
								ท่านสามารถติดต่อ ผ่านช่องทางต่อไปนี้
							</p>
							<ul>
								<li>
									<a class="text-emerald-500" href="https://twitter.com/SierraB_Siravij"
										>Twitter: @SierraB_Siravij</a
									>
								</li>
							</ul>
							<b>จัดทำนโยบายโดยชาว Polygang</b>
						</article>
						<svelte:fragment slot="footer">
							<div class="grid grid-cols-1 gap-2">
								<div class="mx-auto grid grid-cols-1">
									<div class="flex items-start my-2">
										<div class="flex items-center h-5">
											<input
												id="terms"
												type="checkbox"
												value=""
												class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
												required
											/>
										</div>
										<label
											for="terms"
											class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
											>I agree with the <a
												href="#term"
												class="text-blue-600 hover:underline dark:text-blue-500"
												>terms and conditions</a
											></label
										>
									</div>
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
										disabled={forms?.message || loading}>ยอมรับข้อตกลงเงื่อนไข</button
									>
								</div>
							</div>
						</svelte:fragment>
					</Modal>
				</form>
			</div>
		</div>
	</div>
</main>
