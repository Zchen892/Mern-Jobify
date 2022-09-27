import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            My name is Ze Chen, currently studying Quantitative Finance and
            Computational Science and engineering in Georgia Tech. During the
            past several years, improving my programming skills of modeling or
            research is my top priority. My main focus is on financial research,
            including trading strategy designing, derivative pricing and other
            topics. During this summer, I dig further into the web development
            industry and tried to design this job search application using
            JavaScript, React.js, MongoDB and node.js. I am excited to learn
            more about software development tools and skillsets. Hopefully, I
            can make it to a successful career in computer science.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
