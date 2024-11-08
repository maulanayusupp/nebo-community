<template>
<div>
	<main>

		<!-- Hero section -->
		<hero-section class="mt-20" />

		<!-- Intro -->
		<div class="relative isolate">
			<svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
				<defs>
					<pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y="-1" class="overflow-visible fill-gray-50">
					<path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
				</svg>
				<rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
			</svg>
			<div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
				<div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
			</div>
			<div class="overflow-hidden">
				<div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
					<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
							<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">NEBO
							</h1>
							<p class="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
								Komunitas ini tidak hanya berbagi tentang tips modifikasi dan peningkatan performa, tetapi juga aktif mengadakan kegiatan touring, kopdar, dan berbagai event seru lainnya. Bersama NEBO, setiap anggota bisa merasakan sensasi berkendara yang maksimal, sembari memperkuat tali persaudaraan sesama rider NMAX.
							</p>

							<div class="mt-4 mb-6 font-bold">
								Yuk, Gabung Gratis ke NEBO – Komunitas Seru Bagi Pengguna Yamaha NMAX!
								<div class="mt-2 font-semibold text-xs text-gray-500">*Pada saat daftar sertakan foto atau unit Anda untuk verifikasi.</div>
							</div>
							<div class="mt-10 grid grid-cols-2 space-y-3 md:space-y-0 md:flex items-center gap-x-3 lg:mt-0 lg:flex-shrink-0">
								<a
									href="https://wa.me/6285722437493?text=Halo,%20saya%20ingin%20bergabung%20dengan%20NEBO:%20Yamaha%20NMAX%20Neo%20Turbo%20Community.%20Mohon%20informasinya%20lebih%20lanjut.%20Terima%20kasih!%0A%0ASelamat%20Datang%20di%20Grup%20FORUM%20NEBO%20NMAX%20Neo%20Turbo.%0A%0AMari%20kita%20mengenal%20satu%20sama%20lain%20dengan%20mengisi%20bio%20data%20di%20bawah%20ini:%0A%0ANama%20asli%3A%20%5BNAMA%20ANDA%5D%0ANama%20panggilan%3A%20%5BNAMA%20PANGGILAN%5D%0ANama%20di%20WA%3A%20%5BNAMA%20DI%20WHATSAPP%5D%0AAlamat%3A%20%5BALAMAT%20ANDA%5D%0AKegiatan%20sehari%20hari%3A%20%5BKEGIATAN%20SEHARI%20HARI%5D%0AFoto/Video Unit/Motor Anda: [KIRIM FOTO UNIT/MOTOR ANDA]%0A%0AMari%20kita%20Jalin%20Silaturahmi%20Yang%20Baik%20Penuh%20Berkah.%0AJaga%20Nama%20Baik.%0ANEBO%20N_max%20Neo%20Turbo%20Community%0A%0ASalam%20Silaturahmi%20Membawa%20Berkah%0A%0A'NEBO%20SOLID🤝💪'"
									target="_blank"
									class="text-sm font-semibold leading-6 text-gray-900">
									Hubungi Rekrutmen <span aria-hidden="true">→</span>
								</a>
								<a
									href="https://wa.me/6281223230300?text=Halo,%20saya%20ingin%20bergabung%20dengan%20NEBO:%20Yamaha%20NMAX%20Neo%20Turbo%20Community.%20Mohon%20informasinya%20lebih%20lanjut.%20Terima%20kasih!%0A%0ASelamat%20Datang%20di%20Grup%20FORUM%20NEBO%20NMAX%20Neo%20Turbo.%0A%0AMari%20kita%20mengenal%20satu%20sama%20lain%20dengan%20mengisi%20bio%20data%20di%20bawah%20ini:%0A%0ANama%20asli%3A%20%5BNAMA%20ANDA%5D%0ANama%20panggilan%3A%20%5BNAMA%20PANGGILAN%5D%0ANama%20di%20WA%3A%20%5BNAMA%20DI%20WHATSAPP%5D%0AAlamat%3A%20%5BALAMAT%20ANDA%5D%0AKegiatan%20sehari%20hari%3A%20%5BKEGIATAN%20SEHARI%20HARI%5D%0AFoto/Video Unit/Motor Anda: [KIRIM FOTO UNIT/MOTOR ANDA]%0A%0AMari%20kita%20Jalin%20Silaturahmi%20Yang%20Baik%20Penuh%20Berkah.%0AJaga%20Nama%20Baik.%0ANEBO%20N_max%20Neo%20Turbo%20Community%0A%0ASalam%20Silaturahmi%20Membawa%20Berkah%0A%0A'NEBO%20SOLID🤝💪'"
									target="_blank"
									class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
									Rekrutmen 1
								</a>
								<a
									href="https://wa.me/6281214546616?text=Halo,%20saya%20ingin%20bergabung%20dengan%20NEBO:%20Yamaha%20NMAX%20Neo%20Turbo%20Community.%20Mohon%20informasinya%20lebih%20lanjut.%20Terima%20kasih!%0A%0ASelamat%20Datang%20di%20Grup%20FORUM%20NEBO%20NMAX%20Neo%20Turbo.%0A%0AMari%20kita%20mengenal%20satu%20sama%20lain%20dengan%20mengisi%20bio%20data%20di%20bawah%20ini:%0A%0ANama%20asli%3A%20%5BNAMA%20ANDA%5D%0ANama%20panggilan%3A%20%5BNAMA%20PANGGILAN%5D%0ANama%20di%20WA%3A%20%5BNAMA%20DI%20WHATSAPP%5D%0AAlamat%3A%20%5BALAMAT%20ANDA%5D%0AKegiatan%20sehari%20hari%3A%20%5BKEGIATAN%20SEHARI%20HARI%5D%0AFoto/Video Unit/Motor Anda: [KIRIM FOTO UNIT/MOTOR ANDA]%0A%0AMari%20kita%20Jalin%20Silaturahmi%20Yang%20Baik%20Penuh%20Berkah.%0AJaga%20Nama%20Baik.%0ANEBO%20N_max%20Neo%20Turbo%20Community%0A%0ASalam%20Silaturahmi%20Membawa%20Berkah%0A%0A'NEBO%20SOLID🤝💪'"
									target="_blank"
									class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
									Rekrutmen 2
								</a>
							</div>
						</div>
						<div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
							<div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
								<div class="relative">
									<img src="/assets/images/hero/hero_1.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div class="relative">
									<img src="/assets/images/hero/hero_2.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div class="relative">
									<img src="/assets/images/hero/hero_3.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div class="relative">
									<img src="/assets/images/hero/hero_4.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div class="relative">
									<img src="/assets/images/hero/hero_5.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Vision -->
		<div class="overflow-hidden bg-white py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div class="lg:pr-8 lg:pt-4">
						<div class="lg:max-w-lg">
							<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Mengapa harus bergabung?
							</p>
							<p class="mt-6 text-lg leading-8 text-gray-600">
								Bergabung dengan NEBO bukan sekadar menjadi bagian dari komunitas, tetapi juga membuka pintu menuju pengalaman berkendara yang lebih seru dan berharga.
							</p>
							<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
								<div v-for="mission in missions" :key="mission.name" class="relative pl-9">
									<dt class="inline font-semibold text-gray-900">
										<component :is="mission.icon" class="absolute left-1 top-1 h-5 w-5 text-yellow-600" aria-hidden="true" />
										{{ mission.name }}
									</dt>
									{{ ' ' }}
									<dd class="inline">{{ mission.description }}</dd>
								</div>
							</dl>
						</div>
					</div>
					<img src="/assets/images/logos/nebo_logo.jpeg" alt="Product screenshot" class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-full md:-ml-4 lg:-ml-0" width="2432" height="1442" />
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div class="overflow-hidden bg-white py-32">
			<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
				<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
					<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Gabung sekarang juga!
							<br>
							Start your journey with us.
						</h2>
						<p class="mt-6 text-xl leading-8 text-gray-600 mb-8">Bergabunglah sekarang dengan komunitas NMAX! Temukan teman, pengalaman, dan petualangan seru bersama kami.</p>
						<div class="mt-4 mb-6 font-bold">
							Yuk, Gabung Gratis ke NEBO – Komunitas Seru Bagi Pengguna Yamaha NMAX!
							<div class="mt-2 font-semibold text-xs text-gray-500">*Pada saat daftar sertakan foto atau unit Anda untuk verifikasi.</div>
						</div>
						<div class="mt-10 grid grid-cols-2 space-y-3 md:space-y-0 md:flex items-center gap-x-3 lg:mt-0 lg:flex-shrink-0">
							<a
								href="https://wa.me/6285722437493?text=Halo,%20saya%20ingin%20bergabung%20dengan%20NEBO:%20Yamaha%20NMAX%20Neo%20Turbo%20Community.%20Mohon%20informasinya%20lebih%20lanjut.%20Terima%20kasih!%0A%0ASelamat%20Datang%20di%20Grup%20FORUM%20NEBO%20NMAX%20Neo%20Turbo.%0A%0AMari%20kita%20mengenal%20satu%20sama%20lain%20dengan%20mengisi%20bio%20data%20di%20bawah%20ini:%0A%0ANama%20asli%3A%20%5BNAMA%20ANDA%5D%0ANama%20panggilan%3A%20%5BNAMA%20PANGGILAN%5D%0ANama%20di%20WA%3A%20%5BNAMA%20DI%20WHATSAPP%5D%0AAlamat%3A%20%5BALAMAT%20ANDA%5D%0AKegiatan%20sehari%20hari%3A%20%5BKEGIATAN%20SEHARI%20HARI%5D%0AFoto/Video Unit/Motor Anda: [KIRIM FOTO UNIT/MOTOR ANDA]%0A%0AMari%20kita%20Jalin%20Silaturahmi%20Yang%20Baik%20Penuh%20Berkah.%0AJaga%20Nama%20Baik.%0ANEBO%20N_max%20Neo%20Turbo%20Community%0A%0ASalam%20Silaturahmi%20Membawa%20Berkah%0A%0A'NEBO%20SOLID🤝💪'"
								target="_blank"
								class="text-sm font-semibold leading-6 text-gray-900">
								Hubungi Rekrutmen <span aria-hidden="true">→</span>
							</a>
							<a
								href="https://wa.me/6281223230300?text=Halo,%20saya%20ingin%20bergabung%20dengan%20NEBO:%20Yamaha%20NMAX%20Neo%20Turbo%20Community.%20Mohon%20informasinya%20lebih%20lanjut.%20Terima%20kasih!%0A%0ASelamat%20Datang%20di%20Grup%20FORUM%20NEBO%20NMAX%20Neo%20Turbo.%0A%0AMari%20kita%20mengenal%20satu%20sama%20lain%20dengan%20mengisi%20bio%20data%20di%20bawah%20ini:%0A%0ANama%20asli%3A%20%5BNAMA%20ANDA%5D%0ANama%20panggilan%3A%20%5BNAMA%20PANGGILAN%5D%0ANama%20di%20WA%3A%20%5BNAMA%20DI%20WHATSAPP%5D%0AAlamat%3A%20%5BALAMAT%20ANDA%5D%0AKegiatan%20sehari%20hari%3A%20%5BKEGIATAN%20SEHARI%20HARI%5D%0AFoto/Video Unit/Motor Anda: [KIRIM FOTO UNIT/MOTOR ANDA]%0A%0AMari%20kita%20Jalin%20Silaturahmi%20Yang%20Baik%20Penuh%20Berkah.%0AJaga%20Nama%20Baik.%0ANEBO%20N_max%20Neo%20Turbo%20Community%0A%0ASalam%20Silaturahmi%20Membawa%20Berkah%0A%0A'NEBO%20SOLID🤝💪'"
								target="_blank"
								class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Rekrutmen 1
							</a>
							<a
								href="https://wa.me/6281214546616?text=Halo,%20saya%20ingin%20bergabung%20dengan%20NEBO:%20Yamaha%20NMAX%20Neo%20Turbo%20Community.%20Mohon%20informasinya%20lebih%20lanjut.%20Terima%20kasih!%0A%0ASelamat%20Datang%20di%20Grup%20FORUM%20NEBO%20NMAX%20Neo%20Turbo.%0A%0AMari%20kita%20mengenal%20satu%20sama%20lain%20dengan%20mengisi%20bio%20data%20di%20bawah%20ini:%0A%0ANama%20asli%3A%20%5BNAMA%20ANDA%5D%0ANama%20panggilan%3A%20%5BNAMA%20PANGGILAN%5D%0ANama%20di%20WA%3A%20%5BNAMA%20DI%20WHATSAPP%5D%0AAlamat%3A%20%5BALAMAT%20ANDA%5D%0AKegiatan%20sehari%20hari%3A%20%5BKEGIATAN%20SEHARI%20HARI%5D%0AFoto/Video Unit/Motor Anda: [KIRIM FOTO UNIT/MOTOR ANDA]%0A%0AMari%20kita%20Jalin%20Silaturahmi%20Yang%20Baik%20Penuh%20Berkah.%0AJaga%20Nama%20Baik.%0ANEBO%20N_max%20Neo%20Turbo%20Community%0A%0ASalam%20Silaturahmi%20Membawa%20Berkah%0A%0A'NEBO%20SOLID🤝💪'"
								target="_blank"
								class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Rekrutmen 2
							</a>
						</div>
					</div>
					<div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
						<div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
							<img src="/assets/images/hero/hero_1.jpeg" alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
						</div>
						<div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
							<div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
								<img src="/assets/images/hero/hero_2.jpeg" alt="" class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
							</div>
							<div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
								<img src="/assets/images/hero/hero_3.jpeg" alt="" class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
							</div>
							<div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
								<img src="/assets/images/hero/hero_4.jpeg" alt="" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
