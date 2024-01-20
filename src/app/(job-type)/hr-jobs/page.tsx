import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'
import hr from "@/data/hr.json";
import Link from 'next/link';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Higher Ed HR jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Welcome to the top job board for Academic Jobs, listing higher education jobs available in international colleges and universities daily. Use filters such as city, employment type, and institution name to help your job search ',
  keywords: 'Find Academic Jobs, Seek Academic Jobs, Academic Jobs Search',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
           

              <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4"> Human Resource Jobs</h1> 
              
            <div>
            
            <p className="px-7 mb-4 mt-1">
            Discover your perfect human resource position through the world’s best job board! At Academic Jobs we offer the most renowned HR jobs at the top universities. Most importantly, we are passionate about the HR profession and use our knowledge and expertise to find you your ideal HR job. We have created a network of HR professionals, join our HR 500 Club to be a part of the action.
            </p>
            <p className="px-7 md:flex hidden">
            The No.1 job board for HR professionals in universities. So, if you are looking to advance your career, we are here to help you achieve your ambitions – both in the short term as well as throughout your lifelong career.
            </p>
         
            </div>
          </div>
          </div>
              
          <div className="bg-white flex flex-col  ">
               <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
              {hr.map(({ Title, Name, }, key) => (
                <li className={`pb-2 flex ${' md:break' } ${ ' font-bold text-gray-400' }`} key={key}>
                  <Link href={`/hr-jobs/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
          </div>

              <div className="md:flex hidden grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8"><iframe className=" aspect-video  " src="https://www.youtube.com/embed/zA4K1-QmrO4?si=FeSGIGczCj2ZZkwL" title="YouTube video player"></iframe><iframe className=" aspect-video " src="https://www.youtube.com/embed/pqjW3uCtswE?si=CxYxWGXqILlP4TlQ" title="YouTube video player"></iframe><iframe className=" aspect-video " src="https://www.youtube.com/embed/xiCacfu7Y7Y?si=iC3XrZQZ6o1cCluc" title="YouTube video player"></iframe></div>

              

              <JobSearchBox q="hr"/>
              <SearchResults q={{ q: "hr" || 0 }} />
      </main>
   
  );
}
