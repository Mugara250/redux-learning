import { useState, useEffect } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useFetch = (url: string, start: boolean) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [posts, setPosts] = useState<Post[]>();

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch posts");
      const posts: Post[] = await response.json();
      setPosts(posts);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (start) {
      fetchData(url);
    }
  }, [url, start]);

  return { posts, retryFetch: () => fetchData(url), loading, error };
};
