import PageHead from "../../components/pageHead/PageHead"
import "./about.css"

const About = () => {

    return (
        <>
        <PageHead title="Who we are?" paragraph="A short paragraph goes here."/>
        <div className="about container">
            <p className="about__para">Welcome to <span>Workout</span>, your ultimate destination for fitness enthusiasts of all levels. With a vast database of about 1200 meticulously curated exercises, we are here to empower you on your fitness journey.</p>
            <p className="about__para">At <span>Workout</span>, we understand that finding the right exercise can be overwhelming. That&#39;s why we&#39;ve made it our mission to provide you with a comprehensive collection of exercises that cater to your unique goals and preferences. Whether you&#39;re a seasoned athlete looking to push your limits or a beginner seeking guidance, our diverse range of exercises ensures that there&#39;s something for everyone.</p>
            <p className="about__para">Our team of fitness experts and trainers has carefully crafted each exercise, ensuring that they are effective, safe, and adaptable. Our database covers a wide array of fitness disciplines. You can easily browse through our collection and find the perfect exercise to challenge yourself and take your fitness to new heights.</p>
            <p className="about__para">Join us on this incredible fitness journey and unlock a world of possibilities. Whether you&#39;re looking to build strength, lose weight, improve flexibility, or simply lead a healthier lifestyle, <span>Workout</span> is your trusted companion. Let&#39;s sweat, grow, and transform together.</p>
            <p className="about__para">Start exploring our database of exercises today and elevate your fitness game with <span>Workout</span>!</p>
        </div>
        </>
    )
}

export default About