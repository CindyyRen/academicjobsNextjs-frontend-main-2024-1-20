import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Academic part-time Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for academic jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Academic Jobs Online. online positions',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <h1>Academic part-time Jobs</h1>
      <p>
      Seek all part-time uni jobs through Australia’s best job board. Discover flexibility to align your professional pursuits with your lifestyle choices. Join us in embracing a future where your workspace is as adaptable as your ambitions. From part-time positions to vibrant on-site roles, we've curated diverse part-time opportunities just for you.</p>
      <p className="px-7 md:flex hidden">
      All of the best professional casual jobs in Australia. Through higher ed jobs part-time, individuals can actively contribute to the advancement of knowledge, the cultivation of learning environments, and the overall growth of the academic landscape while simultaneously expanding their professional horizons.</p>

      <JobSearchBox q="part time" />
      <SearchResults q={{ q: 'part time' || 0 }} />
    </main>
  );
}
