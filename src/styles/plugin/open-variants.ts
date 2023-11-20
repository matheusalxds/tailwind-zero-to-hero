import { tv } from 'tailwind-variants';

export const hamburgerVariants = tv({
  slots: {
    group: 'group',
    topItem: 'top-0 group-open h-1 w-8 rounded-lg bg-zinc-200 transition-all',
    middleItem: 'my-1 h-1 w-8 rounded-lg bg-zinc-200 transition-all',
    bottomItem: 'top-0 h-1 w-8 rounded-lg bg-zinc-200 transition-all',
  },
  variants: {
    open: {
      true: {
        topItem: 'rotate-45 top-2 relative',
        middleItem: 'opacity-0',
        bottomItem: '-rotate-45 -top-2 relative',
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});
