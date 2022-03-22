<template>
    <div class="main w-max m-auto mt-10">
        <div class="register">
            <img src="~/static/logo.png" alt="LesMcNuggets">
            <div class="display_name flex border rounded text-gray-500 mb-4">
                <input class="outline-none px-4 h-full py-2 text-lg" type="email" placeholder="email" />
            </div>
            <div class="username flex border rounded text-gray-500 mb-4">
                <input class="outline-none px-4 h-full py-2 text-lg" type="text" placeholder="username" />
            </div>
            <div class="password flex border rounded text-gray-500 mb-4">
                <input class="outline-none px-4 h-full py-2 text-lg" type="password" placeholder="password" />
            </div>
            <div class="password flex border rounded text-gray-500 mb-4">
                <input class="outline-none px-4 h-full py-2 text-lg" type="password" placeholder="confirm password" />
            </div>
            <div class="gender flex border rounded text-gray-500 mb-4">
                <div class="title m-2 ml-4">Rôle : </div>
                <label class="flex items-center cursor-pointer m-2">
                    <input class="scale-125 mr-2 cursor-pointer" type="radio" name="gender" value="m" checked>
                    <div class="title -mt-1">Chef de projet</div>
                </label>
                <label class="flex items-center cursor-pointer m-2">
                    <input class="scale-125 mr-2 cursor-pointer" type="radio" name="gender" value="f">
                    <div class="title -mt-1">Membre</div>
                </label>
            </div>
            <div class="submit border rounded mb-4 text-white cursor-pointer" style="background-color: #683FB5;">
                <div class="wrapper flex w-max mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                    <input class="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="button" value="Register" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return { test: '' }
  }
}
</script>
