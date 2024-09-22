import AboutSection from "@/components/Home/about";
import Contact from "@/components/Home/contact/contact";
import Events from "@/components/Home/events/events";
import HomeBannner from "@/components/Home/hero-section/home-banner";
import NewsSection from "@/components/Home/news/news";
import PresidentMessage from "@/components/Home/president-message/president";
import OurPublication from "@/components/Home/publication/publication";
import OurService from "@/components/Home/service/OurService";
import Sponser from "@/components/Home/sponsers/sponser";



export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomeBannner />
      <section className="space-y-20">
        <AboutSection />
        <div className="bg-gray-100 py-20">

          <PresidentMessage />
        </div>
        <Events />
        <div className="bg-gray-100 py-20">

          <OurService />
        </div>
        <Contact />
        <div className="bg-gray-100 py-20">
          <OurPublication />
        </div>
        <NewsSection />
        <section className="py-10 space-y-3 bg-slate-50">
          <h2 className="text-center  uppercase font-semibold text-secondaryColor ">Our Sponsors</h2>
          <h1 className='title text-center capitalize  text-gray-800 mx-auto   w-9/12 leading-relaxed '>
            Discover Organizations That Support Our Mission for <span className=' text-primaryColor'>Clean Water and Sustainability</span>
          </h1>
          <Sponser />
        </section>
      </section>
    </div>
  )
}
