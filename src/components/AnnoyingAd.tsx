import styles from './AnnoyingAd.module.css';

type AdProps = {
    top: number
    left: number
  onClose: () => void;
};

function AnnoyingAd({onClose}: AdProps) {
    return (
        <div className={styles.ad}>
        <p>おめでとうございます！</p>
        <p>100万人名の訪問者です！</p>
        <button className={styles.fakeDownloadBtn}>景品を受け取る</button>
        <button className={styles.realCloseBtn} onClick={onClose}>
            ×
        </button>
        </div>
    );
}
export default AnnoyingAd;
