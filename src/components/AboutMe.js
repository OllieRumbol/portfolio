import Container from 'react-bootstrap/Container';
import '../style/Shared.css';
import '../style/AboutMe.css';

export default function AboutMe() {

  return (
    <Container fluid className='p-4'>
      <div className='center'>
        <h1 className='colour display-1'>About Me</h1>
      </div>
      <div>
        <h4 className='colour display-4 text-success'>Education</h4>
      </div>
      <div>
        <h6 className='colour display-6'>2016 - 2020 1st Class BSc in Computer Science, University of Kent</h6>
      </div>
      <div className='colour fs-4'>
        <ul>
          <li className='fw-bolder'><span>Final year <span className="badge bg-success">73%</span></span></li>
          <ul>
            <li><span>Introduction to Intelligent Systems</span></li>
            <li><span>Computing Law and Professional Responsibility</span></li>
            <li><span>Computing in the Classroom</span></li>
            <li><span>IT Consultancy Project (final year project)</span></li>
            <li><span>Internet of Things</span></li>
            <li><span>Programming Language Implementation</span></li>
            <li><span>Theory and Practice of Concurrency</span></li>
          </ul>
          <li className='fw-bolder'><span>Industry year <span className="badge bg-success">81%</span></span></li>
          <ul>
            <li><span>Software developer at AXA PPP</span></li>
          </ul>
          <li className='fw-bolder'><span>Second year <span className="badge bg-success">74%</span></span></li>
            <ul>
              <li><span>Software Engineering</span></li>
              <li><span>Algorithms, Correctness and Efficiency</span></li>
              <li><span>Theory of Computing</span></li>
              <li><span>Operating Systems and Architecture</span></li>
              <li><span>Database Systems</span></li>
              <li><span>Web Development</span></li>
              <li><span>Functional and Concurrent Programming</span></li>
            </ul>
          <li className='fw-bolder'><span>First year <span className="badge bg-success">72%</span></span></li>
          <ul>
            <li><span>Introduction to Object-Oriented Programming</span></li>
            <li><span>Foundations of Computing 1</span></li>
            <li><span>Databases and the Web</span></li>
            <li><span>Computer Systems</span></li>
            <li><span>Foundations of Computing 2</span></li>
            <li><span>Human Computer Interaction</span></li>
            <li><span>People and Computing</span></li>
            <li><span>Further Object-Oriented Programming</span></li>
          </ul>
        </ul>
      </div>
      <div>
        <h6 className='colour display-6'>2009 – 2016 Sixth Form and Secondary School, John Wallis Academy, Ashford</h6>
      </div>
      <div className='colour fs-4'>
        <ul>
          <li><span>3 A Levels: Computing (C), Geography (C), BTEC ICT Double Distinction*</span></li>
          <li><span>12 GCSEs and 2 BTECs from A* - C</span></li>
        </ul>
      </div>
    </Container>
  );
}