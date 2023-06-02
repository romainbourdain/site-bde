import React from "react";
import VideoFile from "../../../assets/img/video-home.mp4";
import styled from "styled-components";

const Video = () => {
  return (
    <StyledVideo autoPlay muted loop>
      <source src={VideoFile} type="video/mp4" />
    </StyledVideo>
  );
};

const StyledVideo = styled.video`
  position: absolute;
  z-index: -10;
  object-fit: cover;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export default Video;
