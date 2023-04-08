<template>
    <section class="bg-login-page min-h-screen flex flex-col items-center justify-center p-5">
        <div class="w-full custom:w-1/2 lg:w-1/3 bg-white rounded-lg p-4 shadow-2xl">
            <h1 class="text-login-page gap-20  mb-4 text-3xl font-normal">Update Teacher</h1>
            <div class="mt-12 md:mt-4">
                <input type="text" placeholder="Teacher Name" class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-3 pb-3">
            </div>
            <div class="mt-10  md:mt-8">
                <input type="email" placeholder="Teacher Email" class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-3 pb-3">
            </div>
            <div class="mt-10  md:mt-8">
                <input type="text" placeholder="Teacher Phone" class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-3 pb-3">
            </div>
            <div class="mt-10  md:mt-8">
                <select class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-3 pb-3">
                    <option selected hidden class=" text-white">Teacher Class</option>
                    <option>Margarette Hamilton</option>
                    <option>Alan Turing</option>
                </select>
            </div>
            <div class="mt-10  md:mt-8">
                <button type="button" class="w-100 bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white shadow-md pt-3 pb-3 rounded-full">Update</button>
            </div>
        </div>
    </section>
</template>