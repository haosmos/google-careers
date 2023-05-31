<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">
      Find your next job at Chaosmos'Ko
    </h2>
  </section>
</template>


<script>
import nextElementInList from '@/utils/nextElementInList';

export default {
  name: 'HeadLine',
  data() {
    return {
      action: 'Build',
      interval: null,
      mar: true,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    }
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = [ 'Build', 'Create', 'Design', 'Code' ];
        this.action = nextElementInList(actions, this.action);
      }, 1500);
    }
  }
};
</script>


<style scoped>
.build {
  color: #f9ab00;
}

.create {
  color: #d93025;
}

.code {
  color: #34a853;
}

.design {
  color: #1a73e8;
}

</style>
