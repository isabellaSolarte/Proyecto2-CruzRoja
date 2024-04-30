import axios from 'axios';

interface Country {
  name: Name;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  ron: Ron;
}

interface Ron {
  official: string;
  common: string;
}

export const getCountries = async () => {
  try {
    const response = await axios.get<Country[]>(
      'https://restcountries.com/v3.1/all?fields=name',
    );

    const countryList = response.data.map((country: Country) => {
      return {
        label: country.name.common,
        value: country.name.common,
      };
    });

    countryList.sort((a, b) => {
      return a.label.localeCompare(b.label);
    });

    return countryList.sort();
  } catch {
    throw new Error('Error al obtener los países');
  }
};
