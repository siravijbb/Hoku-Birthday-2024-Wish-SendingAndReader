<script lang="ts">
	import type { PageData } from './$types';
	import Navbar from './Navbar.svelte';

	export let data: PageData;

	$: ({ bwish } = data);
</script>

<Navbar />
<body>
	<main class="mx-auto mt-14 max-w-7xl rounded-xl bg-neutral-200 pb-4 shadow-xl">
		<div class="-mt-14">
			<div class="mx-auto rounded-xl py-4">
				<div class="text-ellipsis rounded-lg bg-white px-6 py-4 shadow-xl md:m-4 lg:px-8">
					<section>
						<div class=" grid grid-cols-2 mx-auto">
							{#each bwish as wish}
								<article class="h-auto p-4 bg-neutral-200 mx-auto">
									<h2>{wish.title}</h2>
									<p>from:{wish.from}</p>
								</article>
							{/each}
						</div>
					</section>
				</div>
			</div>
		</div>
	</main>
</body>
