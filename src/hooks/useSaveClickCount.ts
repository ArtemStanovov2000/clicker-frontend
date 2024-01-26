import { useState } from "react";

export const useSaveClickCount = () => {
  const [clickCount, setClickCount] = useState(0);
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const saveClickCount = (count: number) => {
    setLoading(true);
    fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify({ count }),
    })
      .then((response) => response.json())
      .then((responseCount) => {
        setClickCount(responseCount);
        setError(undefined);
      })
      .catch((reason) => {
        setError(reason.message);
        setClickCount(0);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return [saveClickCount, clickCount, error, loading] as const;
}