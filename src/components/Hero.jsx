'use client'
import React, { useState, useEffect } from 'react';
import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'



export function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Check window width to determine whether to show the overlay
    if (windowWidth < 1385) { // Adjust the width threshold as needed
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, [windowWidth]);
  return (
    <div className="relative sm:pb-24 sm:pt-8">
      <BackgroundImage className="-bottom-14 -top-36" />
    
      <Container className="relative">
  <div class="flex">
        <div class="main">
          <div class="border-2 border-red-500 rounded ">
          <div class="  px-4 sm:px-6  lg:px-8">
            <div class="flex flex-col items-center sm:flex-row sm:flex ">
              <div class="py-[8px]">
                    <video controls poster="/images/w3html5.gif" class="lg:min-w-[600px]">
                      <source src="movie.mp4" type="video/mp4"/>
                      <source src="movie.ogg" type="video/ogg"/>
                      Your browser does not support the video tag.
                    </video>
              </div>
            
          
            <div class="mt-[50px] sm:mt-0 sm:ml-[70px] lg:ml-[100px]">
                <div class="flex-row items-center">
                  <div class="rounded-md shadow">
                    <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Share </a>
                  </div>
                  <div class="mt-10">

                    <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"> Stop </a>
                  </div>
                </div>
            </div>
        
            
            </div>
          </div>

          <div>
        
          </div>
        </div>

        <div class="mt-12 place-content-center grid grid-cols-auto  sm:grid-cols-2 max-w-[500px] lg:grid-cols-3 gap-2 lg:max-w-[1000px]"  >
        <div class="bg-white max-w-[300px] max-h-[300px]  border-orange-500 border-[2px] rounded">
          <p class="pl-[20px] py-[16px]">Student Name</p>
        <div class="pl-[10px]">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
              Tab 1
            </button>
            <button type="button" class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100
             focus:outline-none  hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white  dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
              New Tab
            </button>
          </nav>
        </div>

        <div class="mt-3 pl-[10px]">
            <textarea name="" id="" cols="25" rows="5" class="bg-white pl-[10px]  max-w-[300px] max-h-[300px] resize-none border-green-500 rounded border-2"></textarea>
        </div>
        </div>

          <div class="bg-white max-w-[300px] max-h-[300px]  border-orange-500 border-[2px] rounded">
          <p class="pl-[20px] py-[16px]">Student Name</p>
        <div class="pl-[10px]">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
              Tab 1
            </button>
            <button type="button" class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100
             focus:outline-none  hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white  dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
              New Tab
            </button>
          </nav>
        </div>

        <div class="mt-3 pl-[10px]">
            <textarea name="" id="" cols="25" rows="5" class="bg-white pl-[10px]  max-w-[300px] max-h-[300px] resize-none border-green-500 rounded border-2"></textarea>
        </div>
        </div>
          <div class="bg-white max-w-[300px] max-h-[300px]  border-orange-500 border-[2px] rounded">
          <p class="pl-[20px] py-[16px]">Student Name</p>
        <div class="pl-[10px]">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
              Tab 1
            </button>
            <button type="button" class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100
             focus:outline-none  hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white  dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
              New Tab
            </button>
          </nav>
        </div>

        <div class="mt-3 pl-[10px]">
            <textarea name="" id="" cols="25" rows="5" class="bg-white pl-[10px]  max-w-[300px] max-h-[300px] resize-none border-green-500 rounded border-2"></textarea>
        </div>
        </div>
          <div class="bg-white max-w-[300px] max-h-[300px]  border-orange-500 border-[2px] rounded">
          <p class="pl-[20px] py-[16px]">Student Name</p>
        <div class="pl-[10px]">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
              Tab 1
            </button>
            <button type="button" class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100
             focus:outline-none  hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white  dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
              New Tab
            </button>
          </nav>
        </div>

        <div class="mt-3 pl-[10px]">
            <textarea name="" id="" cols="25" rows="5" class="bg-white pl-[10px]  max-w-[300px] max-h-[300px] resize-none border-green-500 rounded border-2"></textarea>
        </div>
        </div>
          <div class="bg-white max-w-[300px] max-h-[300px]  border-orange-500 border-[2px] rounded">
          <p class="pl-[20px] py-[16px]">Student Name</p>
        <div class="pl-[10px]">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
              Tab 1
            </button>
            <button type="button" class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100
             focus:outline-none  hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white  dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
              New Tab
            </button>
          </nav>
        </div>

        <div class="mt-3 pl-[10px]">
            <textarea name="" id="" cols="25" rows="5" class="bg-white pl-[10px]  max-w-[300px] max-h-[300px] resize-none border-green-500 rounded border-2"></textarea>
        </div>
        </div>
          <div class="bg-white max-w-[300px] max-h-[300px]  border-orange-500 border-[2px] rounded">
          <p class="pl-[20px] py-[16px]">Student Name</p>
        <div class="pl-[10px]">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
              Tab 1
            </button>
            <button type="button" class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100
             focus:outline-none  hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white  dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
              New Tab
            </button>
          </nav>
        </div>

        <div class="mt-3 pl-[10px]">
            <textarea name="" id="" cols="25" rows="5" class="bg-white pl-[10px]  max-w-[300px] max-h-[300px] resize-none border-green-500 rounded border-2"></textarea>
        </div>
        </div>

        </div>
        </div>


 {showOverlay ? (
        <div className="">
             <div class="bg-white  fixed left-[25%] w-[50%] h-full z-50  border-orange-500 border-[2px] rounded">
          <div class="flex items-center justify-between">
                <p class="pl-[20px] py-[16px] uppercase">Student Name</p>
                 <div class=" flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Share </a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> X </a>
      </div>
    </div>
              </div>
          
          <div class="">
  <div class=" mx-auto lg:flex lg:items-center lg:justify-between pl-[10px] mb-6">
  
      <div class="flex items-center justify-between">

  <div class="mt-1 relative">


 <select id="location" name="location" class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> 
    <option>small</option>
    <option selected>Normal</option>
    <option>Huge</option>
  </select>
  </div>
  <div class="flex pl-6 justify-between">
  <button class="font-bold mr-2 text-lg">B</button>
  <button class="font-bold mr-2 text-lg">I
</button>
<button class="font-bold mr-2 text-lg underline">U
</button>
  <button class="font-bold mr-2 text-lg underline">A</button>
  </div>
</div>
    

  </div>
</div>
        <div class="pl-[10px]">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
              Tab 1
            </button>
            <button type="button" class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100
             focus:outline-none  hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white  dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
              New Tab
            </button>
          </nav>
        </div>

        <div class="mt-3 px-[10px]">
            <textarea name="" id="" cols="25" rows="30"
             class="bg-white pl-[10px] resize-none w-full h-full   border-green-500 border-[2px] rounded"></textarea>
        </div>
        </div>
          
        </div>
      ) : (
          <div class="bg-white w-full h-[90vh] ml-5   border-orange-500 border-[2px] rounded">
          <div class="flex items-center justify-between">
                <p class="pl-[20px] py-[16px] uppercase">Student Name</p>
                 <div class=" flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Share </a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> X </a>
      </div>
    </div>
              </div>
          
          <div class="">
  <div class=" mx-auto lg:flex lg:items-center lg:justify-between pl-[10px] mb-6">
  
      <div class="flex items-center justify-between">

  <div class="mt-1 relative">


 <select id="location" name="location" class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> 
    <option>small</option>
    <option selected>Normal</option>
    <option>Huge</option>
  </select>
  </div>
  <div class="flex pl-6 justify-between">
  <button class="font-bold mr-2 text-lg">B</button>
  <button class="font-bold mr-2 text-lg">I
</button>
<button class="font-bold mr-2 text-lg underline">U
</button>
  <button class="font-bold mr-2 text-lg underline">A</button>
  </div>
</div>
    

  </div>
</div>
        <div class="pl-[10px]">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
              Tab 1
            </button>
            <button type="button" class="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100
             focus:outline-none  hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white  dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
              New Tab
            </button>
          </nav>
        </div>

        <div class="mt-3 px-[10px]">
            <textarea name="" id="" cols="25" rows="30"
             class="bg-white pl-[10px] resize-none w-full h-full   border-green-500 border-[2px] rounded"></textarea>
        </div>
        </div>
      )}


 
      </div>
      </Container>
    </div>
  )
}
