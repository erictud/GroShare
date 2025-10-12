import Image from "next/image";
import Link from "next/link";

import styles from "./styles/landingPage.module.css";
import Button from "./components/Button";
import ReviewCard from "./components/ReviewCard";

import hero_ilustration from "./../public/landing_hero.svg";
import placeholder1 from "./../public/person_face_placeholder_1.jpg";
import placeholder2 from "./../public/person_face_placeholder_2.jpg";
import placeholder3 from "./../public/person_face_placeholder_3.jpg";

export default function Home() {
  return (
    <div>
      <div className={styles.hero_section}>
        <Image src={hero_ilustration} alt="Shopping basket image" />
        <div className={styles.hero_section__content_container}>
          <h1 className={`${styles.hero_section__title} primary-title`}>
            <span>Remembering</span> what to buy now made it easy
          </h1>
          <p className={`${styles.hero_section__description} paragraph`}>
            groShare makes grocery shopping simple and social — create and share
            real-time grocery lists with family or friends. Stay organized,
            avoid duplicates, and shop smarter together.{" "}
            <b>Join groShare today!</b>
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
      </div>
      <div className={styles.reviews__section}>
        <h2 className="secondary-title">Our customers</h2>
        <div className={styles.reviews__section_container}>
          <ReviewCard title="John Smith" imgSrc={placeholder1}>
            groShare makes grocery shopping effortless! I love how I can create
            and share lists with my family in real time. Everyone adds what they
            need, and nothing gets forgotten. Simple, fast, and super
            convenient!
          </ReviewCard>
          <ReviewCard title="Joe Doe" imgSrc={placeholder2}>
            groShare completely changed how my roommates and I shop. The shared
            grocery list updates instantly, keeping everyone on the same page.
            No more duplicate purchases or missing items—this app saves time and
            prevents confusion!
          </ReviewCard>
          <ReviewCard title="Costel Pop" imgSrc={placeholder3}>
            groShare is an amazing collaborative grocery app! It’s intuitive,
            clean, and keeps our household organized. We can edit the list
            together anytime, anywhere. Shopping has never been this smooth and
            coordinated—highly recommended!
          </ReviewCard>
        </div>
      </div>
    </div>
  );
}
