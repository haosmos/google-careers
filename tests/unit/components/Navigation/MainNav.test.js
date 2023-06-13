import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/Navigation/MainNav.vue';
import userEvent from '@testing-library/user-event';
import { RouterLinkStub } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useUserStore } from '@/stores/user';

describe('MainNav', () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia({
      stubActions: false
    });
    const $route = {
      name: 'Home',
    };
    render(MainNav, {
      global: {
        plugins: [ pinia ],
        mocks: {
          $route: $route,
        }, stubs: {
          FontAwesomeIcon: true, RouterLink: RouterLinkStub,
        }
      },
    });
  };
  
  it('displays company name', () => {
    renderMainNav();
    const companyName = screen.getByText('Horns and hooves');
    expect(companyName).toBeInTheDocument();
  });
  
  it('displays menu items for navigation', () => {
    renderMainNav();
    const navigationMenuItems = screen.getAllByRole('listitem');
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent);
    expect(navigationMenuTexts).toEqual([
      'Teams', 'Location', 'Life at company', 'How we hire', 'Students', 'Jobs'
    ]);
  });
  
  /**
   * @vitest-environment jsdom
   */
  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav();
      const userStore = useUserStore()
      
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i,
      });
      
      expect(profileImage).not.toBeInTheDocument();
      
      const loginButton = screen.getByRole('button', {
        name: /sign in/i,
      });
      
      userStore.isLoggedIn = true;
      
      await userEvent.click(loginButton);
      
      profileImage = screen.queryByRole('img', {
        name: /user profile image/i,
      });
      
      expect(profileImage).toBeInTheDocument();
      
    });
  });
});
