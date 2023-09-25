'use client'
import { ArrowRight } from 'lucide-react';
// import { ChangeEvent, FC, useState } from 'react'

// interface EmailInputProps {

// }

// const EmailInput: FC<EmailInputProps> = ({ }) => {
//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
//         setInputValue(e.target.value);
//     };
//     return <div className="relative mt-4">
//         <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className="w-full bg-transparent border-b py-2 px-3 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//         <label
//             className={`absolute top-0 left-0 px-3 transition-all ${inputValue ? 'text-xs text-gray-600' : 'text-sm'
//                 } ${inputValue ? '-translate-y-3' : 'translate-y-2'}`}
//         >
//             Placeholder
//         </label>
//     </div>
// }

// export default EmailInput












import React, { ChangeEvent, useState } from 'react';

const FloatingLabelInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  return (
    <div className="relative mt-4 px-3 flex items-center overflowx-hidden">
      <input
      id='email'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-[70%] peer py-2 pr-8 bg-transparent border-b hover:border-b-2 focus:border-b-2 hover:border-b-black border-gray-500 outline-none focus:border-main transition-all duration-100"
      />
      <label htmlFor='email'
        className={`absolute top-0 left-0 px-3 transition-all ${
          inputValue ? 'text-xs text-slate-800' : 'text-sm text-gray-600'
        } ${inputValue ? '-translate-y-2' : 'translate-y-2'}`}
      >
        Placeholder
      </label>
      <ArrowRight className='-translate-x-7 peer-focus:text-red-500 text-stone-400 '/>
    </div>
  );
};

export default FloatingLabelInput;