</template>

<script setup>
import { ref } from 'vue'

import { StarIcon } from '@heroicons/vue/20/solid'
import HeroSection from '~/components/home/HeroSection.vue';

const missions = [
  {
    name: 'Koneksi dengan Sesama Penggemar',
    description: 'Dapatkan kesempatan untuk bertemu dan berinteraksi dengan para pemilik dan penggemar Yamaha NMAX lainnya. Berbagi pengalaman dan tips modifikasi akan memperkaya pengetahuan Anda tentang motor kesayangan.',
    icon: StarIcon,
  },
  {
    name: 'Dukungan dan Saran Modifikasi',
    description: 'Anggota NEBO saling membantu dalam hal modifikasi motor. Anda akan mendapatkan saran berharga tentang peningkatan performa dan gaya yang dapat membuat NMAX Anda semakin keren dan bertenaga.',
    icon: StarIcon,
  },
  {
    name: 'Kegiatan Seru dan Touring',
    description: 'Ikuti berbagai kegiatan menarik, mulai dari kopdar hingga touring bersama. Rasakan kebersamaan dan keseruan menjelajahi jalanan dengan teman-teman satu hobi.',
    icon: StarIcon,
  },
  {
    name: 'Akses ke Informasi Terbaru',
    description: 'Dapatkan informasi terkini tentang produk, event, dan tren modifikasi Yamaha NMAX. Jangan lewatkan kesempatan untuk selalu update dan mendapatkan penawaran spesial dari mitra komunitas.',
    icon: StarIcon,
  },
  {
    name: 'Komunitas yang Ramah dan Inklusif',
    description: 'NEBO adalah tempat di mana semua penggemar NMAX disambut dengan hangat, tanpa memandang pengalaman berkendara atau tingkat modifikasi. Bergabunglah dengan komunitas yang mendukung dan menginspirasi satu sama lain.',
    icon: StarIcon,
  },
]
</script>
