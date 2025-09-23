import FeaturesCard from "../components/FeaturesCard";
import style from "./Features.module.css";
import { Icon } from "@iconify/react";

const Features = () => {
  return (
    <div className={style.Features} id="Features">
      <h1 className={style.heading}>
        Our Features <span>Highlight</span>
      </h1>
      <hr />
      <div className={style.cardContainer} id="flexCenter">
        <FeaturesCard
          icon={<Icon icon="hugeicons:ai-dna" width="32" height="32" />}
          title="AI Health Assistant"
          text="Ask anything and get health info instantly."
        />

        <FeaturesCard
        icon={<Icon icon="streamline-ultimate:work-from-home-laptop-meeting" width="32" height="32" />}
          title="Virtual Consultations"
          text="Talk to certified doctors and pharmacists."
          bg={"#1771b7"}
          color={"white"}
        />

        <FeaturesCard
          icon={<Icon icon="line-md:bell-loop" width="32" height="32" />}
          title="Smart Alerts"
          text="Refill reminders, drug recalls, and interaction warnings."
        />

        <FeaturesCard
        icon={<Icon icon="mdi:drugs" width="32" height="32" />}
          title="Order NAFDAC-Verified Drugs"
          text="Safe prescriptions delivered."
        />
      </div>
      <p className={style.text} id="smallText">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot Europa usa li sam
        vocabular. Li lingues differe solmen in li grammatica, li pronunciation
        e li plu commun vocabules.
      </p>
    </div>
  );
};

export default Features;
