import style from "./AlertBox.module.css";
import { Icon } from "@iconify/react";

interface AlertBoxProps {
  icon: string;
  color?: string;
  message: string;
  buttonClick?: () => void;
}

const AlertBox: React.FC<AlertBoxProps> = ({
  icon,
  color,
  message,
  buttonClick,
}) => {
  return (
    <div className={style.Error}>
      <div className={style.alertContainer}>
        <div>
          <Icon icon={icon} className={style.icon} style={{ color: color }} />
        </div>
        <p className={style.message} id="mediumText">
          {message}
        </p>
        <button className={style.button} onClick={buttonClick}>
          ok
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
