<template>
	<!-- Hero Section – Modern Full-Viewport -->
	<div
		class="relative home-banner w-full h-screen min-h-[600px] max-h-[1000px]"
	>
		<div class="w-full h-full" v-if="banners.length > 0">
			<Swiper
				:modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination]"
				:slides-per-view="1"
				:space-between="0"
				:loop="true"
				effect="fade"
				:fade-effect="{ crossFade: true }"
				:speed="1200"
				:autoplay="{
					delay: 5000,
					disableOnInteraction: false,
				}"
				:pagination="{
					clickable: true,
					el: '.hero-pagination',
					bulletClass: 'hero-bullet',
					bulletActiveClass: 'hero-bullet-active',
				}"
				@slideChange="onSlideChange"
				@swiper="onSwiper"
				class="w-full h-full"
			>
				<SwiperSlide
					v-for="(item, index) in banners"
					:key="index"
					class="relative"
				>
					<!-- Background Image with Ken Burns zoom -->
					<div class="absolute inset-0 overflow-hidden">
						<img
							class="hero-slide-img h-full w-full object-cover scale-105"
							:src="item.media_path"
							:alt="item.title || 'NEBO Community'"
						/>
					</div>

					<!-- Gradient Overlay -->
					<div
						class="absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/60 to-transparent"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-brand-ink/30"
					/>
				</SwiperSlide>
			</Swiper>

			<!-- Persistent Content Overlay (outside Swiper for stability) -->
			<div class="absolute inset-0 z-10 pointer-events-none">
				<div
					class="max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-end pb-32 md:pb-40"
				>
					<!-- Tagline -->
					<div class="mb-4">
						<span
							class="inline-block text-brand-accent text-sm md:text-base font-semibold tracking-[0.25em] uppercase"
						>
							Yamaha NMAX NEO TURBO
						</span>
					</div>

					<!-- Main Heading -->
					<h1
						class="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-brand-text leading-[0.9] mb-6"
					>
						NEBO
						<span class="block text-brand-accent">INDONESIA</span>
					</h1>

					<!-- Subtitle -->
					<p
						class="text-lg md:text-xl text-brand-muted/90 max-w-lg leading-relaxed mb-10"
					>
						Komunitas resmi pengguna Yamaha NMAX GEN TIGA <br />
						<span class="text-brand-text font-medium">Ride together</span>, grow
						together!
					</p>
				</div>
			</div>

			<!-- Slide Counter -->
			<div
				class="absolute bottom-10 right-6 lg:right-12 z-10 flex items-center gap-3"
			>
				<span
					class="text-3xl md:text-4xl font-black text-brand-accent tabular-nums"
				>
					{{ String(activeIndex + 1).padStart(2, '0') }}
				</span>
				<span class="text-brand-muted/50 text-lg">/</span>
				<span class="text-sm text-brand-muted/50 tabular-nums">
					{{ String(banners.length).padStart(2, '0') }}
				</span>
			</div>

			<!-- Scroll Indicator -->
			<div
				class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 opacity-60"
			>
				<div
					class="w-px h-10 bg-gradient-to-b from-transparent to-brand-accent animate-pulse"
				></div>
			</div>

			<!-- Decorative Side Line -->
			<div
				class="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3"
			>
				<div class="w-px h-16 bg-brand-accent/40"></div>
				<span
					class="text-[10px] tracking-[0.3em] text-brand-muted/50 uppercase"
					style="writing-mode: vertical-lr"
				>
					@nebo_idn
				</span>
				<div class="w-px h-16 bg-brand-accent/40"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0);
let swiperInstance = null;

const onSwiper = (swiper) => {
	swiperInstance = swiper;
};

const onSlideChange = (swiper) => {
	activeIndex.value = swiper.realIndex;
};

const banners = [
	{ media_path: '/assets/images/sliders/slider_11.jpg' },
	{ media_path: '/assets/images/sliders/slider_3.jpeg' },
	{ media_path: '/assets/images/sliders/slider_1.jpg' },
	{ media_path: '/assets/images/sliders/slider_9.jpg' },
];
</script>
