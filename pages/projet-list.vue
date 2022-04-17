<template>
  <div>
    <HeaderPage />
    <div class="bg-white">
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.title }}
          <button @click="getProject(project.id)">get project</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import HeaderPage from "~/components/mn-header";
import { io } from "socket.io-client";
//import VueSocketIO from "vue-socket.io";

const socket = io("http://192.168.1.187:3000");
//Vue.use(VueSocketIO, SocketInstance);

export default {
  name: "ProjectList",
  components: {
    HeaderPage,
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
    socket.on("projectFromId", function (project) {
      console.log("project", project);
    });
  },
  watch: {
    projects() {
      console.log("list", this.projects);
    },
  },
  methods: {
    getProject: function (id) {
      console.log("ok", id);
      socket.emit("retrieveProject", id);
    },
  },
};
</script>
