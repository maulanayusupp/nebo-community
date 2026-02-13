<template>
	<div>
		<main>
			<!-- Hero section -->
			<hero-section />

			<!-- Intro -->
			<div class="relative isolate overflow-hidden">
				<!-- Background gradient -->
				<div
					class="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink via-brand-slate/50 to-brand-ink"
				/>

				<div class="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
					<!-- Section Header -->
					<div class="text-center mb-16">
						<span
							class="inline-flex items-center rounded-full bg-brand-accent/10 px-4 py-1.5 text-sm font-semibold text-brand-accent ring-1 ring-inset ring-brand-accent/20 mb-4"
						>
							KOMUNITAS YAMAHA NMAX NEO TURBO
						</span>
						<h2
							class="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl lg:text-6xl"
						>
							Selamat Datang di
							<span class="text-brand-accent">NEBO</span>
						</h2>
						<p
							class="mt-6 text-lg leading-8 text-brand-muted max-w-3xl mx-auto"
						>
							NEBO Indonesia tidak hanya berbagi tentang tips modifikasi dan
							peningkatan performa, tetapi juga aktif mengadakan kegiatan
							touring, kopdar, dan berbagai event seru lainnya.
						</p>
					</div>

					<!-- Main Content Grid -->
					<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<!-- Left: Image Gallery -->
						<div class="relative">
							<!-- Main Image -->
							<div
								class="group relative overflow-hidden rounded-2xl aspect-[4/3]"
							>
								<img
									src="/assets/images/hero/hero_1.jpeg"
									alt="NEBO Community"
									class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent"
								/>
								<div
									class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"
								/>
							</div>

							<!-- Floating smaller images -->
							<div
								class="absolute -bottom-6 -right-6 w-32 sm:w-40 group overflow-hidden rounded-xl shadow-2xl ring-4 ring-brand-ink"
							>
								<img
									src="/assets/images/hero/hero_2.jpeg"
									alt="NEBO Event"
									class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
							<div
								class="absolute -top-6 -left-6 w-28 sm:w-36 group overflow-hidden rounded-xl shadow-2xl ring-4 ring-brand-ink hidden sm:block"
							>
								<img
									src="/assets/images/hero/hero_3.jpeg"
									alt="NEBO Touring"
									class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
						</div>

						<!-- Right: Content -->
						<div class="lg:pl-8">
							<div
								class="flex items-center gap-3 mb-6 text-brand-accent font-semibold"
							>
								<div class="h-px w-12 bg-brand-accent"></div>
								<span class="text-sm uppercase tracking-wider"
									>Bergabung Bersama Kami</span
								>
							</div>

							<h3
								class="text-2xl sm:text-3xl font-bold text-brand-text mb-6 leading-tight"
							>
								Bersama NEBO, rasakan sensasi berkendara yang maksimal
							</h3>

							<p class="text-brand-muted leading-relaxed mb-8">
								Setiap anggota bisa merasakan sensasi berkendara yang maksimal,
								sembari memperkuat tali persaudaraan sesama rider Nmax Generasi
								Tiga. Komunitas yang solid, kegiatan yang seru, dan pengalaman
								tak terlupakan menanti Anda.
							</p>

							<!-- Features -->
							<div class="grid sm:grid-cols-2 gap-4 mb-8">
								<div
									class="flex items-center gap-3 p-3 rounded-lg bg-brand-surface/50 border border-brand-border/50"
								>
									<div
										class="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center"
									>
										<svg
											class="w-5 h-5 text-brand-accent"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										</svg>
									</div>
									<span class="text-sm font-medium text-brand-text"
										>Komunitas Solid</span
									>
								</div>
								<div
									class="flex items-center gap-3 p-3 rounded-lg bg-brand-surface/50 border border-brand-border/50"
								>
									<div
										class="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center"
									>
										<svg
											class="w-5 h-5 text-brand-accent"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
											/>
										</svg>
									</div>
									<span class="text-sm font-medium text-brand-text"
										>Touring Seru</span
									>
								</div>
								<div
									class="flex items-center gap-3 p-3 rounded-lg bg-brand-surface/50 border border-brand-border/50"
								>
									<div
										class="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center"
									>
										<svg
											class="w-5 h-5 text-brand-accent"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<span class="text-sm font-medium text-brand-text"
										>Tips Modifikasi</span
									>
								</div>
								<div
									class="flex items-center gap-3 p-3 rounded-lg bg-brand-surface/50 border border-brand-border/50"
								>
									<div
										class="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center"
									>
										<svg
											class="w-5 h-5 text-brand-accent"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<span class="text-sm font-medium text-brand-text"
										>Event Rutin</span
									>
								</div>
							</div>

							<!-- CTA Box 1 -->
							<div
								class="bg-brand-surface/80 backdrop-blur rounded-xl p-6 border border-brand-border text-center lg:text-left"
							>
								<p class="font-bold text-brand-text mb-2">
									Yuk, Gabung Gratis ke NEBO!
								</p>
								<p class="text-xs text-brand-muted mb-4">
									*Sertakan foto selfie bersama motormu untuk verifikasi
									keanggotaan
								</p>
								<div
									class="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"
								>
									<a
										:href="whatsappLinks.recruitment1"
										target="_blank"
										class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-strong hover:shadow-brand-accent/40 transition-all duration-300"
									>
										<svg
											class="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
											/>
										</svg>
										Rekrutmen 1
									</a>
									<a
										:href="whatsappLinks.recruitment3"
										target="_blank"
										class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-strong hover:shadow-brand-accent/40 transition-all duration-300"
									>
										<svg
											class="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
											/>
										</svg>
										Rekrutmen 2
									</a>
								</div>
							</div>
						</div>
					</div>

					<!-- Bottom Image Strip -->
					<div class="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
						<div class="group relative overflow-hidden rounded-xl aspect-video">
							<img
								src="/assets/images/hero/hero_4.jpeg"
								alt="NEBO Riders"
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent"
							/>
						</div>
						<div class="group relative overflow-hidden rounded-xl aspect-video">
							<img
								src="/assets/images/hero/hero_5.jpeg"
								alt="NEBO Meetup"
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent"
							/>
						</div>
						<div
							class="group relative overflow-hidden rounded-xl aspect-video hidden sm:block"
						>
							<img
								src="/assets/images/hero/hero_2.jpeg"
								alt="NEBO Event"
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent"
							/>
						</div>
						<div
							class="group relative overflow-hidden rounded-xl aspect-video hidden sm:block"
						>
							<img
								src="/assets/images/hero/hero_3.jpeg"
								alt="NEBO Touring"
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- Vision -->
			<div class="relative py-24 sm:py-32">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<!-- Section Header -->
					<div class="text-center mb-16">
						<span
							class="inline-flex items-center rounded-full bg-brand-accent/10 px-4 py-1.5 text-sm font-semibold text-brand-accent ring-1 ring-inset ring-brand-accent/20 mb-4"
						>
							Kenapa NEBO?
						</span>
						<h2
							class="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl lg:text-5xl"
						>
							Mengapa Harus Bergabung?
						</h2>
						<p class="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
							Bergabung dengan NEBO bukan sekadar menjadi bagian dari komunitas,
							tetapi juga membuka pintu menuju pengalaman berkendara yang lebih
							seru.
						</p>
					</div>

					<!-- Features Grid -->
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						<div
							v-for="(mission, index) in missions"
							:key="mission.name"
							class="group relative bg-brand-surface/50 backdrop-blur rounded-2xl p-6 border border-brand-border/50 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1"
						>
							<div
								class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors duration-300"
							>
								<component
									:is="mission.icon"
									class="w-6 h-6 text-brand-accent"
									aria-hidden="true"
								/>
							</div>
							<h3
								class="text-lg font-semibold text-brand-text mb-2 group-hover:text-brand-accent transition-colors duration-300"
							>
								{{ mission.name }}
							</h3>
							<p class="text-sm text-brand-muted leading-relaxed">
								{{ mission.description }}
							</p>
							<div
								class="absolute top-4 right-4 text-5xl font-bold text-brand-border/30 group-hover:text-brand-accent/20 transition-colors duration-300"
							>
								{{ String(index + 1).padStart(2, '0') }}
							</div>
						</div>
					</div>

					<!-- Logo Section -->
					<div class="mt-16 flex justify-center">
						<div
							class="group relative overflow-hidden rounded-2xl max-w-sm w-full"
						>
							<img
								src="/assets/images/logos/NEBO.PNG"
								alt="NEBO Logo"
								class="w-full object-contain transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- CTA -->
			<div class="relative py-24 sm:py-32 overflow-hidden">
				<!-- Background -->
				<div
					class="absolute inset-0 -z-10 bg-gradient-to-br from-brand-accent/5 via-brand-ink to-brand-slate/50"
				/>
				<div
					class="absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-brand-accent/10 to-transparent"
				/>

				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<!-- Left Content -->
						<div class="text-center lg:text-left">
							<span
								class="inline-flex items-center rounded-full bg-brand-accent/10 px-4 py-1.5 text-sm font-semibold text-brand-accent ring-1 ring-inset ring-brand-accent/20 mb-6"
							>
								Gabung Sekarang
							</span>
							<h2
								class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text leading-tight mb-6"
							>
								Mulai Perjalananmu
								<span class="text-brand-accent">Bersama Kami</span>
							</h2>
							<p
								class="text-lg text-brand-muted mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"
							>
								Bergabunglah sekarang dengan komunitas NMAX! Temukan teman,
								pengalaman, dan petualangan seru bersama kami. Jadilah bagian
								dari keluarga besar NEBO Indonesia.
							</p>

							<!-- Stats -->
							<div
								class="grid grid-cols-3 gap-4 sm:gap-6 mb-10 py-6 border-y border-brand-border/50"
							>
								<div class="text-center">
									<div class="text-2xl sm:text-3xl font-bold text-brand-accent">
										500+
									</div>
									<div class="text-xs sm:text-sm text-brand-muted mt-1">
										Members
									</div>
								</div>
								<div class="text-center">
									<div class="text-2xl sm:text-3xl font-bold text-brand-accent">
										50+
									</div>
									<div class="text-xs sm:text-sm text-brand-muted mt-1">
										Events
									</div>
								</div>
								<div class="text-center">
									<div class="text-2xl sm:text-3xl font-bold text-brand-accent">
										4+
									</div>
									<div class="text-xs sm:text-sm text-brand-muted mt-1">
										Chapters
									</div>
								</div>
							</div>

							<!-- CTA Box 2 -->
							<div
								class="bg-brand-surface rounded-2xl p-6 border border-brand-border text-center lg:text-left"
							>
								<p class="font-bold text-brand-text mb-1">
									Yuk, Gabung Gratis ke NEBO!
								</p>
								<p class="text-sm text-brand-muted mb-5">
									*Sertakan foto selfie bersama motormu untuk verifikasi
									keanggotaan
								</p>
								<div
									class="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"
								>
									<a
										:href="whatsappLinks.recruitment1"
										target="_blank"
										class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-strong hover:shadow-brand-accent/40 hover:-translate-y-0.5 transition-all duration-300"
									>
										<svg
											class="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
											/>
										</svg>
										Rekrutmen 1
									</a>
									<a
										:href="whatsappLinks.recruitment2"
										target="_blank"
										class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-strong hover:shadow-brand-accent/40 hover:-translate-y-0.5 transition-all duration-300"
									>
										<svg
											class="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
											/>
										</svg>
										Rekrutmen 2
									</a>
								</div>
							</div>
						</div>

						<!-- Right: Image Collage -->
						<div class="relative order-first lg:order-last">
							<!-- Mobile: Single Image -->
							<div class="block lg:hidden">
								<div
									class="group relative overflow-hidden rounded-2xl aspect-video mx-auto max-w-md"
								>
									<img
										src="/assets/images/hero/hero_1.jpeg"
										alt="NEBO Community"
										class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent"
									/>
								</div>
							</div>

							<!-- Desktop: Grid Collage -->
							<div class="hidden lg:grid grid-cols-2 gap-4">
								<div
									class="group relative overflow-hidden rounded-2xl aspect-[3/4]"
								>
									<img
										src="/assets/images/hero/hero_1.jpeg"
										alt="NEBO Community"
										class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent"
									/>
								</div>
								<div class="space-y-4 pt-12">
									<div
										class="group relative overflow-hidden rounded-2xl aspect-square"
									>
										<img
											src="/assets/images/hero/hero_2.jpeg"
											alt="NEBO Event"
											class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div
											class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent"
										/>
									</div>
									<div
										class="group relative overflow-hidden rounded-2xl aspect-video"
									>
										<img
											src="/assets/images/hero/hero_3.jpeg"
											alt="NEBO Touring"
											class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div
											class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent"
										/>
									</div>
								</div>
							</div>
							<!-- Decorative element -->
							<div
								class="hidden lg:block absolute -bottom-4 -left-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl"
							/>
							<div
								class="hidden lg:block absolute -top-4 -right-4 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid';
