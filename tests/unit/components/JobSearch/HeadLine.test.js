import { render, screen } from '@testing-library/vue';
import HeadLine from '@/components/JobSearch/HeadLine.vue';
import { nextTick } from 'vue';

describe('HeadLine', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })
  
  afterEach(() => {
    vi.useRealTimers();
  })
  
  it('displays introductory action verb', function () {
    render(HeadLine);
    
    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i
    });
    
    expect(actionPhrase).toBeInTheDocument();
  });
  
  it('swaps action verb after interval', async () => {
    render(HeadLine);
    vi.advanceTimersToNextTimer();
    
    await nextTick();
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i,
    });
    
    expect(actionPhrase).toBeInTheDocument();
  });
  
  it('removes interval when component unmounts', () => {
    const clearInterval = vi.fn();
    vi.stubGlobal('clearInterval', clearInterval);

    const { unmount } = render(HeadLine);
    unmount();

    expect(clearInterval).toHaveBeenCalled();
  });
});
