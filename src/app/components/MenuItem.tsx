import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  label: string;
  children?: ReactElement | ReactElement[];
  center?: boolean;
  onClick?: () => void;
};

type PropsMenu2 = Props & {
  onClick?: () => void;
  open: boolean;
};

export const MenuItem = ({ label, children, center }: Props) => (
  <div
    className={twMerge(
      center && 'items-center justify-center',
      'group relative flex h-full cursor-pointer items-center p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-200',
    )}
  >
    <span>{label}</span>
    {children}
  </div>
);

export const MenuItem2 = ({ label, children, open, ...otherProps }: PropsMenu2) => (
  <div
    className={twMerge(
      'group relative h-full cursor-pointer text-pink-200 transition-colors hover:bg-white/10 hover:text-zinc-200',
    )}
    {...otherProps}
  >
    <div className="p-4 text-center font-bold">{label}</div>
    <div className={twMerge('hidden', open && 'block')}>{children}</div>
  </div>
);
