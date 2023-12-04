import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full">
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-0  shadow-lg">
        <div className=" h-[80vh] bg-white flex flex-col items-center justify-center ">
          <h1 className="text-4xl text-center py-4">
            We&apos;re making it easy to summarize and gain insights into your
            documents{" "}
          </h1>
          <a
            className="group relative inline-block text-sm font-medium text-slate-900 focus:outline-none focus:ring active:text-indigo-500"
            href="/dashboard"
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

            <span className="relative block border border-current bg-white px-8 py-3">
              Find out how
            </span>
          </a>
        </div>
        <div
          className="h-[80vh] bg-cover bg-no-repeat  bg-slate-900 lg:col-span-2"
          style={{ backgroundImage: `url(/insightful.jpg)` }}
        ></div>
      </div>
    </main>
  );
}
/**
 * 
 * <div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="flex items-center justify-center row-span-3 bg-blue-300">01</div>
  <div className="col-span-2 bg-green-500">02</div>
  <div className="row-span-2 col-span-2 bg-slate-500">03</div>
</div>
 */
