import React, { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState();
  const [error, setError] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function fetchData(api: string) {
      try {
        const Res = await fetch(api);
        if (!Res.ok) {
          throw new Error("Page Not Found 404");
        }
        const data = await Res.json();
        if (data) {
          setData(data);
        }
      } catch (error) {
        if (error) {
          return setError(error);
        }
      }
    }
    fetchData(url);
  }, []);

  return { data, isLoading, error };
}
