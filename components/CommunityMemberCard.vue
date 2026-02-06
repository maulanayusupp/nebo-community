<template>
	<div class="member-card-wrapper">
		<!-- Circle Photo -->
		<div class="relative mb-6">
			<div
				class="w-40 h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-100 hover:ring-indigo-300 transition-all duration-300"
			>
				<img
					:src="member.photo"
					:alt="member.name"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>

		<!-- Role Tag -->
		<div class="mb-3">
			<span
				class="inline-block text-gray-700 text-xs font-semibold px-4 py-2 rounded-lg border border-gray-200 max-w-xs text-center"
			>
				{{ member.role }}
			</span>
		</div>

		<!-- Name -->
		<p class="text-xs font-semibold text-gray-500 text-center">
			{{ member.alias }}
		</p>

		<!-- Name -->
		<h4 class="text-lg font-bold text-gray-900 text-center">
			{{ member.name }}
		</h4>

		<!-- NRA Number -->
		<p
			class="text-sm font-semibold text-indigo-600 text-center mt-2 bg-indigo-50 px-3 py-1 rounded-md"
		>
			NRA: {{ member.nra }}
		</p>

		<!-- Optional Subtitle -->
		<p v-if="member.subtitle" class="text-sm text-gray-600 text-center mt-1">
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
	transition: all 0.3s;
}

.member-card-wrapper:hover {
	transform: translateY(-8px) scale(1.02);
}

.member-card-wrapper:hover > div:first-child > div {
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.member-card-wrapper:hover h3 {
	color: rgb(79, 70, 229);
}

.member-card-wrapper span {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	line-clamp: 2;
	overflow: hidden;
}
</style>
