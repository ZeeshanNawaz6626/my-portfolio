import { useState } from "react";
import Footer from "./Footer";

// Reusable components
const Badge = ({ children }) => (
  <span className="mb-4 inline-flex items-center justify-center gap-1 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
    </span>
    {children}
  </span>
);

const FormInput = ({
  id,
  label,
  type = "text",
  placeholder,
  required = true,
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200"
    >
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm"
    />
  </div>
);

const ContactInfoItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400">{content}</p>
    </div>
  </div>
);

const SocialLink = ({ href, label, icon }) => (
  <a
    className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-400"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <span className="h-5 w-5 transition-transform duration-300 group-hover:scale-110">
      {icon}
    </span>
  </a>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b last:border-b-0">
      {/* Question Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium text-slate-900 outline-none transition-all hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:text-white"
        aria-expanded={isOpen}
      >
        {question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-4 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>

      {/* Answer Section */}
      {isOpen && (
        <div className="pb-4 text-sm text-slate-600 dark:text-slate-300">
          {answer}
        </div>
      )}
    </div>
  );
};

// Configuration data
const CONTACT_INFO = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      </svg>
    ),
    title: "Email",
    content: "hi@wasii.dev",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
      </svg>
    ),
    title: "Phone",
    content: "+1 (204) 813-2846",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    title: "Location",
    content: "Lahore, Pakistan",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 6v6l4 2"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    ),
    title: "Office Hours",
    content: "Monday - Friday: 9am - 5pm (PKT)",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/in/hackerwasii",
    label: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    href: "https://github.com/evildevill",
    label: "GitHub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
    ),
  },
  {
    href: "https://facebook.com/hackerwasii",
    label: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
  {
    href: "https://instagram.com/wasii_254",
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@hackerwasii?sub_confirmation=1",
    label: "YouTube",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
      </svg>
    ),
  },
  {
    href: "https://wa.me/+12048132846",
    label: "WhatsApp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
];

const FAQ_QUESTIONS = [
  {
    question: "What services do you offer?",
    answer:
      "I offer a range of services including cybersecurity consulting, web development, and tech education.",
  },
  {
    question: "How quickly do you respond to inquiries?",
    answer: "I typically respond to inquiries within 24-48 hours.",
  },
  {
    question: "Do you offer remote services?",
    answer: "Yes, I offer remote services to clients worldwide.",
  },
  {
    question: "How can I support your work?",
    answer:
      "You can support my work by sharing my content, hiring my services, or contributing to my projects.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 ">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 pt-32 dark:bg-slate-950">
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 dark:bg-blue-950/20"></div>
          <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-50/50 dark:bg-purple-950/20"></div>
        </div> */}

        <div className="relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <Badge>Get in Touch</Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Let's{" "}
                <span className="relative">
                  <span className="relative z-10 text-blue-600 dark:text-blue-400">
                    Connect
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 z-0 w-full"
                    viewBox="0 0 200 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,17 C50,5 100,30 200,17 L200,20 L0,20 Z"
                      fill="#3b82f6"
                      fillOpacity="0.3"
                      className="dark:fill-blue-900"
                    ></path>
                  </svg>
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                Have a question, project idea, or just want to say hello? I'd
                love to hear from you. Fill out the form below or reach out
                through any of my social channels.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 dark:bg-slate-950">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                  Send Me a Message
                </h2>

                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormInput
                      id="name"
                      label="Your Name"
                      placeholder="John Doe"
                    />
                    <FormInput
                      id="email"
                      label="Your Email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <FormInput
                    id="subject"
                    label="Subject"
                    placeholder="How can I help you?"
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Your message here..."
                      required
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-xs transition-all hover:bg-blue-700 focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    Send Message
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                    Contact Information
                  </h2>

                  <div className="mb-8 space-y-4">
                    {CONTACT_INFO.map((info, index) => (
                      <ContactInfoItem key={index} {...info} />
                    ))}
                  </div>

                  <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                    Connect on Social Media
                  </h3>

                  <div className="mb-8 flex flex-wrap gap-4">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialLink key={index} {...social} />
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
                    Frequently Asked Questions
                  </h3>

                  <div className="w-full">
                    {FAQ_QUESTIONS.map((question, index) => (
                      <FAQItem
                        key={index}
                        question={question.question}
                        answer={question.answer}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />{" "}
    </div>
  );
}
