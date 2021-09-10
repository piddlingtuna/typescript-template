import fetch from 'node-fetch';

const URBAN_DICTIONARY_API = 'https://api.urbandictionary.com';

const search = async (term: string, page = 1): Promise<void> => {
  try {
    const response = await fetch(`${URBAN_DICTIONARY_API}/v0/define?term=${term}&page=${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json: any = response.json();
    if (json.list) {
      const item = json.list[0];
      console.log(`${term}:\n${item.definition}\n${item.example}`);
    }
  } catch (error) {
    console.error(error);
  }
};

search('API');
