import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione
            exercitationem saepe. Dolorem doloribus totam quia ipsa, nesciunt
            aliquid quis, dolores voluptatem reiciendis itaque modi consequatur
            tempore inventore porro voluptas.
          </p>
          <p>
            Cupiditate deserunt temporibus ea. Aut facilis eligendi aspernatur,
            eveniet ex iste sequi perspiciatis sint ratione rerum tempora alias
            similique quo ullam itaque qui? Nesciunt adipisci voluptates harum
            magnam hic et!
          </p>
          <p>
            Sunt ipsum doloremque pariatur est reprehenderit voluptates dicta
            repellat dignissimos et nam, omnis maiores, nihil saepe earum, odio
            minus ad consectetur numquam unde voluptas id ipsa tempora
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
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
