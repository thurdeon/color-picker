import { useContext } from "react";
import { TintShadyContext } from "../../store/tint-shady-context-provider";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import Values from "values.js";

export default function Shades() {
  const {color, shadeOrTint, copyColor} = useContext(TintShadyContext)
  

  const tints = new Values(`${color}`).shades(8);
  


  return (
    <>
      
      <div className={`m-6 ${color === '#ffff' ? 'animate-pulse': '' } `}>
          <h1 className="text-4xl font-bold my-8 text-center">SHADES</h1>
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {tints.map((shade, index) => (
              <div key={index} className="flex items-center justify-center">
                {color!=="#ffff" && `#${shade.hex}` === shadeOrTint ? <span className={`bg-white w-20 absolute mb-24 rounded-full text-center text-[#${shade.hex}] text-sm`}>copied</span>: ''}
                
              <li onClick={()=>copyColor(`#${shade.hex}`)} className="bg-gray-200 text-center rounded text-white cursor-pointer text-[17px] flex flex-col gap-4 items-center justify-center md:-p-10 p-8"  style={{
                backgroundColor: `#${shade.hex}`
              }}>
                {color !== '#ffff' && <span className="">             
                {`#${shade.hex}` === shadeOrTint ? <LuCopyCheck/> : <LuCopy/>}
                </span>}
                {<span className="">{color === '#ffff'? 'choose colour' : `#${shade.hex}`}</span>}
              
              </li>
              </div>
              
            ))}
          </ul>
        </div>
      
    </>
  );
}