
"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";

import {
  MOCK_RECENT_RESOURCES,
} from "@/lib/mock-knowledge-center";

export default function ResourceDetailPage() {
  const router = useRouter();
  const params = useParams();

  const resource = MOCK_RECENT_RESOURCES.find(
    (item) => item.id === params.id
  );

  if (!resource) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl font-semibold">
          Resource not found
        </h1>

        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-10">

      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2 text-sm text-blue-600"
      >
        <ArrowLeft size={16} />
        Back to Recently Added
      </button>

      <div className="mx-auto max-w-4xl rounded-2xl border p-6 md:p-10">

        <div className="mb-6 flex items-center gap-4">

          <div className="rounded-xl bg-indigo-50 p-3">
            <Image
              src={resource.image}
              alt={resource.title}
              width={64}
              height={64}
            />
          </div>

          <div>
            <span className="text-xs text-blue-600">
              {resource.category} • {resource.type}
            </span>

            <h1 className="text-2xl font-bold text-slate-800">
              {resource.title}
            </h1>
          </div>

        </div>

        <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
          <Clock size={15} />
          Added {resource.added}
        </div>

        <div className="border-t pt-6">

          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <BookOpen size={18} />
            About this resource
          </h2>

          <p className="mb-5 text-gray-600">
            {resource.description}
          </p>

          <div className="leading-8 text-slate-700">
            {resource.content}
          </div>

        </div>

      </div>
    </div>
  );
}
