import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import footerText from "../../assets/text/footer";

const Links = () => {
  return (
    <Container>
      <LinksContainer>
        {footerText.links.map((column, index) => (
          <Column key={index}>
            <Title>{column.title}</Title>
            <List>
              {column.linkList.map((link, index) => (
                <Link key={index} target="_blank" href={link.url}>
                  {link.name}
                </Link>
              ))}
            </List>
          </Column>
        ))}
      </LinksContainer>
      <Contact>
        <Column>
          <Title>{footerText.contact.title}</Title>
          <Icons>
            {footerText.contact.icons.map((icon, index) => (
              <Icon target="_blank" href={icon.url} key={index}>
                <FontAwesomeIcon icon={icon.icon} />
              </Icon>
            ))}
          </Icons>
        </Column>
        <Column>
          <Title>{footerText.insidePsbs.title}</Title>
          <Icons>
            {footerText.insidePsbs.links.map((link, index) => (
              <Link target="_blank" href={link.url} key={index}>
                <img src={link.img} alt={link.name} />
              </Link>
            ))}
          </Icons>
        </Column>
      </Contact>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundDark};
  padding: 50px 65px;
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 850px) {
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textLight};
  font-size: 2rem;
  font-weight: 700;

  @media (min-width: 850px) and (max-width: 1450px) {
    font-size: 1.5rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 850px) {
    align-items: center;
  }
`;

const Contact = styled(Column)`
  gap: 30px;

  @media (min-width: 850px) and (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Link = styled.a`
  font-size: 1.2rem;
  color: ${(props) => props.theme.textLightSecondary};
  &:hover {
    color: ${(props) => props.theme.textLight};
  }

  @media (min-width: 850px) and (max-width: 1450px) {
    font-size: 1rem;
  }
`;

const Icon = styled(Link)`
  font-size: 3rem;

  @media (min-width: 1200px) and (max-width: 1450px) {
    font-size: 2rem;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 150px;

    @media (min-width: 1200px) and (max-width: 1450px) {
      width: 100px;
    }
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Links;
