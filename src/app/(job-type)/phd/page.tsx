import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'PHD Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover flexible and fulfilling on-campus employment opportunities for Ph.D. candidates. Explore a myriad of PhD positions across diverse departments at your university. Take the next step in your career, apply today, and cultivate valuable work experience and skills.  ',
  keywords: 'PhD Jobs , PhD academic Jobs',
};
export default function myPage() {
  return (
    
      <main className="PHD Jobs">

<div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">PHD Jobs</h1> 
              
            <div className="">
            
            <p className="px-7 mb-4 mt-1">
            Discover your ideal postdoctoral position through the world’s best job board! At Academic Jobs, we offer postdoc opportunities at the most prestigious universities worldwide. Engage with domestic and international partners, collaborate with brilliant minds, and access state-of-the-art facilities and resources in a fulfilling postdoctoral experience.
            </p>
            <p className="px-7 md:flex hidden">
            The No.1 job board for academics, Academic Jobs, offers a comprehensive list of opportunities to shape the trajectory of your career. We carefully categorise top Higher Ed fellowships, scholarships, and programs, making it your go-to resource for advancing in academia.
            </p>
            <p className="px-7 md:flex hidden">
            Explore all the finest postdoctoral positions right here...
            </p>
         
         
            </div>
          </div>
          </div>


      

              <JobSearchBox q= "phd"/>
              <SearchResults q={{ q: "phd" || 0 }} />
      </main>
   
  );
}
