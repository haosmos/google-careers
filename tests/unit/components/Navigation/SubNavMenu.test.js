import { render, screen } from '@testing-library/vue';
import SubNavMenu from '@/components/Navigation/SubNavMenu.vue';

describe('SubNavMenu', () => {
  const renderSubNavMenu = (routeName) => {
    render(SubNavMenu, {
      global: {
        mocks: {
          $route: {
            name: routeName
          },
        },
        stubs: {
          FontAwesomeIcon: true
        }
      },
    })
  }
  
  describe("when user is on jobs page", () => {
    it('displays job count', () => {
      const routeName = "JobResults";
      renderSubNavMenu(routeName);
      
      const jobCount = screen.getByText("1653");
      expect(jobCount).toBeInTheDocument();
    })
  })
  
  describe("when user is not on jobs page", () => {
    it('does NOT displays job count', () => {
      const routeName = "Home";
      renderSubNavMenu(routeName)
      const jobCount = screen.queryByText("1653");
      expect(jobCount).not.toBeInTheDocument();
    })
  })
})
