interface ProyectHeaderProps {
  title: string;
  subtitle: string;
  role: string;
  date: string;
}

const ProyectHeader: React.FC<ProyectHeaderProps> = ({
  title,
  subtitle,
  role,
  date,
}) => {
  return (
    <div className="flex h-min w-full justify-between border-b border-black pb-2 pt-20 *:font-roboto">
      <div>
        <h1 className="mb-2 text-6xl font-extralight uppercase">{title}</h1>
        <h2 className="text-2xl">{subtitle}</h2>
        <p className="text-lg font-extralight">Roll: {role}</p>
      </div>
      <div className="flex items-end text-lg font-extralight">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ProyectHeader;
