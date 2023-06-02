import { render, screen } from '@testing-library/vue';
import JobListing from '@/components/JobResults/JobListing.vue';
import { RouterLinkStub } from '@vue/test-utils';

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => (
      {
        title: 'Vue Developer',
        organization: 'AirBnB',
        locations: ['San Francisco'],
        minimumQualifications: ['JavaScript'],
        ...jobProps,
      }
  );
  
  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          ...jobProps
        },
      }
    });
  };
  
  it('renders jobs title', () => {
    const jobProps = createJobProps({ title: 'Vue Developer' });
    
    renderJobListing(jobProps);
    
    expect(screen.getByText('Vue Developer')).toBeInTheDocument();
  });
  
  it('job organization', () => {
    const jobProps = createJobProps({ organization: 'AirBnB' });
    
    renderJobListing(jobProps);
    
    expect(screen.getByText('AirBnB')).toBeInTheDocument();
  });
  
  it("renders job's locations", () => {
    const jobProps = createJobProps({ locations: ['San Francisco'] });
    renderJobListing(jobProps);
    expect(screen.getByText('San Francisco')).toBeInTheDocument();
  })
  
  it("renders job's minimum qualifications", () => {
    const jobProps = createJobProps({ minimumQualifications: ['JavaScript'] });
    renderJobListing(jobProps);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  })
});
