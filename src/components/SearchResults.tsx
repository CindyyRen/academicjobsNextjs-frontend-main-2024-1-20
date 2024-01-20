'use client';
import { useEffect, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import JobList from '@/components/JobList';
import BaseApi from '@/lib/store/Base';
import { BsHandbag } from 'react-icons/bs';
import Link from 'next/link';
interface SearchResultsProps {
  q: {
    q?: string;
    l?: string;
  };
}
export default function SearchResults({ q }: SearchResultsProps) {
  console.log('==============SearchResults==================');
  const [page, setPage] = useState(0);
  console.log('q1', q, page);
  //useGetQtyQuery({ q: q, l: l || '', filter1 });
  const {
    isPending,
    isError,
    isSuccess,
    error,
    data,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ['jobs', q, page],
    queryFn: async () => {
      const response = await BaseApi.post('/jobs', { ...q, page });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    // enabled: q && Object.keys(q).length > 0,
    placeholderData: keepPreviousData,
  });
  console.log('data', data);
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: dataQty,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['qty', q],
    queryFn: async () => {
      const response = await BaseApi.post('/jobQty', { ...q, page });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    enabled: data?.jobs?.length > 0,
  });
  let content;
  const handlePageChange = (direction: any) => {
    if (direction === 'prev') {
      setPage((prevPage) => Math.max(prevPage - 1, 0));
    } else if (direction === 'next') {
      setPage((prevPage) => prevPage + 1);
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  if (isFetching) {
    content = (
      <div className="container mx-auto flex w-full h-screen justify-between">
        <div
          role="status"
          className="w-[40%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="w-[60%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess && data.jobs.length > 0) {
    if (data.jobs.length > 0) {
      console.log('data', data);
      content = (

        

        <div className="md:flex md:p-4 mx-auto max-w-screen-lg gap-4 md:flex-row-reverse">
              {/* mobile filter dropdown */}
              <div className="flex justify-center items-center gap-2 my-4 text-md font-bold text-gray-500  p-1 pb-4 mb-8 md:hidden">
            <BsHandbag />
            {dataQty && <span>{`${dataQty} Jobs Found`}</span>}
          </div>    
                 <details className="bg-gray-300 open:bg-[amber-200] duration-300 md:hidden mt-[-2rem] mb-4 " >
                  <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">Filters</summary>
                  <div className="bg-white  border border-gray-300 text-sm font-light  md:flex  md:justify-start py-4 px-6 mb-4 gap-4 columns-2 ">
                
                     
                     {/* Employment Type Container */}
         

            <ul className="faculty-container gap-1 items-center justify-center text-gray-500 px-2 grid grid-cols-1">
            <a className="font-bold">
                Employment▾ 
              </a>
              <li className="hover:underline">
                <Link href="/online/">Online{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/remote/">Remote{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/full-time/">Full-Time{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/part-time/">Part-Time{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/casual/">Casual</Link>
              </li>
            </ul>      
                            
        
         
                   {/* Employment Cat Container */}
          <ul className="mt-[1rem] text-gray-500">
          
         
            <a className="font-bold">
                Position▾
              </a>
              <li className="hover:underline">
                <Link href="/lecturer">Lecturer{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/research/">Research{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/professor/">Professor{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/executive/">Executive{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/faculty/">Faculty{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/admin/">Admin{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/hr-jobs/">HR{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/student/">Student{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/graduate/"> Graduate{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/postdoc/"> Postdoc{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/phd/">PhD</Link>
              </li>
            
          </ul>

    
    {/* {Unis} */}
    <div className="faculty-container grid-cols-1 grid md:grid-cols-1  py-2 text-gray-500 mt-6">
      <a className="font-bold">
                Top Universities▾ 
              </a>
            <div className="column">
          
              <ul className="">
                <ul className="">
                  <li className="hover:underline">
                    <Link href="/employers/harvard-university/3100/">
                      {' '}
                      Harvard University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/stanford-university/3101/">
                      {' '}
                      Stanford University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-cambridge/12635/">
                      {' '}
                      University of Cambridge
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/massachusetts-institute-of-technology/3103/">
                      MIT
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-california-berkeley/3105/">
                      {' '}
                      University of California, Berkeley
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/princeton-university/3104/">
                      {' '}
                      Princeton University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-oxford/3099/">
                      {' '}
                      University of Oxford
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/columbia-university/3127/">
                      {' '}
                      Columbia University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/caltech/3128/">Caltech</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/University-of-Chicago/3126/">
                      {' '}
                      University of Chicago
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/yale-university/3125/">
                      {' '}
                      Yale University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/Cornell-University/3138/">
                      Cornell University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-california-los-angeles/3136/">
                      UCLA
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-pennsylvania/3131/">
                      UPenn
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/johns-hopkins-university/3130/">
                      Johns Hopkins University (JHU)
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/university-college-london/12527/">
                      University College London (UCL)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-tokyo/3155/">
                      The University of Tokyo (UTokyo)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/new-york-university-nyu/3144/">
                      New York University (NYU)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/duke-university/3139/">
                      {' '}
                      Duke University (Duke)
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>

         

{/* {cities} */}
       
       
          <div className="faculty-container grid-cols-1 grid md:grid-cols-1 gap-2 py-2 px-7 text-gray-500 mt-4">
            <div className="column">
            <a className="font-bold text-gray-500 ">
                Top Cities▾ 
              </a>
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/USA/" className="text-gray-500 font-bold">
                    USA
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/boston/">Boston</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/new-york/">New York</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/los-angeles/">Los Angeles</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/san-francisco/">San Francisco</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/chicago/">Chicago</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/san-diego/">San Diego</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/washington-dc/">Washington DC</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/philadelphia/">Philadelphia</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/atlanta/">Atlanta</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/seattle/">Seattle</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/pittsburgh/">Pittsburgh</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/new-haven/">New Haven</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Australia/" className="text-gray-500 font-bold">
                    Australia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/melbourne/">Melbourne</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/sydney/">Sydney</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/brisbane/">Brisbane</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/gold-coast/">Gold Coast</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/canberra/">Canberra</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/perth/">Perth</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/adelaide/">Adelaide</Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/UK/" className="text-gray-500 font-bold">
                    UK
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/london/">London</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/edinburgh/">Edinburgh</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/manchester/">Manchester</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Canada/" className="text-gray-500 font-bold">
                    Canada
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/toronto/">Toronto</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/vancouver/">Vancouver</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/montreal/">Montreal</Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/Asia/" className="text-gray-500 font-bold">
                    Asia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/hong-kong/">Hong Kong</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/beijing/">Beijing</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/tokyo/">Tokyo</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/singapore/">Singapore</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Europe/" className="text-gray-500 font-bold">
                    Europe
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/paris/">Paris</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/zurich/">Zurich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/munich/">Munich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/amsterdam/">Amsterdam</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/copenhagen/">Copenhagen</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/stockholm/">Stockholm</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
      




     </div></details>

 
        <div className="mr-auto">
                 
          <JobList
            data={data}
            handlePageChange={handlePageChange}
            page={page}
            isPlaceholderData={isPlaceholderData}
          />
        </div>
        <div className="w-1/4 bg-slate-100 py-4 pb-8  px-8 rounded m-0 shadow-xl mt-4 border border-t-4 h-fit hidden md:block justify-center items-center ml-4">
        <div className="flex justify-center items-center gap-2 my-4 text-sm font-bold text-gray-500 border-2 p-1 rounded-xl mb-8">
            <BsHandbag />
            {dataQty && <span>{`${dataQty} Jobs Found`}</span>}
          </div>    
          <h2 className="text-xl ">Filters▾</h2>
                   {/* Employment Cat Container */}
          <div className="mt-[1rem] ">
          
            <ul className="faculty-container  items-center justify-center text-gray-500 px-2 grid grid-cols-1">
            <a className="font-bold">
                Position▾
              </a>
              <li className="hover:underline">
                <Link href="/lecturer">Lecturer{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/research/">Research{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/professor/">Professor{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/executive/">Executive{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/faculty/">Faculty{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/admin/">Admin{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/hr-jobs/">HR{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/student/">Student{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/graduate/"> Graduate{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/postdoc/"> Postdoc{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/phd/">PhD</Link>
              </li>
            </ul>
          </div>

          {/* Employment Type Container */}
          <div className="mt-7">

            <ul className="faculty-container gap-1 items-center justify-center text-gray-500 px-2 grid grid-cols-1">
            <a className="font-bold">
                Employment▾ 
              </a>
              <li className="hover:underline">
                <Link href="/online/">Online{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/remote/">Remote{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/full-time/">Full-Time{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/part-time/">Part-Time{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/casual/">Casual</Link>
              </li>
            </ul>
          </div>

{/* {cities} */}
          <div className="cate-group section23 ">
        <div className="widget__text-block">
       
          <div className="faculty-container grid-cols-1 grid md:grid-cols-1 gap-2 py-2 px-7 text-gray-500 mt-4">
            <div className="column">
            <a className="font-bold text-gray-500 ">
                Top Cities▾ 
              </a>
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/USA/" className="text-gray-500 font-bold">
                    USA
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/boston/">Boston</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/new-york/">New York</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/los-angeles/">Los Angeles</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/san-francisco/">San Francisco</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/chicago/">Chicago</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/san-diego/">San Diego</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/washington-dc/">Washington DC</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/philadelphia/">Philadelphia</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/atlanta/">Atlanta</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/seattle/">Seattle</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/pittsburgh/">Pittsburgh</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/new-haven/">New Haven</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Australia/" className="text-gray-500 font-bold">
                    Australia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/melbourne/">Melbourne</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/sydney/">Sydney</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/brisbane/">Brisbane</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/gold-coast/">Gold Coast</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/canberra/">Canberra</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/perth/">Perth</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/adelaide/">Adelaide</Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/UK/" className="text-gray-500 font-bold">
                    UK
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/london/">London</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/edinburgh/">Edinburgh</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/manchester/">Manchester</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Canada/" className="text-gray-500 font-bold">
                    Canada
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/toronto/">Toronto</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/vancouver/">Vancouver</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/montreal/">Montreal</Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/Asia/" className="text-gray-500 font-bold">
                    Asia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/hong-kong/">Hong Kong</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/beijing/">Beijing</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/tokyo/">Tokyo</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/singapore/">Singapore</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Europe/" className="text-gray-500 font-bold">
                    Europe
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/paris/">Paris</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/zurich/">Zurich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/munich/">Munich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/amsterdam/">Amsterdam</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/copenhagen/">Copenhagen</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/stockholm/">Stockholm</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>


{/* {Unis} */}
      <div className="faculty-container grid-cols-1 grid md:grid-cols-1  py-2 text-gray-500 mt-6">
      <a className="font-bold">
                Top Universities▾ 
              </a>
            <div className="column">
          
              <ul className="">
                <ul className="">
                  <li className="hover:underline">
                    <Link href="/employers/harvard-university/3100/">
                      {' '}
                      Harvard University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/stanford-university/3101/">
                      {' '}
                      Stanford University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-cambridge/12635/">
                      {' '}
                      University of Cambridge
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/massachusetts-institute-of-technology/3103/">
                      MIT
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-california-berkeley/3105/">
                      {' '}
                      University of California, Berkeley
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/princeton-university/3104/">
                      {' '}
                      Princeton University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-oxford/3099/">
                      {' '}
                      University of Oxford
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/columbia-university/3127/">
                      {' '}
                      Columbia University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/caltech/3128/">Caltech</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/University-of-Chicago/3126/">
                      {' '}
                      University of Chicago
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/yale-university/3125/">
                      {' '}
                      Yale University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/Cornell-University/3138/">
                      Cornell University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-california-los-angeles/3136/">
                      UCLA
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-pennsylvania/3131/">
                      UPenn
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/johns-hopkins-university/3130/">
                      Johns Hopkins University (JHU)
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/university-college-london/12527/">
                      University College London (UCL)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-tokyo/3155/">
                      The University of Tokyo (UTokyo)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/new-york-university-nyu/3144/">
                      New York University (NYU)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/duke-university/3139/">
                      {' '}
                      Duke University (Duke)
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>


          </div>
        </div>
      );
    } else {
      content = (
        <p className="text-center text-2xl font-bold py-10">
          Found No Job, Pls use other keywords.
        </p>
      );
    }
  } else {
    content = (
      <div className="container mx-auto">
        <p className="text-center text-xl font-bold mt-12 px-8">
          Sorry! We couldn't find any jobs matching&nbsp;your&nbsp;request.
        </p>
        <p className="text-center text-md py-10 px-8">
          Please consider expanding your search and joining our Talent&nbsp;Pool
          to get notified of jobs matching your&nbsp;unique&nbsp;skills.
        </p>
        <p className="text-center">{/* <JoinTalentPoolButton /> */}</p>
      </div>
    );
  }
  return <div>{content}</div>;
}
