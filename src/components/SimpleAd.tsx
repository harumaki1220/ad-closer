import adStyles from "./SimpleAd.module.css";

type AdProps = {
  id: number;
  top: number;
  left: number;
  onClose: (id: number) => void;
};

function Ad({ id, top, left, onClose }: AdProps) {
  const style = {
    top: `${top}%`,
    left: `${left}%`,
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

export default Ad;
