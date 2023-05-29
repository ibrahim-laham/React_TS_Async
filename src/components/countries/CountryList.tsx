import { useState, useEffect } from "react";

export default function CountryList() {
  type Name = {
    common: string;
    official: string;
  };

  type Country = {
    name: Name;
    region: string;
    flags: { [keys: string]: string };
    maps: { [keys: string]: string };
    capital: string[];
  };

  const [countries, setCountries] = useState<Country[]>([]);

  async function getProducts(url: string): Promise<void> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
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
          {countries.map((country) => (
            <div key={country.name.common} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={country.maps.googleMaps}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {country.name.common}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{country.region}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {country.capital}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
