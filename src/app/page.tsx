import AboutSection from "@/components/Home/about";
import Contact from "@/components/Home/contact/contact";
import Events from "@/components/Home/events/events";
import HomeBannner from "@/components/Home/hero-section/home-banner";
import PresidentMessage from "@/components/Home/president-message/president";
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
        <section className="py-10 space-y-3 bg-slate-50">
          <h2 className="text-center font-semibold ">Our Sponsors</h2>
          <h1 className='title text-center capitalize  mx-auto  w-11/12 leading-relaxed '>
            Discover Organizations That Support Our Mission for <span className=' text-primaryColor'>Clean Water and Sustainability</span>
          </h1>
          <Sponser />
        </section>
      </section>
    </div>
  )
}
