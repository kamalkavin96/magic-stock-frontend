import SampleChart from "../charts/SampleChart";
import { Outlet } from "react-router";
import BreadCrumb from "../ui/BreadCrumb";

// export default function AppMainArea() {
//   return (
//     <>
//       <main className="mt-14 p-4 border-2 border-dashed border-gray-200 rounded-lg dark:border-gray-700">
//         <BreadCrumb></BreadCrumb>
//         <Outlet />
//       </main>
//     </>
//   );
// }


// const AppMainArea = ({ isVisible, toggleSidebar }) => (
//   <div className="sm:ml-64">
//     <div className="mt-15 p-4 h-screen overflow-auto scrollbar-thin">
//           <BreadCrumb></BreadCrumb>
//           <Outlet />
//     </div>
//     <div className="pt-200">
//       <p>Some text</p>
//     </div>
//   </div>
// );

// export default AppMainArea;


{/* <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4">
<div class="grid lg:grid-cols-2 gap-4">
  <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
      <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
      </svg>
      Design
    </a>
    <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
    <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
      <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a>
  </div>
  <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
      <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
      </svg>
      Code
    </a>
    <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
    <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
      <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a>
  </div>
</div>
</div> */}



export default function AppMainArea({openSideBar, hoverSideBar}) {
  return (
    <div className={`${openSideBar ? 'lg:ml-64': 'lg:ml-16'} ${hoverSideBar ? 'lg:ml-64' : 'lg:ml-16'} transition-all duration-300 ease-in-out px-4 mt-16 h-[calc(100vh-4rem)] overflow-auto scrollbar-thin w-full`}>
      <div className="hidden sm:block">
        <BreadCrumb />

        
      </div>
      <section>
        <Outlet />
      </section>

    </div>
  )
}