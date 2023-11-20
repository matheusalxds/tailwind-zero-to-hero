'use client';

import { useState } from 'react';

import { hamburgerVariants } from '@/styles/plugin/open-variants';

export const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const { group, topItem, middleItem, bottomItem } = hamburgerVariants({ open });

  const handleClick = (visiblity: boolean) => {
    setOpen(() => visiblity);
  };

  return (
    <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
      <div className={group()} onClick={() => handleClick(!open)}>
        <div className={topItem()}></div>
        <div className={middleItem()}></div>
        <div className={bottomItem()}></div>
      </div>
    </div>
  );
};