import HeroSection from '~/components/home/HeroSection.vue';
import {
	WHATSAPP_PHONES,
	createWhatsAppLink,
	createWhatsAppMessage,
} from '~/utils/whatsapp';

const registerMessage = createWhatsAppMessage();

const whatsappLinks = {
	recruitment1: createWhatsAppLink(
		WHATSAPP_PHONES.RECRUITMENT_1,
		registerMessage
	),
	recruitment2: createWhatsAppLink(
		WHATSAPP_PHONES.RECRUITMENT_3,
		registerMessage
	),
	recruitment3: createWhatsAppLink(
		WHATSAPP_PHONES.RECRUITMENT_3,
		registerMessage
	),
	recruitment6: createWhatsAppLink(
		WHATSAPP_PHONES.RECRUITMENT_6,
		registerMessage
	),
};

const missions = [
	{
		name: 'Koneksi dengan Sesama Penggemar',
		description:
			'Dapatkan kesempatan untuk bertemu dan berinteraksi dengan para pemilik dan penggemar Yamaha NMAX lainnya. Berbagi pengalaman dan tips modifikasi akan memperkaya pengetahuan Anda tentang motor kesayangan.',
		icon: StarIcon,
	},
	{
		name: 'Dukungan dan Saran Modifikasi',
		description:
			'Anggota NEBO saling membantu dalam hal modifikasi motor. Anda akan mendapatkan saran berharga tentang peningkatan performa dan gaya yang dapat membuat NMAX Anda semakin keren dan bertenaga.',
		icon: StarIcon,
	},
	{
		name: 'Kegiatan Seru dan Touring',
		description:
			'Ikuti berbagai kegiatan menarik, mulai dari kopdar hingga touring bersama. Rasakan kebersamaan dan keseruan menjelajahi jalanan dengan teman-teman satu hobi.',
		icon: StarIcon,
	},
	{
		name: 'Akses ke Informasi Terbaru',
		description:
			'Dapatkan informasi terkini tentang produk, event, dan tren modifikasi Yamaha NMAX. Jangan lewatkan kesempatan untuk selalu update dan mendapatkan penawaran spesial dari mitra komunitas.',
		icon: StarIcon,
	},
	{
		name: 'Komunitas yang Ramah dan Inklusif',
		description:
			'NEBO adalah tempat di mana semua penggemar NMAX disambut dengan hangat, tanpa memandang pengalaman berkendara atau tingkat modifikasi. Bergabunglah dengan komunitas yang mendukung dan menginspirasi satu sama lain.',
		icon: StarIcon,
	},
];
</script>
