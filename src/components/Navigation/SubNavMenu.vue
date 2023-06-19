<template>
  <div class="w-full h-16 border-b border-solid border-brand-gray-1 bg-white">
    <div
      v-if="onJobResultsPage"
      class="flex h-full items-center px-8"
    >
      <div>
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="mr-3"
        />
        <span>
          <span class="text-brand-green-1">{{ FILTERED_JOBS.length }}
          </span> jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useJobsStore } from '@/stores/jobs.ts';

const route = useRoute();
const jobsStore = useJobsStore();

const onJobResultsPage = computed(() => route.name === 'JobResults');
const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS);

// ### OPTIONS API ###
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { mapState } from 'pinia';
//
// import { useJobsStore, FILTERED_JOBS } from '@/stores/jobs';
//
// export default {
//   name: 'SubNavMenu',
//   components: { FontAwesomeIcon },
//   computed: {
//     ...mapState(useJobsStore, [ FILTERED_JOBS ]),
//     onJobResultsPage() {
//       return this.$route.name === 'JobResults';
//     }
//   },
// };

</script>


<style scoped>

</style>
