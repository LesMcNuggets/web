<template>
  <div>
    <HeaderPage />
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
            @click="getProject(project.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderPage from "~/components/mn-header";
import { io } from "socket.io-client";
import ProjectCard from "~/components/project-card";
//import VueSocketIO from "vue-socket.io";

const socket = io("http://192.168.1.187:3001");
//Vue.use(VueSocketIO, SocketInstance);

export default {
  name: "ProjectList",
  components: {
    HeaderPage,
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    let scope = this;

    socket.emit("retrieveProjects", 666);
    socket.on("projectList", function (list) {
      scope.projects = list;
    });
  },
  watch: {
    projects() {
      console.log("list", this.projects);
    },
  },
};
</script>
