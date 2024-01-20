'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import SearchResults from '@/components/SearchResults';
import { useQuery } from '@tanstack/react-query';
import JobSearchBox from '@/components/JobSearchBox'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillShareFill } from 'react-icons/bs';
import { useParams } from 'next/navigation';
import BaseApi from '@/lib/store/Base';

// export const metadata = {
//   // title: 'About', //Option 1 replaces the %s in layout.tsx
//   title: {
//     absolute: "", //Option 2 overrides the title in layout.tsx
//   },
//   description:
//     '',
//   keywords: '',
// };



const Employer = () => {
  const [viewJob, setViewJob] = useState(false);
  const { id } = useParams();
  console.log(id);
  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['employer', id],
    queryFn: async () => {
      const response = await BaseApi.get(`employer/${id}`);
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    // enabled: id,
  });

  let content;
  if (isLoading) {
    content = (
      <div className="flex  w-full h-screen  justify-between ">
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
  } else if (isSuccess) {
    console.log(data);
    const {
      ranking,
      logo,
      company_name,
      website,
      company_description,
      location,
      Region,
      country,
    } = data;
    console.log(company_description);
    let location1 = '',
      company_description1 = '';
    if (company_description) {
      company_description1 = company_description;
    } else {
      if (Region) location1 = Region;
      if (country) location1 = country;
      if (location1) {
        company_description1 = `${company_name} is located at ${location1}.`;
      } else {
        company_description1 = `Welcome to ${company_name}. `;
      }
      company_description1 = `${company_description1}<br><br>
      For more information, join our Talent Pool`;
      if (website)
        company_description1 = `${company_description1}, or visit our university website at <a href=${website} style="text-decoration: underline; color: blue" >${website}</a>`;
      company_description1 = `${company_description1}<br><br>
      To advertise a Job for ${company_name}, please <a href="/post-job/" style="text-decoration: underline; color: blue" >click here</a><br><br>
      To join the  ${company_name} Talent Pool, please <a href="#" style="text-decoration: underline; color: blue" >click here</a>
      `;
    }
    content = (
      <div className="flex-col gap-4  mx-auto">
        <article
          className={`media ${
            company_name == 'Queensland University of Technology (QUT)'
              ? 'bg-blue-950'
              : 'bg-slate-200 w-full'
          } p-8 mb-4  mx-auto`}
        >
          <div className="md:flex md:justify-start .col-auto mx-auto max-w-screen-xl gap-4">
            <div className="w-[15rem] h-[15rem] mr-4  ">
              <Image
                //src={logo || '/favicon.png'}
                src={
                  `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` ||
                  '/favicon.png'
                }
                width={300}
                height={300}
                alt={`${company_name} Logo`}
                className="w-full h-full object-contain rounded-md bg-white "
                onError={(e) => {
                  e.target.src =
                    'https://academicjobs.s3.amazonaws.com/img/_misc/uni-profiles.png';
                }}
              />
            </div>
            <div className="md:flex md:flex-col p-4">
              <h1 className="text-4xl leading-[1rem] font-bold text-gray-500 ">
                {company_name}
              </h1>
              <div className='flex gap-2'>
                <p className="text-xl  leading-[.75rem]  font-bold text-yellow-500 ">Employer Ranking -</p>
                <p className="text-2xl  leading-[.75rem]  font-bold text-yellow-500 "> ★ {ranking}</p>
              </div>
             
              <div className="md:flex-col  md:gap-6 ml-[-3px] pt-6">
                <div className="text-gray-400 md:flex md:items-center md:justify-start md:gap-2 .col-auto">
                  <MdLocationPin />
                  {location}
                </div>
                {website && (
                  <div className="text-gray-400 md:flex md:items-center md:justify-start md:gap-2">
                    <AiOutlineGlobal />
                    <a href={website} className="">
                      {website}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
        {/* <div className="flex justify-start gap-4 mt-6 mb-2 pl-4">
          <div
            className={` cursor-pointer text-xl text-orange-400    ${
              viewJob || 'underline'
            }`}
            onClick={() => {
              setViewJob(false);
            }}
          >
            Institution Description
          </div>
          <div
            className={` cursor-pointer text-xl text-orange-400   ${
              viewJob && 'underline'
            }`}
            onClick={() => {
              setViewJob(true);
            }}
          >
            View Jobs
          </div>
          <div
            className=" hidden cursor-pointer text-xl text-orange-400  "
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector('#my-target').offsetTop,
                behavior: 'smooth',
              });
            }}
          >
            View Jobs
          </div>
        </div> */}
        <div className="content-grid mx-auto flex">
          <div className="flex">
          {viewJob ? (
            <SearchResults q={{ employer_id: id || 0 }} />
          ) : (
            <div
              className={`max-h-50 overflow-y  p-4 mb-4 rounded-lg  w-1/2 ${
                company_name == 'Bond University' && 'bg-[#f1b821]'
              } ${
                company_name == 'Queensland University of Technology (QUT)' &&
                'bg-blue-950'
              }`}
            >
              <div
                className={`wrapper  ${
                  company_name == 'Queensland University of Technology (QUT)' &&
                  'text-white'
                }`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: company_description1 }}
                />
                {company_name ===
                  'Queensland University of Technology (QUT)' && (
                  <style>
                    {`
        .wrapper span {
          color: white !important;
        }
        .wrapper a {
          color: yellow !important;
        }
      `}
                  </style>
                )}
                {company_name === 'Bond University' && (
                  <style>
                    {`
        .wrapper span {
          color: white !important;
        }
        .wrapper a {
          color: white !important;
        }
      `}
                  </style>
                )}
              </div>
            </div>


            
            
          )}{' '} 

          <div className="w-1/2 max-h-screen overflow-y-scroll "> 
          <JobSearchBox/>
          <SearchResults q={{ employer_id: id || 0 }} /> </div></div>

          <div className="hidden" id="my-target">
            <SearchResults id="about" q={{ employer_id: id || 0 }} />{' '}
          </div>
        </div>
      </div>
    );
  }
  return <div className="overflow-y w-full">{content}</div>;
};
export default Employer;
