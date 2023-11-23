import { tv } from 'tailwind-variants';

export const hamburgerVariants = tv({
  slots: {
    group: 'group',
    topItem: 'top-0 group-open h-1 w-8 rounded-lg bg-zinc-200 transition-all relative',
    middleItem: 'my-1 h-1 w-8 rounded-lg bg-zinc-200 transition-all',
    bottomItem: 'top-0 h-1 w-8 rounded-lg bg-zinc-200 transition-all relative',
    mobileMenu: 'absolute left-0 top-[62px] w-full bg-gradient-to-r from-rose-500 to-pink-500 hidden',
  },
  variants: {
    open: {
      true: {
        topItem: 'rotate-45 top-2',
        middleItem: 'opacity-0',
        bottomItem: '-rotate-45 -top-2',
        mobileMenu: 'block',
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});
