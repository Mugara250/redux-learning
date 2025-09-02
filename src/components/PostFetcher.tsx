import { useState } from "react";
import { useFetch } from "../features/useFetch";

const PostFetcher = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [urlToFetch, setUrlToFetch] = useState("");
  const [startFetch, setStartFetch] = useState(false);
  const { posts, retryFetch, loading, error } = useFetch(
    urlToFetch,
    startFetch
  );

  return (
    <div className="w-[70%]">
      <h1 className="text-[32px] font-bold">Post Fetcher</h1>
      <p className="text-lg text-gray-500{error.message}">
        Enter a URL to fetch and display posts
      </p>
      <div className="text-base mt-5 py-8 px-4 border-[1px] border-gray-200 rounded-xl">
        <h3 className="font-bold">Fetch Posts</h3>
        <p className="text-gray-500">
          Enter the API endpoint URL to fetch posts from
        </p>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Enter a URL to fetch data"
            value={urlToFetch}
            className="mt-5 py-1.5 px-2 border-[1px] border-gray-500 w-[80%] rounded-lg"
            onChange={(event) => {
              setInputUrl(event.target.value);
              setUrlToFetch(event.target.value);
            }}
          />
          <button
            className="bg-black text-white ml-5 py-2 px-2 rounded-lg"
            onClick={() => {
              setInputUrl("");
              setStartFetch(true);
            }}
            disabled={loading || !inputUrl.trim()}
          >
            Fetch
          </button>
          {(loading || posts || error) && (
            <button
              className="border-[1px] border-gray-400 bg-white text-black ml-2 py-2 px-2 rounded-lg"
              onClick={retryFetch}
              disabled={loading}
            >
              Retry
            </button>
          )}
        </div>
      </div>
      <div className="mt-6">
        {loading && (
          <>
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            <h1 className="text-[32px] font-bold">Loading...</h1>
          </>
        )}
        {error && (
          <>
            <h1 className="text-[32px] font-bold text-red-600">Error:</h1>
            <h2 className="text-[24px] font-semibold text-red-600">
              {error.message}
            </h2>
          </>
        )}
        {posts && !loading && (
          <>
            <h2 className="text-[24px] font-semibold">
              Posts ({posts.length})
            </h2>
            {posts.map(({ userId, id, title, body }) => (
              <div className="mt-8 border-[1px] border-gray-400 text-gray-500 py-8 px-5 flex flex-col gap-y-5 rounded-lg">
                <h3 className="text-base text-black font-bold">{title}</h3>
                <div>
                  <span>Post ID: {id}</span> |<span>User ID: {userId}</span>
                </div>
                <p>{body}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PostFetcher;
