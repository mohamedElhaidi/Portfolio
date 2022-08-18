import { v4 as uuidv4 } from "uuid";

import { doc, setDoc } from "firebase/firestore";
import firestoreDB from "./firestore/init";
import getGeoInfo from "./geo";
import getDeviceInfo from "./device";
import { formatDate } from "../utils/date";

const currentURL = document.URL;
const timenow = Date.now();
const lastVisit = Number(localStorage.getItem("lastVisitTimestamp"));
const tracked = Number(localStorage.getItem("tracked"));

const deviceInfo = getDeviceInfo();
const referrer = document.referrer;

// limit for 15/1000 seconds
console.log(timenow - lastVisit);
if (!tracked || timenow - lastVisit > 15000) {
  localStorage.setItem("tracked", 0);
  fetch("https://api.ipify.org/?format=json", {
    method: "GET",
  })
    .then((r) => r.json())
    .then(async (r) => {
      const ip = r.ip;
      if (!ip) return;
      const geo = await getGeoInfo(ip);
      console.log(geo);
      //   send data to server
      const docRef = doc(
        firestoreDB,
        `/visits/[${formatDate(timenow)}][${ip}][${geo.country_name}-${
          geo.city
        }]-${uuidv4()}`
      );

      setDoc(docRef, {
        url: currentURL,
        ip,
        referrer,
        deviceInfo,
        geo,
        visitTimestamp: timenow,
      });

      //   save
      localStorage.setItem("lastVisitTimestamp", timenow);
      localStorage.setItem("tracked", 1);
    });
}
