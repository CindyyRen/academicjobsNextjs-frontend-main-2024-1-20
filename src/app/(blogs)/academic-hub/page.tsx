import { blogData } from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';
// import { BlogPostTypes } from '@/types/types';
import HeroBanner from '@/components/HeroBanner';
import { formatDate } from '@/utils/utilityScripts';

export default function BlogPosts() {
  // function formatDate(input: string) {
  //   const date = new Date(input);
  //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   return date.toLocaleDateString('en-US', options);
  // }

  console.log(blogData);
  return (
    <main className="content-grid">
      <HeroBanner
        h1="Academic Hub & Top Career Advice Today"
        para1="Are you looking for an academic hub, career advice, tips, and
        insights from academics and researchers? Check out these
        academic jobs blogs and learn from the experts in your field.
        Whether you are a PhD student, a postdoc, or a professor, you
        will find valuable information and inspiration to advance your
        academic career. Read these blogs now and discover the best
        opportunities and practices for academic hub."
        src="/job-ads/recruitment-post-a-job.jpg"
        alt="People immersed in academic blogs at our vibrant Academic Hub"
        btnPrimaryText="Join our Talent Pool"
        btnPrimaryURL="/talent-pool"
        reorder={false}
      />

      <h2 className="underline-full mb-8"> Top Academic Hub Posts</h2>

      {blogData ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.slice(0, 6).map((post, index) => (
              <article key={index} className="card bg-slate-100 shadow-xl">
                <figure>
                  <Image
                    src={post.image_url}
                    alt={post.alt}
                    width={800}
                    height={800}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title grow">
                    <Link
                      href={'/academic-hub/' + post.slug}
                      className="hover:text-orange-500 text-2xl"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <h3>By {post.author}</h3>
                  <p>
                    <time className="mr-4">
                      {formatDate(post.published_at)}
                    </time>
                    {post.updated_at !== '' ? (
                      <span className="text-slate-400">
                        Updated: <time>{formatDate(post.updated_at)}</time>
                      </span>
                    ) : null}
                  </p>
                  <p className="h-[130px] relative">
                    {post.summary}
                    <div className="blog-gradient"> </div>
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      href={'/academic-hub/' + post.slug}
                      className="btn btn-aj btn-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <h2 className="underline-full mt-16 mb-8">Academic Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {blogData.slice(6).map((post, index) => (
              <article
                key={index}
                className="card bg-slate-100 shadow-xl image-full"
              >
                <figure>
                  <Image
                    src={post.image_url}
                    alt={post.alt}
                    width={800}
                    height={800}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    <Link
                      href={'/academic-hub/' + post.slug}
                      className="text-white hover:text-orange-500 text-lg"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <div className="card-actions justify-end">
                    <Link
                      href={'/academic-hub/' + post.slug}
                      className="btn btn-aj btn-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}

      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.slice(0, 6).map((post, index) => (
          <article key={index} className="card bg-slate-100 shadow-xl">
            <figure>
              <Image
                src={post.image_url}
                alt={post.alt}
                width={800}
                height={800}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title grow">
                <Link
                  href={'/academic-hub/' + post.slug}
                  className="hover:text-orange-500 text-2xl"
                >
                  {post.title}
                </Link>
              </h2>
              <h3>By {post.author}</h3>
              <time>{post.published_at}</time>
              <p className="h-[130px] relative">
                {post.summary}
                <div className="blog-gradient"> </div>
              </p>
              <div className="card-actions justify-end">
                <Link
                  href={'/academic-hub/' + post.slug}
                  className="btn btn-aj btn-sm"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div> */}
    </main>
  );
}
