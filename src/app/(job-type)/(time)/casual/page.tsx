import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Academic Casual Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for academic jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Academic Jobs Online. online positions',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic Casual Jobs
              </h1>
              <p>
              Seek all casual uni jobs through Australia’s best job board. Whether you're a student or a seasoned professional, discover flexible gigs tailored to your skills and schedule. Dive into a new job adventure with our casual job search platform!</p>
              <p className="px-7 md:flex hidden">
              The No. 1 job board for part-time jobs in Australia. Join our community and connect with employers who value your unique talents. Simplify your job search, take control of your work-life balance, and find your dream gig in just a few clicks. Your next exciting opportunity awaits – let's make it happen together!</p>

              <JobSearchBox/>
              <SearchResults q={{ q: "casual" || 0 }} />
      </main>
   
  );
}
