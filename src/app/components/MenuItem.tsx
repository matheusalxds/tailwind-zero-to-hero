import { ReactElement } from 'react';

type Props = {
  label: string;
  children?: ReactElement | ReactElement[];
};

export const MenuItem = ({ label, children }: Props) => (
  <div className="group relative flex h-full cursor-pointer items-center p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-200">
    <span>{label}</span>
    {children}
  </div>
);
