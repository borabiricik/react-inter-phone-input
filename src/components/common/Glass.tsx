import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

type GlassProps = HTMLAttributes<HTMLDivElement>;

const Glass = ({ children, className = '', ...props }: GlassProps) => {
  return (
    <div
      {...props}
      className={classNames(
        'h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Glass;
