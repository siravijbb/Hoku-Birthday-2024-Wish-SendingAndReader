<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ tutorials } = data);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="grid grid-cols-3 space-y-5">
	{#each tutorials as bwish}
		<article class="p-4 mx-auto my-auto my-fit shadow-xl bg-amber-500">
			<h2>{bwish.name}</h2>
			<p>{bwish.comment}</p>
			<p>{bwish.createdAt}</p>
		</article>
	{/each}
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
