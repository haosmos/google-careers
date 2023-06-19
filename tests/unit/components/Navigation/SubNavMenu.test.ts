import type { Mock } from 'vitest';

import { render, screen } from '@testing-library/vue';
import { createTestingPinia } from '@pinia/testing';

import { useRoute } from 'vue-router';

vi.mock('vue-router');

import SubNavMenu from '@/components/Navigation/SubNavMenu.vue';
import { useJobsStore } from '@/stores/jobs.ts';

const useRouteMock = useRoute as Mock;

describe('SubNavMenu', () => {
  const renderSubNavMenu = () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();
    
    render(SubNavMenu, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
    
    return { jobsStore };
  };
  
  describe('when user is on jobs page', () => {
    it('displays job count', async () => {
      useRouteMock.mockReturnValue({ name: 'JobResults' });
      
      const { jobsStore } = renderSubNavMenu();
      const numberOfJobs = 16;
      
      // @ts-expect-error: Getter is read only
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({});
      
      const jobCount = await screen.findByText(numberOfJobs);
      expect(jobCount).toBeInTheDocument();
    });
  });
  
  describe('when user is not on jobs page', () => {
    it('does NOT display job count', () => {
      useRouteMock.mockReturnValue({ name: 'Home' });
      
      const { jobsStore } = renderSubNavMenu();
      const numberOfJobs = 16;
      // @ts-expect-error: Getter is read only
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({});
      
      const jobCount = screen.queryByText(numberOfJobs);
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
