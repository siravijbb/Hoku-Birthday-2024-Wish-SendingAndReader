<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="w-full h-full flex flex-col items-center">
	<div class="-z-[1] fixed top-0 left-0 w-full h-screen bg-[#EFEFEF]" />
	<div
		class="flex flex-col relative w-full h-screen justify-center items-center overflow-hidden gap-4 bg-transparent"
	>
		<div class="text-white text-4xl z-10 w-full text-center">
			<p class="text-white">{$page.error?.message ?? ''}</p>

			ขออภัย คุณนอนดึกเกินแล้ว<b class="text-[#bb433d] underline">โฮคุ</b>เป็นห่วงคุณนะ ไอ่หนุ่ม!
			<div
				class="w-full h-sm flex flex-row gap-2 z-[1] p-2 text-white justify-center items-center whitespace-nowrap"
			>
				<a
					class="flex min-[431px]:flex-row flex-col items-center gap-1"
					target="_blank"
					href="https://discord.gg/TrQaMK4Egd"
					><svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="discord"
						class="inline fa-discord text-[24px] aspect-square h-7"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
						><path
							fill="#EFEFEF"
							d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
						/></svg
					><span class="min-[431px]:text-xl text-xs text-center text-white">ดิสคอร์ดคนนอนดึก</span
					></a
				>
				<hr
					class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem bg-white"
				/>
				<div
					class="h-full justify-center items-center flex sm:flex-row flex-col min-[341px]:flex-none flex-1 sm:gap-2"
				>
					<span class="sm:text-base text-xs text-center"
						>ติดตาม <b class="underline">โฮคุ</b> ได้แล้วที่</span
					>
					<div class="min-[341px]:flex grid grid-cols-3 min-[341px]:gap-2">
						<a class="flex items-center" target="_blank" href="https://t.co/nCV3vocXPv"
							><svg
								class="w-[26px] h-[26px]"
								version="1.2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="#EFEFEF"
								><path
									d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"
								/></svg
							></a
						><a class="flex items-center" target="_blank" href="https://twitter.com/hokuplg"
							><svg
								class="w-[26px] h-[26px]"
								version="1.2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								data-testid="TwitterIcon"
								fill="#EFEFEF"
								><path
									d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
								/></svg
							></a
						><a
							class="flex items-center p-1"
							target="_blank"
							href="https://vtuberthaiinfo.com/talent/hokuplg"
							><svg
								class="w-[26px] h-[26px]"
								version="1.2"
								xmlns="http://www.w3.org/2000/svg"
								fill="#EFEFEF"
								viewBox="0 0 1591 1270"
								width="1591"
								height="1270"
								><g id="Folder 1"
									><path id="Shape 1 copy 2" class="s0" d="m0 0h290.7v1269h-290.7z" /><path
										id="Shape 1 copy 3"
										class="s0"
										d="m876 240h290.7v1029h-290.7z"
									/><path id="Shape 1 copy" class="s0" d="m584.1 81l18-36h987v36z" /><path
										id="Shape 1 copy 9"
										class="s0"
										d="m546.3 159.1l33.6-69.1h1009.2v69.1z"
									/><path id="Shape 1 copy 6" class="s0" d="m523.4 204l18-36h1047.7v36z" /><path
										id="Shape 1 copy 7"
										class="s0"
										d="m606.5 36l17.9-36h964.7v36z"
									/><path id="Shape 1 copy 8" class="s0" d="m501.6 249l17.9-36h1069.6v36z" /><path
										id="Shape 1 copy 4"
										class="s0"
										d="m1300 629h290.7v640h-290.7z"
									/><path
										id="Shape 2"
										class="s0"
										d="m1445.5 582c-80.5 0-145.5-65-145.5-145.5 0-80.4 65-145.5 145.5-145.5 80.5 0 145.5 65.1 145.5 145.5 0 80.5-65 145.5-145.5 145.5z"
									/><path
										id="Shape 1 copy 5"
										class="s0"
										d="m474.9 303.7h290.9l-474.9 965.3h-290.9z"
									/></g
								></svg
							></a
						>
					</div>
				</div>
			</div>
		</div>

		<div class="flex gap-2 text-white z-10">
			<a class="flex flex-row items-center gap-1" href="/"
				><svg
					class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-2xl h-10"
					focusable="false"
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="#FFFFFF"
					data-testid="HomeIcon"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg
				><span class="text-xl text-white"
					>หน้าอวยพรวันเกิด<b class="text-[#bb433d] underline">โฮคุ</b></span
				></a
			>
			<hr class=" bg-white" />
		</div>
		<div
			class="video-container absolute blur-sm brightness-[25%] w-full h-full pointer-events-none"
		>
			<iframe
				class="ifreamYoutube"
				frameborder="0"
				allowfullscreen=""
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				title="🎆ในความฝัน และความทรงจำหน้าร้อน"
				width="100%"
				height="100%"
				src="https://www.youtube.com/embed/nAIkrVifIBg?autoplay=1&mute=0&controls=0&loop=1&playlist=nAIkrVifIBg&enablejsapi=1&origin=https%3A%2F%2Fhokubirthday2024.polygang.fan&widgetid=1"
				id="widget2"
			/>
		</div>
	</div>
</main>
