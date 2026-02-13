<template>
	<div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
		<!-- Header Section -->
		<div class="max-w-6xl mx-auto mb-16 text-center">
			<h1 class="text-4xl sm:text-5xl font-bold text-brand-text mb-4">
				Struktur Kepengurusan
			</h1>
			<p class="text-xl font-semibold text-brand-accent mb-4">
				Periode 2026 - 2028
			</p>

			<div class="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
			<p class="text-lg text-brand-muted max-w-3xl mx-auto">
				Berikut adalah struktur kepengurusan NEBO pusat, yang terdiri dari
				{{ members.length }} anggota yang berdedikasi dengan visi dan misi
				membangun untuk bersama.
			</p>
		</div>

		<!-- Organization Info Card -->
		<div class="max-w-6xl mx-auto mb-16">
			<div class="bg-brand-surface rounded-lg border border-brand-border p-8">
				<div class="flex items-center gap-4 mb-4">
					<div>
						<h2 class="text-2xl font-bold text-brand-text">NEBO PUSAT</h2>
						<p class="text-brand-accent font-semibold">
							{{ members.length }} Anggota Kepengurusan
						</p>
					</div>
				</div>
				<p class="text-brand-muted leading-relaxed">
					Tim kepengurusan NEBO dipenuhi sosok-sosok energik yang siap melaju
					bersama membesarkan nama NEBO INDONESIA. Setiap anggota membawa
					keahlian unik, menyatukan langkah, dan menggerakkan komunitas agar
					terus maju dan berkembang.
				</p>
			</div>
		</div>

		<!-- Members Grid -->
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
				<div
					v-for="member in members"
					:key="member.id"
					class="bg-brand-slate rounded-xl p-8"
				>
					<community-member-card :member="member" />
				</div>
			</div>
		</div>

		<!-- Stats Section -->
		<div class="max-w-6xl mx-auto mt-16 pt-12 border-t border-brand-border">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
				<div>
					<div class="text-4xl font-bold text-brand-accent">
						{{ members.length }}
					</div>
					<p class="text-brand-muted mt-2">Anggota Kepengurusan</p>
				</div>
				<div>
					<div class="text-4xl font-bold text-brand-accent">
						{{ uniqueRoles.length }}
					</div>
					<p class="text-brand-muted mt-2">Divisi Kepengurusan</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const members = ref([
	{
		id: 1,
		alias: 'Wa Haji',
		name: 'Raden Dani Putra',
		role: 'PEMBINA',
		nra: '004F',
		photo: '/assets/images/members/wahaji.png',
	},
	{
		id: 2,
		alias: 'Ibnu',
		name: 'Ibnu Malik',
		role: 'PENGAWAS',
		nra: '002F',
		photo: '/assets/images/members/ibnu.png',
	},
	{
		id: 3,
		alias: 'Irwan',
		name: 'Irwan Nurfajar',
		role: 'PENASEHAT',
		nra: '019',
		photo: '/assets/images/members/irwan.png',
	},
	{
		id: 4,
		alias: 'Oppie',
		name: 'Sopi Sopian',
		role: 'KETUA UMUM',
		nra: '001F',
		photo: '/assets/images/members/oppie.png',
	},
	{
		id: 5,
		alias: 'EB',
		name: 'ER Byantara',
		role: 'WAKIL KETUA UMUM',
		nra: '005F',
		photo: '/assets/images/members/eb.png',
	},
	{
		id: 6,
		alias: 'Yoga',
		name: 'Yoga Dewo Broto',
		role: 'SEKRETARIS UMUM',
		nra: '007',
		photo: '/assets/images/members/yoga.png',
	},
	{
		id: 7,
		alias: 'Victor',
		name: 'Victor Januar Hendrawan',
		role: 'WAKIL SEKRETARIS UMUM',
		nra: '093',
		photo: '/assets/images/members/victor.png',
	},
	{
		id: 8,
		alias: 'Ceceng',
		name: 'Aceng Ridwan Anshori',
		role: 'BENDAHARA UMUM',
		nra: '003F',
		photo: '/assets/images/members/ceceng.png',
	},
	{
		id: 9,
		alias: 'Azuy',
		name: 'Irham Rahardiansyah',
		role: 'WAKIL BENDAHARA UMUM',
		nra: '024',
		photo: '/assets/images/members/azuy.png',
	},
	{
		id: 10,
		alias: 'Kahfi',
		name: 'Ahmad Kahfi Sobar',
		role: 'KETUA BIDANG KEANGGOTAAN',
		nra: '094',
		photo: '/assets/images/members/kahfii.png',
	},
	{
		id: 11,
		alias: 'Chikoyz',
		name: 'Ekko Bagus',
		role: 'SUB BIDANG REGISTRASI DAN KTA',
		nra: '018',
		photo: '/assets/images/members/chikoyz.png',
	},
	{
		id: 12,
		alias: 'Omben',
		name: 'Mochamad Alfian Fawzie',
		role: 'KETUA BIDANG KEGIATAN',
		nra: '020',
		photo: '/assets/images/members/omben.png',
	},
	{
		id: 13,
		alias: 'Egi',
		name: 'Egi Mardiana',
		role: 'SUB BIDANG KOPDAR',
		nra: '008',
		photo: '/assets/images/members/egi.png',
	},
	{
		id: 14,
		alias: 'Beka',
		name: 'MR Eka Saputra',
		role: 'SUB BIDANG TOURING',
		nra: '155',
		photo: '/assets/images/members/beka.png',
	},
	{
		id: 15,
		alias: 'Yudi',
		name: 'Yudi Abdul Rohim',
		role: 'KETUA BIDANG HUKUM & ADVOKASI',
		nra: '058',
		photo: '/assets/images/members/yudi.png',
	},
	{
		id: 16,
		alias: 'RG',
		name: 'Ridwan G',
		role: 'SUB BIDANG HUKUM & ADVOKASI',
		nra: '096',
		photo: '/assets/images/members/ridwan_rg.png',
	},
	{
		id: 17,
		alias: 'Mas Mosky',
		name: 'Dwi Priyatmoko',
		role: 'KETUA BIDANG HUMAS & IT',
		nra: '055',
		photo: '/assets/images/members/masmosky.png',
	},
	{
		id: 18,
		alias: 'Ben KW',
		name: 'Beni Rindayana',
		role: 'SUB BIDANG PUBLIKASI & DOKUMENTASI',
		nra: '198',
		photo: '/assets/images/members/benraya.png',
	},
	{
		id: 19,
		alias: 'Dedy',
		name: 'Dedy Budianto',
		role: 'KETUA BIDANG DANA USAHA',
		nra: '032',
		photo: '/assets/images/members/dedy.png',
	},
	{
		id: 20,
		alias: 'AdamNR',
		name: 'Adam Nugraha',
		role: 'SUB BIDANG MARCHANDISE & PROMOSI',
		nra: '026',
		photo: '/assets/images/members/adam.png',
	},
	{
		id: 21,
		alias: 'Rawing',
		name: 'Raka Kharisma Adhadira',
		role: 'SUB BIDANG LOGISTIK',
		nra: '105',
		photo: '/assets/images/members/raka.png',
	},
	{
		id: 22,
		alias: 'Ferry',
		name: 'Ferry',
		role: 'SUB BIDANG LOGISTIK',
		nra: '006',
		photo: '/assets/images/members/ferry.png',
	},
	{
		id: 23,
		alias: 'Ali',
		name: 'Ali Nurdin',
		role: 'SUB BIDANG LOGISTIK',
		nra: '135',
		photo: '/assets/images/members/ali.png',
	},
]);

const uniqueRoles = computed(() => {
	const roles = members.value.map((m) => m.role);
	return [...new Set(roles)];
});
</script>
