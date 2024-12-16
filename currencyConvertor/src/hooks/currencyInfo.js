import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchCurrencyData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("API Response:", result);
      setData(result[currency]);
    } catch (err) {
      console.error("Failed to fetch currency data:", err);
      setError("Failed to fetch data. Check your network or API status.");
      setData({});
    } finally {
      setLoading(false);
    }
  };

  fetchCurrencyData();
}, [currency]);
useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("API Response:", result);
        setData(result[currency]);
      } catch (err) {
        console.error("Failed to fetch currency data:", err);
        setError("Failed to fetch data. Check your network or API status.");
        setData({});
      } finally {
        setLoading(false);
      }
    };
  
    fetchCurrencyData();
  }, [currency])
}

export default useCurrencyInfo;
