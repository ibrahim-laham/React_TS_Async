import {Country} from "./CountryList";

type Prop = {
  country : Country;
}

export default function CountryItem({country}:Prop) {
  return (
    <div key={country.name.common} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between ">
        <div className="flex flex-col items-start">
          <h3 className="text-sm text-gray-700">
            <a href={country.maps.googleMaps}>
              <span aria-hidden="true" className="absolute inset-0" />
              {country.name.common}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{country.region}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{country.capital}</p>
      </div>
    </div>
  );
}
