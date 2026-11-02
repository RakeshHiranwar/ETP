import {Progress} from "@/components/ui/progress"
import {Admin} from "@/components/ui/admin"

import Link from "next/link";
import { Link2Off } from "lucide-react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useUser } from "../hooks/userUser";




const menuSections = [
  {
    title: "OVERVIEW",
    items: [
      {
        name: "Dashboard",
        icon: "DB",
        link: "/dashboard",
      },
    ],
  },

  {
    title: "ADMINISTRATION",
    items: [
      { name: "User Management", icon: "UM" },
      { name: "Roles and Permissions", icon: "RP" },
      { name: "OnBoard", icon: "OB" },
    ],
  },

  {
    title: "LEARNING",
    items: [
      { name: "Learning", icon: "LN" },
      { name: "Learning Paths", icon: "LP" },
      { name: "Assessments", icon: "AS" },
      { name: "Skill Matrix", icon: "SM" },
    ],
  },

  {
    title: "KNOWLEDGE CENTER",
    items: [
      {
        name: "Knowledge Center",
        icon: "KC",
        link: "/dashboard/knowledge-center",
      },
      {
        name: "FAQs",
        icon: "FQ",
      },
      {
        name: "Documents and SOPs",
        icon: "DS",
      },
      {
        name: "Case Studies",
        icon: "CS",
      },
      {
        name: "Root Cause Analysis",
        icon: "RC",
      },
      {
        name: "Mistake Tracker",
        icon: "MT",
      },
    ],
  },

  {
    title: "INSIGHTS",
    items: [
      { name: "Reports and Analytics", icon: "RA" },
      { name: "Notifications", icon: "NT" },
      { name: "Settings", icon: "ST" },
    ],
  },
];

