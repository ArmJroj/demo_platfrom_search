import Image from "next/image";
import { Inter } from "next/font/google";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import React, { useState } from 'react';
import { useRouter } from "next/router";

export default function Home() {
  const router= useRouter();
  const [tiktokSearch, setTiktokSearch]= useState('');
  const [instagramSearch, setInstagramSearch]= useState('');

  const handleTiktok = (event) => {
    setTiktokSearch(event.target.value);
  };

  const handleInstagram = (event) => {
    setInstagramSearch(event.target.value);
  };

  const submitSearch = (event, textAreaId) => {
    if (event.key === 'Enter' && textAreaId === "area1") {
      console.log(tiktokSearch);
      // window.alert("Tiktok search that:", tiktokSearch);
      router.push({pathname: `/tiktok`, query: {search: tiktokSearch}});
    }
    else if (event.key === 'Enter' && textAreaId === "area2") {
      console.log(instagramSearch);
      window.alert("Instagram search that:", instagramSearch);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <div className="flex flex-col">
        <div className="flex flex-row my-2">
          <FaTiktok size={55} />
          <div className="flex flex-col mx-2 py-10px flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
            <textarea
              className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
              placeholder="Search"
              onChange={(event) => handleTiktok(event)}
              onKeyDown={(event) => submitSearch(event, "area1")}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row my-2">
          <FaInstagram size={55} />
          <div className="flex flex-col mx-2 py-10px flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
            <textarea
              className="m-0 resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
              placeholder="Search"
              onChange={(event) => handleInstagram(event)}
              onKeyDown={(event) => submitSearch(event, "area2")}
            ></textarea>
          </div>
        </div>
      </div>
    </main>
  );
}
