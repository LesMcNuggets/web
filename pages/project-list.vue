<template>
  <div>
    <HeaderPage/>

    <div class="absolute right-0 m-4 flex">
      <input
          v-model="newProjectName"
          class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-100 bg-white shadow"
          placeholder="Nom du projet"
          type="text"
          @keyup.enter="createProject"
      />
      <button
          class="px-8 rounded-r-lg bg-gradient-to-r from-purple-300 via-indigo-100 to-blue-200 text-gray-800 font-bold p-4 uppercase border-gray-100 border-t border-b border-r shadow"
          @click.stop="createProject"
      >
        Créer un projet
      </button>
    </div>

    <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
      <div class="relative h-full w-full max-w-lg">
        <div
            class="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        ></div>
        <div
            class="absolute top-0 -right-4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        ></div>
        <div
            class="absolute -bottom-32 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        ></div>
        <div class="m-3 relative space-y-4">
          <ProjectCard
              v-for="project in projects"
              :key="project.id"
              :project="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderPage from "~/components/mn-header";
import ProjectCard from "~/components/project-card";
import axios from "axios";
import socket from "~/utils/socket";

export default {
  name: "ProjectList",
  components: {
    HeaderPage,
    ProjectCard,
  },
  data() {
    return {
      newProjectName: "",
      projects: [],
    };
  },
  mounted() {
    let scope = this;
    if (typeof this.$store.state.user.id === "undefined") {
      const tmpUser = localStorage.getItem("user");
      this.$store.commit("saveUser", JSON.parse(tmpUser));
    }
    scope.checkToken(
        this.$store.state.user.accessToken,
        this.$store.state.user.id
    );

    console.log("this.socket => ", this.$socket);
    socket.on("projectList", function (list) {
      scope.projects = list;
    });
  },
  methods: {
    checkToken: function (token, id) {
      if (typeof token === "undefined") this.$router.replace("/");

      axios
          .get(
              "https://rocky-retreat-07018.herokuapp.com/api/check_token_validity",
              {
                headers: {"x-access-token": token},
              }
          )
          .then(() => {
            socket.emit("retrieveProjects", id);
          })
          .catch(() => {
            this.$store.commit("saveUser", {});
            localStorage.setItem("user", null);
            this.$router.replace("/");
          });
    },
    createProject() {
      let {newProjectName} = this;
      const {id, accessToken} = this.$store.state.user;
      const scope = this;

      axios
          .post(
              "https://rocky-retreat-07018.herokuapp.com/api/project/create",
              {
                title: newProjectName,
              },
              {
                headers: {"x-access-token": accessToken},
              }
          )
          .then(() => {
            scope.newProjectName = "";
            socket.emit("retrieveProjects", id);
          })
          .catch((e) => console.log(e));
    },
  },
  watch: {
    projects() {
      console.log("list", this.projects);
    },
  },
};
</script>
