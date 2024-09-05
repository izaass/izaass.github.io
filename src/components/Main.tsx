import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import CV from "../assets/files/CV_VO_HOANG_PHI_HUNG_en.pdf";
import "../assets/styles/Main.scss";
function Main() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <div
            style={{
              position: "relative",
              width: "150px",
              height: "120px",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src="https://avatars.githubusercontent.com/phihungvohoang"
                alt="User avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <img
              src="https://hazelvo.github.io/images/air_decoration.png"
              alt="Lightning Decoration"
              style={{
                width: "146px",
                height: "145px",
                position: "absolute",
                top: "-12px",
                left: "2px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/phihungvohoang"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/phihungvohoang/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1 className=" username-sparkles cursor-pointer">Hazel Vo</h1>
          <h4>Full Stack Engineer</h4>
          <p>
            Hello, My name is Hazel. <br />I am a Full Stack Engineer from
            Vietnam. Currently, I am IT Staff as Full Stack Engineer. I love
            working on a variety of technologies including Web Development, play
            CTFs and Deep Learning. My goal is to build highly performant
            applications that solve real-world problems and provide users with
            an awesome experience.
          </p>
          <Button
            className="contained-button"
            variant="contained"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
          <Button
            onClick={() => window.open(CV, "_blank", "noopener,noreferrer")}
            variant="outlined"
            sx={{ marginLeft: 2 }}
            className="outlined-button"
          >
            Download Resume
          </Button>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/phihungvohoang"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/phihungvohoang/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
