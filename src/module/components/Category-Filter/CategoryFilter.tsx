
export default function CategoryFilter() {
  const categories = [
    "All Services",
    "DJ",
    "Cooker",
    "Photographer",
    "Designer",
    "Developer",
    "Electrician",
    "Plumber",
    "Mechanic",
    "Teacher",
    "Writer",
    "Driver",
    "Cleaner",
  ];
  return (
    <div className="text-xl ">
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-zinc-800 ml-10 text-3xl">124 Profissionals Found</p>
          <p className="text-zinc-500 text-[15px] mt-2 ml-10">Showing top-rated result in Luanda</p>
        </div>
        <div className="flex items-center">
          <p className="mr-4">Sort by:</p>
          <select className="border border-zinc-300 rounded p-2 outline-none">
            <option value="">TopRated</option>
            <option value="">TopRated</option>
            <option value="">TopRated</option>
            <option value="">TopRated</option>
            <option value="">TopRated</option>
            <option value="">TopRated</option>
            <option value="">TopRated</option>
          </select>
        </div>
      </div>
<div className="ml-10 mt-5 flex w-full overflow-x-auto gap-3 scrollbar-hide">
        {
          categories.map((item, i) => (
            <div key={i}>
               <button className={`text-white p-2 cursor-pointer ${i == 0 ? "bg-main":"text-zinc-500 border border-zinc-300"} rounded-full  whitespace-nowrap`}>{item}</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
