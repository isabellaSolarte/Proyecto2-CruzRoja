import axios from 'axios';

export interface CountryCities {
  error: boolean;
  msg: string;
  data: string[];
}

export const getAllCitiesFromCountry = async (country: string) => {
  try {
    const data = { country: country };
    const response = await axios.post<CountryCities>(
      'https://countriesnow.space/api/v0.1/countries/cities',
      data,
    );

    return response.data.data
      .sort((a, b) => a.localeCompare(b))
      .map(city => {
        return {
          label: city,
          value: city,
        };
      });
  } catch (err) {
    throw new Error(`Error al obtener las ciudades ${err}`);
  }
};
