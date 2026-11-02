"use client"

import { useState } from "react";

import {Nav} from "@/components/ui/navbar"

import { useRouter } from "next/navigation";

import { apiFetch, getErrorMessage } from "@/lib/api";

export function Signup(
    {
  goLogin, 
}: {
  goLogin: () => void;

  
} 
){
    
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password) {
        setError("Please fill in all fields.");
        return;
    }

    setLoading(true);

    try {
        const res = await apiFetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            password,
        }),
        });

        if (!res.ok) {
        const message = await getErrorMessage(res);
        setError(message);
        return;
        }

        // Signup successful. Backend has set the authentication cookie.
        router.replace("/dashboard");
        router.refresh();

    } catch (err) {
        console.error("Signup error:", err);
        setError("Unable to connect to the server. Please try again.");
    } finally {
        setLoading(false);
    }
    }


    return(
        <><div className="w-200 h-164 bg-white flex justify-center items-center">
                    <div className="signup h-130 w-110 border border-black rounded-xl p-10 shadow-sm shadow-gray-800">
                        
                        <div className="mb-3">
                            <h1 className="text-black text-3xl font-nunito font-bold">Welcome</h1>
                            <p className="text-gray-500">Sign up with your authorized organization account.</p>
                        </div>

                        <div>
                           <form onSubmit={handleSubmit}>
                                <p className="text-black font-bold pb-2 text-sm">Full Name</p>
                                <input type="text" placeholder="Enter name" className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px] "value={name} onChange={(e)=>setName(e.target.value)} />


                                <p className="text-black font-bold pb-2 text-sm">Work email or Employee ID</p>
                               <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px]"
                                    />

                                 <p className="text-black font-bold pb-2 text-sm">Password</p>
                                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border border-gray-500 h-10 w-90 rounded-lg text-black placeholder:text-gray-500 pl-2 mb-3 placeholder:text-[16px]"  />
                                
                                {error && (
                                    <p className="text-red-500 text-sm mb-3">
                                        {error}
                                    </p>
                                    )}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-5 mb-5 border border-black w-90 h-12 rounded-lg bg-indigo-800 font-bold text-white cursor-pointer disabled:opacity-50"
                                    >
                                    {loading ? "Creating Account..." : "Sign up"}
                                    </button>
                            </form>

                            <div className="w-90 border-b border-gray-400 mb-5"></div>

                            <span className="text-slate-900 text-[15px] pl-3 font-sans font-semibold">Already have an account ? <a onClick={goLogin}  className="text-indigo-800 cursor-pointer">Log in</a></span>

                        </div>
                    </div>
                </div>
            </>
    )
}