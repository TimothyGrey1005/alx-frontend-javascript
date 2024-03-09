function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockResponse = { data: 'Mock API response' };
      resolve(mockResponse);
    }, 1000);
  });
}

export default getResponseFromAPI;
