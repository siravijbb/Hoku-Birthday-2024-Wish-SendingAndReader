<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Input,
		Modal
	} from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	let homeModal = false;
	let aboutModal = false;
</script>

<Navbar>
	<NavBrand href="/" data-sveltekit-preload-code>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Hoku Birthday 2024 Project</span
		>
	</NavBrand>
	<div class="flex md:order-2">
		<Button size="sm" class="text-gray-800 dark:text-slate-100" href="#sendwish">ส่งคำอวยพร</Button>
		<NavHamburger />
	</div>
	<NavUl class="order-1">
		<NavLi href="#wish" active={true}>อ่านคำอวยพร</NavLi>
		<NavLi on:click={() => (homeModal = true)} class="cursor-pointer">หน้าหลัก Polygang</NavLi>
		<NavLi on:click={() => (aboutModal = true)} class="cursor-pointer"
			>เกี่ยวกับPolygang (ยังไม่เสร็จ)</NavLi
		>
		<NavLi href="https://twitter.com/SierraB_Siravij">Contact</NavLi>
	</NavUl>
</Navbar>

<Modal title="คำเตือน" bind:open={homeModal} autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			คุณกำลังเปลี่ยนหน้าไปยังหน้าหลัก (https://polygang.fan)
		</h3>
		<Button color="red" class="mr-2" href="https://polygang.fan">ออกจากหน้านี้</Button>
		<Button color="alternative">ยังคงอยู่หน้านี้</Button>
	</div>
</Modal>
<Modal title="คำเตือน" bind:open={aboutModal} autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			คุณกำลังเปลี่ยนหน้าไปยังหน้าหลัก (https://polygang.fan/about)
		</h3>
		<Button color="red" class="mr-2">ออกจากหน้านี้</Button>
		<Button color="alternative">ยังคงอยู่หน้านี้</Button>
	</div>
</Modal>
