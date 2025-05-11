// src/components/Header.tsx
import {
  useRef,
  useState,
  type FC,
  type FormEvent,
  type RefObject,
} from "react";
import ThemeToggle from "./ThemeToggle";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CloudDownload, Loader2, Mail, Menu } from "lucide-react";
import { CONTACT_URLS } from "@/data";
import emailjs from "@emailjs/browser";
import LinkedIn from "@/assets/LinkedIn";
import GitHub from "@/assets/GitHub";
type SectionID = "home" | "projects" | "experience" | "skills";

interface Props {
  active: SectionID;
  onNavClick: (id: SectionID) => void;
}
const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC_KEY;
export default function Header({ active, onNavClick }: Props) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  // reference to the form element
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert("✅ Message sent! I’ll get back to you soon.");
          formRef.current?.reset();
        },
        (err) => {
          console.error(err);
          alert("❌ Oops, something went wrong. Please try again later.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const links: { id: SectionID; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const handleNav = (id: SectionID) => {
    onNavClick(id);
    setSheetOpen(false); // ← close mobile sheet immediately
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="font-bold text-3xl">
          Sujay Vaidya
          {/* <img
            src={localStorage.theme === "dark" ? nameLight : nameDark}
            width={"150px"}
            height={"150px"}
            alt={"Sujay Vaidya"}
          /> */}
        </div>

        {/* Desktop */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNavClick(l.id)}
              className={`relative font-medium transition ${
                active === l.id
                  ? "text-purple-500"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-500"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-500" />
              )}
            </button>
          ))}
          {/* Contact modal */}
          <ContactDialog
            formRef={formRef}
            sendEmail={sendEmail}
            isSending={isSending}
          />
          <ResumeButton />
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                {/* <button
                  aria-label="Close menu"
                  onClick={() => setSheetOpen(false)}
                  className="absolute top-4 right-4"
                >
                  <X />
                </button> */}
              </SheetHeader>

              <nav className="mt-6 flex flex-col space-y-4">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => handleNav(l.id)}
                    className={`text-lg font-medium ${
                      active === l.id
                        ? "text-purple-500"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}

                <div className="flex flex-col justify-center items-center gap-2 space-y-4 mb-4">
                  {/* Contact inside mobile */}
                  <div>
                    <ContactDialog
                      formRef={formRef}
                      sendEmail={sendEmail}
                      isSending={isSending}
                    />
                  </div>
                  <div>
                    <ResumeButton />
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
interface ContactDialogPropTypes {
  formRef: RefObject<HTMLFormElement | null>;
  sendEmail: (e: FormEvent<Element>) => void;
  isSending: boolean;
}
const ContactDialog: FC<ContactDialogPropTypes> = ({
  formRef,
  sendEmail,
  isSending,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500"
        >
          Contact Me
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Fill out the form below, or connect directly:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-3 my-4">
          <Button asChild variant="outline">
            <a href={CONTACT_URLS.email} target="_parent">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={CONTACT_URLS.linkedin} target="_parent">
              <LinkedIn />
              {/*  className="mr-2 h-4 w-4" */}
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={CONTACT_URLS.github} target="_parent">
              <GitHub />
              {/* className="mr-2 h-4 w-4" */}
              GitHub
            </a>
          </Button>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full border px-3 py-2 rounded"
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              variant={"default"}
              className="cursor-pointer"
            >
              {isSending ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  Sending…
                </>
              ) : (
                "Send"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const ResumeButton: FC = () => {
  return (
    <Button
      variant={"outline"}
      className="font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500"
    >
      <a
        href={
          "https://drive.google.com/file/d/18nOShhZI3hO1qilGRUSPy3nzL_2vaWVb/view"
        }
        target="_parent"
        className="flex flex-row justify-center items-center gap-2"
      >
        <CloudDownload />
        View My Resume
      </a>
    </Button>
  );
};
