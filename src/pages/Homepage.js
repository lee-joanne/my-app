import React from 'react';
import myFace from "../assets/myface.png";
import styles from "../styles/Homepage.module.css";
import Image from  "react-bootstrap/Image";
import Container from  "react-bootstrap/Container";

const Homepage = () => {
  return (
    <Container className={styles.ContainerAnimation}>
            <div className={`text-center d-flex align-items-center justify-content-center ${styles.ImageSection}`}>
                <h1 className="mr-4">Hello! My name is Joanne.</h1>
                <Image className={styles.Image} src={myFace}/>
                <h2 className="ml-4">I am a Junior Full-Stack Developer.</h2>
            </div>
    </Container>
  )
}

export default Homepage