<script>
	import { Carousel, Thumbnails, Button, Indicator } from 'flowbite-svelte';
	import { CaretRightOutline } from 'flowbite-svelte-icons';
	let index = 0;
	const images = [
		{
			alt: 'Cosmic timetraveler',
			src: '/img/icon/20230727153257-10f56244-bd4b-47d2-90db-b5ee7c2cc743.png',
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
			class: 'w-10 h-10'
		},
		{
			alt: 'Cristina Gottardi',
			src: '/img/icon/20230727153257-10f56244-bd4b-47d2-90db-b5ee7c2cc743.png',
			title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
			class: 'w-10 h-10'
		}
	];
</script>

<div class="max-w-4xl space-y-4">
	<Carousel
		imgClass="object-contain h-8 w-auto rounded-sm"
		{images}
		let:Indicators
		let:Controls
		bind:index
	>
		<Indicators let:selected let:index>
			<Indicator
				color={selected ? 'red' : 'green'}
				class="w-5 h-5 text-white border border-white {selected ? 'opacity-100' : 'opacity-80'}"
			>
				{index}
			</Indicator>
		</Indicators>
		<Controls
			class="items-center text-red-400 dark:text-green-400 pt-4"
			imgClass="object-contain h-8 w-auto rounded-sm"
		/>
	</Carousel>
	<Thumbnails
		class="bg-transparent gap-3"
		let:Thumbnail
		let:image
		let:selected
		{images}
		bind:index
		imgClass="object-contain h-8 w-auto rounded-sm"
	>
		<Thumbnail
			{...image}
			{selected}
			class="rounded-md shadow-xl hover:outline hover:outline-primary-500 h-8 w-auto"
			activeClass="outline outline-primary-400"
		/>
	</Thumbnails>
</div>
