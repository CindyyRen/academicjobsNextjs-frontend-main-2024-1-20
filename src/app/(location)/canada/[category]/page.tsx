// import Link from 'next/link';
import { regionData } from '@/data/canadaPositions';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
// import type { Metadata } from 'next';

const regionName = 'Canada';

type MetadataTypes = {
  Name?: string | undefined;
  Title?: string | undefined;
  Description?: string | undefined;
  Keyword?: string | undefined;
  content?: any | undefined;
};

export async function generateMetadata({ params, searchParams }: any) {
  // console.log(params)
  let { category } = params;
  // console.log(regionData)
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
  } = regionData.find((item) => item.Name === category) || {};

  return {
    title: Title,
    description: Description,
    keywords: Keyword,
  };
}

//const Lecturer = () => {
export default function Page({ params, searchParams }: any) {
  // console.log('````````````````````params````````````````````');
  // console.log(params);
  let { category } = params;
  // console.log(regionData);
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
  } = regionData.find((item) => item.Name === category) || {};

  const paras = content1.split('\n');

  let content;
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <main className="content-grid flex-col md:gap-2">
      {/* <Link className="text-[#f4a10c] " href="/canada-positions/">
        View all Lecturer Jobs →
      </Link> */}

      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold md:text-right text-gray-500 pb-4 capitalize m-0">
            {Title}
          </h1>
          <div className="prose text-1-cols">
            {paras.map((para, index) => (
              <p key={index} className="">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      <JobSearchBox q={Name} l={regionName} />
      <SearchResults q={{ q: Name, l: regionName }} />
    </main>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
