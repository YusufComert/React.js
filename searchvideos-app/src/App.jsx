import { useState } from "react";
import "./App.css";
import SearchHeader from "./components/SearchHeader";
import SearchVideos from "./api";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const handleSubmit = async (term) => {
    if (isFirstSearch || term !== searchTerm) {
      setVideos([]); // Eski verileri temizle
      const result = await SearchVideos(term);
      setVideos(result);
      setSearchTerm(term); // Arama terimini güncelle
      setIsFirstSearch(false); // İlk aramayı tamamladıktan sonra bu durumu güncelle
    }
  };

  return (
    <>
      <div>
        <SearchHeader search={handleSubmit} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
