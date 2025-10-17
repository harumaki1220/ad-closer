import { useState } from "react";
import styles from "./App.module.css";
import adStyles from "./Ad.module.css";

type AdProps = {
  id: number;
  onClose: (id: number) => void;
};

type AdInfo = {
  id: number;
};

function Ad({ id, onClose }: AdProps) {
  const style = {
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
  };

  return (
    <div className={adStyles.ad} style={style}>
      <div className={adStyles.adHeader}>
        <span>広告</span>
        <button className={adStyles.closeBtn} onClick={() => onClose(id)}>
          ×
        </button>
      </div>
      <p>広告を閉じてください</p>
    </div>
  );
}

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
