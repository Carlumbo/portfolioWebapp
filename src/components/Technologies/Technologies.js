import React from 'react';
import { DiCloud9, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies </SectionTitle>
    <SectionText>
      I've worked with various technologies both in the Web development world
      and embedded programming. Currently focusing on React Front-end
      development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Rails
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCloud9 size='3rem' />
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS EC2, IoT, Lambda ...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
