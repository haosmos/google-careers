import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import TextInput from '@/components/Shared/TextInput.vue';
import { it } from 'vitest';

describe('TextInput', () => {
  it('communicates that user has entered characters', async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: '',
      }
    });
    
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'abc');
    const message = emitted()["update:modelValue"];
    expect(message).toEqual(([["a"], ["ab"], ["abc"]]));
  });
});
