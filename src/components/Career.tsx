import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Intern</h4>
                <h5>UNO Minda</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on network security, monitored firewalls, managed security policies, and gained hands-on exposure to VAPT, vulnerability assessment, and penetration testing support. Contributed to a VAPT automation project.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Intern</h4>
                <h5>Gurugram Police</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked with the Cyber Cell team on real cybercrime investigations, gaining hands-on experience in VAPT, vulnerability analysis, penetration testing support, digital forensics, and OSINT.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SOC Intern</h4>
                <h5>Airtel</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Monitored security alerts, analyzed logs and network traffic, and assisted in identifying and responding to potential security incidents. Learned about blue teaming tools, EDR, XDR and how they work in real world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
