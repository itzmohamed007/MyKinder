<template>
    <div v-for="children in childrensList" class="text-start w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg ">
        <div class="flex justify-center -mt-16 md:justify-end">
            <img class="object-cover w-20 h-20 border-2 border-violet-600 rounded-full" alt="Testimonial avatar"
                :src="children.image_url">
        </div>
        <h2 class="mt-2 text-xl font-bold text-gray-800 md:mt-0">{{ children.name }}</h2>
        <p class="mt-2 text-md font-normal text-gray-800 md:mt-0">{{ children.age }}</p>
        <p class="mt-2 text-xs text-gray-400 font-thin">{{ children.status }}</p>
    </div>
</template>

<script>
export default {
    props: {
        childrensList: Array
    }
}
</script>