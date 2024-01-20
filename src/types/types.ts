export type BlogPostTypes = {
  post: {
    status?: string | undefined;
    rank?: number;
    title?: string | undefined;
    slug?: string | undefined;
    author?: string | undefined;
    published_at?: string | undefined;
    updated_at?: string | undefined;
    image_url?: string | undefined;
    alt?: string | undefined;
    summary?: string | undefined;
    tags?: string[] | undefined;
    keywords?: string | undefined;
    content?: string | undefined;
  };
  columns?: number | undefined;
};
