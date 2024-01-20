import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import PricingTable from '@/components/PricingTable';
export const metadata: Metadata = {
  title: 'Post a job - Recruit Academics', //Option 1 replaces the %s in layout.tsx
  // title: {//
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'All prices are in USD, switch region to change prices. Ads are live for up to 60 days, and include the employer logo and ad performance metrics.',
  keywords: 'Post Academic Jobs, Post a Job AcademicJobs',
};

type PricingTypes = {
  cta: string,
  currencySymbol: string,
  basic: string,
  basicPrice: number,
  business: string,
  businessPrice: number,
  enterprise: string,
  enterprisePrice: number,
};






export default function Page() {


    const pricing: PricingTypes  = {
      cta: "Buy Single Job Post",
      currencySymbol: "",
      basic: "Let's Do It,   Post Now",
      basicPrice: 111,
      business: "exclusive to JobElephant",
      businessPrice: 1418,
      enterprise: "10 Job Pack",
      enterprisePrice: 2520,
    };

    

    
    
   
  
    const emailAJ = "jobelephant@academicjobs.com";
  
    const subjectBasic = `I would like to buy a Single Job listing`;
    const subjectBusiness = `I would like to buy a Single Job listing`;
    const subjectEnterprise = `I would like to buy a Single Job listing`;
  
    function formatNumberWithCommas(number: number) {
      return number.toLocaleString();
    }
  
    function createMessage(productName: string, price: number) {
      return encodeURIComponent(`Hi Academic Jobs,
  
  I would like to purchase the ${productName}. Please send me an
  invoice for $${formatNumberWithCommas(price)}.
            
  ---Please Post the following for me…
            
  
            `);
    }
  
  return (
    <>
      <main className="">
        <div className="blurb text-left pb-4">
          {/* Hero banner */}
          <div className="hero max-h-fit bg-slate-200 py-8">
            <div className=" mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-8">
                <Image
                  width={300}
                  height={300}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/jobelephant.gif"
                  className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0 bg-white"
                  alt="AI Powered Recruitment Platform"
                />
                <div>
                  <h1 className="text-xl font-normal">
                  <span className="text-7xl font-bold text-right pb-4">Welcome!&nbsp;</span> <br/>you've landed on the new AcademicJobs JobElephant portal 
                  </h1>
                  <p className="pt-6">
                    We've just made it easier for all JobElephant staff to post a job for all your clients 
                  </p>
                  <p className="pb-6 font-bold">
                    Simply email all your jobs through the link bellow 
                  </p>
                  {/* <a href="#pricing-table-cards" className="btn btn-aj">
                    Post a Job
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Banner */}
         
          <div className="">&nbsp;</div>

          

                  {/* Pricing Card 1 */}
                  <div className="hero max-h-fit bg-white py-8">
            <div className="max-w-screen-lg mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-12">
              <div  id="pricing-table-cards" className="md:w-1/2 flex-1 mt-8 mb-8 p-8 bg-white shadow-xl rounded-3xl  md:max-w-screen-sm mx-auto">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <Image  width="150"
            height="150"
            alt=""
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
             
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">
                {pricing.cta}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold">
                exclusive to JobElephant
                </span>{" "}
              </span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                30 day single<span className="text-black"> job listing</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">Free </span>employer account
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Ad<span className="text-black"> performance metrics</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime </span>
              </span>
            </li>
          </ul>

          <a
            href="https://www.postmyjob.online/jobelephant-portal"
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white text-3xl font-bold "
          >
           {pricing.basic}
          </a>
        </div>


              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold  text-[#f4a10c] "> THIS IS NEW... <br /> don't panic!</h1>
      <h4 className=" text-gray-700 text-3xl mt-4 font-normal">We are about to launch our new 'recruiter center'. In the meantime, send through your new job using the simple form button...</h4>
     
                </div>
              </div>
            </div>
          </div>
 
        <div className="max-w-xl mx-auto">
              <div className="hero-content flex-col lg:flex-row">
             
               
              </div>
            </div>


        
        </div>

       


          <div className="hero max-h-fit bg-[#c1d72e] py-8">
            <div className=" mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-8 max-w-screen-lg">
                <Image
                  width={1200}
                  height={400}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Web+capture_11-1-2024_161925_jobelephant.com.jpeg"
                  className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0 bg-white"
                  alt="AI Powered Recruitment Platform"
                />
                <div className="content-grid">
                  <h2 className="text-xl font-normal text-[#265882]">
                  <span className="text-3xl font-bold text-right pb-4 text-[#265882] ">Any university can use JobElephant, here's how:&nbsp;</span> <br/>Use JobElephant to load jobs on AcademicJobs! 
                  </h2>
                  <p className="pt-6">
                  Working with JobElephant to create and place your recruitment ads means you have an expert consulting partner that understands your resources and budgets, ensuring effective campaigns for each open position.
                  </p>
               
                  <a href="https://jobelephant.com/what-we-do/college-university/" className="btn mt-8 bg-[#265882] text-white">
                    JobElephant Website
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="hero max-h-fit bg-slate-200 py-8">
            <div className=" mx-auto max-w-screen-lg">
              <div className="hero-content flex-col lg:flex-row gap-8">
                <Image
                  width={300}
                  height={300}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/1690109738395.jpg"
                  className="lg:max-w-lg rounded-full shadow-2xl mb-8 lg:mb-0 bg-white"
                  alt="AI Powered Recruitment Platform"
                />
                <div>
                  <h1 className="text-3xl font-normal">
                  <span className="text-3xl font-bold text-right pb-4">It is a pleasure working with JobElephant
&nbsp;</span> <br/>and their amazing staff.
                  </h1>
                  <p className="pt-6 italic">
                  "AcademicJobs have partnered with JobElephant
to give amazing ‘job listings exposure’ to their
higher education clients, which in turn produces
great academic and staff candidates.

If you are a university or
college looking for a great advertising partner,
then JobElephant is a brilliant choice.""
                  </p>
                  <p className="pt-6 font-bold">
                  Jarrod Kanizay C.E.O - AcademicJobs.com
                  </p>
                  {/* <a href="#pricing-table-cards" className="btn btn-aj">
                    Post a Job
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          
     
        <div className=" bg-white p-4 ">
            <Image
              width={1280}
              height={380}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Jobelephant-Universities.png"
              alt="academicjobs university logos "
              className=" rounded-xl mx-auto max-w-5xl my-12"
            />
          </div>
     

        <section className="w-full mx-auto text-center ">
          <picture className=" min-w-full max-w-2xl mx-auto">
            <Image
              width={800}
              height={380}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/proudly-working-with.png"
              alt="job elephant logo"
              className="mx-auto bg-gray-200"
            />
          </picture>

      
        </section>
      </main>
    </>
  );
}

