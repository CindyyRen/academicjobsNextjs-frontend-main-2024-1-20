import Image from 'next/image';
import Link from 'next/link';
import LogoAJ from '@/components/brand/LogoAJ';
import type { Metadata } from 'next';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
import JobCategoryAndLocationLinks from '@/components/links/JobCategoryAndLocationLinks';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute:
      '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily.',
  keywords:
    'Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs',
};

export default function myPage() {
  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  return (
    <main className="content-grid">
      <div className="flex flex-col items-center justify-center mb-32">
        <div className="h-[27vh] flex flex-col items-end justify-end">
          <LogoAJ forceClass="logo" width={310} height={210} />
        </div>
        {/* Job Search Form */}
        <div className="w-full md:w-3/6 h-[6vh] flex flex-col items-top mt-[-1rem]">
          <JobSearchBoxHome />
        </div>
      </div>

      <JobCategoryAndLocationLinks />

      <a href="/jobelephant-recruitment"><Image
              width={180}
              height={170}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/JobElephantClientCenter.jpg"
              className="rounded-3xl mt-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto"
              alt="AI Powered Recruitment Platform"
                         /> </a>

      <a
        href="#section"
        className="scroll-smooth md:scroll-auto text-[#f4a10c] flex flex-col items-center justify-center text-2xl animate-bounce h-6 pt-12 mb-[16rem]"
      >
        ▼
      </a>

      {/* Hero Panel */}
      {/* <div
        id="section"
        className="hero-content flex-col lg:flex-row mx-auto items-start py-12 bg-slate-200 breakout full-width prose w-fit"
      ><div>
        <h1 className="text-3xl md:text-6xl font-normal text-gray-500 mt-12 text-right">
          ACADEMIC JOBS: Academic, research &&nbsp;science positions locally & globally
        </h1>
        <h2 className="mt-0 text-right">
          Academic, research &&nbsp;science positions locally & globally
        </h2>
        </div>
        <div className="text-col-2 mb-12">
          <p>
            Discover top-tier faculty and administrative roles in the world of
            higher education. Begin your search for university academic jobs,
            college faculty positions, and administrative opportunities in
            higher ed. Explore and apply for a range of roles, including
            lecturer, researcher, university administrator, and senior academic
            positions, available nationally and internationally.
          </p>
          <p>
            Whether you&apos;re an aspiring or established professor,
            researcher, lecturer, or higher education administrator, our
            platform offers the most current opportunities in academia globally.
            Connect with your next career move in the academic sector through
            our comprehensive online job board. Find your next academic job now!
          </p>
        </div>
      </div> */}

      <div id="section" className="bg-slate-200 full-width py-4 mb-16">
        <div className="md:hero-content flex flex-col lg:flex-row mx-auto md:items-start py-12">
          <h1 className="text-3xl font-normal sm:text-right text-gray-400 m-0 pb-8 px-7 md:px-0">
            <span className="md:text-6xl font-bold text-gray-500 pb-4 ">
              ACADEMIC&nbsp;JOBS:
            </span>{' '}
            Academic, research &&nbsp;science positions locally & globally
          </h1>

       

          <div>
            <p className="px-7 mb-4 mt-1">
              Discover top-tier faculty and administrative roles in the world of
              higher education. Begin your search for university academic jobs,
              college faculty positions, and administrative opportunities in
              higher ed. Explore and apply for a range of roles, including
              lecturer, researcher, university administrator, and senior
              academic positions, available nationally and internationally.
            </p>
            <p className="px-7">
              Whether you&apos;re an aspiring or established professor,
              researcher, lecturer, or higher education administrator, our
              platform offers the most current opportunities in academia
              globally. Connect with your next career move in the academic
              sector through our comprehensive online job board. Find your next
              academic job now!
            </p>
          </div>
        </div>
      </div>



      {/* <p className="px-7 text-center mt-5">
            <Link
              className="link  text-[#f4a10c] font-bold text-2xl hover:text-orange-500"
              href="/global-academic-awards-2023-nominations"
            >
              Do you know someone deserving, nominate them for the 'Global&nbsp;
              Academic&nbsp;Awards 2023'&nbsp;NOW
            </Link>
          </p> */}
      <h2 className="underline-full">Top Academic Jobs Today</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/postdoctoral-position-in-multiplexed-single-cell-rnaseq-based-antibody-discovery/81986"
                    className="text-blue-500 font-bold"
                  >
                    Postdoctoral position in multiplexed single-cell
                    RNAseq-based antibody discovery
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">École Polytechnique</Link>
                  </li>
                  <li>
                    <Link href="">Lausanne, Switzerland</Link>
                  </li>
                  <li>
                    <Link href="">Feb 5, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/assistant-professor-associate-professor-of-economics/81980/"
                    className="text-blue-500 font-bold"
                  >
                    Assistant Professor/Associate Professor of Economics
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of North Carolina Wilmington</Link>
                  </li>
                  <li>
                    <Link href="">Wilmington, North Carolina, USA</Link>
                  </li>
                  <li>
                    <Link href="">Feb 5, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/tenured-professor-epidemiology/81981"
                    className="text-blue-500 font-bold"
                  >
                    Tenured Professor - Epidemiology
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">
                      Rutgers, The State University of New Jersey
                    </Link>
                  </li>
                  <li>
                    <Link href="">New Brunswick, New Jersey, USA</Link>
                  </li>
                  <li>
                    <Link href="">Feb 5, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="https://www.academicjobs.com/jobs/immunogenetics-and-histocompatibility-laboratory-director-health-sciences-open-rank-clinical-professor/73108/"
                    className="text-blue-500 font-bold"
                  >
                    Immunogenetics and Histocompatibility Laboratory
                    Director/Health Sciences Open Rank Clinical Professor
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of California, Los Angeles</Link>
                  </li>
                  <li>
                    <Link href="">Los Angeles, CA, USA</Link>
                  </li>
                  <li>
                    <Link href=""> Aug 3, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
          <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/assistant-associate-professor-of-environmental-toxicology-tenure-track-appointment/78925/"
                    className="text-blue-500 font-bold"
                  >
                    Assistant/Associate Professor of Environmental Toxicology
                    (tenure track appointment)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of California Davis</Link>
                  </li>
                  <li>
                    <Link href="">Davis, CA, USA</Link>
                  </li>
                  <li>
                    <Link href="">Feb 14, 2024</Link> 
                  </li>
                  <Link href="https://apptrkr.com/get_redirect.php?id=4867143" className="btn btn-sm btn-aj mt-4"> 
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/disability-support-programs-and-services-dsps-full-time-tenure-track-counselor/82203"
                    className="text-blue-500 font-bold"
                  >
                    Disability Support Programs and Services (DSPS) Full-Time Tenure Track Counselor
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Cuesta College</Link>
                  </li>
                  <li>
                    <Link href="">San Luis Obispo County, California,USA</Link>
                  </li>
                  <li>
                    <Link href="">Feb 19, 2024</Link>
                  </li>
                  <Link href="https://apptrkr.com/get_redirect.php?id=4938583" className="btn btn-sm btn-aj mt-4"> 
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/postdoctoral-fellow-in-comparative-radiobiology-translational-radiopharmaceutical-development-and-boron-neutron-capture-therapy-bnct-/82181"
                    className="text-blue-500 font-bold"
                  >
                    Postdoctoral Fellow in Comparative Radiobiology, Translational Radiopharmaceutical Development, and Boron Neutron Capture Therapy (BNCT)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Missouri System</Link>
                  </li>
                  <li>
                    <Link href="">Columbia, Missouri, USA</Link>
                  </li>
                  <li>
                    <Link href="">Mar 11, 2024</Link>
                  </li>
                  <Link href="https://apptrkr.com/get_redirect.php?id=4922759" className="btn btn-sm btn-aj mt-4"> 
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/assistant-to-associate-dean-of-undergrad-programs/82206"
                    className="text-blue-500 font-bold"
                  >
                    Assistant to Associate Dean of Undergrad Programs
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Oregon State University</Link>
                  </li>
                  <li>
                    <Link href="">Corvallis, USA</Link>
                  </li>
                  <li>
                    <Link href="">Apr 16, 2024</Link>
                  </li>
                  <Link href="https://apptrkr.com/get_redirect.php?id=4929143" className="btn btn-sm btn-aj mt-4"> 
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
          </div>
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/career-advisor-senior-career-advisor/82180"
                    className="text-blue-500 font-bold"
                  >
                    Career Advisor/Senior Career Advisor
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of the Pacific</Link>
                  </li>
                  <li>
                    <Link href="">Stockton, CA, USA</Link>
                  </li>
                  <li>
                    <Link href="">Mar 11, 2024</Link>
                  </li>
                  <Link href="https://apptrkr.com/get_redirect.php?id=4921373" className="btn btn-sm btn-aj mt-4"> 
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/information-technology-faculty/82182"
                    className="text-blue-500 font-bold"
                  >
                    Information Technology Faculty
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">North Central State College</Link>
                  </li>
                  <li>
                    <Link href="">2441 Kenwood Circle, Mansfield, OH, USA</Link>
                  </li>
                  <li>
                    <Link href="">Mar 15, 2024</Link>
                  </li>
                  <Link href="https://apptrkr.com/get_redirect.php?id=4931492" className="btn btn-sm btn-aj mt-4"> 
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/lecturer-chemical-and-environmental-engineering/80802"
                    className="text-blue-500 font-bold"
                  >
                    Lecturer, Chemical and Environmental Engineering
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Yale University</Link>
                  </li>
                  <li>
                    <Link href="">New Haven, CT, USA</Link>
                  </li>
                  <li>
                    <Link href="">May 31, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/program-coordinator-pre-professional-programs/82178"
                    className="text-blue-500 font-bold"
                  >
                    Program Coordinator- Pre-Professional Programs
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Southern Utah University</Link>
                  </li>
                  <li>
                    <Link href="">Cedar City, UT, USA</Link>
                  </li>
                  <li>
                    <Link href="">Mar 10, 2024</Link>
                  </li>
                  <Link href="https://apptrkr.com/get_redirect.php?id=4918224" className="btn btn-sm btn-aj mt-4"> 
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>

            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/phd-students-call-for-expressions-of-interest-multiple-topics-faculty-of-law/78929"
                    className="text-blue-500 font-bold"
                  >
                    PhD Students- Call for Expressions of Interest - Multiple
                    Topics, Faculty of Law
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Bond University</Link>
                  </li>
                  <li>
                    <Link href="">Robina QLD, Australia</Link>
                  </li>
                  <li>
                    <Link href="">Apr 1, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/lecturer-senior-lecturer-associate-professor-professor-of-structural-engineering-timber/78822"
                    className="text-blue-500 font-bold"
                  >
                    Lecturer/Senior Lecturer/Associate Professor/Professor of
                    Structural Engineering - Timber
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Canterbury</Link>
                  </li>
                  <li>
                    <Link href="">Christchurch, New Zealand</Link>
                  </li>
                  <li>
                    <Link href="">Jan 28, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/provost/79513"
                    className="text-blue-500 font-bold"
                  >
                    Provost
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of North Carolina Asheville</Link>
                  </li>
                  <li>
                    <Link href="">Asheville, NC, USA</Link>
                  </li>
                  <li>
                    <Link href=""> Feb 18, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="https://www.academicjobs.com/jobs/clinical-positions-in-cardiology-central-coast-2023-2024/73047/"
                    className="text-blue-500 font-bold"
                  >
                    Clinical Positions in Cardiology (Central Coast) 2023-2024
                    Apply Now
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of California, Los Angeles</Link>
                  </li>
                  <li>
                    <Link href="">Los Angeles, CA, USA</Link>
                  </li>
                  <li>
                    <Link href="">Jun 29, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link className="text-[#f4a10c] mt-4 mb-4 px-2 font-bold" href="/jobs/">
        view more top jobs →
      </Link>
      
      {/* <div className="ml-2">
      {/* <Link                 href="https://cportal.jobelephant.com/login"
                 className="btn text-white mt-8 bg-[#265882] px-4"
               >
                  Post Your JobElephant Now
               </Link></div> */} 

      <h2 className="underline-full mt-20">Top Cities for Uni Jobs</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/USA/" className="text-[#f4a10c] font-bold">
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
                  <Link href="/Australia/" className="text-[#f4a10c] font-bold">
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
                  <Link href="/UK/" className="text-[#f4a10c] font-bold">
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
                  <Link href="/Canada/" className="text-[#f4a10c] font-bold">
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
                  <Link href="/Asia/" className="text-[#f4a10c] font-bold">
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
                  <Link href="/Europe/" className="text-[#f4a10c] font-bold">
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

      {/* WIP */}
      {/* <h2 className="underline-full mt-20">Top Universities To Work For</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="https://www.academicjobs.com/employers/queensland-university-of-technology/3786/"
                    className="text-[#003463] font-bold"
                  >
                    Queensland University of Technology (QUT)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-lecturer/">QUT Lecturing Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-research/">QUT Research Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-professor/">
                      QUT Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-Executive/">QUT Executive</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-Administration/">
                      QUT Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-Human-Resources/">
                      QUT Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-jobs/">QUT Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="/employers/bond-university/3785/"
                    className="text-orange-500 font-bold"
                  >
                    Bond University
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/bond-lecturer/">Bond Lecturing Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-research/">Bond Research Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-professor/">
                      Bond Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-Executive/">Bond Executive</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-Administration/">
                      Bond Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-Human-Resources/">
                      Bond Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-jobs/">Bond Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="/employers/harvard-university/3100/"
                    className="text-[#A51C30] font-bold"
                  >
                    Harvard University
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-lecturer/">
                      Harvard Lecturing Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-research/">
                      Harvard Research Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-professor/">
                      Harvard Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-Executive/">
                      Harvard Executive
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-Administration/">
                      Harvard Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-Human-Resources/">
                      Harvard Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-jobs/">Harvard Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="https://www.academicjobs.com/employers/university-of-california-san-diego/3149/"
                    className="text-[#192847] font-bold"
                  >
                    University of California Las Angeles (UCLA)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-lecturer/">UCLA Lecturing Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-research/">UCLA Research Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-professor/">
                      UCLA Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-Executive/">UCLA Executive</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-Administration/">
                      UCLA Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-Human-Resources/">
                      UCLA Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-jobs/">UCLA Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <h2 className="underline-full mt-20">
        The University Rankings/ Top Academic Careers
      </h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
            <div className="column">
              <ul className="">
                <ul className="pb-4">
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

      {/* These are broken */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Link
          href="/job-type/"
          className="btn btn-white border-4 shadow-md leading-none"
        >
          → Find Academic<span className="font-bold"> Job-Types</span>{' '}
          <span className="hide-mobile">(i.e. Professor, Fellow)</span>
        </Link>
        <Link
          href="/industry/"
          className="btn btn-white border-4 shadow-md leading-none"
        >
          → Find Academic Positions in
          <span className="font-bold"> Industry</span>
          <span className="hide-mobile">
            (i.e. laboratory technical services)
          </span>
        </Link>
      </div> */}
    </main>
  );
}
