export const exerciseOptions =  {
    method: 'GET',
    headers: {
    'x-rapidapi-key': '973d26f462msh078711cb07c1cd7p19eb12jsn1c5505632c88',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}