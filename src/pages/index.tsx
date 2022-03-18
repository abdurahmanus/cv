import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Helmet title="Dmitry Gladkikh - Front-end Developer" defer={false} />
        <Menu>
          <ExternalLink href="cv.pdf">🧾 Resume</ExternalLink>
        </Menu>
        <Hero />
        <Section>
          <SectionHeader>About</SectionHeader>
          <Paragraph>
            I am an experienced front-end developer who enjoys building modern UI using the latest in web technologies. I frequently
            leverage the <ExternalLink href="https://reactjs.org/">React</ExternalLink> and{" "}
            <ExternalLink href="https://redux.js.org/">Redux</ExternalLink> ecosystems (
            <ExternalLink href="https://redux-toolkit.js.org/">Redux Toolkit</ExternalLink>
            ). I ❤️ <ExternalLink href="https://styled-components.com/">styled-components</ExternalLink>,{" "}
            <ExternalLink href="https://xstyled.dev/">xstyled</ExternalLink>,{" "}
            <ExternalLink href="https://tailwindcss.com">Tailwind CSS</ExternalLink>,{" "}
            <ExternalLink href="https://chakra-ui.com/">Chakra UI</ExternalLink>.
          </Paragraph>
          <Paragraph>
            Currently, I work at <ExternalLink href="https://www.kaspersky.com/?ignoreredirects=true">Kaspersky</ExternalLink> on the
            Infrastructure Solutions & Services Development team.
          </Paragraph>
          <Paragraph>
            I started my journey in Computer Science at the{" "}
            <ExternalLink href="https://www.miit.ru/en">Russian University of Transport (MIIT)</ExternalLink> in Moscow. The first
            programming languages that I learned were{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Turbo_Pascal">Turbo Pascal</ExternalLink> and{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Assembler">Assembler</ExternalLink>. After graduation, I started working for a
            small company that created training programs for train drivers. We've used various technologies:{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Adobe_Flash">Adobe Flash</ExternalLink>,{" "}
            <ExternalLink href="https://www.ogre3d.org/">Ogre-3D</ExternalLink>,{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Augmented_reality">AR</ExternalLink> (when it first came into being). Next I
            started exploring .NET technologies such as{" "}
            <ExternalLink href="https://dotnet.microsoft.com/en-us/apps/aspnet">ASP.NET</ExternalLink>,{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Windows_Forms">Windows Forms</ExternalLink>,{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Windows_Presentation_Foundation">WPF</ExternalLink>,{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Microsoft_SQL_Server">Microsoft SQL Server</ExternalLink>, etc. I worked as a
            back-end developer for several years. Then I started to get interested in the front-end. At that time, the popular framework{" "}
            <ExternalLink href="https://angularjs.org/">AngularJS</ExternalLink> appeared, which blew everyone's minds. I decided to become
            a full-fledged front-end developer. Then came <ExternalLink href="https://reactjs.org/">React</ExternalLink>. Since then it has
            been my go-to tool. Also, I play with different things like <ExternalLink href="https://effector.dev/">effector</ExternalLink>,{" "}
            <ExternalLink href="https://xstate.js.org/">XState</ExternalLink>, <ExternalLink href="https://vuejs.org/">Vue.js</ExternalLink>
            , <ExternalLink href="https://d3js.org/">D3.js</ExternalLink>, <ExternalLink href="https://elm-lang.org/">elm</ExternalLink>.
          </Paragraph>
          <Paragraph>
            When I'm not working, I enjoy traveling and trying my hand at{" "}
            <ExternalLink href="https://unsplash.com/@abdurahmanus">photography</ExternalLink>, working on my pet projects, trying hard to
            learn more English.
          </Paragraph>
        </Section>
        <Section>
          <SectionHeader>Career</SectionHeader>
          <CareerPath>
            <PlaceOfWork>
              <CompanyLogoWrapper>
                <StaticImage src="../images/kaspersky.jpg" alt="Kaspersky logo" width={150} height={150} placeholder="blurred" />
              </CompanyLogoWrapper>
              <WorkDescription>
                <CompanyName>Kaspersky</CompanyName>
                <WorkingPeriod>March 2020 - Present</WorkingPeriod>
                <WorkInfo>
                  Front-end developer (React, Redux Toolkit, TypeScript, Node.js, WebSockets, styled-components, Jest). Developing internal
                  and external services and tools, components library
                </WorkInfo>
              </WorkDescription>
            </PlaceOfWork>
            <PlaceOfWork>
              <CompanyLogoWrapper>
                <StaticImage src="../images/it.png" alt="Inform Transport NPO logo" width={150} height={150} placeholder="blurred" />
              </CompanyLogoWrapper>
              <WorkDescription>
                <CompanyName>Inform Transport NPO</CompanyName>
                <WorkingPeriod>June 2013 - February 2020</WorkingPeriod>
                <WorkInfo>.NET developer (ASP.NET, Windows Forms, MS SQL Server).</WorkInfo>
                <WorkInfo>Full stack developer (ASP.NET Core, AngularJS, React, Redux, effector, JavaScript, TypeScript)</WorkInfo>
              </WorkDescription>
            </PlaceOfWork>
            <PlaceOfWork>
              <CompanyLogoWrapper>
                <StaticImage src="../images/mercator.png" alt="Mercator logo" width={150} height={150} placeholder="blurred" />
              </CompanyLogoWrapper>
              <WorkDescription>
                <CompanyName>Mercator</CompanyName>
                <WorkingPeriod>January 2013 - February 2013</WorkingPeriod>
                <WorkInfo>Front-end developer (Action Script). Developing UI part for the Speech Analysis project</WorkInfo>
              </WorkDescription>
            </PlaceOfWork>
            <PlaceOfWork>
              <CompanyLogoWrapper>
                <StaticImage src="../images/tip.png" alt="Trans Info Project OOO logo" width={150} height={150} placeholder="blurred" />
              </CompanyLogoWrapper>
              <WorkDescription>
                <CompanyName>Trans Info Project OOO</CompanyName>
                <WorkingPeriod>December 2009 - November 2012</WorkingPeriod>
                <WorkInfo>
                  Intern, developer (ActionScript, C++, Ogre-3D). Work on developing multimedia training programs for train drivers
                </WorkInfo>
              </WorkDescription>
            </PlaceOfWork>
          </CareerPath>
        </Section>
      </main>
    </Layout>
  );
};

const Menu = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  height: var(--menu-height);
  background: #2b2e3f3b;
  margin: 0 calc(var(--body-padding) * -1);
  z-index: 1
`;

const Section = styled.section`
  margin: 32px auto;
  max-width: 800px;
`;

const SectionHeader = styled.h1`
  text-align: center;
  padding: 32px 0;
  font-size: 3rem;
  font-family: var(--font-header);
  color: var(--header-color);
  margin: 0;
`;

const Paragraph = styled.p`
  margin: 0 0 24px;
  text-indent: 24px;
  text-align: justify;
  line-height: 1.4rem;
`;

const ExternalLink = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: var(--accent-color);
  text-decoration: none;
  &:hover {
    color: var(--accent-alt-color);
  }
`;

const CareerPath = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
  position: relative;
  &::before {
    --width: 4px;
    content: "";
    width: var(--width);
    background: white;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 75px;
    margin-left: calc(var(--width) / 2 * -1);
  }
`;

const PlaceOfWork = styled.figure`
  display: flex;
  align-items: center;
  position: relative;
  gap: 24px;
  margin: 0;
`;

const CompanyLogoWrapper = styled.div`
  .gatsby-image-wrapper {
    width: 150px;
    height: 150px;
    border: 6px solid white;
    border-radius: 50%;
    background: white;
    position: relative;
    z-index: 0;
  }
`;

const WorkDescription = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CompanyName = styled.h4`
  color: var(--accent-alt-color);
  font-family: var(--font-header);
  font-size: 1.3rem;
  margin: 0;
`;

const WorkingPeriod = styled.p`
  margin: 0;
  color: var(--accent-alt-color);
  opacity: 0.6;
`;

const WorkInfo = styled.p`
  margin: 0;
`;

export default IndexPage;
