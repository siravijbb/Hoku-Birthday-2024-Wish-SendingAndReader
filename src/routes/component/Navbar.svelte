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
	let contactModal = false;
</script>

<Navbar class="bg-gradient-to-b from-[#c7722e] to-[#f4a443]">
	<NavBrand href="/" data-sveltekit-preload-code>
		<span class="self-center text-xl font-semibold text-white flex">Hoku Birthday 2024</span>
	</NavBrand>
	<div class="flex md:order-2 ">
		<Button size="sm" class="text-slate-100 invisible md:visible" href="#sendwish"
			>ส่งคำอวยพร</Button
		>
		<NavHamburger />
	</div>
	<NavUl class="order-1 ">
		<NavLi href="#wish" active={true}><p class="dark:text-white">อ่านคำอวยพร</p></NavLi>
		<NavLi active={true} on:click={() => (homeModal = true)} class="cursor-pointer hover:underline"
			><p class="dark:text-white">หน้าหลัก Polygang</p></NavLi
		>
		<NavLi active={true} on:click={() => (aboutModal = true)} class="cursor-pointer hover:underline"
			><p class="dark:text-white">เกี่ยวกับPolygang (ยังไม่เสร็จ)</p></NavLi
		>
		<NavLi
			active={true}
			on:click={() => (contactModal = true)}
			class="cursor-pointer hover:underline"><p class="dark:text-white">Contact</p></NavLi
		>
	</NavUl>
</Navbar>

<Modal title="คำเตือน" bind:open={homeModal} autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			คุณกำลังเปลี่ยนหน้าไปยังหน้าหลักpolygang (https://polygang.fan)
		</h3>
		<Button color="red" class="mr-2" href="https://polygang.fan">ออกจากหน้านี้</Button>
		<Button color="alternative">ยังคงอยู่หน้านี้</Button>
	</div>
</Modal>
<Modal title="คำเตือน" bind:open={aboutModal} autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			คุณกำลังเปลี่ยนหน้าไปยังข้อมูลpolygang (https://polygang.fan/about)
		</h3>
		<Button color="red" class="mr-2" href="https://polygang.fan/about">ออกจากหน้านี้</Button>
		<Button color="alternative">ยังคงอยู่หน้านี้</Button>
	</div>
</Modal>
<Modal title="คำเตือน" bind:open={contactModal} autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			คุณกำลังเปลี่ยนหน้าไปยังtwitter.com (https://twitter.com/SierraB_Siravij)
		</h3>
		<Button color="red" class="mr-2" href="https://twitter.com/SierraB_Siravij">ออกจากหน้านี้</Button>
		<Button color="alternative">ยังคงอยู่หน้านี้</Button>
	</div>
</Modal>
