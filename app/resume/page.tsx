import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Razvan\'s Resume',
  description: 'Learn everything about my past work history',
}
export default function resume() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "2em", fontWeight: "bold" }}>Rad Razvan Daniel</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p>Sibiu, Romania</p>
        <p>Email: <a href="mailto:rad.razvan.daniel@gmail.com">rad.razvan.daniel@gmail.com</a></p>
        <p>Phone: (+40) 770 472 683</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/razvan-rad" target="_blank" rel="noopener noreferrer">linkedin.com/in/razvan-rad</a></p>
      </div>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.5em", borderBottom: "2px solid #ccc", paddingBottom: "5px", marginBottom: "20px" }}>Work Experience</h2>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>Full Stack Software Engineer</h3>
          <p><i>Wenglor Sensoric Group</i> (05/2023 - 01/2025)</p>
          <ul>
            <li>Debug, optimize and refactor back-end and frontend behavior</li>
            <li>Create firmware update module and document functionality</li>
            <li>Improve IPC using ZeroMQ</li>
            <li>Reduce startup time by 15 seconds</li>
            <li>Design and architect C++ modules</li>
            <li>Speed-up compilation by 12% using CMake and Artifactory</li>
            <li>Created live update features, eliminating restarts</li>
            <li>Develop, maintain, fix tests</li>
          </ul>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>Telematics Engineer / Team Leader / Internship Mentor</h3>
          <p><i>Liebherr</i> (01/2022 - 05/2023)</p>
          <ul>
            <li>Led a team of 4, practicing various activities involving a telematics project</li>
            <li>Implemented and developed various modules such as a VPN module</li>
            <li>Architected a GSM module</li>
            <li>Designed and implemented an embedded security module</li>
            <li>Developed unit tests using C++, RobotFramework, GTest</li>
            <li>Re-engineered TCPDump and a firewall in C++</li>
            <li>Wrote a safe multi-threaded component with socket inter-process communication</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>C++ Developer</h3>
          <p><i>AUSY Technologies Internship</i> (07/2021 - 12/2021)</p>
          <ul>
            <li>Built a Raspberry Pi-controlled LED cube</li>
            <li>Linux and socket programming</li>
            <li>Practiced the AGILE methodology</li>
            <li>Provided support to other colleagues in the team</li>
            <li>Technologies used: C++, Yocto, CMake</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.5em", borderBottom: "2px solid #ccc", paddingBottom: "5px", marginBottom: "20px" }}>Academic Background</h2>
        <p>
          <i>Lucian Blaga University of Sibiu, Sibiu (Romania)</i> (2020 - 2024)
        </p>
        <p>Working towards a bachelor's degree in Computer Engineering</p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.5em", borderBottom: "2px solid #ccc", paddingBottom: "5px", marginBottom: "20px" }}>Skills</h2>
        <ul style={{ columnCount: 2, columnGap: "20px" }}>
          <li><strong>Languages:</strong> Romanian (Native), English (Advanced)</li>
          <li><strong>Development:</strong> C++, Bash, C, Python, Boost</li>
          <li><strong>Test:</strong> RobotFramework, GTest, CPPUnit</li>
          <li><strong>Build tools:</strong> GNU Make, CMake, Artifactory, Yocto</li>
          <li><strong>Frontend:</strong> React, Typescript, Javascript, Tailwind</li>
          <li><strong>Backend:</strong> Node.js, Lighttpd, SQLite3, MySQL</li>
          <li><strong>MISC:</strong> Docker, Jenkins, Jira, Git, Linux (Debian, Fedora), Arduino, Blender</li>
        </ul>
      </section>
    </div>
  );
}
