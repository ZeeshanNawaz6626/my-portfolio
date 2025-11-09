export default function CTA() {
  return (
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 py-20 text-white dark:from-blue-700 dark:to-purple-700">
      {/* <div class="absolute inset-0 overflow-hidden opacity-10">
        <div class="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-white"></div>
        <div class="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-white"></div>
      </div> */}
      <div class="relative z-10 px-4 md:px-6">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Ready to Enhance Your Tech Skills?
          </h2>
          <p class="mx-auto mb-8 max-w-2xl text-lg text-blue-100 dark:text-blue-200">
            Whether you're looking to learn cybersecurity, improve your coding
            skills, or need personalized guidance, I'm here to help you achieve
            your goals.
          </p>
          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/contact">
              <button
                data-slot="button"
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full gap-2 bg-white text-blue-600 hover:bg-blue-50 dark:bg-white dark:text-blue-700 dark:hover:bg-blue-50 sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                Get in Touch
              </button>
            </a>
            <a href="/blog">
              <button
                data-slot="button"
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full gap-2 border-white text-black hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10 sm:w-auto"
              >
                Explore Blog
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </a>
          </div>
          <div class="mt-12 flex items-center justify-center">
            <div class="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-message-square h-5 w-5 text-white"
                aria-hidden="true"
              >
                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
              </svg>
              <span class="text-sm font-medium">
                Need immediate help? Reach out on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-blue-100 focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm px-0.5"
                  href="https://wa.me/+12048132846"
                >
                  WhatsApp
                </a>{" "}
                or{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-blue-100 focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm px-0.5"
                  href="https://discord.com/users/hackerwasii"
                >
                  Discord
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
