import { notFound } from 'next/navigation';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillShareFill } from 'react-icons/bs';
import Button from './Button';

interface Props {
  params: { id: string; category: string };
}
interface JobApiResponse {
  status: string;
  code: number;
  data: JobData;
}
interface JobData {
  employer_id: number;
  id: number;
  master_category_job_type: string;
  job_type: string;
  region: string | null;
  country: string;
  state: string;
  city: string;
  activation_date: string;
  description: string;
  title: string;
  location: string;
  how_to_apply: string;
  expiration_date: string;
  featured: number;
  company_description: string;
  company_name: string;
  logo: string;
  website: string;
  employer_location: string;
}
export async function getJob(id: string): Promise<JobApiResponse> {
  const response = await fetch(`https://api2.sciencejobs.com.au/api/job/${id}`);
  const res: JobApiResponse = await response.json();
  // console.log(res);
  return res;
}

const JobDetailPage = async ({ params }: Props) => {
  const job = await getJob(params.id);
  if (!job) notFound();
  const {
    employer_id,
    id: jobId,
    company_name,
    logo,
    title,
    location,
    activation_date,
    expiration_date,
    description,
    how_to_apply,
    featured,
  } = job.data;
  return (
    <div className="bg-white relative content-grid mx-auto  ">
      <div className="bg-slate-200 full-width">
        <div className="flex items-center p-4 gap-8   ">
          <div className="md:w-1/4 md:pr-4 md:p-8">
            <Link
              href={`/employers/${company_name
                ?.replace(/\W+/g, '-')
                .toLowerCase()}/${employer_id}/`}
            >
              <Image
                className="w-full rounded-xl"
                src={
                  `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` ||
                  ''
                }
                alt={company_name}
                width={300}
                height={200}
              />
            </Link>
          </div>
          <div className="w-3/4">
            <h1 className="text-2xl font-bold mb-2 text-black">{title}</h1>
            <div className="mb-4">
              {/* <Link href={`/employers/id/${id}`}>
                    {location}
                </Link> */}
            </div>
            <div className="flex items-center">
              <Button
                title={title}
                company_name={company_name}
                how_to_apply={how_to_apply}
              />
              <div className="ml-4">
                <div className="">
                  <div
                  // onClick={() => {
                  //     setIsOpen(true);
                  // }}
                  >
                    <BsFillShareFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap bg-white  p-4 mb-4 rounded-lg shadow-lg" '>
        {/* ... (rest of the component remains unchanged) */}
        <div className="flex justify-between md:gap-16 items-center">
          <div className="text-sm text-gray-600">
            <div className="mb-1">{company_name}</div>
            <div className="text-gray-700 font-light">{location}</div>
          </div>
          <div className="applications-close border-4 rounded p-1 font-bold">
            <p className="text-gray-400 text-sm mb-1">Applications Close</p>
            <div className="text-sm">
              {expiration_date ? (
                <time>
                  {new Date(expiration_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              ) : (
                <p className="text-center">NA</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 gap-8 ">
        <article
          className="wrapper media bg-white border-2  p-4 mb-4 rounded-lg shadow-lg max-w-screen-md"
          data-id={jobId}
        >
          <div dangerouslySetInnerHTML={{ __html: description }} />
          {/* <div className="mt-5 mb-0 text-right">Join Talent Pool</div> */}
        </article>
        <div className="max-h-screen overflow-y-scroll w-96 hidden md:block">
          <h3 className=" pl-4 text-lg text-gray-400">
            This might interest you...{' '}
          </h3>
          <JobSearchBox q={title} />
          <SearchResults q={title} />
        </div>
      </div>
      {new Date(expiration_date) < new Date() && expiration_date && (
        <div className="bg-opacity-50 bg-red-500 text-white text-4xl px-8 py-8 rounded-full absolute top-[200px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-45 skew-y-0">
          Job Fulfilled By AcademicJobs.com
        </div>
      )}
    </div>
  );
};
export default JobDetailPage;

//metadata
export async function generateMetadata({ params }: Props) {
  const job = await getJob(params.id);
  if (!job) return { title: 'not found' };
  return {
    title:
      job?.data.master_category_job_type + '#######' + job?.data.company_name,
    description: job?.data.company_name,
  };
}
