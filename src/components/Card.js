import { useState } from "react";
import { MdCloudDownload } from "react-icons/md";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import data from "../data.js";

function Card() {
  const [get, setGet] = useState(false);

  const getHandle = async () => {
    console.log("Hello World!");
    setGet(true);
    setTimeout(() => {
      setGet(false);
    }, 5000);
  };

  // const toogleGetButton = (id) => {

  // }

  return (
    <>
      {data.map((api) => (
        <div
          key={api.id}
          className="bg-slate-800 text-white p-3 border-2 border-solid border-slate-700 mt-3 mx-3 rounded-md"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={api.image} alt="Card Img" className="w-10 h-10" />
              <h5 className="text-xl font-bold">{api.name}</h5>
            </div>
            <a
              href={api.url}
              className="flex gap-2 items-center justify-center bg-slate-900 text-white rounded-md px-6 h-9"
              onClick={getHandle}
            >
              <MdCloudDownload />
              <span className="text-base font-medium">GET</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>Latest: </span>
            <span className="font-semibold"> {api.rate}</span>
            <div className="flex gap-1">
              <AiFillAndroid className="fill-green-500" />
              <AiFillApple className="fill-green-500" />
            </div>
          </div>
          {
            get && <ProgressBar progressPercentage={78} name={api.name} />
          }
          {/* <ProgressBar progressPercentage={78} name={api.name} /> */}
        </div>
      ))}
    </>
  );
}

const ProgressBar = ({ progressPercentage, name }) => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <span className="font-font-extralight">
        Signing <span className="font-bold">{name}</span>
      </span>
      <div className="h-2 w-full bg-gray-300 mt-1">
        <div
          style={{ width: `${progressPercentage}%` }}
          className="h-full bg-green-600"
        ></div>
      </div>
    </div>
  );
};

// function Card() {
//   return (
//     <div className="bg-slate-800 text-white p-3 border-2 border-solid border-slate-700 mt-3 mx-3 rounded-md">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <img
//             src="https://user-images.githubusercontent.com/50423368/205971280-42d6c038-0828-442a-887a-a431ab9f6c74.svg"
//             alt="Card Image"
//             className="w-10 h-10"
//           />
//           <h5 className="text-xl font-bold">Snapchat++</h5>
//         </div>
//         <a
//           href="#"
//           className="flex gap-2 items-center justify-center bg-slate-900 text-white rounded-md px-6 h-9"
//           onClick={getHandle}
//         >
//           <MdCloudDownload />
//           <span className="text-base font-medium">GET</span>
//         </a>
//       </div>
//       <div className="flex items-center gap-2">
//         <span>Latest: </span>
//         <span className="font-semibold"> 4.9</span>
//         <div className="flex gap-1">
//           <AiFillAndroid className="fill-green-500" />
//           <AiFillApple className="fill-green-500" />
//         </div>
//       </div>
//     </div>
//   );
// }

export default Card;
