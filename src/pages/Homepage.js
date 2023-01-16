import React, {useState} from 'react';
import myFace from "../assets/myface.png";
import styles from "../styles/Homepage.module.css";
import Image from  "react-bootstrap/Image";
import Container from  "react-bootstrap/Container";

const Homepage = () => {

  const [intro, setIntro] = useState(true);
  const [hobbies, setHobbies] = useState(true);
  const [interests, setInterests] = useState(true);

  // const showIntro = (e) => {
  //   return <p>Hello!</p>
  // }

  // const showHobbies = (e) => {
  //   console.log("This was clicked for hobbies")
  // }

  // const showInterests = (e) => {
  //   console.log("Show interests")
  // }

  return (
    <Container>
      <div className={styles.RowAnimation}>
          <div className={`text-center d-flex align-items-center justify-content-center ${styles.ImageSection}`}>
              <h1 className="mr-4">Hello! My name is Joanne.</h1>
              <Image className={styles.Image} src={myFace}/>
              <h2 className="ml-4">I am a Junior Full-Stack Developer.</h2>
          </div>
      </div>
      <div className={styles.DivHeight}>
        <h2 className="text-center mb-5">
        - About Me - 
        </h2>
        <div className="text-center">
          <h3 onClick={() => setIntro(s => !s)} className={`${styles.AboutLink} d-inline p-4`}>Intro</h3>
          <h3 onClick={() => setHobbies(s => !s)} className={`${styles.AboutLink} d-inline p-4`}>Hobbies</h3>
          <h3 onClick={() => setInterests(s => !s)} className={`${styles.AboutLink} d-inline p-4`}>Interests</h3>
        </div>
        <div className="mt-4">
          {intro ? <p>I'm Joanne! I'm from Ontario, Canada and have done my Diploma in Full-Stack Software Development with Code Institute. I graduated in 2023 and absolutely love making websites and developing.</p> :  null}
          {!hobbies ? <p>I love travelling! I moved to Ireland in 2017 and have travelled all over Europe and Asia. I loved Iceland and Turkey.</p> :  null}
          {!interests ? <p>I enjoy listening to music, collecting vinyl, vintage shopping, cycling, painting, and going to coffee shops to write.</p> :  null}
        </div>
      </div>
    </Container>
  )
}

export default Homepage