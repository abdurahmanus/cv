import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import telegramSvg from "../images/telegram.svg";
import githubSvg from "../images/github.svg";
import gmailSvg from "../images/gmail.svg";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,700&display=swap');
    :root {
        --accent-color: hsl(213deg 68% 57%);
        --accent-alt-color: hsl(326deg 38% 50%);
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: "Open Sans", sans-serif;
        background: #f2f2f2;
        padding-bottom: 64px;
    }
`;

const contacts = [
  {
    href: "https://unsplash.com/@abdurahmanus",
    icon: <span>📸</span>,
    text: "unsplash.com/@abdurahmanus",
  },
  {
    href: "mailto:abdurahmanus@gmail.com",
    icon: <img src={gmailSvg} width="16" height="16" alt="gmail logo" />,
    text: "abdurahmanus@gmail.com",
  },
  {
    href: "https://github.com/abdurahmanus",
    icon: <img src={githubSvg} width="16" height="16" alt="github logo" />,
    text: "github.com/abdurahmanus",
  },
  {
    href: "https://abdurahmanus.github.io/cv/",
    icon: <span>🐤</span>,
    text: "abdurahmanus.github.io/cv",
  },
  {
    href: "https://t.me/abdurahmanus",
    icon: <img src={telegramSvg} width="16" height="16" alt="telegram logo" />,
    text: "abdurahmanus",
  },
];

const SimplePage = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <HeaderBackground>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
            <defs>
              <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--accent-alt-color)" />
                <stop offset="100%" stopColor="var(--accent-color)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#Gradient)"
              stroke="none"
              d="M-1.97,90.30 C201.18,117.94 196.10,49.84 501.97,113.00 L500.00,0.00 L0.00,0.00 Z"
            ></path>
          </svg>
        </HeaderBackground>
        <h1>Dmitry Gladkikh</h1>
        <Contacts>
          {contacts.map((contact) => (
            <Contact key={contact.text}>
              <ContactLink href={contact.href} target="_blank">
                {contact.icon}
                {contact.text}
              </ContactLink>
            </Contact>
          ))}
        </Contacts>
      </Header>
      <Main>
        <SectionHeader>Summary</SectionHeader>
        <Summary />
        <SectionHeader>Education</SectionHeader>
        <Education />
        <SectionHeader>Work</SectionHeader>
        <Work />
      </Main>
    </>
  );
};

export default SimplePage;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  position: relative;
  padding-bottom: 100px;
  gap: 24px;
  color: white;
  h1 {
    font-size: 2rem;
  }
`;

const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Contacts = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const Contact = styled.li`
  white-space: nowrap;
  display: flex;
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  gap: 4px;
`;

const Main = styled.main`
  padding: 0 32px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 32px;
  row-gap: 32px;
`;

const SectionHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--accent-color);
`;

const InSectionHeader = styled.h3`
  font-size: 1.5rem;
  color: var(--accent-alt-color);
  font-weight: 400;
`;

const Summary = () => {
  return (
    <SummaryWrapper>
      <InSectionHeader>Front-end developer</InSectionHeader>
      <p>
        Experienced front-end developer who enjoys building modern UI using the latest in web technologies.
        I have worked extensively with modern web technologies like React, Redux Toolkit, and Webpack to build performant and accessible front-end experiences.
        In my spare time, I enjoy taking photos, working on side projects and learning new things
      </p>
    </SummaryWrapper>
  );
};

const SummaryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Education = () => {
  return (
    <TwoColumns>
      <InSectionHeader>Russian University of Transport (MIIT)</InSectionHeader>
      <AddressCell>Moscow</AddressCell>
      <div>
        <p>Control and computer science in technical systems, Specialist</p>
      </div>
      <DateCell>2003 - 2008</DateCell>
    </TwoColumns>
  );
};

const Work = () => {
  return (
    <TwoColumns>
      <InSectionHeader>Kaspersky</InSectionHeader>
      <AddressCell>Moscow</AddressCell>
      <JobTitleCell>Front-end developer</JobTitleCell>
      <DateCell>Mar 2020 - Present</DateCell>
      <JobDetailsCell>
        <Duties>
          <li>Developing front-end for internal and external services using React, Redux Toolkit, styled-components, Chakra UI</li>
          <li>Creating a monorepository that combines several related projects using nx-workspaces</li>
          <li>Participation in the development of a shared components library (ui-kit)</li>
          <li>Developing REST web-services using Node.js</li>
        </Duties>
      </JobDetailsCell>
      <EmptyCell />

      <InSectionHeader>Inform Transport NPO</InSectionHeader>
      <AddressCell>Moscow</AddressCell>
      <JobTitleCell>Full stack developer</JobTitleCell>
      <DateCell>Jun 2013 - Feb 2020</DateCell>
      <JobDetailsCell>
        <Duties>
          <li>Developing systems to control the location of locomotives on the map using ASP.NET, C#, JavaScript, JQuery, OpenLayers</li>
          <li>
            Developing process management system for locomotive factory using ASP.NET Core, MS SQL Server, Entity Framework, C#, AngularJS,
            JavaScript, gulp
          </li>
          <li>Migrating the old codebase to modern stack (React, Redux, TypeScript, webpack)</li>
        </Duties>
      </JobDetailsCell>
      <EmptyCell />

      <InSectionHeader>Mercator</InSectionHeader>
      <AddressCell>Moscow</AddressCell>
      <JobTitleCell>Front-end developer</JobTitleCell>
      <DateCell>Jan 2013 - Feb 2013</DateCell>
      <JobDetailsCell>
        <p>
          Developing front-end part for the Speech Analysis (StatViz) project using ActionScript. This project was used to visualize a major
          politician's speech broadcasted live.
        </p>
      </JobDetailsCell>
      <EmptyCell />

      <InSectionHeader>Trans Info Project OOO</InSectionHeader>
      <AddressCell>Moscow</AddressCell>
      <JobTitleCell>Intern, developer</JobTitleCell>
      <DateCell>Dec 2009 - Nov 2012</DateCell>
      <JobDetailsCell>
        <Duties>
          <li>Developing multimedia training programs for train drivers using ActionScript, C++, Ogre-3D, HTML & CSS</li>
          <li>Developing desktop applications for Windows using .NET, C#, Windows Forms, MS SQL Server</li>
          <li>Migrating team's source code from Subversion to Git and serving as a resource to those unfamiliar with Git</li>
        </Duties>
      </JobDetailsCell>
      <EmptyCell />
    </TwoColumns>
  );
};

const TwoColumns = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 8px;
  row-gap: 16px;
`;

const JobTitleCell = styled.div`
  font-weight: 700;
  font-style: italic;
`;

const AddressCell = styled.div`
  align-self: center;
  justify-self: flex-end;
  font-weight: bold;
`;

const DateCell = styled.div`
  font-weight: bold;
  color: gray;
  justify-self: flex-end;
`;

const JobDetailsCell = styled.div``;

const EmptyCell = styled.div``;

const Duties = styled.ul`
  list-style-position: inside;
  > li::marker {
    color: gray;
  }
`;
