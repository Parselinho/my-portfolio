import aboutSvg from "../assets/prehistory.png";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hello! My name is Gal Parselani, a 33-year-old, Jewish, happily
            married, and a proud resident of Tel Aviv, Israel. Originally from
            Ra'anana, I cherish the strong bonds with my family, including my
            wife Hamutal, my brothers, and my adored nephews, who are central to
            my world. Passionate about gaming, I've been an avid player of
            Counter-Strike, GTA V, Destiny 2, and Football Manager for over two
            decades. Beyond the digital realm, I'm a culinary enthusiast, often
            crafting "Mama Meals" dinners for my wife and me. Staying active is
            crucial for me. I engage in football, Muay Thai, and functional
            training, and I'm an enthusiastic sports fan, enjoying everything
            from Footbal through UFC to tennis. My social life revolves around
            my close-knit group of friends from school, with whom I regularly
            catch up. Family time is sacred, particularly during Friday evenings
            and Saturdays. I believe in giving back and find volunteering deeply
            rewarding, as it resonates with my life's philosophy of helping
            others. In every aspect, whether it's through sports, gaming,
            cooking, or volunteering, I strive to bring joy and positivity to
            both my life and those around me.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
