<template>
  <div id="app">
    <HeaderPage :isProject="true"/>
    <div v-show="showModalTask" aria-labelledby="modal-title" aria-modal="true" class="fixed z-20 inset-0 overflow-y-auto" role="dialog">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div aria-hidden="true" class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span aria-hidden="true" class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-center">
                <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
                  Ajouter une tâche à {{ newTaskColumn.title }}
                </h3>
                <div class="mt-3 w-full text-left">
                  <div class="relative z-0 mb-6 w-full group">
                    <input v-model="newTaskName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" name="floating_firstname" placeholder=" " required type="text"/>
                    <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" for="floating_firstname">Titre
                      de la tâche</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" type="button" @click.stop="addTask">
              Créer la tâche
            </button>
            <button class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" type="button" @click="showModalTask = false">
              Fermer la fenêtre
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div
            v-for="column in project.columns"
            :key="column.title"
            class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
        >
          <p
              class="text-gray-700 font-semibold flex justify-between font-sans tracking-wide text-sm"
              @click.stop="createTask(column)"
          >
            {{ column.title }} <i class="fas fa-add cursor-pointer"></i>
          </p>
          <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
          <draggable
              :animation="200"
              :list="column.tasks"
              ghost-class="ghost-card"
              group="tasks"
              @end="checkMove"
          >
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
            <task-card
                v-for="task in column.tasks"
                :key="task.id"
                :task="task"
                class="mt-3 cursor-move"
            ></task-card>
            <!-- </transition-group> -->
          </draggable>
        </div>
        <div class="h-auto">
          <button v-show="!displayNewColumnNameInput" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" @click="displayNewColumnNameInput = true">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Ajouter une colonne <span><i class="fas fa-add"></i></span>
            </span>
          </button>
          <div v-show="displayNewColumnNameInput" class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="columnName">
              <input id="columnName" v-model="newColumnName"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nom de la colonne" required type="text" @keydown.enter="addColumn">
            </label>
          </div>
        </div>
      </div>
    </div>
    <div v-show="displayChat" class="fixed bottom-14 right-8 h-96 w-72 bg-gray-100 shadow-xl border border-black rounded-md">
      <div class="w-full h-full flex flex-col-reverse">
        <div class="flex self-end items-center basis-1/6 justify-between w-full border-t border-gray-300">
          <input v-model="newMessage.content" class="block w-full py-2 pl-4 bg-gray-100 rounded-full outline-none focus:text-gray-700" name="message"
                 placeholder="Message"
                 required type="text" @keydown.enter="sendMessage"/>
          <button type="submit" @click.stop="sendMessage">
            <svg class="w-5 h-5 mr-2 text-gray-500 origin-center transform rotate-90" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
          </button>
        </div>
        <div class="flex basis-5/6 overflow-y-scroll">
          <ul class="space-y-2 mt-2 w-full">
            <li v-for="(msg, index) in project.messages" :key="msg._id" :class="msg.user._id === $store.state.user.id ? 'justify-end' : 'justify-start'" class="flex mx-2 w-full">
              <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                <span>
                  <small v-show="index !== 0 && project.messages.length > 1 ? msg.user._id !== project.messages[index-1].user._id : true" class="text-gray-500">
                    {{ msg.user.firstname }} {{ msg.user.lastname }}
                    <br>
                  </small>
                </span> <span class="block">{{ msg.content }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button class="fixed bottom-7 right-7" @click.stop="displayChat = !displayChat">
      <i class="fas fa-message"></i>
    </button>
  </div>
</template>

<script>
import HeaderPage from "~/components/mn-header";
import draggable from "vuedraggable";
import TaskCard from "~/components/task-card";
import axios from "axios";
import socket from "~/utils/socket";

export default {
  name: "App",
  components: {
    HeaderPage,
    TaskCard,
    draggable,
  },
  data() {
    return {
      project: {
        messages: [],
      },
      displayNewColumnNameInput: false,
      newColumnName: '',
      newTaskName: '',
      newTaskColumn: {title: ""},
      showModalTask: false,
      hasLoadedOnce: false,
      displayChat: false,
      newMessage: {
        content: '',
        user: ""
      }
    };
  },
  mounted() {
    let scope = this;
    scope.checkToken(this.$store.state.user.accessToken, this.$store.state.user.id)

    scope.newMessage.user = this.$store.state.user.id
    socket.emit("retrieveProject", this.$route.params.id);
    socket.on("projectFromId", function (project) {
      scope.project = project;
      if (!scope.hasLoadedOnce) {
        socket.emit('joinRoom', project._id)
        scope.hasLoadedOnce = true
      }
    });
  },
  watch: {
    project() {
      console.log("project", this.project);
    },
  },
  methods: {
    checkToken: function (token, id) {
      if (typeof token === 'undefined')
        this.$router.replace('/project-list')

      axios.get('http://192.168.1.187:3001/api/check_token_validity', {
        headers: {'x-access-token': token}
      })
          .then(() => {
            socket.emit("retrieveProjects", id);
          })
          .catch(() => {
                this.$store.commit('saveUser', {})
                this.$router.replace('/project-list')
              }
          )
    },
    checkMove: function () {
      const tmp = JSON.parse(JSON.stringify(this.project))
      console.log("modify", tmp);
      socket.emit('modifyWholeProject', tmp)
    },
    addColumn: function () {
      if (this.newColumnName === '') return;
      socket.emit('addColumnToProject', this.project._id, this.newColumnName)
      this.displayNewColumnNameInput = false
      this.newColumnName = ""
    },
    createTask: function (column) {
      this.showModalTask = true
      this.newTaskColumn = JSON.parse(JSON.stringify(column))
    },
    addTask: function () {
      if (this.newTaskName === '') return;
      socket.emit('addTaskToColumn', this.project._id, this.newTaskColumn._id, this.newTaskName)
      this.newTaskName = ""
    },
    sendMessage: function () {
      if (this.newMessage.content === '') return;
      socket.emit('sendMessage', this.project._id, this.newMessage)
      this.newMessage.content = ''
    }
  },
};
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}

/* Unfortunately @apply cannot be setup in codesandbox,
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>
