import { createContext } from "react";
import { useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);

        const response = await fetch(`http://localhost:8000/cities`);
        const data = await response.json();
        setCities(data);
      } catch {
        alert("there was error when loading data api");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  async function getCity(id) {
    try {
      setIsLoading(true);

      const response = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch {
      alert("there was error when loading data api");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);

      const response = await fetch(`http://localhost:8000/cities/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      const data = await response.json();
      setCities((cities) => [...cities, data]);
    } catch {
      alert("there was error when loading data api");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, getCity, createCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined) {
    throw new Error("CitiesContext was used outside the CitiesProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
