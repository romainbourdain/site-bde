import React, {useEffect, useRef} from "react";
import styled from "styled-components";

const Video = ({video}) => {
    const videoRef = useRef();

    useEffect(() => {
        videoRef.current?.load();
    }, [video]);

    return (
        <StyledVideo autoPlay muted loop ref={videoRef}>
            <source src={video} type="video/mp4"/>
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
