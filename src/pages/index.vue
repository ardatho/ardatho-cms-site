<script setup lang="ts">
const toast = useToast()
</script>

<template>
  <div>
    Home page
    <UButton label="Show toast" @click="toast.add({ title: 'Hello world!', color: 'red' })" />
  </div>
</template>