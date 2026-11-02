"use client"
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

export function useUser() {
  const [name, setName] = useState("Loading...");

  useEffect(() => {
    apiFetch("/me")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Not authenticated");
        }
        return res.json();
      })
      .then((data) => {
        setName(data.name || data.email || "Guest");
      })
      .catch(() => setName("Guest"));
  }, []);

  return name;
}