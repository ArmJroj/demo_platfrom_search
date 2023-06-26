import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const getCookie = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://www.tiktok.com",
  };
  let sendcookie = "";
  try {
    const response = await axios.request(config);
    const cookies = response.headers["set-cookie"];
    for (const i in cookies) {
      // console.log(cookies[i]);
      const parts = cookies[i].split(";");
      // console.log(parts[0]+";");
      sendcookie = sendcookie.concat(parts[0] + "; ");
    }
    console.log(sendcookie);
    return sendcookie;
  } catch (error) {
    return null;
  }
};

const getContents = async (keyword) => {
  const cookie = await getCookie();
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://www.tiktok.com/api/search/general/full/?keyword=%23${keyword}`,
    headers: {
      Cookie: cookie,
    },
  };
  try {
    const response = await axios.request(config);
    let result= response.data.data;
    const users= result.filter((item, index) => item["type"] === 4);
    const contents= result.filter((item, index) => item["type"] === 1);
    return contents;
  } catch (error) {
    return null;
  }
};

const TiktokListPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
    </div>
  );
};

const TiktokListPageWrapper = () => {
    const [data, setData]= useState(null);
    const router= useRouter();
    const {search} = router.query;
    
    useEffect(() => {
        const Contents= async (keyword) => {
            const contents= await getContents(keyword);
            setData(contents);
            console.log(data);
        };
        Contents(search);
    }, []);

    return data? <TiktokListPage /> : <div>Loading...</div>
}

export default TiktokListPageWrapper;
