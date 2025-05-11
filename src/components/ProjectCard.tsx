import { type FC } from "react";
import { ExternalLink } from "lucide-react";
import GitHub from "@/assets/GitHub";

interface Props {
  title: string;
  description: string;
  tech: string[];
  img: string;
  liveUrl: string;
  repoUrl: string;
}

export const ProjectCard: FC<Props> = ({
  title,
  description,
  tech,
  img,
  liveUrl,
  repoUrl,
}) => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
    <img src={img} alt={title} className="h-48 w-full object-cover" />
    <div className="p-4 flex-1 flex flex-col">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm flex-1 text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        {tech.join(" • ")}
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <a href={liveUrl} target="_blank" aria-label="Live site">
          <ExternalLink size={16} />
        </a>
        <a href={repoUrl} target="_blank" aria-label="GitHub repo">
          <GitHub />
        </a>
      </div>
    </div>
  </div>
);
