import style from "./FeedbackCard.module.css";

interface FeedbackCardProps {
  profile: string;
  name: string;
  username: string;
  text: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  profile,
  name,
  username,
  text,
}) => {
  return (
    <div className={style.FeedbackCard} id="flexCenter">
      <div className={style.profileContainer}>
        <img
          src={profile}
          alt="profile image"
          width={200}
          className={style.blury}
        />
        <img
          src={profile}
          alt="profile image"
          width={200}
          className={style.sideImage}
        />
      </div>

      <div className={style.detailsContainer}>
        <h4 className={style.name}>{name}</h4>
        <p className={style.username} id="smallText">
          {username}
        </p>

        <p className={style.text} id="smallText">
          {text}
        </p>
        <p className={style.star} id="smallText">
          &#11088; &#11088; &#11088; &#11088; &#11088; <span>4.8/5</span>
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
