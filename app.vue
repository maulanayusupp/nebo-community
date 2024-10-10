<template>
	<!-- Layout -->
	<NuxtLayout :name="layout">
		<!-- Page -->
		<NuxtPage/>
	</NuxtLayout>
</template>

<script setup>
  const config = useRuntimeConfig()
	const layout = "custom";
</script>

<script>

export default {
	components: {
	},
	props: {
	},
	data() {
		return {
		}
	},
	created() {},
	mounted() {
    },
	beforeUnmount() {},
	methods: {},
	computed: {},
	watch: {},
}
</script>
