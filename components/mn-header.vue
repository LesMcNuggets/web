<template>
  <div class="sticky top-0 z-10 shadow-lg">
    <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div
          class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800"
      >
        <div
            class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div class="flex flex-row items-center justify-between p-4">
            <NuxtLink
                class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                to="/"
            >Easy Planner
            </NuxtLink
            >
            <button
                class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                    clip-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    fill-rule="evenodd"
                ></path>
                <path
                    clip-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav
              class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
          >
            <NuxtLink
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                to="/project-list"
            >Liste des projets
            </NuxtLink
            >
            <button v-show="isProject" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" @click="displayUsers">
              Liste des utilisateurs
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {todo: ""};
  },
  props: {
    isProject: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    displayUsers: function () {
      console.log(this.$parent.project.usersId)
    }
  }
};
</script>
