import styles from "./styles/page.module.css";
import Image from "next/image";
import hero_ilustration from "./../public/Landing_hero_ilustration.png";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.hero_section}>
        <Image
          src={hero_ilustration}
          alt="Shopping basket image"
          height={128}
        />
        <h1 className={styles.hero_section__title}>
          <span>Remembering</span> what to buy now made it easy
        </h1>
        <p className={styles.hero_section__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit
          porta felis in sodales. Nulla lacinia molestie ligula, sed tempor nisl
          volutpat nec. Pellentesque aliquet enim eu placerat aliquet. Donec non
          consequat nisi.
        </p>
        <div className={styles.hero_section__button_container}>
          <Button>
            <Link href="auth">Create account</Link>
          </Button>
          <Button>
            <Link href="auth">Login</Link>
          </Button>
        </div>
      </div>
      <div>eric</div>
    </div>
  );
}
