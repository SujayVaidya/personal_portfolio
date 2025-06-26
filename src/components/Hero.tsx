import { CONTACT_URLS } from "@/data";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import instagram from "@/assets/instagram.png";
import x from "@/assets/x.png";
import LinkedIn from "@/assets/LinkedIn";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center dark:bg-black text-white">
      {/* Use the exact same container/wrapper classes as your header */}
      <div className="container mx-auto px-6 md:px-6">
        <p className="text-lg">Hey, I’m</p>
        <h1
          className="mt-2 pb-2 text-6xl md:text-7xl font-extrabold 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500"
        >
          Sujay Vaidya
        </h1>
        <p className="mt-6 text-base md:text-lg dark:text-gray-300 text-black leading-relaxed">
          A Pune-based production engineer turned full-stack enthusiast and
          React/React Native developer. After three years in a mechanical
          engineering role, I transitioned into IT by earning a MERN Stack
          certification from AccioJob. I build performant, scalable web and
          mobile apps—combining engineering precision with user-first design.
          From offline-capable mobile experiences to dynamic web portals, I turn
          complex challenges into seamless digital products. I also take on
          select independent projects to broaden my horizons and drive
          innovation.
        </p>
        <div className="mt-8 flex flex-row justify-start items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500"
          >
            <a href={CONTACT_URLS.linkedin}>
              <LinkedIn />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500"
          >
            <a href={CONTACT_URLS.instagram}>
              <img
                src={instagram}
                alt={`instagram: ${CONTACT_URLS.instagram}`}
                className=" h-6 w-6"
              />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500"
          >
            <a href={CONTACT_URLS.x}>
              <img src={x} alt={`x: ${CONTACT_URLS.x}`} className=" h-6 w-6" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500"
          >
            <a href={CONTACT_URLS.email}>
              <Mail className="mr-2 h-4 w-4" />
              Say Hi &#8594;
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// VIEW MY RESUME BUTTON
{
  /* <Button
            variant={"outline"}
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500"
          >
            <a
              href={
                "https://drive.google.com/file/d/18nOShhZI3hO1qilGRUSPy3nzL_2vaWVb/view"
              }
              target="_blank"
              className="flex flex-row justify-center items-center gap-2"
            >
              View My Resume
            </a>
          </Button> */
}
