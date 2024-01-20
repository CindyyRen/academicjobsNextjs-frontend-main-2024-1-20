import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import PricingTable from '@/components/PricingTable';
export const metadata: Metadata = {
  title: 'Post a job - Recruit Academics', //Option 1 replaces the %s in layout.tsx
  // title: {
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
      cta: "Get a Free Featured Job Listing Everytime",
      currencySymbol: "",
      basic: "Post Your Job Now",
      basicPrice: 111,
      business: "exclusive to JobElephant Memebers",
      businessPrice: 1,
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
  
  I would like to post my Institutional Profile. 
            
  ---Please Post the following for me…
            
  
            `);
    }
  
  return (
    <>
      <main className="">
        <div className="blurb text-left ">
          {/* Hero banner */}
          <div className="hero max-h-fit bg-white ">
            <div className=" mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-8">
                <Image
                  width={300}
                  height={300}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/jobelephant.gif"
                  className="lg:max-w-lg rounded-lg mb-8 lg:mb-0 bg-white"
                  alt="AI Powered Recruitment Platform"
                />
                <div>
                  <h1 className="text-xl text-[#265882]">
                  <span className="text-4xl md:text-7xl font-bold text-right pb-4 text-[#c1d72e]">Welcome to <br/> the JobElephant <br/> client center!&nbsp;</span> <br/>
                  </h1>
                  
                  {/* {/* <p className="pt-6 font-bold">
                  Get a Free Featured Job Listing Everytime
                  </p> */}
                  <p className=" font-bold text-[#265882] text-xl">
                  Making it easy for you to post all your jobs on AcademicJobs.com  <br/>Your #1 college and university job board... for price, reach and results
                  </p> 
                  {/* <a href="#pricing-table-cards" className="btn btn-aj">
                    Post a Job
                  </a> */}

<Link
                 href="https://cportal.jobelephant.com/login"
                 className="btn text-white mt-1 bg-[#265882]"
               >
                  Post Your Job Now
               </Link>

                </div>
              </div>
            </div>
          </div>

          <div className=" mx-auto bg-slate-200">
              <div className="hero-content flex-col lg:flex-row md:gap-8 max-w-screen-lg mx-auto">
<p className="p-8  md:text-2xl font-bold  text-gray-600">
                  Get YOUR FREE college or university PROFILE on AcademicJobs with your first job listing! 
                  </p>
                  <Link
                 href={`mailto:${emailAJ}?subject=${"Institutional Profile Details"}&body=${createMessage(
                  pricing.business,
                  pricing.businessPrice
                )}`}
                 className="btn btn-aj"
               >
                  Send Profile Details Now
               </Link>
              </div>
              </div>

          {/* Hero Banner */}
         
        

          

                  {/* Pricing Card 1 */}
                  <div className="hero max-h-fit bg-white ">
            <div className="max-w-screen-xl mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-12">
              <div  id="pricing-table-cards" className=" flex-1 mt-8 mb-8  bg-white shadow-xl rounded-3xl  md:max-w-screen-lg mx-auto p-8">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            {/* <Image  width="150"
            height="150"
            alt=""
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
             
              className="rounded-3xl w-20 h-20"
            /> */}
          
            <div className="ml-5">
            <span className="block text-6xl md:text-[5.3rem] font-semibold text-[#c1d72e]">
               Our Gift to You
              </span>
              <span className="block md:text-3xl font-semibold">
                {pricing.cta}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="md:text-5xl font-bold text-[#265882]">
                Stand Out Above the Rest
                </span>{" "}
              </span>
            </div>
          </div>


          
          {/* <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                The Offical <span className="text-black">Academic Job Board</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">Modern and Bold </span>to the dated and old job boards
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3 text-black">
                The #1 <span className="text-gray-500">Exclusive Academic Social Network that fills all university positions</span>
              </span>
            </li>
            {/* <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime </span>
              </span>
            </li> */}
          {/* </ul> */} 

          <Link
                 href="https://cportal.jobelephant.com/login"
                 className="btn text-white mt-8 bg-[#265882]"
               >
                  Post Your Job Now
               </Link>
        </div>


              <div className="md:w-1/3">
              <Image
                  width={1280}
                  height={300}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/On-Top.jpeg"
                  className="lg:max-w-lg rounded-3xl shadow-2xl mb-8 lg:mb-0 bg-white"
                  alt="AI Powered Recruitment Platform"
                />
     
                </div>
              </div>
            </div>
          </div>
 
      


        
        </div>

       


          <div className="hero max-h-fit bg-[#c1d72e] py-8">
            <div className=" mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-8 max-w-screen-lg">
                <Image
                  width={1200}
                  height={400}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Uni-San-Diego.jpeg"
                  className="lg:max-w-lg rounded-xl shadow-2xl mb-8 lg:mb-0 bg-white"
                  alt="AI Powered Recruitment Platform"
                />
                <div className="content-grid">
                  <h2 className="text-xl font-normal text-[#265882]">
                  <span className="text-3xl font-bold text-right pb-4 text-[#265882] ">You Get&nbsp;</span> <br/>'Priority Employer Branding' 
                  </h2>
                  <p className="pt-6">
                  When you have a job listing on AcademicJobs
                  </p>
               
                  {/* <a href="https://jobelephant.com/what-we-do/college-university/" className="btn mt-8 bg-[#265882] text-white">
                    JobElephant Website
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
              className=" rounded-xl mx-auto md:max-w-5xl my-12"
            />
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

