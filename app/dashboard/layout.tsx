
"use client"

import { useRouter } from "next/navigation";
import { Side, Nav, Right } from "@/app/dashboard/dash_page";
import { useEffect } from "react";
import { useState } from "react";

export default function Knowledge_Center(

    {
  children,
}: {
  children: React.ReactNode;
})
 {

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/me", {
      credentials: "include",
    }).then((res) => {
      if (!res.ok) {
        router.push("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="main min-h-184 min-w-100 bg-slate-50 flex ">
        <Side />

        <div className="flex-1 w-full overflow-x-hidden">
          <Nav />

          <main className="min-w-0 flex-1 bg-white ">{children}</main>
          
        </div>
      </div>
    </>
  );
};
