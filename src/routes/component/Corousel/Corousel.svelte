<script>
	import { Carousel, Thumbnails, Button, Indicator } from 'flowbite-svelte';
	import { CaretRightOutline } from 'flowbite-svelte-icons';
	let index = 0;
	const images = [
		{
			title: 'MV เพลง “เงา (Through the Looking Glass)" ครบ 10,000 ครั้งแล้ว!!!!!!!!',
			alt: 'MV เพลง “เงา (Through the Looking Glass)" ครบ 10,000 ครั้งแล้ว!!!!!!!!',
			src: '/imgHoku/10KSong.jpg',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://twitter.com/HokuPLG/status/1733712120850866512'
		},
		{
			title:'"ก็บอกแล้วว่ามันหนาวให้ใส่เสื้อหนาๆ มาก็ไม่เชื่อแต่แรกนะไอ้หนุ่มนี่ หูหลุดไปไม่รู้ด้วยนะ!"',
			alt: '"ก็บอกแล้วว่ามันหนาวให้ใส่เสื้อหนาๆ มาก็ไม่เชื่อแต่แรกนะไอ้หนุ่มนี่ หูหลุดไปไม่รู้ด้วยนะ!"',
			src: '/imgHoku/HokuHug.jpg',

			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://twitter.com/HokuPLG/status/1732075904753689012'
		},
		{
			title: 'Original Song by Hoku 🦉',
			alt: 'เพลงOrignalของHokuออกแล้ว ไปฟังกันเลย!',
			src: '/imgHoku/TTLG.jpg',

			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://www.youtube.com/watch?v=nAIkrVifIBg&ab_channel=HokuCh.'
		},
		{
			title: 'สามารถรับฟังในStreaming Platform ต่าง ๆ ได้แล้ว ไปฟังกันเลย!',
			alt: 'สามารถรับฟังในStreaming Platform ต่าง ๆ ได้แล้ว ไปฟังกันเลย!',
			src: '/imgHoku/LookingWay.jpg',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://twitter.com/HokuPLG/status/1732324001278746900'
		},
		{
			title: 'ขอบคุณคุณF สำหรับ ARTทั้งหมด!',
			alt: 'ขอบคุณคุณF สำหรับ ARTทั้งหมด!',
			src: '/imgHoku/1.png',
			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://twitter.com/cv_fsan/status/1731631751724986620'
		},
		{
			title: 'Happy Polygon 3 Year Anni!',
			alt: 'Happy Polygon 3 Year Anni!',
			src: '/Corousel/PLG3ANNIHoku.jpg',

			imgClass: 'object-contain h-full w-fit rounded-sm',
			link: 'https://twitter.com/HokuPLG/status/1709504045843730454'
		}
	];
	/**
	 * @type {{ alt: any; }}
	 */
	let image;
</script>

<div class="max-w-4xl space-y-4">
	<div class="max-w-4xl space-y-4">
		<Carousel
			{images}
			imgClass="object-contain h-full w-fit rounded-sm"
			duration={3900}
			let:Indicators
			let:Controls
			on:change={({ detail }) => (image = detail)}
		>
			<a slot="slide" href={images[index]?.link} target="_blank" let:Slide let:index>
				<Slide image={images[index]} class="object-contain h-full w-fit rounded-sm" />
			</a>
			<Controls />
			<Indicators />
		</Carousel>
	</div>
	<div
		class=" h-10 mx-3 bg-gradient-to-b from-[#c7722e] to-[#f4a443] dark:text-white p-2 my-2 text-center rounded-lg font-['itim']"
	>
		{image?.alt}
	</div>
</div>
