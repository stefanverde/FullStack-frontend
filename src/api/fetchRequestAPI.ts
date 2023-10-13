const fetchRequest = async (
  input: RequestInfo | URL,
  init: RequestInit | undefined
) => {
  const response = await fetch(input, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    ...init,
  });

  if (!response.ok) {
    throw new Error('error');
  }
  const json = await response.json();
  return json;
};

export default fetchRequest;
