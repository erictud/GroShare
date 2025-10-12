import Image from "next/image";
import styles from "./../styles/ReviewCard.module.css";

export default function ReviewCard({ title, children, imgSrc }) {
  return (
    <div className={styles.review_card__container}>
      <div className={styles.review_card__container_img}>
        <Image src={imgSrc} alt={`${title}'s face`} />
      </div>
      <div className={styles.review_card__container_content}>
        <h3 className="tertiary-title">{title}</h3>
        <p className="paragraph">{children}</p>
      </div>
    </div>
  );
}
