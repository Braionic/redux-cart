
import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function fetchData(api: string) {
      setIsloading(true)
      try {
        const Res = await fetch(api);
       
        if (!Res.ok) {
          throw new Error("Page Not Found 404");
        }
        const data = await Res.json();
        if (data && data.length) {
          return setData(data);
        }
      } catch (error) {
        if (error) {
          return setError(error);
        }
      }finally{
        setIsloading(false)
      }
    }
    fetchData(url);
  }, [url]);

  return { data, isLoading, error };
}
