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
    <div className="relative mt-4 w-full flex items-center overflow-x-hidden px-3">
      <input
      id='email'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="peer w-full sm:w-[50%] md:w-[70%] border-b border-gray-500 bg-transparent py-2 pr-8 outline-none transition-all duration-100 hover:border-b-2 hover:border-b-black focus:border-b-2 focus:border-main"
      />
      <label htmlFor='email'
        className={`absolute left-0 top-0 px-3 transition-all ${
          inputValue ? 'text-xs text-slate-800' : 'text-sm text-gray-600'
        } ${inputValue ? '-translate-y-2' : 'translate-y-2'}`}
      >
        Placeholder
      </label>
      <ArrowRight className='-translate-x-7 text-stone-400 peer-focus:text-red-500 '/>
    </div>
  );
};

export default FloatingLabelInput;



