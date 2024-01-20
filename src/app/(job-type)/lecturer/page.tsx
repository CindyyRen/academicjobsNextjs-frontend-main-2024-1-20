import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import lecturer from '@/data/lecturer.json';
import Link from 'next/link';
export const metadata: Metadata = {
  title: {
    absolute: '  Academic Lecturer Jobs',
  },
  description:
    'To find out more about the academic lecturer jobs available in higher education, browse our list of current lecturer job vacancies on this page. ',
  keywords: 'Academic Lecturer Jobs. Lecturer positions',
};
export default function Page() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Lecturing Jobs
          </h1>
          <div>
            <p className="px-7 mb-4 mt-1">
            Discover your perfect lecturing position through the world’s best job board! At Academic Jobs we offer the most renowned lecturing jobs at the top universities. A career as an academic lecturer will provide you with the chance to engage with partners domestically and internationally, work with some of the brightest minds, and use top-notch facilities and resources.

            </p>
            <p className="px-7 md:flex hidden">
            The No.1 job board for lecturers, Academic Jobs, provides an extensive list of opportunities for the future of your career, carefully sectioning the top Higher Ed lecturing jobs to find the best position for you.</p>
            <p className="px-7 md:flex hidden">
            Find all the best lecturing jobs here…</p>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col  ">
        <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
          {lecturer.map(({ Title, Name }, key) => (
            <li
              className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
              key={key}
            >
              <Link href={`/lecturer/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <JobSearchBox q="lecturer" />
      <SearchResults q={{ q: 'lecturer' || 0 }} />
    </main>
  );
}
