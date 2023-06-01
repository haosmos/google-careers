import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';

describe('JobSearchForm', () => {
  it('when user submits form', () => {
    it('directs user to job results page with user\'s search parameters', async () => {
      
      const push = vi.fn();
      const $router = { push };
      
      render(JobSearchForm, {
        globals: {
          mocks: {
            $router: $router
          },
          stubs: {
            FontAwesomeIcon: true,
            
          }
        }
      });
      
      const roleInput = screen.getByRole('textbox', {
        name: /role/i,
      });
      await userEvent.type(roleInput, 'Software Engineer');
      
      const locationInput = screen.getByRole('textbox', {
        name: /location/i,
      });
      await userEvent.type(locationInput, 'Los Angeles, CA');
      
      const submitButton = screen.getByRole("button", {
        name: /search/i,
      })
      
      await userEvent.click(submitButton);
      
      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Software Engineer",
          location: "Los Angeles, CA"
        }
      })
    });
  });
});
