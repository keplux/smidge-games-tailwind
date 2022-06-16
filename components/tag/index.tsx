import { ReactNode } from 'react';

type TagProps = {
  accentClasses: string;
  children: ReactNode;
};

export const Tag = ({ accentClasses, children }: TagProps) => {
  const style = `px-2 py-1 text-xs rounded-full ${accentClasses}`;
  return <div className={style}>{children}</div>;
};
export default Tag;
