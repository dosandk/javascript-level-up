const parseJson = (data = '') => {
  if (!data.length) return data;

  const prepareJson = json => json.replace(/'/g, '"');
  const parse = json => JSON.parse(json);

  return parse(prepareJson(data));
};

const truncate = (str, length = 0, separator = '') => {
  const head = length ? str.slice(0, length) : str;
  const tail = head ? separator + str.slice(length - separator.length, str.length) : str;
  const paddedStr = separator ? head.slice(0, -separator.length) + separator : head ;

  return [paddedStr, tail];
};

export const processData = item => {
  const { overview = '', genres = '', release_date = '', poster_path = ''} = item;
  const [ string, tail ] = truncate(overview, 80, '...');

  return {
    ...item,
    ...{
      poster_path: poster_path.startsWith('http') ? poster_path : `https://image.tmdb.org/t/p/w500/${poster_path}`,
      overviewStart: string,
      overviewEnd: tail,
      genres: parseJson(genres),
      release_date: release_date ? new Date(release_date).getFullYear() : ''
    }
  };
};
