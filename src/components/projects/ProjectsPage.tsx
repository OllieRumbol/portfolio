import Container from "react-bootstrap/Container";
import DraughtsGameImage from "../../assets/DraughtsGame.PNG";
import Modal from "../../assets/Modal.png";
import TreeCalculator from "../../assets/TreeCalculator.PNG";
import JWTValidator from "../../assets/JWTValidator.png";
import ProjectCard from "./ProjectCard";
import "../../style/Shared.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ProjectPage = () => {
  return (
    <Container fluid className="p-4">
      <h1 className="text-center p-1 colour display-1">Projects</h1>
      <br />
      <Row xs={1} sm={1} md={1} className="g-5">
        <Col>
          <ProjectCard title="JWT Validator">
            <div className="col-lg-6">
              <h5 className="display-6">Description</h5>
              <p className="fs-4">
                The goal of this library is to simplify the validation and
                handling of JWTs in C#/ .NET. This library abstracts away from
                the complex internal libraries developed by Microsoft. I wanted
                to solve the recurring issue of developers struggling with the
                validation of an ID token after a successful OAuth login that I
                had seen time and time again as a developer. There are three
                main parts to this library
              </p>
              <ol>
                <li className="fs-4">
                  <span>
                    Builder: A builder to construct what parts of the JWT need
                    validating
                  </span>
                </li>
                <li className="fs-4">
                  <span>
                    Validator: Methods that return whether the JWT is valid or
                    not as well as a dictionary of what the JWT contains
                  </span>
                </li>
                <li className="fs-4">
                  <span>
                    Extensions: Dictionary extension methods to help handle the
                    results from validation.
                  </span>
                </li>
              </ol>
              <h5 className="display-6">Technology</h5>
              <p className="fs-4">
                This was the first project I release as a NuGet library and
                shared with other developers. It's built using C# and .NET 6.
                The are a variety of different aspects to this project, builder
                design pattern, "try get" methods, generic extension methods and
                unit tests.
              </p>
              <a
                href="https://www.nuget.org/packages/JWTValidator/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success mb-3"
              >
                Link to NuGet library
              </a>
              <br />
              <a
                href="https://ollierumbol.github.io/JWTValidator"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success mb-3"
              >
                Link to website
              </a>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                className="img-fluid"
                src={JWTValidator}
                alt="JWT Validator"
              />
            </div>
          </ProjectCard>
        </Col>
        <Col>
          <ProjectCard title="Draughts Game">
            <div className="col-lg-7">
              <h5 className="display-6">Description</h5>
              <p className="fs-4">
                A draughts game built that offers players both two-player and
                single-player modes with a range of difficulty levels. The game
                has many features to help players during the game, such as
                displaying all potential moves, whos turn it is, undo and the
                number of pieces taken for each player.
              </p>

              <h5 className="display-6">Technology</h5>
              <p className="fs-4">
                The front end of the game is built using react js and many other
                react libraries. Whilst the backend uses Azure serverless
                functions combined with the minimax algorithm to calculate the
                PCs next move. The site has been deployed using GitHub pages
                with a YAML pipeline to automate deployments.
              </p>
              <a
                href="https://ollierumbol.github.io/draughtsgame/#/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success mb-3"
              >
                Link to site
              </a>
            </div>
            <div className="col-lg-5 d-flex justify-content-center">
              <img
                className="img-fluid"
                src={DraughtsGameImage}
                alt="Draughts Game"
              />
            </div>
          </ProjectCard>
        </Col>
        <Col>
          <ProjectCard title="Dynamic Vue Modal">
            <div className="col-lg-7">
              <h5 className="display-6">Description</h5>
              <p className="fs-4">
                The idea of this project was to mix and match old and new
                technologies. Companies sometimes have so much technical debt
                that they believe they have no other choice but to carry on
                using old technologies in new projects and make the problem
                worse. This solution dynamically loads Vue and other
                dependencies without interfering with old technology. The modal
                allows users to log in.
              </p>
              <h5 className="display-6">Technology</h5>
              <p className="fs-4">
                The project uses as much vanilla js as possible and relies on
                Vue for DOM manipulation. This means when the next best frontend
                framework comes out when can use it as quickly as possible. It
                can be configured using a JSON file on AWS S3.
              </p>
              <a
                href="https://github.com/OllieRumbol/Dynamic-Vue"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success mb-3"
              >
                Link to repo
              </a>
            </div>
            <div className="col-lg-5 d-flex justify-content-center">
              <img className="img-fluid" src={Modal} alt="modal" />
            </div>
          </ProjectCard>
        </Col>
        <Col>
          <ProjectCard title="Tree Calculator">
            <div className="col-lg-7">
              <h5 className="display-6">Description</h5>
              <p className="fs-4">
                This program solves calculations by creating a tree from an
                equation and then solving a tree. It follows the BIDMAS logic
                (Brackets, Indices, Division, Multiplication, Addition,
                Subtraction) and can deal with all sort of calculations +, -, *,
                /, !, √, powers and brackets. Validation does occur before
                creating a tree for example dividing by 0 or missing out
                numbers.
              </p>

              <h5 className="display-6">Technology</h5>
              <p className="fs-4">
                A .NET Core console application has been used with .NET standard
                class libraries and MS unit tests."
              </p>
              <a
                href="https://github.com/OllieRumbol/TreeCalculator"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success mb-3"
              >
                Link to repo
              </a>
            </div>
            <div className="col-lg-5 d-flex justify-content-center">
              <img
                className="img-fluid"
                src={TreeCalculator}
                alt="Tree Calculator"
              />
            </div>
          </ProjectCard>
        </Col>
        <Col>
          <ProjectCard title="Early Projects">
            <div className="col-lg-12">
              <h5 className="display-6">Description</h5>
              <p className="fs-4">
                After my first year of university, I built all sorts of
                applications in Java to help develop my foundation knowledge as
                a developer. Such as clocks, calculators, text editors, track
                archery scoring, track table tennis matches, encoding and
                decoding messages, binary converters, code breakers and traffic
                light systems.
              </p>
            </div>
          </ProjectCard>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectPage;
