import Container from "react-bootstrap/Container";
import styles from "../../styles/home/about.module.css";
import FlipCard from "../cards/flipCard";
import Mission from "./mission";
import Fade from "react-reveal/Fade";

const founders = [
  {
    id: 1,
    name: "Andrea Dasti",
    role: "Co-Founder",
    imageSource: "images/profiles/billy.jpg",
    imageAlt: "Foto profilo Andrea Dasti",
    bio:
      "Matthew Paige Damon, detto Matt (Cambridge, 8 ottobre 1970), è un attore, sceneggiatore e produttore cinematografico statunitense.",
  },
  {
    id: 2,
    name: "Stefano Lepre",
    role: "Co-Founder",
    imageSource: "images/profiles/stefano.jpg",
    imageAlt: "Foto profilo Stefano Lepre",
    bio:
      "Leonardo Wilhelm DiCaprio (Los Angeles, 11 novembre 1974) è un attore, produttore cinematografico e attivista statunitense. ",
  },
];

const collaborators = [
  {
    id: 1,
    name: "Emanuele Bergami",
    role: "Formatore",
    imageSource: "images/profiles/emanuele.jpg",
    imageAlt: "Foto profilo Emanuele Bergami",
    bio:
      "Brad Pitt, all'anagrafe William Bradley Pitt (Shawnee, 18 dicembre 1963), è un attore e produttore cinematografico statunitense.",
  },
  {
    id: 2,
    name: "Heidi Corti",
    role: "Responsabile Grafica",
    imageSource: "images/profiles/heidi.jpg",
    imageAlt: "Foto profilo Heidi Corti",
    bio:
      "Gwyneth Kate Paltrow (Los Angeles, 27 settembre 1972) è un'attrice, cantante e imprenditrice statunitense.",
  },
  {
    id: 3,
    name: "Marco Malvicini",
    role: "Responsabile IT",
    imageSource: "images/profiles/marco.jpg",
    imageAlt: "Foto profilo Marco Malvicini",
    bio:
      "Ryan Thomas Gosling (London, 12 novembre 1980) è un attore, regista, sceneggiatore, produttore cinematografico, cantante e musicista canadese.",
  },
];

export default function About() {
  return (
    <Container fluid id="team" className={styles.section}>
      <Fade bottom>
        <Mission>
          <div id="about" className="position-link-id"></div>
        </Mission>
        <h2 className="section-title">Chi siamo</h2>
        <div className={styles.eduwayBio}>
          <p>
            Eduway nasce in una fredda sera invernale, dall'incontro fortuito in
            un bar di Crema tra Andrea Dasti e Stefano Lepre, due amici che
            vogliono affrontare le sfide dell'educazione. Eduway si propone di
            fare questo e quello... in modo da ottenere questo e quello...
            facendo attenzione a quello e quell'altro... con l'obiettivo di
            crescere ed espandere le sue attività dedicandosi a nuove sfide e
            progetti importanti per la comunità.{" "}
          </p>
        </div>
      </Fade>
      <div className={styles.foundersSection}>
        <Fade bottom>
          {founders.map((founder) => {
            return (
              <div key={founder.id} className={styles.profileBox}>
                <FlipCard
                  name={founder.name}
                  role={founder.role}
                  imageSource={founder.imageSource}
                  imageAlt={founder.imageAlt}
                  bio={founder.bio}
                  founder
                />
                <h5>{founder.name}</h5>
                <p>{founder.role}</p>
              </div>
            );
          })}
        </Fade>
      </div>
      <Fade bottom>
        <h3 className="title">Collaborano con noi</h3>
      </Fade>
      <div className={styles.collaboratorsSection}>
        <Fade bottom>
          {collaborators.map((collaborator) => {
            return (
              <div key={collaborator.id} className={styles.profileBox}>
                <FlipCard
                  name={collaborator.name}
                  role={collaborator.role}
                  imageSource={collaborator.imageSource}
                  imageAlt={collaborator.imageAlt}
                  bio={collaborator.bio}
                />
                <h5>{collaborator.name}</h5>
                <p>{collaborator.role}</p>
              </div>
            );
          })}
        </Fade>
      </div>
    </Container>
  );
}
