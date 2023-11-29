'use client';

import { useState } from 'react';

import { MenuItem, MenuItem2 } from '@/app/components/MenuItem';
import { SubMenuItem2 } from '@/app/components/SubMenuItem';
import { hamburgerVariants } from '@/styles/plugin/open-variants';

export const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const [ticketsMenu, setTicketsMenu] = useState(false);

  const { group, topItem, middleItem, bottomItem, mobileMenu } = hamburgerVariants({ open });

  const handleClick = (visiblity: boolean) => {
    setOpen(() => visiblity);
  };
  const handleTicketsMenu = (visiblity: boolean) => {
    setTicketsMenu(() => visiblity);
  };

  return (
    <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
      <div className={group()} onClick={() => handleClick(!open)}>
        <div className={topItem()}></div>
        <div className={middleItem()}></div>
        <div className={bottomItem()}></div>
      </div>
      <div className={mobileMenu()}>
        <MenuItem label="Home" center />
        <MenuItem label="Lineup" center />
        <MenuItem2 label="Tickets" center open={ticketsMenu} onClick={() => handleTicketsMenu(!ticketsMenu)}>
          <SubMenuItem2 labels={['Single day ticket', '7 day ticket']} />
        </MenuItem2>
        <MenuItem label="Support" center />
      </div>
    </div>
  );
};
