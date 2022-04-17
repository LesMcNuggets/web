<template>
  <NuxtLink :to="{ name: 'kanban', params: { id: project.id } }" class="m-1">
    <div
      class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 shadow-lg relative cursor-pointer opacity-70 hover:scale-105 duration-150"
    >
      <div class="flex-1 flex justify-between items-center">
        <div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
      <span class="absolute bottom-1 right-2 italic text-sm"
        >Dernière mise à jour : {{ project.lastUpdate }}</span
      >
    </div>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
