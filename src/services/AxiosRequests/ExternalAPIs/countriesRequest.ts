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
    const token = 'bEU5NEd5NUtEQnd6a0VQdkZMbU11TWttaXV6MTN2SUxTaVhlVnBmcw==';
    const response = await axios.get<any[]>(
      'https://api.countrystatecity.in/v1/countries',
      {
        headers: { 'X-CSCAPI-KEY': token },
      },
    );

    const countryList = response.data.map(country => {
      return {
        label: country.name,
        value: country.name,
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
