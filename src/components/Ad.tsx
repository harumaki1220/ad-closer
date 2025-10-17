import adStyles from "./Ad.module.css";

type AdProps = {
  id: number;
  onClose: (id: number) => void;
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

export default Ad;
