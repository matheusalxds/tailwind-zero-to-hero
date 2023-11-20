type Props = {
  labels: string[];
};

export const SubMenuItem = ({ labels }: Props) => (
  <div className="absolute right-0 top-full hidden whitespace-nowrap rounded-b-md bg-pink-500 text-right group-hover:block">
    {labels.map((label) => (
      <div
        key={label}
        className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200 "
      >
        <span>{label}</span>
      </div>
    ))}
  </div>
);
