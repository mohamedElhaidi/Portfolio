const getGeoInfo = async function (ip) {
  const headers = new Headers();
  headers.append("apikey", "K3qmXikd9Qx7LvXa85m0mwVHXviV8A5l");

  const reqOptions = {
    method: "GET",
    redirect: "follow",
    headers: headers,
  };
  try {
    const response = await fetch(
      `https://api.apilayer.com/ip_to_location/${ip}`,
      reqOptions
    );
    return response.json();
  } catch (err) {
    return err;
  }
};
export default getGeoInfo;
