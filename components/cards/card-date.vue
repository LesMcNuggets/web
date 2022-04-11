<template>
  <div
    class="px-3 h-6 rounded-full text-xs font-semibold flex items-center"
    :class="`bg-red-100 text-red-700`"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-alarm"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="12" cy="13" r="7"></circle>
      <polyline points="12 10 12 13 14 13"></polyline>
      <line x1="7" y1="4" x2="4.25" y2="6"></line>
      <line x1="17" y1="4" x2="19.75" y2="6"></line>
    </svg>
    <span>
      <slot></slot>
    </span>
  </div>
</template>
