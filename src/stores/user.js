import { defineStore } from 'pinia';

export const useUserStore = defineStore(
  'user',
  {
    state: () => (
      {
        isLoggedIn: false,
      }
    ),
    actions: {
      loginUser() {
        this.isLoggedIn = true;
        // console.log('hello, vit!!!');
      },
    }
  }
);
