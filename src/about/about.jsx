import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import styles from "./about.module.css";
import reportImg from '/src/all_image/report.png';
import workImg from '/src/all_image/work.png';
import timeImg from '/src/all_image/time.png';
import garbageImg from '/src/all_image/garbag.png';

const About = () => {
  const aboutBoxes = [
    { img: reportImg, title: "Our Mission", desc: "To create a cleaner planet by encouraging waste recycling and rewarding users.", link: "#", btnText: "Contact" },
    { img: workImg, title: "How It Works", desc: "Users can collect recyclable waste, bring it to our centers, and earn rewards.", link: "/detail", btnText: "Learn More" },
    { img: timeImg, title: "Impact", desc: "We have recycled 1000+ tons of waste and helped 5000+ users earn rewards!", link: "#", btnText: "Impact" }
  ];
      {/* About Start */}

  return (
    <div className={styles.body}>
      {/* Top Banner */}
      <header className={styles.topBanner}>
        <div className={styles.bannerText}>
          <h1>About Us</h1>
          <a href="#about" className={styles.ctaBtn}>Learn More</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className={styles.abContainer}>
        <h5 className={styles.abSubtitle}>Turning waste into wealth by promoting recycling and sustainability.</h5>
        <div className={styles.aboutContent}>
          {aboutBoxes.map((box, index) => (
            <article className={styles.boxes} key={index}>
              <img src={box.img} alt={box.title} />
              <h3>{box.title}</h3>
              <p>{box.desc}</p>
              <a href={box.link} className={styles.bn}>{box.btnText}</a>
            </article>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <div className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.member}>
            <img src="/src/all_image/m1.jpg" alt="Team Member" />
            <h3>Khushboo Kumari</h3>
            <p>Group CEO & Founder</p>
          </div>
          <div className={styles.member}>
            <img src="/src/all_image/m2.jpg" alt="Team Member" />
            <h3>Madhuri Kumari</h3>
            <p>Group CEO & Founder</p>
          </div>
          <div className={styles.member}>
            <img src="/src/all_image/m3.jpg" alt="Team Member" />
            <h3>Alka Kumari</h3>
            <p>Group CEO & Founder</p>
          </div>
        </div>
      </div>

      {/* Belief Section */}
      <section className={styles.rowContainer}>
        <div className={styles.textContent}>
          <h2 className={styles.to}>Our Belief</h2>
          <p>
            We believe that India can be a greener and cleaner country, as every household commits to getting their dry scrap recycled.
          </p>
          <h3 className={styles.k}>Minimizing landfills</h3>
          <ul>
            <li>Landfills are spreading at a fast pace, making waste management more complex.</li>
            <li>We must start waste management at home by proper waste segregation.</li>
            <li>We ensure dry segregated waste gets recycled as you sell your scrap to us.</li>
          </ul>
        </div>
        <div className={styles.imageContent}>
          <img src={garbageImg} alt="Landfill" className={styles.landfillImg} />
        </div>
      </section>

      {/* Testimonials - Carousel Slider */}
      <div className={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          className={styles.testimonialSwiper}
        >
          <SwiperSlide>
            <div className={styles.testimonialBox}>
              <p>"This company has exceeded my expectations. The team is outstanding!"</p>
              <h4>- Shiv Kapoor </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonialBox}>
              <p>"Great experience working with them. Highly recommend their services!"</p>
              <h4>- Rudre Gupta</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonialBox}>
              <p>"Their work is incredible. I'm extremely satisfied with their efforts!"</p>
              <h4>- Siya Smith</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
