<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
          class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link
            :to="{name: 'Home'}"
            class="flex h-full items-center text-xl"
        >
          Chaosmos Ko
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
                v-for="menuItem in menuItems"
                :key="menuItem.text"
                class="first:ml-0 ml-9 h-full"
            >
              <router-link
                  :to="menuItem.url"
                  class="flex h-full items-center py-2.5"
              >{{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button
              v-else
              text="Sign in"
              type="primary"
              @click="loginUser"
          />
        </div>

      </div>

      <sub-nav-menu v-if="isLoggedIn" />

    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue';
import ProfileImage from '@/components/Navigation/ProfileImage.vue';
import SubNavMenu from '@/components/Navigation/SubNavMenu.vue';

export default {
  name: 'MainNav',
  components: {
    ProfileImage,
    ActionButton,
    SubNavMenu
  },
  data() {
    return {
      menuItems: [
        { text:  'Teams', url: "/" },
        { text: 'Location', url: "/" },
        { text: 'Life at company', url: "/" },
        { text: 'How we hire', url: "/" },
        { text: 'Students', url: "/" },
        { text: 'Jobs', url: "/jobs/results" }
      ],
      isLoggedIn: false
    };
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn,
      };
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    }
  }
};
</script>

<style>

</style>
