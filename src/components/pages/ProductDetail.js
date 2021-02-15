import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, {
  CalloutActions,
  CalloutBody,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";
import HeroImage from "assets/hero.jpg";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;
  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Nome do serviço</h1>
      </Heading>
    </Hero>
    <Section>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab corporis,
        pariatur asperiores ipsum unde, quos in eaque quisquam repellat cumque
        quibusdam odit! Ipsam amet quae repudiandae illo adipisci nesciunt
        impedit.
      </p>
      <p>
        Aut nemo nisi, voluptatem veritatis ipsa cumque ratione non, et velit a,
        id accusantium! Adipisci, nemo, dolore architecto ab harum, doloremque
        atque corporis hic culpa necessitatibus tempore obcaecati impedit
        molestias.
      </p>
      <p>
        Tempora corporis alias odit dolor aut mollitia fugiat ratione. Accusamus
        veritatis modi, quisquam quibusdam recusandae minima, minus est facere
        cumque hic voluptatum possimus dignissimos nulla quam mollitia ut
        temporibus accusantium!
      </p>

      <h5>Documentos necessários</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faça sua matrícula agora mesmo</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quis libero quo sapiente nobis asperiores dolores? Eius, dolores
            officiis! Quia obcaecati nam, corporis nobis ex dolore porro minus!
            Tempora, quisquam!
          </p>
          <CalloutActions>
            <Button color="primary">Matricular</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
