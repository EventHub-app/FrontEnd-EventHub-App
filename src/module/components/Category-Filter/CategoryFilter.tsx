
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
    <div className="text-xl w-full">
      <div className="lg:flex lg:justify-between w-full">
        <div className="w-full 0">
          <p className="font-bold text-zinc-800 lg:ml-10   mt-4 lg:mt-0 lg:text-start text-2xl lg:text-3xl">124 Profissionals Found</p>
          <p className="text-zinc-500 text-[15px] mt-2 ml-0 lg:ml-10 ">Showing top-rated result in Luanda</p>
        </div>
        <div className="flex items-center  md:justify-end  mt-4 lg:mt-0 lg:w-full">
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
<div className="lg:ml-10 mt-5 flex w-full overflow-x-auto gap-3 scrollbar-hide">
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
