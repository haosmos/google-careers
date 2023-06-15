import { render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";

import SubNavMenu from "@/components/Navigation/SubNavMenu.vue";
import { useJobsStore } from "@/stores/jobs";

describe("SubNavMenu", () => {
  const renderSubNavMenu = (routeName) => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();

    render(SubNavMenu, {
      global: {
        plugins: [pinia],
        mocks: {
          $route: {
            name: routeName,
          },
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });

    return { jobsStore };
  };

  describe("when user is on jobs page", () => {
    it("displays job count", async () => {
      const routeName = "JobResults";

      const { jobsStore } = renderSubNavMenu(routeName);
      const numberOfJobs = 16;
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({});

      const jobCount = await screen.findByText(numberOfJobs);
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does NOT display job count", () => {
      const routeName = "Home";

      const { jobsStore } = renderSubNavMenu(routeName);
      const numberOfJobs = 16;
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({});

      const jobCount = screen.queryByText(numberOfJobs);
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
