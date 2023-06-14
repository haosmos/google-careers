<template>
  <div
      class="w-96 flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">
          What do you want to do?
        </h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <collapsible-accordion header="Degree" />

      <collapsible-accordion header="Job types">
        <p>Placeholder for now</p>
      </collapsible-accordion>

      <job-filters-sidebar-organizations />

    </section>
  </div>
</template>

<script>
import JobFiltersSidebarOrganizations
  from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
import ActionButton from '@/components/Shared/ActionButton.vue';
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue';

export default {
  name: 'JobFiltersSidebar',
  components: {
    JobFiltersSidebarOrganizations,
    ActionButton,
    CollapsibleAccordion
  }
};
</script>


<style scoped>

</style>
