export default async function getIP() {
  const r = await getIPs();
  if (r.length) return r[0];
  return (
    await (
      await fetch("https://api.ipify.org/?format=json", {
        method: "GET",
      })
    ).json()
  ).ip;
}
