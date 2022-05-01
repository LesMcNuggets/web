<template>
  <div>
    <main>
      <div
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          style="min-height: 75vh;"
      >
        <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style='background: linear-gradient(#683FB5, #7168C5, #9FB9E3, #C1E3EE);backdrop-filter: blur(10px);'
        >
          <span
              id="blackOverlay"
              class="w-full h-full absolute"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  EasyPlanner
                </h1>
                <p class="mt-4 text-lg text-white">
                  Une plateforme dédiée à la gestion de projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="pb-20 bg-white -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <FeatureCard color-class="bg-red-400" description="Gérez vos projets simplement et élégamment" icon="fas fa-clipboard-list" title="Gestion de projet"/>
            <FeatureCard color-class="bg-blue-400" description="Communiquez en tout simplicité" icon="fas fa-comments" title="Messagerie Instantanée"/>
            <FeatureCard color-class="bg-green-400" description="Visualisez votre projet en mode calendrier" icon="fas fa-calendar-alt" title="Plannification"/>
          </div>
          <div class="flex flex-wrap items-center mt-8">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-600"
              >
                <i class="fas fa-smile-beam text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Notre objectif
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Travaillant nous-même dans le monde du développement informatique, nous sommes confrontés aux problèmes
                d'organisation depuis toujours. De part ces expériences est né notre envie de développer un outil afin
                d'aider les équipes de développeur à s'organiser au mieux.
              </p>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                    alt="..."
                    class="w-full align-middle rounded-t-lg"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                      class="absolute left-0 w-full block"
                      preserveAspectRatio="none"
                      style="height: 95px; top: -94px;"
                      viewBox="0 0 583 95"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                        class="text-pink-600 fill-current"
                        points="-30,95 583,95 583,65"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    L'équipe
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Une petite photo de l'équipe se remémorant une organisation difficile
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style="height: 80px;"
        >
          <svg
              class="absolute bottom-0 overflow-hidden"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
          >
            <polygon
                class="text-white fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                    class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">Une entreprise bientôt dans les étoiles</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  Maintenant que notre superbe application est lancée et a du succès, les investisseurs nous donnent
                  plein d'argent pour développer toutes les fonctionnalités que vous nous suppliez de faire. Elles
                  arrivent toutes. Même les moins utiles.
                </p>
                <p>Les prochaines : </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><i class="fas fa-bell"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Envoyer des pokes
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><i class="fas fa-sad-cry"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Déconnecter les collègues pour passer le temps
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><i class="fas fa-user-secret"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600 line-through">Faire un coup d'état et devenir admin</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Les Dalton</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                On se qualifie comme ça vu qu'on partage pas mal de similtude avec notre équivalent Dalton.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                    alt="..."
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    height="100"
                    src="../static/averell.gif"
                    style="max-width: 120px;"
                    width="100"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Charles</h5>
                  <p class="mt-1 text-sm text-gray-700 uppercase font-semibold">
                    Averell
                  </p>
                  <p class="mt-1 text-sm text-gray-700 uppercase font-semibold">
                    Dev full-stack
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                    alt="..."
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    height="100"
                    src="../static/jack.jpg"
                    style="max-width: 120px;"
                    width="100"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Angélique</h5>
                  <p class="mt-1 text-sm text-gray-700 uppercase font-semibold">
                    Jack
                  </p>
                  <p class="mt-1 text-sm text-gray-700 uppercase font-semibold">
                    UX/UI Designer
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                    alt="..."
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    height="100"
                    src="../static/joe.jpg"
                    style="max-width: 120px;"
                    width="100"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Léa</h5>
                  <p class="mt-1 text-sm text-gray-700 uppercase font-semibold">
                    Joe
                  </p>
                  <p class="mt-1 text-sm text-gray-700 uppercase font-semibold">
                    Oui
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-gray-900">
        <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style="height: 80px;"
        >
          <svg
              class="absolute bottom-0 overflow-hidden"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
          >
            <polygon
                class="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">On cherche William</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Si tu es à fond dans le marketing, on cherche notre quatrième frère pour compléter la bande. Tant que tu
                es plus vif d'esprit que ton homologue Dalton, ça devrait le faire !
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                  class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Salaire compétitif
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Grâce à tout l'argent des investisseurs
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                  class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Évolution de carrière
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Notre contexte te permettra d'évoluer grandement !
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                  class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">Fun</h5>
              <p class="mt-2 mb-4 text-gray-500">
                Travailler sérieusement, mais s'amuser aussi !
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg"
              >
                <button
                    class="bg-white text-black active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    style="transition: all 0.15s ease 0s;opacity: 1;"
                    type="button"
                >
                  Je veux m'habiller en noir et jaune
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

import '@fortawesome/fontawesome-free'
import FeatureCard from "~/components/landing-page/feature-card";

export default {
  name: 'LandingPage',
  components: {
    FeatureCard
  }
}
</script>
