import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Ad from "./components/Ad";

type AdInfo = {
  id: number;
  type: 'simple' | 'annoying'
  top: number;
  left: number;
};

function App() {
  const [ads, setAds] = useState<AdInfo[]>([{ id: 1, type: 'simple', top: 10, left: 10}]);

  useEffect(() => {
    const interval = setInterval(() => {
    const adType = Math.random() < 0.7 ? 'simple' : 'annoying'

    const newAd: AdInfo = {
      id: Date.now(),
      type: adType,
      top: Math.random() * 80,
      left: Math.random() * 80,
    };

    setAds(currentAds => [...currentAds, newAd])
  }, 2000)

  return () => clearInterval(interval)
  }, [])
  
  const handleCloseAd = (id: number) => {
    console.log(`閉じるボタンが押されました: ${id}`);
    setAds((currentAds) => currentAds.filter((ad) => ad.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.gameArea}>
        {ads.map((ad) => (
          <Ad key={ad.id} id={ad.id} type={ad.type} onClose={handleCloseAd} top={ad.top}
    left={ad.left}/>
        ))}
      </div>
    </div>
  );
}

export default App;
