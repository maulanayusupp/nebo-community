<template>
	<div>
		<main>
			<!-- Rules -->
			<div class="overflow-hidden bg-white py-24 sm:py-32">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="max-w-sm m-auto">
						<img
							src="/assets/images/logos/nebo_logo.jpeg"
							alt="Product screenshot"
							class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-full md:-ml-4 lg:-ml-0"
							width="2432"
							height="1442"
						/>
					</div>
					<div class="w-full gap-x-8 gap-y-16 sm:gap-y-20">
						<div class="lg:pr-8 lg:pt-4">
							<div class="w-full">
								<p
									class="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
								>
									Peraturan Keanggotaan
								</p>
								<dl
									class="mt-10 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-1 md:grid-cols-2"
								>
									<div
										v-for="mission in missions"
										:key="mission.name"
										class="relative pl-9 mb-6"
									>
										<dt class="inline font-semibold text-gray-900">
											<component
												:is="mission.icon"
												class="absolute left-1 top-1 h-5 w-5 text-yellow-600"
												aria-hidden="true"
											/>
											{{ mission.name }}
										</dt>
										{{ ' ' }}
										<dd class="inline">{{ mission.description }}</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
					<hr class="mt-10 mb-5" />
					<div>
						<p
							class="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
						>
							Informasi Dasar
						</p>

						<dl
							class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
						>
							<div v-for="rule in rules" :key="rule.name" class="relative pl-9">
								<dt class="inline font-semibold text-gray-900">
									<component
										:is="rule.icon"
										class="absolute left-1 top-1 h-5 w-5 text-yellow-600"
										aria-hidden="true"
									/>
									{{ rule.name }}
								</dt>
								{{ ' ' }}
								<dd v-html="rule.description"></dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid';

const missions = [
	{
		name: 'Keanggotaan Khusus',
		description:
			'Untuk NEBO Pusat (BANDUNG), tidak diperkenankan anggota perempuan.',
		icon: StarIcon,
	},
	{
		name: 'Keanggotaan Tunggal',
		description:
			'Anggota tidak diperbolehkan bergabung di komunitas/ klub motor lain yang menggunakan motor NMAX Gen 3 yang sama. Komunitas lain dengan jenis motor berbeda atau komunitas non-motor, seperti pengajian atau bakti sosial, diperbolehkan.',
		icon: StarIcon,
	},
	{
		name: 'Kepengurusan',
		description:
			'Tidak ada kepengurusan di luar Kota Bandung jika jumlah anggota masih sedikit. Namun, jika jumlah anggota di suatu wilayah sudah cukup banyak (Minimal 10 orang), nantinya bisa dibentuk kordinator wilayah dengan kepengurusan yang terpisah.',
		icon: StarIcon,
	},
	{
		name: 'Kopdar',
		description:
			'Kegiatan kopdar dilaksanakan secara berkala setiap dua minggu sekali. Partisipasi aktif dalam kopdar antar anggota di lingkup wilayah sangat dianjurkan, kecuali apabila terdapat keperluan keluarga atau pekerjaan yang tidak dapat ditinggalkan. Sangat disarankan mencari teman sesama anggota di wilayahnya masing-masing.',
		icon: StarIcon,
	},
	{
		name: 'Masa Jabatan Pengurus',
		description:
			'Masa jabatan pengurus adalah 2 tahun dan maksimal menjabat 2 periode. Untuk kepengurusan di luar Kota Bandung, masa jabatan dapat disesuaikan dengan kesepakatan bersama di masing-masing wilayah dan atau dengan persetujuan pengurus NEBO Pusat.',
		icon: StarIcon,
	},
	{
		name: 'Iuran',
		description:
			'Sejatinya NEBO mengandalkan partisipasi sukarela anggota untuk mendukung berbagai kegiatan dan operasional komunitas. Aturan mengenai Iuran mungkin dapat berbeda antara satu wilayah dan wilayah lainnya. Iuran dapat disesuaikan dengan kesepakatan bersama di masing-masing wilayah dengan persetujuan pengurus Nebo Pusat.',
		icon: StarIcon,
	},
	{
		name: 'Merchandise untuk Keperluan Kas Komunitas',
		description:
			'Penjualan merchandise tidak untuk mencari keuntungan pribadi, melainkan sepenuhnya dialokasikan sebagai kas komunitas untuk mendukung kegiatan internal dan sosial.',
		icon: StarIcon,
	},
	{
		name: 'Kegiatan Sosial dan Bakti Masyarakat',
		description:
			'Sebagian dari dana kas komunitas digunakan untuk mendanai kegiatan sosial dan bakti masyarakat sebagai bentuk kontribusi nyata NEBO kepada lingkungan sekitar.',
		icon: StarIcon,
	},
	{
		name: 'Transparansi Pengelolaan Dana',
		description:
			'Dana yang didapatkan dari uang kencleng kopdar, sumbangan sukarela, dan penjualan merchandise dikelola secara transparan dan sepenuhnya digunakan untuk kas komunitas dan kegiatan bakti sosial.',
		icon: StarIcon,
	},
	{
		name: 'Non-Profit, Tanpa Orientasi Keuntungan',
		description:
			'NEBO tidak berorientasi pada keuntungan finansial. Semua kegiatan dan event komunitas bertujuan untuk mempererat ikatan antar anggota serta memberikan manfaat bagi masyarakat melalui kegiatan sosial.',
		icon: StarIcon,
	},
];

const rules = [
	{
		name: 'Kopdar Bersifat Wajib',
		description:
			'Kopdar diwajibkan bagi anggota yang memiliki waktu luang di luar pekerjaan atau urusan keluarga yang penting. Jarak yang terjangkau juga menjadi pertimbangan.<br />Bagi anggota di luar kota, seperti Garut atau kota lainnya, kehadiran sangat diapresiasi jika memungkinkan. Jika tidak, kami memaklumi, namun diharapkan untuk berupaya mencari sesama anggota NEBO di wilayah masing-masing.',
		icon: StarIcon,
	},
	{
		name: 'Koordinator Wilayah',
		description:
			'Koordinator Wilayah adalah anggota yang bertugas mengkoordinasikan kegiatan di luar Kota Bandung. Misalnya, jika ada anggota di Bali yang ingin mengadakan kegiatan, mereka dapat membuat akun media sosial NEBO Bali, namun dengan catatan harus berkoordinasi terlebih dahulu dengan pengurus NEBO Pusat di Bandung.<br />Jika anggota di wilayah tersebut telah mencapai lebih dari 10 orang, maka dapat dibicarakan kembali untuk membentuk koordinator wilayah atau kepengurusan setempat.',
		icon: StarIcon,
	},
	{
		name: 'Keanggotaan Ganda (NMAX Gen 3) Tidak Diperbolehkan',
		description:
			'Anggota resmi NEBO tidak diperkenankan memiliki keanggotaan ganda di komunitas atau klub motor lain dengan produk motor yang sama (sesama pengguna NMAX Gen 3). Namun, jika anggota juga memiliki motor lain seperti XMAX atau Vario, keanggotaan di komunitas motor tersebut diperbolehkan.',
		icon: StarIcon,
	},
];
</script>
