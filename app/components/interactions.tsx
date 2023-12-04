import Link from "next/link";

export default function interactions() {
  return (
    <div className=" h-screen grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className=" h-32 rounded-lg bg-gray-200">
        <Link href="/documents/analysis" className="group relative block h-64 sm:h-80 lg:h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 sm:h-12 sm:w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                Comprehensive Document Analysis and Comparison
              </h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                Go around the world
              </h3>

              <p className="mt-4 text-sm sm:text-base">
                Inspired by SEC Insights, this service allows users to deeply
                analyze complex documents, such as financial reports or legal
                documents. Users can select multiple documents for simultaneous
                examination, enabling the extraction of meaningful insights.
              </p>

              <p className="mt-8 font-bold">Explore</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="h-32 rounded-lg bg-gray-200">
        <Link href="/docuements/trends" className="group relative block h-64 sm:h-80 lg:h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <svg
                fill="none"
                className="h-10 w-10 sm:h-12 sm:w-12"
                viewBox="0 0 24 24"
               
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5885 3L17.0885 3.86603M20.5885 9.9282L20.0885 9.06218M17.0885 3.86603L11.0263 7.36603C10.548 7.64217 10.3841 8.25376 10.6603 8.73205V8.73205M17.0885 3.86603L20.0885 9.06218M20.0885 9.06218L14.0263 12.5622C13.548 12.8383 12.9364 12.6744 12.6603 12.1962V12.1962M10.6603 8.73205L5.4641 11.7321C4.98581 12.0082 4.82193 12.6198 5.09808 13.0981V13.0981M10.6603 8.73205L12.6603 12.1962M12.6603 12.1962L9.62917 13.9462M5.09808 13.0981L3.36603 14.0981C2.88773 14.3742 2.72386 14.9858 3 15.4641V15.4641C3.27614 15.9424 3.88773 16.1063 4.36603 15.8301L6.09808 14.8301M5.09808 13.0981L6.09808 14.8301M6.09808 14.8301V14.8301C6.37422 15.3084 6.98581 15.4723 7.4641 15.1962L9.62917 13.9462M9.62917 13.9462L13 20M9.62917 13.9462L7.09808 20"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>

              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                Trend Analysis and Insights
              </h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                Go around the world
              </h3>

              <p className="mt-4 text-sm sm:text-base">
                Discover emerging patterns and gain deeper insights with our
                trend analysis tool. This feature analyzes your collection of
                documents to identify key trends, recurring themes, and notable
                outliers.
              </p>

              <p className="mt-8 font-bold">Explore</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="h-32 rounded-lg bg-gray-200">
        <Link href="/" className="group relative block h-64 sm:h-80 lg:h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 sm:h-12 sm:w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-xl font-medium sm:text-2xl">Summary</h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                Summarize and explore your documents
              </h3>

              <p className="mt-4 text-sm sm:text-base">
                Dive into the essence of your documents with our powerful
                summarization tool. Whether it&apos;s lengthy reports, research
                papers, or comprehensive articles, our app condenses them into
                concise, easy-to-understand summaries. Not only will you save
                time, but you&apos;ll be able to ask questions about your documents,
                enabling a deeper understanding and exploration of the content.
              </p>

              <p className="mt-8 font-bold">Explore</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
