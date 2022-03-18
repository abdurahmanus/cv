import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

interface HeroProps {
  style?: React.CSSProperties;
}

export const Hero: React.FC<HeroProps> = ({ style }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);

  // Use like this:
  const bgImage = convertToBgImage(image);

  return (
    <BgImageWrapper
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <AvatarBlock>
        <Figure>
          <AvatarWrapper>
            <StaticImage src="../images/avatar.jpg" alt="Avatar" placeholder="blurred" width={200} height={200} />
            <Figcaption>
              <div>Dmitry Gladkikh</div>
              <JobTitle>Front-end Developer</JobTitle>
            </Figcaption>
          </AvatarWrapper>
        </Figure>
      </AvatarBlock>
    </BgImageWrapper>
  );
};

const BgImageWrapper = styled(BackgroundImage)`
  height: 100vh;
  margin: 0 calc(var(--body-padding) * -1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(var(--menu-height) * -1)
`;

const AvatarBlock = styled.div`
  overflow: hidden;
  border-radius: 24px;
  border: 1px dashed hsl(0deg 0% 100% / 20%);
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: hsla(259.3, 70%, 7.8%, 0.94);
  padding: 32px;
  margin: 0;

  @supports (backdrop-filter: blur(0px)) {
    & {
      backdrop-filter: blur(6px);
      background-color: transparent;
    }
  }
`;

const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    border: 6px solid white;
    width: 200px;
    height: 200px;
  }
`;

const Figcaption = styled.figcaption`
  font-size: 1.3rem;
  font-family: var(--font-header);
  color: white;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const JobTitle = styled.div`
  font-size: 1rem;
  color: var(--accent-alt-color);
`;

export default Hero;
