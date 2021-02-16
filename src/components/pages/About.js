import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useScrollToTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";
import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";
import InstrImage1 from "assets/instructors/instr01.jpg";
import InstrImage2 from "assets/instructors/instr02.jpg";
import InstrImage3 from "assets/instructors/instr03.jpg";
import InstrImage4 from "assets/instructors/instr04.jpg";
import InstrImage5 from "assets/instructors/instr05.jpg";
import InstrImage6 from "assets/instructors/instr06.jpg";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  { id: 1, name: "Thor", avatar: InstrImage1 },
  { id: 2, name: "Mel", avatar: InstrImage2 },
  { id: 3, name: "Bolinha", avatar: InstrImage3 },
  { id: 4, name: "Mike", avatar: InstrImage4 },
  { id: 5, name: "Emmy", avatar: InstrImage5 },
  { id: 6, name: "Bob", avatar: InstrImage6 },
];

const About = () => {
  useScrollToTop();
  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Auto Escola</h1>
        </Heading>
        <BreadCrumb
          items={[{ label: "Início", link: "/" }, { label: "Sobre" }]}
        />
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              ratione exercitationem saepe. Dolorem doloribus totam quia ipsa,
              nesciunt aliquid quis, dolores voluptatem reiciendis itaque modi
              consequatur tempore inventore porro voluptas.
            </p>
            <p>
              Cupiditate deserunt temporibus ea. Aut facilis eligendi
              aspernatur, eveniet ex iste sequi perspiciatis sint ratione rerum
              tempora alias similique quo ullam itaque qui? Nesciunt adipisci
              voluptates harum magnam hic et!
            </p>
            <p>
              Sunt ipsum doloremque pariatur est reprehenderit voluptates dicta
              repellat dignissimos et nam, omnis maiores, nihil saepe earum,
              odio minus ad consectetur numquam unde voluptas id ipsa tempora
              necessitatibus reiciendis! Error?
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <center>
              <ImageContainer>
                <AboutImage />
              </ImageContainer>
            </center>
          </div>
        </Grid>
      </Section>
      <Section inverse>
        <Grid md={2}>
          <div>
            <h4>Missão</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex fuga
              tenetur ut commodi quidem delectus hic nam deleniti nobis dicta
              ducimus, dolorum, similique voluptates minus quam corrupti quos
              dolorem laborum?
            </p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>
              Esse, facere soluta laudantium consequuntur enim assumenda iste
              provident beatae hic tenetur quidem dolorum aspernatur et
              accusantium, molestiae eveniet error quam nobis culpa voluptatum
              quae veniam. Ex architecto ratione cumque!
            </p>
          </div>
        </Grid>
      </Section>
      <Section>
        <Heading>
          <h2>Conheça nossos professores </h2>
        </Heading>
        <Grid sm={2} md={3} lg={4}>
          {instructors.map((instructor) => (
            <Card key={instructor.id}>
              <CardMedia image={instructor.avatar}>
                <CardMediaDescription>
                  <h5>{instructor.name}</h5>
                </CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer />
    </>
  );
};

About.defaultProps = {};

About.propTypes = {};

export default About;
