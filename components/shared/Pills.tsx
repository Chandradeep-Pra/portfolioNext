import React from 'react';

interface PillProps {
  containerClasses?: string;
  textClasses?: string;
  component?: React.ReactNode;
  title?: string;
}

const Pill: React.FC<PillProps> = ({
  containerClasses = '',
  textClasses = '',
  component,
  title,
}) => {
  return (
    <div className={`inline-flex items-center py-2 px-12 rounded-full ${containerClasses}`}>
      {component && <div>{component}</div>}
      <span className={`font-bold ${textClasses}`}>{title}</span>
    </div>
  );
};

export default Pill;
