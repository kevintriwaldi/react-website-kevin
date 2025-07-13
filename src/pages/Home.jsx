/* untuk manggil fungsi parse */
import parse from "html-react-parser"
/* untuk manggil componen */
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Tutor from "../components/Tutor"
import Partner from "../components/Partner"
import Contact from "../components/Contact"
/* untuk manggil data */
import { homeSection } from "../data/HomeSection"
import { courseSection } from "../data/CourseSection"
import { tutorSection, tutorList } from "../data/TutorSection"
import { partnerSection, partnerList } from "../data/PartnerSection"
import { contactSection } from "../data/ContactSection"
/* untuk manggil style */
import "../styles/Home.css"

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
        {/* online course */}
        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={courseSection.image} />
        </section>
        {/* tutor course */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorSection.content)}</div>
          </div>
        </section>
      </div>
      <Tutor tutorList={tutorList} />
      <section id="partners">
        <div className="tengah">
          <div className="kolom">{parse(partnerSection.content)}</div>
          <Partner partnerList={partnerList} />
        </div>
      </section>
      <Contact contactSection={contactSection} />
      <Footer />
      {/* test */}
    </>
  )
}

export default Home
