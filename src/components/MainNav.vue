<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full">
      <div
          class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8">
        <a
            :href="url"
            class="flex h-full items-center text-xl"
        >
          {{ company }}
        </a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
                v-for="menuItem in menuItems"
                :key="menuItem"
                class="first:ml-0 ml-9 h-full"
            >
              <a
                  href=""
                  class="flex h-full items-center py-2.5"
              >{{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn"/>
          <action-button
              v-else
              text="Sign in"
              type="primary"
              @click="loginUser"/>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue';
import ProfileImage from '@/components/ProfileImage.vue';

export default {
  name: 'MainNav',
  components: {
    ProfileImage,
    ActionButton,
  },
  data() {
    return {
      company: 'vit chaosmos',
      url: 'https://careers.google.com',
      menuItems: [
        'Teams',
        'Location',
        'Life at company',
        'How we hire',
        'Students',
        'Jobs'
      ],
      isLoggedIn: false
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
};
</script>

<style>

</style>
