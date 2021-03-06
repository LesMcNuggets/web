<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div>
      <div class="w-full flex justify-between items-center">
        <h4
            class="text-gray-700 font-semibold font-sans tracking-wide text-sm mb-3"
        >
          {{ task.title }}
        </h4>
        <div class="mb-3 flex">
          <button
              class="px-2 rounded-full"
              role="button"
              v-on:click="toggleModal()"
          >
            <fa icon="fas fa-ellipsis-v"/>
          </button>
        </div>
      </div>
      <p class="text-gray-800 dark:text-gray-100 text-sm">
        {{ task.description }}
      </p>
    </div>
    <div class="flex mt-4 justify-between items-center">
      <card-date v-if="task.date" class="flex-none">{{ task.date }}</card-date>
      <card-badge v-for="tag in task.tags" :key="tag.id" :color="tag.color">{{
          tag.content
        }}
      </card-badge>

      <div
          v-for="assigned in task.assigned"
          :key="assigned.url"
          class="w-6 h-6 bg-cover bg-center rounded-md overflow-hidden"
      >
        <img
            :alt="assigned.alt"
            :src="assigned.url"
            class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
        />
      </div>
      <div
          v-if="showModal"
          class="cursor-default overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
      >
        <div class="relative w-full my-6 mx-auto max-w-6xl">
          <!--content-->
          <div
              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <!--header-->
            <div class="p-5 rounded-t grid grid-cols-3 gap-4">
              <div class="col-span-2">
                <span class="text-blue-400"
                ><fa icon="fas fa-check-square"
                /></span> {{ task.id }}
              </div>
              <div class="text-right align-top">
                <button
                    class="px-2 rounded-full"
                    role="button"
                    v-on:click="toggleModal()"
                >
                  <fa icon="fa-solid fa-xmark"/>
                </button>
              </div>
              <div class="col-span-2 flex flex-col">
                <div class="mb-3">
                  <input
                      v-model="modifiedTask.title"
                      class="w-full h-10 px-2 py-1 text-xl font-semibold text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  />
                </div>
                <div>
                  <textarea
                      v-model="modifiedTask.description"
                      class="w-full h-40 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      placeholder="Description de la tache ..."
                  ></textarea>
                </div>
              </div>
              <div class="...">
                <h6 class="font-semibold">Assigné</h6>
                <div v-if="modifiedTask.assigned" class="flex flex-col">
                  <div
                      v-for="assigned in modifiedTask.assigned"
                      :key="assigned.url"
                      class="w-6 h-6 bg-cover bg-center rounded-md overflow-hidden"
                  >
                    <img
                        :alt="assigned.alt"
                        :src="assigned.url"
                        class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                    />
                  </div>
                </div>
                <div v-if="!modifiedTask.assigned" class="flex items-center m-2">
                  <div
                      class="w-10 h-10 bg-cover bg-center bg-gray-300 rounded-full flex justify-center items-center mr-3"
                  >
                    <div>
                      <fa
                          class="text-xl text-center text-white"
                          icon="fa-solid fa-user-large"
                      />
                    </div>
                  </div>

                  <span>Non assigné</span>
                </div>

                <h6 class="font-semibold my-2">Labels</h6>
                <div class="w-20">
                  <card-badge v-for="tag in modifiedTask.tags" :key="tag.id">{{
                      tag.content
                    }}
                  </card-badge>
                  <span v-if="modifiedTask.tags.length === 0">Aucun</span>
                </div>
                <h6 class="font-semibold my-2">Deadline</h6>
                <div class="w-20">
                  <card-date v-if="modifiedTask.date" class="flex-none">{{
                      modifiedTask.date
                    }}
                  </card-date>
                  <span v-if="!modifiedTask.date">Non renseigné</span>
                </div>
              </div>
            </div>
            <!--footer-->
            <div
                class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
            >
              <button
                  class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  @click="toggleModal()"
              >
                Annuler
              </button>
              <button
                  class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  @click="saveChanges"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
          v-if="showModal"
          class="opacity-25 fixed inset-0 z-40 bg-black"
      ></div>
    </div>
  </div>
</template>
<script>
import CardBadge from "./cards/card-badge.vue";
import CardDate from "./cards/card-date.vue";
import socket from "~/utils/socket";

export default {
  data() {
    return {
      showModal: false,
      modifiedTask: {},
    };
  },
  components: {
    CardBadge,
    CardDate,
  },
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.modifiedTask = JSON.parse(JSON.stringify(this.task))
  },
  computed: {
    badgeColor() {
      const mappings = {
        Design: "purple",
        "Feature Request": "teal",
        Backend: "blue",
        QA: "green",
        default: "teal",
      };
      return mappings[this.task.type] || mappings.default;
    },
  },
  name: "large-modal",
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
    saveChanges: function () {
      socket.emit('modifyTask', this.$parent.$parent.project._id, this.modifiedTask)
      this.toggleModal()
    }
  },
};
</script>
