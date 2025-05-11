import { type FC } from "react";

interface Props {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

export const ExperienceItem: FC<Props> = ({
  title,
  company,
  date,
  bullets,
}) => (
  <div className="mb-8">
    <h3 className="font-semibold">{title}</h3>
    <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between">
      <span>{company}</span>
      <span>{date}</span>
    </div>
    <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  </div>
);
