import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  let allContent = [];

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, target));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        return allContent.push({ ...doc.data(), docId: doc.id });
      });
      setContent(allContent);

      // used js variable to get results showed on successful promise call
      return allContent;
    }
    fetchData()
      .then((results) => {
        console.log(`Successfully loaded ${results.length} ${target}`);
      })
      .catch((err) => console.error("Error fetching data -- ", err));
  }, []);
  return { [target]: content };
}


