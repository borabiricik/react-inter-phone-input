import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

type GlassProps = HTMLAttributes<HTMLDivElement>;

const GlassDiv = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 100%;
`;

const Glass = ({ children, className = '', ...props }: GlassProps) => {
  return (
    <GlassDiv {...props} className={classNames(className)}>
      {children}
    </GlassDiv>
  );
};

export default Glass;
