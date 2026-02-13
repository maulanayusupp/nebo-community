<template>
	<div class="member-card-wrapper group">
		<!-- Circle Photo -->
		<div class="relative mb-6">
			<div
				class="photo-circle w-40 h-40 rounded-full overflow-hidden ring-4 ring-brand-border group-hover:ring-brand-accent transition-[ring-color] duration-300"
			>
				<img
					:src="member.photo"
					:alt="member.name"
					class="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-110"
				/>
			</div>
		</div>

		<!-- Role Tag -->
		<div class="mb-3">
			<span
				class="inline-block text-brand-muted text-xs font-semibold px-4 py-2 rounded-lg border border-brand-border max-w-xs text-center"
			>
				{{ member.role }}
			</span>
		</div>

		<!-- Name -->
		<p class="text-xs font-semibold text-brand-muted text-center">
			{{ member.alias }}
		</p>

		<!-- Name -->
		<h4 class="text-lg font-bold text-brand-text text-center">
			{{ member.name }}
		</h4>

		<!-- NRA Number -->
		<p
			class="text-sm font-semibold text-brand-accent text-center mt-2 bg-brand-accent/10 px-3 py-1 rounded-md"
		>
			NRA: {{ member.nra }}
		</p>

		<!-- Optional Subtitle -->
		<p v-if="member.subtitle" class="text-sm text-brand-muted text-center mt-1">
			{{ member.subtitle }}
		</p>
	</div>
</template>

<script setup>
defineProps({
	member: {
		type: Object,
		required: true,
		validator: (value) => {
			return (
				value.name && value.alias && value.role && value.photo && value.nra
			);
		},
	},
});
</script>

<style scoped>
.member-card-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: transform 0.3s ease;
}

.member-card-wrapper:hover {
	transform: translateY(-8px);
}

.member-card-wrapper:hover h4 {
	color: #ff8a2a;
}

.member-card-wrapper span {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	line-clamp: 2;
	overflow: hidden;
}
</style>
