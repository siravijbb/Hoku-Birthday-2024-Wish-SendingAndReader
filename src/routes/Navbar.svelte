<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar
	class="z-50 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 mx-auto flex max-w-7xl flex-wrap items-center justify-between rounded-lg  px-4 py-2.5 "
>
	<NavBrand href="/">
		<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
			>Aisha Wiki
			<p class="block md:inline text-center bg-emerald-400 rounded-lg md:ml-1 md:pr-2">|beta|</p>
			<p class="-mt-1 text-[0.6rem] text-left md:text-center">Updated: 8/19/2023</p></span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi class="cursor-pointer">
			Dropdown<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
		</NavLi>
		<Dropdown class="w-44 z-20">
			<DropdownItem href="/">FAQ</DropdownItem>
			<DropdownItem href="/docs/components/navbar">DataBase</DropdownItem>
			<DropdownItem href="/">Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/">Sign out</DropdownItem>
		</Dropdown>
		<NavLi href="/settings">Setting</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
