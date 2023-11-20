type Props = {
  labels: string[];
};

export const SubMenuItem = ({ labels }: Props) => (
  <div className="hidden absolute top-full right-0 bg-pink-500 whitespace-nowrap rounded-b-md text-right group-hover:block">
    {labels.map((label) => (
      <div
        key={label}
        className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200 "
      >
        <span>{label}</span>
      </div>
    ))}
  </div>
);