export function Side() {

  const name = useUser();

  // Stores all currently opened sections
  const [openSections, setOpenSections] = useState<string[]>([
    "KNOWLEDGE CENTER",
  ]);

  // Open / close individual dropdown
  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((section) => section !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="sidebar flex min-h-screen w-55 flex-col bg-indigo-50  overflow-y-scroll">

      {/* ================= HEADER ================= */}

      <div className="flex h-20 shrink-0 items-center gap-2 border-b border-indigo-200 px-5">

        <img
          src="/images/rsense.png"
          alt=""
          className="h-10 w-10 rounded-md border border-white"
        />

        <div>
          <div className="text-[14px] font-bold text-slate-900">
            Employee Learning
          </div>

          <div className="text-[12px] text-slate-900">
            & Knowledge Hub
          </div>
        </div>

      </div>


      {/* ================= NAVIGATION ================= */}

      <nav className="w-full flex-1 overflow-y-auto overflow-x-hidden px-2.5 pt-3">

        {menuSections.map((section) => {

          const isOpen = openSections.includes(section.title);

          return (
            <div
              key={section.title}
              className="mb-4 font-roboto"
            >

              {/* Section Heading */}
               
              <div className="mb-1.5 flex w-full items-center justify-between">

  {/* Title → navigates to page */}
  <Link
    href={
      section.title === "OVERVIEW"
        ? "/dashboard"
        : section.title === "ADMINISTRATION"
        ? "/dashboard/administration"
        : section.title === "LEARNING"
        ? "/dashboard/learning"
        : section.title === "KNOWLEDGE CENTER"
        ? "/dashboard/knowledge-center"
        : "/dashboard/insights"
    }
    className="px-2.5 text-[12px] font-bold text-slate-900 hover:text-blue-600 font-roboto"
  >
    {section.title}
  </Link>

  {/* Arrow → opens/closes dropdown */}
  <button
    type="button"
    onClick={() => toggleSection(section.title)}
    className="p-1"
  >
    <ChevronDown
      size={15}
      className={`text-slate-700 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
    />
  </button>

</div>


              {/* Dropdown Items */}

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                {section.items.map((item) => {

                  const content = (
                    <>
                      {/* Icon */}

                      <span className="grid h-6.25 w-6.25 shrink-0 place-items-center rounded-sm border border-indigo-200 text-[10px] text-slate-900">
                        {item.icon}
                      </span>

                      {/* Name */}

                      <span className="pt-0.5 text-[12px] font-semibold text-slate-900">
                        {item.name}
                      </span>
                    </>
                  );


                  // If item has a link
                  if (item.link) {
                    return (
                      <Link
                        key={item.name}
                        href={item.link}
                        className="flex h-[40.8px] w-full items-center gap-2 rounded-md px-2.25 py-1.75 hover:bg-indigo-200"
                      >
                        {content}
                      </Link>
                    );
                  }


                  // Normal button
                  return (
                    <button
                      key={item.name}
                      type="button"
                      className="flex h-[40.8px] w-full items-center gap-2 rounded-md px-2.25 py-1.75 hover:bg-indigo-200"
                    >
                      {content}
                    </button>
                  );

                })}

              </div>

            </div>
          );

        })}

      </nav>


      {/* ================= ADMIN PROFILE ================= */}

      <div className="mt-auto flex h-20 shrink-0 items-center gap-2 border-t border-indigo-200 px-5">

        <span className="flex h-10 w-10 items-center justify-center rounded-md border border-indigo-200 text-slate-900">
          AD
        </span>

        <div>
          <div className="text-[14px] font-bold text-slate-900">
            {name}
          </div>

          <div className="text-[12px] text-slate-900">
            Admin role
          </div>
        </div>

      </div>

    </div>
  );
}

export  function Nav(){
        const name = useUser();
        return(
             <>
                  <div className="Nav h-15 w-full lg:w-330 bg-white pt-4 pb-3 pl-12 pr-1 flex justify-between ml-0  ">
                  
                    <div className="lg:flex lg:justify-between lg:w-100 h-15 mr-4 w-0">
                      
                      <div className=" w-60 h-7 border border-gray-300 bg-gray-100 hidden  lg:flex rounded-3xl">
                        
                        <input type="text"  placeholder="Search FAQs, courses and SOPs" className="w-full
max-w-xltext-[13px] placeholder:p-1 placeholder:text-[13px] placeholder:text-slate-500 text-black pl-3   lg:block rounded-3xl" />
                        
                      </div>
            
                      
                    </div>
            

                    <div className="head flex  h-15 flex-row pl-3  gap-2   w-61">
                        <span className="h-8 w-8 border border-gray-600 rounded-3xl text-slate-900 pt-1.5 text-[12px] text-center font-bold " >AD</span>
                    <div>
                        <div className="text-[12px] text-slate-900 font-sans font-bold m-0 p-0">{name}</div>
                        <div className=" font-sans text-[11px] text-slate-500">Content and Learning Admin</div>
                    </div>

                    </div>
            
                  
                  </div>
            
                </>
        );
    }

    export function Right( 
    ){
        return(
            <>
               <div className="w-330 min-h-screen h-auto  bg-indigo-100 flex overflow-x-hidden ml-0  ">
                    <div className="min-h-screen h-auto w-full mt-5 px-4 md:px-8 lg:px-10 ">
                        <p className=" pb-3 font-mono text-slate-900 font-semibold text-sm">ADMIN / DASHBOARD</p>
                        <h1 className=" pb-2 text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-slate-900  flex">Admin Dashboard

                            <p className="text-[10px] h-7 w-30 font-mono ml-5 mt-2 border border-dashed pt-2 pl-2 bg-indigo-200 text-indigo-700">Illustrative Data</p>
                        </h1>

                        <div className="flex justify-between w-300">
                            <p className="text-[16px] font-Roboto  text-slate-900 pb-10">Manage employee learning, knowledge contributions, skills and access.</p>

                            <div className="flex gap-4 flex-col md:flex-row">
                                <button className="text-[14px] text-slate-900 bg-white h-10 w-25 border border-slate-900 rounded-sm cursor-pointer ">Export
                                </button>

                                <button className="text-[14px] text-white bg-indigo-700 h-10 w-30 border border-slate-900 rounded-sm cursor-pointer font-semibold font-sans">+ Add content
                                </button>
                                
                            </div>
                        </div>

                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 h-auto justify-between w-full max-w-7xl:w-full mx-auto px-4 text-white lg:h-auto">
                            <div className="bg-white w-70 h-45 border border-gray-400 pl-4 pt-2 rounded-md">
                                <div className="flex w-60 p-1 h-10 justify-between">
                                    <span className="bg-slate-300 rounded-md w-10 h-8 lg:w-10 lg:h-8 text-slate-900 pl-2 pt-1">TP</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className ="border border-gray w-6 h-5"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg>
                                </div>

                                <div className="text-slate-700 pt-2 font-sans font-semibold">Team Progress</div>
                                <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold">72%</h1>

                                <span className="text-slate-500 text-[11px] pt-2">18 of 25 roadmaps on track</span>

                            </div>
                            <div className="bg-white w-70 h-45 border border-gray-400 pl-4 pt-2  rounded-md">
                                <div className="flex w-60 p-1 h-10 justify-between">
                                    <span className="bg-slate-300 rounded-md h-8 w-10 text-slate-900 pl-2 pt-1">PA</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className ="border border-gray w-6 h-5"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg>
                                </div>

                                <div className="text-slate-700 pt-2 font-sans font-semibold">Pending Approvals</div>
                                <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold">08</h1>
                                <span className="text-slate-500 text-[11px] pt-2">Knowledge contributions</span>

                            </div>
                            <div className="bg-white w-70 h-45 border border-gray-400 pl-4 pt-2  rounded-md">
                                <div className="flex w-60 p-1 h-10 justify-between">
                                    <span className="bg-slate-300 rounded-md h-8 w-10 text-slate-900 pl-2 pt-1">LC</span>
                                     <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className ="border border-gray w-6 h-5"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg>
                                </div>

                                <div className="text-slate-700 pt-2 font-sans font-semibold">Learning Completion</div>
                                <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold">68%</h1>
                                <span className="text-slate-500 text-[11px] pt-2">Across assigned learning</span>

                            </div>
                            <div className="bg-white w-70 h-45 border border-gray-400 pl-4 pt-2  rounded-md">
                                <div className="flex w-60 p-1 h-10 justify-between">
                                    <span className="bg-slate-300 rounded-md h-8 w-9 text-slate-900 pl-2 pt-1">IS</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className ="border border-gray w-6 h-5"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg>
                                </div>
                                <div className="text-slate-700 pt-2 font-sans font-semibold">Identified Skill Gaps</div>

                                <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold">14</h1>
                                <span className="text-slate-500 text-[11px] pt-2">Across active employees</span>


                                
                            </div>

                        </div>
                        <div className="flex flex-col lg:flex-row gap-20 w-300">
                        <section className="bg-white w-full lg:w-180 h-80 mt-10 border border-slate-700 p-4 ">
                            <div className="section-head flex justify-between h-10">
                                <span className="title">
                                    <p className="text-slate-500 font-mono">Learning</p>
                                    <h1 className="text-black font-sans font-semibold text-xl">Complete Overview</h1>
                                </span>

                                <button disabled className="text-action text-slate-800 text-[10px] flex "><a href="d">View report</a>
                                     <a href="d"><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="5"
                                        height="1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className =" w-4 h-5 pl-1 pb-1"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg></a>
                                        
                                </button>

                            </div>
                            <div className="mt-6">
                                <label htmlFor="" className="font-sans text-[11px] font-semibold">New Employee Onboarding </label>
                                <Progress value={90} className="w-full mb-4 "/>
                                <label htmlFor="" className="font-sans text-[11px] font-semibold">Information Security Basics</label>
                                <Progress value={80} className="w-full mb-4 "/>
                                <label htmlFor="" className="font-sans text-[11px] font-semibold">Customer Support Essentials </label>
                                <Progress value={50} className="w-full mb-4 "/>
                                <label htmlFor="" className="font-sans text-[11px] font-semibold">Quality & Process Training </label>
                                <Progress value={70} className="w-full mb-4 "/>
                            </div>
                        </section>

                        <section className="h-80 w-100 bg-white p-4 mt-10 border border-slate-500  ">
                            <div className="section-head flex justify-between h-10 mb-6">
                                <span className="title">
                                    <p className="text-slate-500 font-mono">Skill Matrix</p>
                                    <h1 className="text-black font-sans font-semibold text-xl">Priority skill gaps</h1>
                                </span>

                                <button disabled className="text-action text-slate-800 text-[10px] flex "><a href="d">Open matrix</a>
                                     <a href="d"><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="5"
                                        height="1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className =" w-4 h-5 pl-1 pb-1"
                                        >
                                        <path d="M1 12.5 L21.5 12.5" />
                                        <path d="M17.5 8.5 L21.5 12.5" />
                                        <path d="M21.5 12.5 L17.5 16.5" />
                                    </svg></a>
                                        
                                </button>

                            </div>

                            <Admin />
                            <Admin />
                            <Admin />
                            <Admin />

                        </section>

                        </div>
                       



                    </div>    
                    
                </div>            

            </>
        );
    }