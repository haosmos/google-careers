import { useUserStore } from '@/stores/user';
import { createPinia, setActivePinia } from 'pinia';

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })
  
  it('keeps track of if user is logged in', () => {
    const store = useUserStore();
    expect(store.isLoggedIn).toBe(false);
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  
  describe('loginUser', () => {
    it('sets isLoggedIn to true', () => {
      const store = useUserStore();
      store.loginUser();
      expect(store.isLoggedIn).toBe(true);
    });
  });
})
