<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
</script>

<Navbar>
	<NavBrand href="/" data-sveltekit-preload-code>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Polygang Project</span
		>
	</NavBrand>
	<div class="flex md:order-2">
		<Button size="sm" class="text-gray-800 dark:text-slate-100" href="/sendwish"
			>ส่งคำอวยพรให้นายHOKU</Button
		>
		<NavHamburger />
	</div>
	<NavUl class="order-1">
		<NavLi href="/" active={true}>อ่านคำอวยพร</NavLi>
		<NavLi href="#">เกี่ยวกับPolygang (ยังไม่เสร็จ)</NavLi>
		<NavLi href="#">หน้าหลัก</NavLi>
		<NavLi href="https://twitter.com/SierraB_Siravij">Contact</NavLi>
	</NavUl>
</Navbar>
