const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a0f81bc0edd68a332b8d894a2a99894f",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
