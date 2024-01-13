import {useState} from "react";

export default function SearchBar(){
    const [input,setInput] =  useState("");
    const handleChange = (e) =>{
        setInput(e.target.value);
    }
    const handleSubmit= () =>{
        console.log(input)
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className='flex gap-1 w-80 items-center px-2 py-2 bg-[var(--clr-light-gray)] rounded-lg border-[1px] border-[var(--clr-border)]'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 10.5C19 12.1811 18.5015 13.8245 17.5675 15.2223C16.6335 16.6202 15.306 17.7096 13.7528 18.353C12.1996 18.9963 10.4906 19.1647 8.84174 18.8367C7.1929 18.5087 5.67834 17.6992 4.4896 16.5104C3.30085 15.3217 2.4913 13.8071 2.16333 12.1583C1.83535 10.5094 2.00368 8.80036 2.64703 7.24719C3.29037 5.69402 4.37984 4.3665 5.77766 3.43251C7.17547 2.49852 8.81886 2 10.5 2C12.7543 2 14.9164 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5Z"
                        stroke="#8D949E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.511 16.511L22 22" stroke="#8D949E" stroke-width="1.33333" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>

                <input className=' outline-0 bg-[var(--clr-light-gray)]' value={input} type="text" onChange={handleChange}/>
            </form>
        </div>
    )
}