<template>
    <section class="bg-login-page min-h-screen flex flex-col items-center justify-center p-5">
        <div class="w-full custom:w-1/2 lg:w-1/3 bg-white rounded-lg p-4 shadow-2xl">
            <h1 class="text-login-page gap-20  mb-4 text-3xl font-normal">Add Student</h1>
            <div class="mt-12 md:mt-4">
                <input type="text" placeholder="Student Name"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
            </div>
            <div class="mt-10 md:mt-8">
                <label class="block text-gray-400 text-start font-thin mb-1 ml-4">Student Image</label>
                <input type="file" class="block w-100 px-3 pt-2 pb-2 text-gray-400 font-thin bg-gradient-to-b from-gray-200 to-white rounded-full 
                            border-none file:bg-gradient-to-r file:from-fuchsia-400 file:to-purple-500 file:text-white file:text-sm file:px-4 file:py-2 file:border-none file:rounded-full
                            placeholder-gray-400/70 dark:placeholder-gray-500 
                            focus:border-blue-400 focus:outline-none" />
            </div>
            <div class="mt-10  md:mt-8">
                <input type="text" placeholder="Student Age"
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
            </div>
            <div class="mt-10  md:mt-8">
                <select
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                    <option selected hidden class=" text-white">Student Class</option>
                    <option>Abdeladim Abid</option>
                    <option>Null</option>
                </select>
            </div>
            <div class="mt-10  md:mt-8">
                <select
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                    <option selected hidden class=" text-white">Student Teacher</option>
                    <option>Abdeladim Abid</option>
                    <option>Null</option>
                </select>
            </div>
            <div class="mt-10  md:mt-8">
                <select
                    class="w-100 placeholder:font-thin focus:outline-none bg-gradient-to-b from-gray-200 to-white rounded-full px-4 pt-2 pb-2">
                    <option selected hidden class=" text-white">Student Sibling</option>
                    <option>Abdeladim Abid</option>
                    <option>Null</option>
                </select>
            </div>
            <div class="mt-10  md:mt-8">
                <button type="button"
                    class="w-100 bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white shadow-md pt-2 pb-2 rounded-full">Create</button>
            </div>
        </div>
    </section>
</template>