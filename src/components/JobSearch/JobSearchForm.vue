<template>
  <form
      class="flex h-12 items-center border border-solid border-brand-gray-3 rounded-3xl"
      @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-3 mr-2" />
    <div class="flex flex-1 flex-no-wrap h-full text-base font-light">
      <div class="flex flex-1 h-full items-center relative pr-3">
        <label for="role" class="absolute left-0 -top-10">
          Role
        </label>
        <text-input
            id="role"
            v-model="role"
            placeholder="Software Engineer"
        />
      </div>

      <span class="flex items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
      >
        in
      </span>

      <div class="flex flex-1 h-full items-center relative pl-3">
        <label for="location" class="absolute left-0 -top-10">
          Where?
        </label>
        <text-input
            id="location"
            v-model="location"
            placeholder="Los Angeles, CA"
        />
      </div>

    </div>

    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue';
import TextInput from '@/components/Shared/TextInput.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'JobSearchForm',
  components: { FontAwesomeIcon, ActionButton, TextInput },
  data() {
    return {
      role: '',
      location: '',
    };
  },
  methods: {
    updateRole(value) {
      this.role = value;
    },
    updateLocation(value) {
      this.location = value;
    },
    searchForJobs() {
      this.$router.push({
        name: 'JobResults',
        query: {
          role: this.role,
          location: this.location
        }
      })
    }
  }
};
</script>

<style scoped>

</style>
