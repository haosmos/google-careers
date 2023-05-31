import { render, screen } from '@testing-library/vue';
import SubNavMenu from '@/components/Navigation/SubNavMenu.vue';

describe('SubNavMenu', () => {
  describe("when user is on jobs page", () => {
    it('displays job count', () => {
      render(SubNavMenu, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          };
        },
      });
      
      const jobCount = screen.queryByText("1653");
      expect(jobCount).toBeInTheDocument();
    })
  })
  
  describe("when user is not on jobs page", () => {
    it('does NOT displays job count', () => {
      render(SubNavMenu, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: false
          };
        },
      });
      
      const jobCount = screen.queryByText("1653");
      expect(jobCount).not.toBeInTheDocument();
    })
  })
})
