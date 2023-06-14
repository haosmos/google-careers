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
          Horns and hooves
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
import { useUserStore } from '@/stores/user';
import { mapStores, mapActions, mapState } from 'pinia';

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
        { text: 'Teams', url: '/teams' },
        { text: 'Location', url: '/' },
        { text: 'Life at company', url: '/' },
        { text: 'How we hire', url: '/' },
        { text: 'Students', url: '/' },
        { text: 'Jobs', url: '/jobs/results' }
      ],
      // isLoggedIn: false
    };
  },
  computed: {
    ...mapState(useUserStore, [ 'isLoggedIn' ]),
    // ...mapStores(useUserStore),
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn,
      };
    }
  },
  methods: {
    ...mapActions(useUserStore, [ 'loginUser' ]),
},
};
</script>

<style>

</style>
