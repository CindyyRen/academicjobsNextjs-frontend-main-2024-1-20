import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Executive Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for academic jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Academic Jobs Online. online positions',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
            



              <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">Online Academic Jobs</h1> 
              
            <div className="">
            
            <p className="px-7 mb-4 mt-1">
            Seek all online uni jobs through Australia’s No.1 job board. Whether you’re a student, graduate, or professional. Engaging in academic online jobs, particularly in higher education, involves a spectrum of roles—from teaching and research to administration, customer service, events management, marketing, IT, and library curation.</p>
            <p className="px-7 md:flex hidden">
            The best job board in Australia will help you find your dream online position. Through higher ed jobs online, individuals can actively contribute to the advancement of knowledge, the cultivation of learning environments, and the overall growth of the academic landscape while simultaneously expanding their professional horizons.</p>
         
            </div>
          </div>
          </div>

              <JobSearchBox q= "online"/>
              <SearchResults q={{ q: "online" || 0 }} />
      </main>
   
  );
}
