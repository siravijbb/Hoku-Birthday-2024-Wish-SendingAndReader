<script lang="ts">
	function giftInvalid() {
		const resultElement = document.getElementById('errorGift');
		if (resultElement !== null) {
			resultElement.innerHTML = '❗ ไอ่หนุ่ม! แกต้องให้ของขวัญด้วย นายสิราวิ้จจะบึ บังคับ';
		}
	}
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
			on:invalid={giftInvalid}
		/>
		<label
			for="hosting-small"
			class="inline-flex items-center justify-between w-full p-5 text-white bg-[#bb433d] border border-gray-200 rounded-lg cursor-pointer dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
		>
			<div class="mx-auto">
				<img alt="hamham " src="/imgHoku/1.png" class="flex mx-auto h-28 w-auto -my-7 -mt-9" />
				<div class="flex mx-auto text-xs">HOKU The Owls</div>
			</div>
		</label>
	</li>
	<li>
		<input type="radio" id="hosting-big" name="picture" value="2" class="peer" />
		<label
			for="hosting-big"
			class="inline-flex items-center justify-between w-full p-5 text-white bg-[#eabdb4] border border-gray-200 rounded-lg cursor-pointer dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
		>
			<div class="mx-auto">
				<img alt="hamham " src="/imgHoku/2.png" class="flex mx-auto h-28 w-auto -my-7 -mt-9" />
				<div class="flex mx-auto text-xs">Light Stick for HOKU</div>
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
				<div class="flex mx-auto text-xs">Mint-Choc Ice Cream</div>
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
				<div class="flex mx-auto text-xs">HOKU Heart</div>
			</div>
		</label>
	</li>
</ul>
