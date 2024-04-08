export const baseUrl = "http://localhost:5000/api/";

export const postRequest = async (url, body) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/josn",
    },
    body,
  });

  const data = await Response.json;

  return data;
};
