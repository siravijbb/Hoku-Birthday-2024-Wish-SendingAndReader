<script lang="ts">
	import '../app.postcss';
	import './styles.css';
	import Navbar from './component/Navbar.svelte';
</script>

<div class="app">
	<body>
		<main>
			<slot />
		</main>
	</body>
</div>

<style is:global>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@400;600;700&family=IBM+Plex+Sans+Thai:wght@500;600;700&family=IBM+Plex+Sans:wght@400;600;700&family=Itim&display=swap');
	body {
		font-family: 'IBM Plex Sans Thai', 'IBM Plex Sans Thai Looped','itim', sans-serif;
	}
	:root {
		--accent: 124, 58, 237;
		--accent-gradient: linear-gradient(45deg, rgb(var(--accent)), #da62c4 30%, white 60%);
		background-color: #fceccb;
	}
	html {
		font-family: system-ui, sans-serif;
		background-color: #fceccb;
	}
	code {
		font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
			Bitstream Vera Sans Mono, Courier New, monospace;
	}
</style>
