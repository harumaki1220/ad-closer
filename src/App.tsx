import { useState } from "react";
import styles from "./App.module.css";
import Ad from "./components/Ad";

type AdInfo = {
  id: number;
};

function App() {
  const [ads, setAds] = useState<AdInfo[]>([{ id: 1 }]);

  const handleCloseAd = (id: number) => {
    console.log(`閉じるボタンが押されました: ${id}`);
    setAds((currentAds) => currentAds.filter((ad) => ad.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.gameArea}>
        {ads.map((ad) => (
          <Ad key={ad.id} id={ad.id} onClose={handleCloseAd} />
        ))}
      </div>
    </div>
  );
}

export default App;
