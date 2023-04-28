import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import footerText from "../../assets/text/footer";

const Links = () => {
  return (
    <Container>
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
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textLight};
  font-size: 2rem;
  font-weight: 700;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Contact = styled(Column)`
  gap: 30px;
`;

const Link = styled.a`
  font-size: 1.2rem;
  color: ${(props) => props.theme.textLightSecondary};
  &:hover {
    color: ${(props) => props.theme.textLight};
  }
`;

const Icon = styled(Link)`
  font-size: 3rem;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 150px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Links;
