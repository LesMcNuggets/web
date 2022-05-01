<template>
  <div>
    <div
      v-show="showModal"
      aria-labelledby="modal-title"
      aria-modal="true"
      class="fixed z-20 inset-0 overflow-y-auto"
      role="dialog"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          aria-hidden="true"
          class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
        ></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          aria-hidden="true"
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          >&#8203;</span
        >

        <div
          class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-center"
              >
                <h3
                  id="modal-title"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  {{ hasAccount ? "Se connecter" : "Créer mon compte" }}
                </h3>
                <div class="mt-3 w-full text-left">
                  <div
                    v-show="!hasAccount"
                    class="relative z-0 mb-6 w-full group"
                  >
                    <input
                      v-model="loginInformations.firstname"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      name="floating_firstname"
                      placeholder=" "
                      required
                      type="text"
                    />
                    <label
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      for="floating_firstname"
                      >Ton joli prénom</label
                    >
                  </div>
                  <div
                    v-show="!hasAccount"
                    class="relative z-0 mb-6 w-full group"
                  >
                    <input
                      v-model="loginInformations.lastname"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      name="floating_lastname"
                      placeholder=" "
                      required
                      type="text"
                    />
                    <label
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      for="floating_lastname"
                      >Ton p'tit nom</label
                    >
                  </div>
                  <div class="relative z-0 mb-6 w-full group">
                    <input
                      v-model="loginInformations.login"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      name="floating_email"
                      placeholder=" "
                      required
                      type="email"
                    />
                    <label
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      for="floating_email"
                      >Ton adresse mail</label
                    >
                  </div>
                  <div class="relative z-0 mb-6 w-full group">
                    <input
                      v-model="loginInformations.password"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      name="floating_email"
                      placeholder=" "
                      required
                      type="password"
                    />
                    <label
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      for="floating_email"
                      >Ton mot de passe</label
                    >
                  </div>
                </div>
                <button
                  v-show="hasAccount"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  @click="hasAccount = !hasAccount"
                >
                  <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
                  >
                    Je n'ai pas de comptes
                    <span><i class="fas fa-sad-tear"></i></span>
                  </span>
                </button>
                <button
                  v-show="!hasAccount"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  @click="hasAccount = !hasAccount"
                >
                  <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
                  >
                    En fait, si <span><i class="fas fa-meh"></i></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              v-show="hasAccount"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              type="button"
              @click.stop="login"
            >
              Connexion
            </button>
            <button
              v-show="!hasAccount"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              type="button"
              @click.stop="createAccount"
            >
              Je le veux
            </button>
            <button
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              type="button"
              @click="showModal = false"
            >
              Sortez-moi de là !
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky top-0 z-10 shadow-lg">
      <div class="antialiased bg-white bg-opacity-45 dark-mode:bg-gray-900">
        <div
          class="w-full text-gray-700 bg-white bg-opacity-45 dark-mode:text-gray-200 dark-mode:bg-gray-800"
        >
          <div
            class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <div class="flex flex-row items-center justify-between p-4">
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
              class="flex-col flex-grow hidden pb-0 md:pb-0 md:flex md:justify-end md:flex-row"
            >
              <a
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
                @click="showModal = true"
              >
                Connexion/Inscription
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "landing-navbar",
  data() {
    return {
      showModal: false,
      hasAccount: true,
      loginInformations: {
        firstname: "",
        lastname: "",
        login: "",
        password: "",
      },
    };
  },
  mounted() {
    if (this.$store.state.user.id) {
      this.$router.replace("/project-list");
    }
  },
  methods: {
    createAccount: function () {
      const { login, password, firstname, lastname } = this.loginInformations;
      if (
        login === "" ||
        password === "" ||
        firstname === "" ||
        lastname === ""
      ) {
        return;
        //TODO: Gérer l'affichage d'erreur
      }
      axios.post('https://rocky-retreat-07018.herokuapp.com/api/signup', {email: login, password, firstname, lastname})
          .then(user => {
            this.saveUser(user.data)
          })
          .catch(err => console.log(err))
      //TODO: Gérer l'affichage d'erreur
    },
    login: function () {
      const { login, password } = this.loginInformations;
      if (login === "" || password === "") {
        return;
        //TODO: Gérer l'affichage d'erreur
      }
      axios
        .post("https://rocky-retreat-07018.herokuapp.com/api/signin", {
          email: login,
          password,
        })
        .then((user) => {
          this.saveUser(user.data);
        })
        .catch((err) => console.log(err));
      //TODO: Gérer l'affichage d'erreur
    },
    saveUser: function (user) {
      this.$store.commit("saveUser", user);
      localStorage.setItem("user", JSON.stringify(user));
      this.$router.replace("/project-list");
    },
  },
};
</script>
