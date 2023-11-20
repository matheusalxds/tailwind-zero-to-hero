import { ReactElement } from 'react';

type Props = {
  label: string;
  children?: ReactElement | ReactElement[];
};

export const MenuItem = ({ label, children }: Props) => (
  <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">
    <span>{label}</span>
    {children}
  </div>
);
