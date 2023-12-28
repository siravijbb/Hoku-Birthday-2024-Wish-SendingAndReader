<script lang="ts">
	function giftInvalid() {
		const resultElement = document.getElementById('errorGift');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกต้องให้ของขวัญด้วย นายสิราวิ้จจะบึ บังคับ';
		}
	}
	import imgURL1 from '$lib/images/imgHoku/1.webp';
	import imgURL2 from '$lib/images/imgHoku/2.webp';
	import imgURL3 from '$lib/images/imgHoku/3.webp';
	import imgURL4 from '$lib/images/imgHoku/4.webp';
</script>

<ul class="grid w-full gap-2 grid-cols-2 md:grid-cols-2">
	<li>
		<input
			type="radio"
			id="hosting-small"
			name="picture"
			value="1"
			class="peer"
			required
			on:invalid|preventDefault={giftInvalid}
		/>
		<label
			for="hosting-small"
			class="inline-flex items-center justify-between w-full p-5 text-white bg-[#bf4e2e] border border-gray-200 rounded-lg cursor-pointer dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-[#bb433d]/70"
		>
			<div class="mx-auto">
				<img alt="Hoku " src={imgURL1} class="flex mx-auto w-28 h-auto -my-7 -mt-9" />
			</div>
		</label>
	</li>
	<li>
		<input type="radio" id="hosting-big" name="picture" value="2" class="peer" />
		<label
			for="hosting-big"
			class="inline-flex items-center justify-between w-full p-5 text-white bg-[#f1962e] border border-gray-200 rounded-lg cursor-pointer dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-600/30"
		>
			<div class="mx-auto">
				<img alt="Idol " src={imgURL2} class="flex mx-auto w-28 h-auto -my-7 -mt-9" />
			</div>
		</label>
	</li>
	<li>
		<input type="radio" id="hosting-3" name="picture" value="3" class="peer" />
		<label
			for="hosting-3"
			class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-[#d7ebff] border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-[#fffafa]/30 dark:text-gray-400"
		>
			<div class="mx-auto">
				<img alt="Winter Wonder " src={imgURL3} class="flex mx-auto w-28 h-auto -my-7 -mt-9" />
			</div>
		</label>
	</li>
	<li>
		<input type="radio" id="hosting-4" name="picture" value="4" class="peer" />
		<label
			for="hosting-4"
			class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-[#ffa083] border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-[#bb433d]/70 dark:text-gray-400"
		>
			<div class="mx-auto">
				<img alt="3 Year Anni " src={imgURL4} class="flex mx-auto w-28 h-auto -my-8 -mt-8" />
			</div>
		</label>
	</li>
</ul>
