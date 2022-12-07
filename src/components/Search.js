import { IoAppsSharp } from "react-icons/io5";

function Search({ value, placeholder }) {
  return (
    <form className="bg-slate-800 relative py-4 mt-6 rounded-md">
      <div className="absolute top-2 left-5">
        <IoAppsSharp className="fill-green-400 h-11 w-7" />
      </div>
      <input
        className="bg-transparent pl-14 outline-none w-full pr-4"
        type="text"
        value={value}
        placeholder={placeholder}
      />
    </form>
  );
}

export default Search;
