import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Ad from './components/Ad';

type AdInfo = {
  id: number;
  type: 'simple' | 'annoying';
  top: number;
  left: number;
};

type GameState = 'ready' | 'playing' | 'gameover';

function App() {
  const [ads, setAds] = useState<AdInfo[]>([{ id: 1, type: 'simple', top: 10, left: 10 }]);
  const [gameState, setGameState] = useState<GameState>('ready');
  const [timer, setTimer] = useState(30);

  const startGame = () => {
    setAds([]);
    setTimer(30);
    setGameState('playing');
  };

  useEffect(() => {
    if (gameState !== 'playing') return;
    const interval = setInterval(() => {
      const adType = Math.random() < 0.7 ? 'simple' : 'annoying';
      const newAd: AdInfo = {
        id: Date.now(),
        type: adType,
        top: Math.random() * 80,
        left: Math.random() * 80,
      };

      setAds((currentAds) => [...currentAds, newAd]);
    }, 2000);

    return () => clearInterval(interval);
  }, [gameState]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const timerInterval = setInterval(() => {
      setTimer((t) => {
        if (t > 1) {
          return t - 1;
        } else {
          setGameState('gameover');
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [gameState]);

  const handleCloseAd = (id: number) => {
    setAds((currentAds) => currentAds.filter((ad) => ad.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>広告クローズ</h1>

      {gameState === 'ready' && (
        <div className={styles.card}>
          <button onClick={startGame}>スタート</button>
        </div>
      )}

      {gameState === 'playing' && (
        <>
          <p>
            残り時間: <span className={styles.timer}>{timer}</span> 秒
          </p>
          <div className={styles.gameArea}>
            {ads.map((ad) => (
              <Ad key={ad.id} {...ad} onClose={handleCloseAd} />
            ))}
          </div>
        </>
      )}

      {gameState === 'gameover' && (
        <div className={styles.card}>
          <h2>終了！</h2>
          <button onClick={startGame}>もう一度プレイ</button>
        </div>
      )}
    </div>
  );
}

export default App;
