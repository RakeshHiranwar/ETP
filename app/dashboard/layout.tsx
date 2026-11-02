
"use client"

import { useRouter } from "next/navigation";
import { Side, Nav, Right } from "@/app/dashboard/dash_page";
import { useEffect } from "react";
import { useState } from "react";
import { apiFetch } from "@/lib/api";

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
    let cancelled = false;

    async function checkAuth() {
      try {
        const res = await apiFetch("/me");

        if (!res.ok) {
          router.replace("/");
          return;
        }

        if (!cancelled) {
          setLoading(false);
        }
      } catch {
        router.replace("/");
      }
    }

    checkAuth();

    return () => {
      cancelled = true;
    };
  }, [router]);

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
