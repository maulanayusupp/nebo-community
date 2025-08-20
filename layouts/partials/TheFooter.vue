<template>
	<footer class="bg-white" aria-labelledby="footer-heading">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
			<div class="xl:grid xl:grid-cols-3 xl:gap-8">
				<div>
					<img
						class="h-28 rounded-lg"
						src="/assets/images/logos/nebo_logo.jpeg"
						alt="Company name"
					/>
				</div>
				<div
					class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:col-span-2 xl:mt-0"
				>
					<!-- Tentang NEBO Section -->
					<div>
						<h3
							class="text-base font-bold leading-6 text-gray-900 mb-6 border-b border-gray-200 pb-2"
						>
							Tentang NEBO
						</h3>
						<ul role="list" class="space-y-3">
							<li v-for="item in navigation.company" :key="item.name">
								<NuxtLink
									:to="item.href"
									class="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
								>
									<span
										class="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
									></span>
									{{ item.name }}
								</NuxtLink>
							</li>
						</ul>
					</div>

					<!-- Regional NEBO Section -->
					<!-- <div>
						<h3
							class="text-base font-bold leading-6 text-gray-900 mb-6 border-b border-gray-200 pb-2"
						>
							Regional NEBO
						</h3>
						<ul role="list" class="space-y-3">
							<li v-for="item in navigation.regional" :key="item.name">
								<NuxtLink
									:to="item.href"
									class="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
								>
									<span
										class="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
									></span>
									{{ item.name }}
								</NuxtLink>
							</li>
						</ul>
					</div> -->

					<!-- Kontak & Media Sosial Section -->
					<div>
						<h3
							class="text-base font-bold leading-6 text-gray-900 mb-6 border-b border-gray-200 pb-2"
						>
							Kontak & Media Sosial
						</h3>
						<div class="space-y-4">
							<div class="flex items-center space-x-3">
								<div class="flex space-x-3">
									<a
										v-for="item in navigation.social"
										:key="item.name"
										:href="item.href"
										target="_blank"
										rel="noopener noreferrer"
										class="text-gray-400 hover:text-gray-600 transition-colors duration-200 transform hover:scale-110"
										:title="item.name"
									>
										<component
											:is="item.icon"
											class="h-6 w-6"
											aria-hidden="true"
										/>
									</a>
								</div>
							</div>
							<div class="text-sm text-gray-600">
								<p class="mb-2">
									Email:
									<a
										href="mailto:nebo.indonesia@gmail.com"
										class="text-blue-600 hover:text-blue-800 transition-colors duration-200"
										>nebo.indonesia@gmail.com</a
									>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-8 border-t border-gray-900/10 pt-8 flex justify-center">
				<p class="text-xs leading-5 text-gray-500">
					&copy; 2024 NEBO: NMAX Neo Turbo Community. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { defineComponent, h } from 'vue';

const navigation = {
	company: [
		{ name: 'Tentang Kami', href: '/about' },
		{ name: 'Aturan Komunitas', href: '/rules' },
		{ name: 'Daftar Member', href: '/register' },
		{ name: 'Home', href: '/' },
	],
	regional: [
		{ name: 'Jabodetabek', href: '/chapters/jabodetabek' },
		// { name: 'Riau', href: '/chapters/riau' },
	],
	social: [
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/nebo_idn/',
			icon: defineComponent({
				render: () =>
					h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
						h('path', {
							'fill-rule': 'evenodd',
							d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
							'clip-rule': 'evenodd',
						}),
					]),
			}),
		},
		{
			name: 'TikTok',
			href: 'https://www.tiktok.com/@nebo_official.022?is_from_webapp=1&sender_device=pc',
			icon: defineComponent({
				render: () =>
					h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
						h('path', {
							d: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.14-5.09V7.5a8.16 8.16 0 0 0 4.65 1.46v-3.32a4.84 4.84 0 0 1-.36.05z',
						}),
					]),
			}),
		},
	],
};
</script>
