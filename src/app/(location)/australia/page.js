//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: '  Academic Jobs Australia',
  },
  description:
    'Browse through hundreds of opportunities in higher education and research across various disciplines and institutions in Australia today. ',
  keywords: 'Academic Jobs Australia. university jobs Australia, Uni jobs Australia',
};
export default function Page() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, []);
  return (
    <div>
      <div className="pt-[8rem] flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-au.gif"
          alt="AcademicJobs Logo"
          className="  mb-[1rem] "
          width={330}
          height={220}
        />
      </div>
      <JobSearchBox l="Australia" />


      <div className=" mt-[10rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li className="">
              <Link href="/Australia/lecturer/"> Lecturer</Link>
            </li>
            <li className="">
              <Link href="/Australia/research/"> Research </Link>
            </li>
            <li className=" ">
              <Link href="/Australia/professor/"> Professor</Link>
            </li>
            <li>
              <Link href="/Australia/faculty/"> Faculty</Link>
            </li>
          </ul>
          <li>
            <Link href="/Australia/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/Australia/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/Australia/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/Australia/student/"> Student</Link>
          </li>
          <li>
            <Link href="/Australia/indigenous/">Indigenous</Link>
          </li>
          <li>
            <Link href="/Australia/graduate/">Graduate</Link>
          </li>
          <li>
            <Link href="/Australia/phd/">PhD</Link>
          </li>
        </ul>
      </div>
      <div className=" mt-4 ">
        <ul className=" flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <li>
            <Link href="/online/"> Online </Link>
          </li>
          <li>
            <Link href="/jobs/remote/"> Remote</Link>
          </li>
          <li>
            <Link href="/jobs/full-time/">Full-Time</Link>
          </li>
          <li>
            <Link href="/jobs/part-time/"> Part-Time</Link>
          </li>
          <li>
            <Link href="/jobs/casual/"> Casual</Link>
          </li>
        </ul>
      </div>
      <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6 ">
        <a href="#section" class="scroll-smooth md:scroll-auto">
          ▼
        </a>
      </div>

      <div className="content-grid mx-auto">
        <div
          id="section"
          className="bg-slate-200 full-width py-4 mt-[30rem] full-width mb-[90px]"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS Australia:
              </span>{' '}
              <br /> Academic, research &&nbsp;science positions locally &
              globally
            </h1>

            <div>
              <p className="px-7 mb-4 mt-1">
              Australia’s No.1 university job website! Seek uni jobs in Australia at Academic Jobs, where we list all the best jobs for academics globally! Academic Jobs provides an extensive list of opportunities for the future of your career in education, carefully sectioning the top Higher Ed jobs to curate the best fitting position for you.

              </p>
              <p className="px-7">
              The No.1 job board for academics in Australia for all your uni jobs requirements, from seeking to recruiting, look no further. In just a few simple steps you can be in the running for your dream uni job!</p>
              <p className="px-7">
            Find all the best jobs here…</p>
            </div>
          </div>

          <p className="font-semibold"></p>
          <ul className="flex flex-wrap text-justify space-between gap-6 px-7 pb-4  text-[#f4a10c] mx-auto">
            <li>
              <Link href="/melbourne/"> Melboune </Link>
            </li>
            <li>
              <Link href="/sydney/"> Sydney</Link>
            </li>
            <li>
              <Link href="/brisbane/">Brisbane</Link>
            </li>
            <li>
              <Link href="/gold-coast/"> Gold Coast</Link>
            </li>
            <li>
              <Link href="/canberra/"> Canberra</Link>
            </li>
            <li>
              <Link href="/perth/"> Perth</Link>
            </li>
            <li>
              <Link href="/adelaide/"> Adelaide</Link>
            </li>
            <li>
              <Link href="/tasmania/"> Tasmania</Link>
            </li>
            <li>
              <Link href="/hobart/"> Hobart</Link>
            </li>
            {/* <li>
              <Link href="/adelaide/"> Adelaide</Link>
            </li> */}
          </ul>
          <div className="  flex flex-wrap gap-6 px-7 pb-4 text-gray-400 mx-auto">
            <Link href="/Australia/faq/"> Aus FAQ</Link>
            <Link href="/groupof8/"> Group Of 8</Link>{' '}
          </div>
        </div>

        <h2 className="underline-full">
          Top Australian Universities To Work For
        </h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 pb-8">
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <Link
                      href="/employers/queensland-university-of-technology-qut-/3786/"
                      className="text-[#003463] font-bold"
                    >
                      Queensland University of Technology (QUT)
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="/jobs/QUT-lecturer/">QUT Lecturing Jobs</Link>
                    </li>
                    <li>
                      <Link href="/jobs/QUT-research/">QUT Research Jobs</Link>
                    </li>
                    <li>
                      <Link href="/jobs/QUT-professor/">
                        QUT Professorial Jobs
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs/QUT-Executive/">QUT Executive</Link>
                    </li>
                    <li>
                      <Link href="/jobs/QUT-Administration/">
                        QUT Administration
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs/QUT-Human-Resources/">
                        QUT Human Resources
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <Link
                      href="/employers/bond-university/3785/"
                      className="text-[#f1b821] font-bold"
                    >
                      Bond University
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="/jobs/bond-lecturer/">
                        Bond Lecturing Jobs
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs/bond-research/">
                        Bond Research Jobs
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs/bond-professor/">
                        Bond Professorial Jobs
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs/bond-Executive/">Bond Executive</Link>
                    </li>
                    <li>
                      <Link href="/jobs/bond-Administration/">
                        Bond Administration
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs/bond-Human-Resources/">
                        Bond Human Resources
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <Link
                      href="/employers/the-university-of-adelaide/3737/"
                      className="text-[#A51C30] font-bold"
                    >
                      University of Adelaide
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="/jobs/Adelaide/">
                        Adelaide Lecturing Jobs
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs/Adelaide/">Adelaide Research Jobs</Link>
                    </li>
                    <li>
                      <Link href="/jobs/Adelaide/">
                        Adelaide Professorial Jobs
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs/Adelaide/">Adelaide Executive</Link>
                    </li>
                    <li>
                      <Link href="/jobs/Adelaide/">
                        Adelaide Administration
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs/Adelaide/">
                        Adelaide Human Resources
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <Link
                      href="/employers/university-of-western-australia/3173/"
                      className="text-[#192847] font-bold"
                    >
                      University of Western Australia
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="/jobs/western/">UWA Lecturing Jobs</Link>
                    </li>
                    <li>
                      <Link href="/jobs/western/">UWA Research Jobs</Link>
                    </li>
                    <li>
                      <Link href="/jobs/western/">UWA Professorial Jobs</Link>
                    </li>
                    <li>
                      <Link href="/jobs/western/">UWA Executive</Link>
                    </li>
                    <li>
                      <Link href="/jobs/western/">UWA Administration</Link>
                    </li>
                    <li>
                      <Link href="/jobs/western/">UWA Human Resources</Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="myUniversity" class="myUniversity">
          <div class="widget__text-block1">
            <div>
              <h2 className="underline-full">
                Academic Jobs Australia: All University Jobs
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                <ul>
                  <li className="mb-1 ">
                    <Link
                      href="/jobs/act/"
                      className="text-[#f4a10c] font-bold"
                    >
                      ACT
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/australian-national-university/3739/">
                      Australian National University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-canberra/3821/">
                      University of Canberra
                    </Link>
                  </li>
                  <li className="mb-1 ">
                    <Link
                      href="/jobs/new-south-wales/"
                      className="text-[#f4a10c] font-bold"
                    >
                      New South Wales
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/the-university-of-sydney/3171/">
                      The University of Sydney
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-new-south-wales/3738/">
                      University of New South Wales
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/charles-sturt-university/3855/">
                      Charles Sturt University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/australian-catholic-university/3853/">
                      Australian Catholic University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/southern-cross-university/3862/">
                      Southern Cross University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-technology-sydney/3864/">
                      University of Technology, Sydney
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/macquarie-university/3881/">
                      Macquarie University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-new-england/3209/">
                      University of New England
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-newcastle/3863/">
                      University of Newcastle
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-western-sydney/3865/">
                      University of Western Sydney
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-wollongong/3866/">
                      University of Wollongong
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="mb-1 ">
                    <Link
                      href="/jobs/victoria/"
                      className="text-[#f4a10c] font-bold"
                    >
                      Victoria
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employers/university-of-melbourne/3170/
                                        "
                    >
                      The University of Melbourne
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employers/monash-university/3182/
                                        "
                    >
                      Monash University
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employers/victoria-university/3871/
                                    "
                    >
                      Victoria University
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employers/university-of-divinity/3872/
                                    "
                    >
                      University of Divinity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employers/swimburne-university-of-technology/10541/
                                    "
                    >
                      Swinburne University of Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employers/rmit-university/3869/
                                    "
                    >
                      RMIT University
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employers/la-trobe-university/3868/
                                    "
                    >
                      La Trobe University
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employers/deakin-university/3856/
                                    "
                    >
                      Deakin University
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employers/federation-university/3787/
                                    "
                    >
                      Federation University Australia
                    </Link>
                  </li>
                  <li className="mb-1 ">
                    <Link
                      href="/jobs/tasmania/"
                      className="text-[#f4a10c] font-bold"
                    >
                      Tasmania
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="h/employers/university-of-tasmania/3867/
                                    "
                    >
                      The University of Tasmania
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="mb-1 ">
                    <Link
                      href="/jobs/queensland/"
                      className="text-[#f4a10c] font-bold"
                    >
                      Queensland
                    </Link>
                  </li>
                  <li className="text-[#003463] ">
                    <Link href="/employers/queensland-university-of-technology-qut-/3786/">
                      Queensland University of Technology (QUT)
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/employers/bond-university/3785/
                                    "
                    >
                      Bond University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-queensland/3172/">
                      The University of Queensland
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/cquniversity/3854/">
                      CQUniversity
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/griffith-university/3860/">
                      Griffith University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/james-cook-university/3857/">
                      James Cook University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-southern-queensland/3861/">
                      University of Southern Queensland
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-sunshine-coast/3859/">
                      University of Sunshine Coast
                    </Link>
                  </li>
                  <li className="mb-1 ">
                    <Link
                      href="/jobs/northern-territory/"
                      className="text-[#f4a10c] font-bold"
                    >
                      Northern Territory
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/charles-darwin-university/3880/">
                      Charles Darwin University
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="mb-1 ">
                    <Link
                      href="/jobs/south-australia/"
                      className="text-[#f4a10c] font-bold"
                    >
                      South Australia
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/the-university-of-adelaide/3737/">
                      The University of Adelaide
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/carnegie-mellon-university/3146/">
                      Carnegie Mellon University
                    </Link>{' '}
                  </li>
                  <li>
                    <Link href="/employers/torrens-university-australia/3875/">
                      Torrens University Australia
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-south-australia/3874/">
                      University of South Australia
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/flinders-university/3873/">
                      Flinders University
                    </Link>
                  </li>
                  <li className="mb-1 ">
                    <Link
                      href="/jobs/western-australia/"
                      className="text-[#f4a10c] font-bold"
                    >
                      Western Australia
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-western-australia/3173/">
                      The University of Western Australia
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/university-of-notre-dame/3879/">
                      University of Notre Dame
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/murdoch-university/3878/">
                      Murdoch University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/edith-cowan-university/3877/">
                      Edith Cowan University
                    </Link>
                  </li>
                  <li>
                    <Link href="/employers/curtin-university/3876/">
                      Curtin University
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
