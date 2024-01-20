import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Post Doc Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'In Post Doc, you will have the opportunity to work with talented and dedicated staff, students, alumni, and stakeholders, contribute to the vision and mission.  ',
  keywords: 'Academic Postdoc Jobs, Postdoc AcademicJobs',
};
export default function myPage() {
  return (
    
      <main className="content-grid">

<div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4"> PhD Positions</h1> 
              
            <div className="">
            
            <p className="px-7 mb-4 mt-1">
            Seek your perfect PhD position through the world’s best job board! At Academic Jobs we offer PhD positions at the most renowned universities across the globe. PhD opportunities will provide you with the chance to engage with partners domestically and internationally, work with some of the brightest minds, and use top-notch facilities and resources.
            </p>
            <p className="px-7 md:flex hidden">
            The No.1 job board for academics, Academic Jobs, provides an extensive list of opportunities for the future of your career, carefully sectioning the top Higher Ed fellowships, scholarships, and programmes.
            </p>
            <p className="px-7 md:flex hidden">
            Find all the best PhD positions here…
            </p>
         
            </div>
          </div>
          </div>


              <h1>
              Academic Postdoc Jobs
              </h1>
              <p>
              View all of the Post Doc jobs that respectable universities now have available on AcademicJobs. Our academic institutions are constantly seeking the greatest, you can apply for fantastic global academic Post Doc positions through our website.</p>

              
              <JobSearchBox q= "postdoc"/>
              <SearchResults q={{ q: "postdoc" || 0 }} />
      </main>
   
  );
}
