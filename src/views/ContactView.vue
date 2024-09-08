<template>
  <form @submit.prevent="handleSubmit" class="w-11/12 lg:w-2/5  mx-auto p-8 bg-white shadow-md rounded-lg my-10">
    <!-- Title -->
    <div class="mb-4">
      <label for="title" class="block text-sm font-medium text-blue-900">Title</label>
      <select v-model="formData.title" id="title" class="mt-1 block w-full py-2 px-3 border border-pink-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <option value="">Select...</option>
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        <option value="Ms.">Ms.</option>
      </select>
    </div>

    <!-- Full Name -->
    <div class="mb-4">
      <label for="firstName" class="block text-sm font-medium text-blue-900">First Name</label>
      <input v-model="formData.firstName" type="text" id="firstName" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500 sm:text-sm" required>
    </div>

    <div class="mb-4">
      <label for="lastName" class="block text-sm font-medium text-blue-900">Last Name</label>
      <input v-model="formData.lastName" type="text" id="lastName" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500 sm:text-sm" required>
    </div>

    <!-- Interests -->
    <div class="mb-4">
      <p class="block text-sm font-medium text-blue-900">Tienes interes en: </p>
      <div class="flex items-center mt-2">
        <input v-model="formData.interests.sports" type="checkbox" id="sports" class="h-4 w-4 text-pink-500 border-pink-500 rounded">
        <label for="sports" class="ml-2 block text-sm text-blue-900">Tratamineto facial</label>
      </div>
      <div class="flex items-center mt-2">
        <input v-model="formData.interests.music" type="checkbox" id="music" class="h-4 w-4 text-pink-600 border-pink-500 rounded">
        <label for="music" class="ml-2 block text-sm text-blue-900">Masajes</label>
      </div>
      <div class="flex items-center mt-2">
        <input v-model="formData.interests.travel" type="checkbox" id="travel" class="h-4 w-4 text-pink-600 border-gray-300 rounded">
        <label for="travel" class="ml-2 block text-sm text-blue-900">Enbellecimiento</label>
      </div>
    </div>

    <!-- Message -->
    <div class="mb-4">
      <label for="message" class="block text-sm font-medium text-blue-900">Message</label>
      <textarea v-model="formData.message" id="message" rows="4" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Write your message..."></textarea>
    </div>

    <!-- Submit Button -->
    <div>
      <button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

// Reactive form data
const formData = reactive({
  title: '',
  firstName: '',
  lastName: '',
  interests: {
    sports: false,
    music: false,
    travel: false
  },
  message: ''
})

// Handle form submission
const handleSubmit = () => {
  console.log('Form Data:', formData)
  // Perform further actions, such as sending data to an API
}
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>
