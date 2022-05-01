<template>
  <div class="bg-indigo-100">
    <div class="flex flex-col pt-8">
      <div class="-my-2 py-2 overflow-x-auto sm:px-6 lg:px-8 min-w-full">
        <div class="flex">
          <div
            class="align-middle inline-block w-3/5 shadow overflow-hidden sm:rounded-lg border-b border-gray-200 m-2 bg-white"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50"
                  ></th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          John Doe
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      Software Engineer
                    </div>
                    <div class="text-sm leading-5 text-gray-500">Web dev</div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >Active</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    Owner
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          John Doe
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      Software Engineer
                    </div>
                    <div class="text-sm leading-5 text-gray-500">Web dev</div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >Active</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    Owner
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          John Doe
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      Software Engineer
                    </div>
                    <div class="text-sm leading-5 text-gray-500">Web dev</div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >Active</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    Owner
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          John Doe
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      Software Engineer
                    </div>
                    <div class="text-sm leading-5 text-gray-500">Web dev</div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >Active</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    Owner
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          John Doe
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      Software Engineer
                    </div>
                    <div class="text-sm leading-5 text-gray-500">Web dev</div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >Active</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    Owner
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          John Doe
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      Software Engineer
                    </div>
                    <div class="text-sm leading-5 text-gray-500">Web dev</div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >Active</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    Owner
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          John Doe
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      Software Engineer
                    </div>
                    <div class="text-sm leading-5 text-gray-500">Web dev</div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >Active</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    Owner
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          John Doe
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      Software Engineer
                    </div>
                    <div class="text-sm leading-5 text-gray-500">Web dev</div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >Active</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    Owner
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="align-middle inline-block w-2/5 shadow overflow-hidden sm:rounded-lg border-b border-gray-200 m-2 container bg-white"
          >
            <div
              class="w-full bg-white h-auto tracking-wide rounded-lg relative"
            >
              <div
                class="small-banner w-1 h-16 bg-blue-600 absolute rounded-tl-md rounded-bl-md"
              ></div>
              <h5 class="text-2xl font-semibold pl-6 pt-4 pr-6 pb-2">
                Mon super projet
              </h5>
              <div class="m-auto w-1/2 border border-black-600 my-5"></div>
              <p class="text-md font-regular p-6 pt-2 text-gray-500">
                Et prima post Osdroenam quam, ut dictum est, ab hac descriptione
                discrevimus, Commagena, nunc Euphratensis, clementer adsurgit,
                Hierapoli, vetere Nino et Samosata civitatibus amplis
                inlustris.<br />
                Qui cum venisset ob haec festinatis itineribus Antiochiam,
                praestrictis palatii ianuis, contempto Caesare, quem videri
                decuerat, ad praetorium cum pompa sollemni perrexit morbosque
                diu causatus nec regiam introiit nec processit in publicum, sed
                abditus multa in eius moliebatur exitium addens quaedam
                relationibus supervacua, quas subinde dimittebat ad
                principem.<br />
                Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut
                nihil posset accedere, moriendi autem sensum celeritas abstulit;
                quo de genere mortis difficile dictu est; quid homines
                suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni
                ex multis diebus, quos in vita celeberrimos laetissimosque
                viderit, illum diem clarissimum fuisse, cum senatu dimisso domum
                reductus ad vesperum est a patribus conscriptis, populo Romano,
                sociis et Latinis, pridie quam excessit e vita, ut ex tam alto
                dignitatis gradu ad superos videatur deos potius quam ad inferos
                pervenisse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Task Summaries -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white"
    >
      <div class="md:col-span-2 xl:col-span-3">
        <h3 class="text-lg font-semibold">Résumé des tâches en cours</h3>
      </div>
      <div class="md:col-span-2 xl:col-span-1">
        <div
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4 shadow"
        >
          <div class="flex justify-between py-1 text-black dark:text-white">
            <h3 class="text-sm font-semibold">A faire</h3>
            <svg
              class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"
              />
            </svg>
          </div>
          <div class="text-sm text-black dark:text-gray-50 mt-2">
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Delete all references from the wiki
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Remove analytics code
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Do a mobile first layout
              <div
                class="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start"
              >
                <span class="text-xs flex items-center">
                  <svg
                    class="h-4 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path
                      d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z"
                    />
                  </svg>
                  3/5
                </span>
                <img
                  src="https://i.imgur.com/OZaT7jl.png"
                  class="rounded-full"
                />
              </div>
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Check the meta tags
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Think more tasks for this example
              <div
                class="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start"
              >
                <span class="text-xs flex items-center">
                  <svg
                    class="h-4 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path
                      d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z"
                    />
                  </svg>
                  0/3
                </span>
              </div>
            </div>
            <a href="#">
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Ajouter une carte...
              </p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4 shadow"
        >
          <div class="flex justify-between py-1 text-black dark:text-white">
            <h3 class="text-sm font-semibold">En cours</h3>
            <svg
              class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"
              />
            </svg>
          </div>
          <div class="text-sm text-black dark:text-gray-50 mt-2">
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Delete all references from the wiki
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Remove analytics code
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Do a mobile first layout
              <div
                class="flex justify-between items-start mt-2 ml-2 text-white text-xs"
              >
                <span class="bg-pink-600 rounded p-1 text-xs flex items-center">
                  <svg
                    class="h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z"
                    />
                  </svg>
                  2
                </span>
              </div>
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Check the meta tags
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Think more tasks for this example
              <div
                class="text-gray-500 mt-2 ml-2 flex justify-between items-start"
              >
                <span class="text-xs flex items-center">
                  <svg
                    class="h-4 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path
                      d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z"
                    />
                  </svg>
                  0/3
                </span>
              </div>
            </div>
            <a href="#">
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Ajouter une carte...
              </p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4 shadow"
        >
          <div class="flex justify-between py-1 text-black dark:text-white">
            <h3 class="text-sm font-semibold">A tester</h3>
            <svg
              class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"
              />
            </svg>
          </div>
          <div class="text-sm text-black dark:text-gray-50 mt-2">
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Delete all references from the wiki
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Remove analytics code
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Do a mobile first layout
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Check the meta tags
            </div>
            <div
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded mt-1 bg-white shadow rounded px-3 pt-3 pb-3 border border-white cursor-pointer"
            >
              Think more tasks for this example
              <div
                class="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start"
              >
                <span class="text-xs flex items-center">
                  <svg
                    class="h-4 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path
                      d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z"
                    />
                  </svg>
                  0/3
                </span>
              </div>
            </div>
            <a href="#">
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Ajouter une carte...
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- ./Task Summaries -->
  </div>
</template>
