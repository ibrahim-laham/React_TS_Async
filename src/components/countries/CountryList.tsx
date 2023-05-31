import { useState, useEffect } from "react";
import CountryItem from "./CountryItem";

export type Name = {
  common: string;
  official: string;
};

export type Country = {
  name: Name;
  region: string;
  flags: { [keys: string]: string };
  maps: { [keys: string]: string };
  capital: string[];
};

export default function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);

  async function getProducts(url: string): Promise<void> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data.slice(21,41));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts("https://restcountries.com/v3.1/all");
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {countries.map((country) => <CountryItem country={country} key={country.name.common} />)}
        </div>
      </div>
    </div>
  );
}
