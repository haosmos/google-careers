import { createPinia, setActivePinia} from 'pinia';
import { useJobsStore } from '@/stores/jobs';
import axios from 'axios';

vi.mock("axios");

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  
  it("stores job listing", () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  
  describe("FETCH_JOBS", () => {
    it("make api request and stores received data", async () => {
      axios.get.mockResolvedValue({
        data: [ "Job 1", "Job 2" ]
      })
      const store = useJobsStore();
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual([ "Job 1", "Job 2" ]);
    })
  })
})
