import { v4 as uuidv4 } from "uuid";

import { doc, setDoc } from "firebase/firestore";
import firestoreDB from "./firestore/init";
import getGeoInfo from "./geo";
import getDeviceInfo from "./device";
import { formatDate } from "../utils/date";
import getIP from "../utils/getIP";

const currentURL = document.URL;
const timenow = Date.now();
const lastVisit = Number(localStorage.getItem("lastVisitTimestamp"));
const tracked = Number(localStorage.getItem("tracked"));

const deviceInfo = getDeviceInfo();
const referrer = document.referrer;

// limit for 15/1000 seconds
if (
  !tracked ||
  timenow - lastVisit > 15000 ||
  currentURL !== localStorage.getItem("url")
) {
  localStorage.setItem("tracked", 0);
  (async function () {
    const ip = await getIP();
    if (!ip) return;
    const geo = await getGeoInfo(ip);
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
    localStorage.setItem("url", currentURL);
  })();
}
