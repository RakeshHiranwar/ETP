"use client"

import { useState } from "react";

import {Nav} from "@/components/ui/navbar"

import { useRouter } from "next/navigation";

import { apiFetch, getErrorMessage } from "@/lib/api";

const res = await apiFetch("/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email, password }),
});

if (!res.ok) {
  setError(await getErrorMessage(res));
  return;
}

router.replace("/dashboard");
router.refresh();



  export  function Navbar(){
        return(
             <>
                 <Nav />
                </>
        );
    }


    export function Left(){
        return(
            <>
                <div className="w-full lg:w-1/2   bg-indigo-300 flex justify-center items-center px-6 py-2 pt-0 ">
                    <div className="w-full max-w-2xl px-2 mt-0 pt-0 pl-10 pr-8">
                        <p className=" pb-3 font-mono text-slate-900 font-semibold">Single source of truth</p>
                        <h1 className=" pb-5 text-3xl md:text-4xl lg:text-5xl font-inter font-semibold text-black max-w-xl">Manage learning and knowledge in one place.</h1>
                        <p className="text-base md:text-lg font-inter  text-slate-900 pb-5">A centralized hub for employee onboarding, continuous learning, assessments, skills and reusable organizational knowledge.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-40 justify-between text-white">
                            <div className="bg-white w-full h-13 border border-black pl-4 pt-2 flex">
                                <div className="h-8 w-8 border  border-black"></div>
                                <span className="text-slate-900 pt-1 pl-2 font-inter font-bold ">Onboarding</span>
                            </div>
                            <div className="bg-white w-full h-13 border border-black pl-4 pt-2 flex">
                                <div className="h-8 w-8 border  border-black"></div>
                                <span className="text-slate-900 pt-1 pl-2 font-inter font-bold">Learning</span>
                            </div>
                            <div className="bg-white w-full h-13 border border-black pl-4 pt-2 flex">
                                <div className="h-8 w-8 border  border-black"></div>
                                <span className="text-slate-900 pt-1 pl-2 font-inter font-bold">Assessments</span>
                                
                            </div>
                            <div className="bg-white w-full h-13 border border-black pl-4 pt-2 flex">
                                <div className="h-8 w-8 border  border-black"></div>
                                <span className="text-slate-900 pt-1 pl-2 font-inter font-bold">Knowledge Center</span>
                            </div>

                        </div>
                    </div>
                        
                    
                </div>            
            </>
        );
    }

export function Login({ goSignup, Forgot_Pass }: { goSignup: () => void, Forgot_Pass: () => void;}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error);
      console.log(data);
      return data;
 }

    

    // redirect here, e.g. router.push("/dashboard")
     router.push("/dashboard");
  }
 
         
        return(
             
            <>
                <div className="w-full lg:w-1/2  px-5 py-1  bg-white flex justify-center items-center">
                    <div className="login h-auto w-full max-w-md border border-black rounded-xl p-10 shadow-sm shadow-gray-800">
                         
                        <div className="mb-3">
                            <h1 className="text-slate-950 text-3xl font-nunito font-bold">Welcome back</h1>
                            <p className="text-gray-500 font-inter text-[14px]">Sign in with your authorized organization account.</p>
                        </div>

                        <div>
                          <form onSubmit={handleSubmit}>
                                <p className="text-black font-bold pb-2 text-sm">Work email or Employee ID</p>
                                <input type="text" placeholder="Enter your work email or Id" value={email} onChange={(e)=>setEmail(e.target.value)} className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px] "  />

                                 <p className="text-black font-bold pb-2 text-sm">Password</p>
                                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px]"  />

                                <div className="flex justify-between items-center w-full">
                                    <input type="checkbox" name="Remember me" id="" /><p className="text-gray-800 text-[13px] pl-0 pr-45 ">Remember me</p>

                                    <a onClick={Forgot_Pass} className="flex justify-between items-center text-black text-[12px] font-bold pt-1  hover:underline underline-offset-1">Forgot Password?</a>
                                </div>

                                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                                <button type="submit" className="mt-5 mb-5 border border-black w-full h-12 rounded-lg bg-indigo-800 font-bold text-white cursor-pointer">Sign in</button>
                            </form>

                            <div className="w-full border-b border-gray-400 mb-5"></div>

                            <span className="text-slate-900 text-[15px] pl-3 font-sans font-semibold">Don't have an account ? <a  onClick={goSignup}  className="text-indigo-800 cursor-pointer">Sign up</a></span>

                        </div>
                    </div>
                </div>
            </>
        );
    }
