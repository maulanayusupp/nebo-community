<template>
	<Html>
			<!-- Head -->
			<Head>
					<Title>NEBO: Yamaha NMAX Neo Turbo Community</Title>
					<Meta name="description" :content="`NEBO adalah komunitas pecinta Yamaha NMAX yang menggabungkan semangat berkendara dengan modifikasi unik untuk menciptakan pengalaman berkendara yang lebih dinamis. Dengan fokus pada performa, gaya, dan kebersamaan, NEBO adalah tempat berkumpulnya para penggemar NMAX yang telah memodifikasi motornya menjadi lebih bertenaga dengan konsep Neo Turbo`" />
					<!-- <Link rel="preload" href="/test.txt" as="script" /> -->
					<!-- <Style type="text/css" :children="styleString" /> -->
			</Head>

			<!-- Header -->
			<nav-header />

			<!-- Content -->
			<slot />

			<!-- Footer -->
			<the-footer />
	</Html>
</template>

<script>
definePageMeta({
  layout: "custom",
});

import NavHeader from '@/layouts/partials/NavHeader.vue'
import TheFooter from '@/layouts/partials/TheFooter.vue'

export default {
	components: {
		NavHeader,
		TheFooter,
	},
	setup() {
		return {
		}
	},
}
</script>

