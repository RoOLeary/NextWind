import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressMainWrapper = styled.section`
    background: rgba(255, 255, 255, 0.14);
    height: 5px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
`;

const ProgressMainStyle = styled.div`
    height: 5px;
    background: ${({ brandColor }) => (brandColor ? brandColor : '#F42')};
    width: ${({ scroll }) => scroll};
`;

const ProgressScroller = (props) => {
  const [scrollTotal, setScrollTotal] = useState(0);
  const scroll = scrollTotal ? scrollTotal : 0;
  const progressBar = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    setScrollTotal(scrolled);
  };
  useEffect(() => {
    window.addEventListener('scroll', progressBar);
  }, []);
  return (
    <ProgressMainWrapper>
      <ProgressMainStyle scroll={scroll} brandColor={props.brandcolor} />
    </ProgressMainWrapper>
  );
};
export default ProgressScroller;