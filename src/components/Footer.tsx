// src/components/Footer.tsx
import { Heart, Rocket } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
        <span>© {year} Made with</span>
        <Heart className="h-4 w-4 text-red-500" type="filled" />
        <span>by Sujay Vaidya</span>
        <Rocket className="h-4 w-4" />
      </div>
    </footer>
  );
}
