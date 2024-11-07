import axios from "axios";

const SearchVideos = async (term) => {
  const response = await axios.get("https://pixabay.com/api/videos/", {
    params: {
      key: "45417656-da127a647d37cbbd3de654a88",
      q: term,
      per_page: 12, // Döndürülecek maksimum sonuç sayısını sınırla
    },
  });
  return response.data.hits;
};

export default SearchVideos;
