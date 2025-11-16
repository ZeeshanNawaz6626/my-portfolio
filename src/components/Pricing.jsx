import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 5.99,
      yearlyPrice: 59.99,
      description:
        "Good for anyone who wants early access and to support the project.",
      features: [
        "Ad-free experience",
        "Access to members-only posts",
        "Early access to blog updates",
        "Monthly project update newsletter",
      ],
      popular: false,
      buttonStyle: "secondary",
    },
    {
      name: "Pro",
      monthlyPrice: 15.99,
      yearlyPrice: 159.99,
      description: "Includes tools, downloads, and ad-free access.",
      features: [
        "Everything in 'Basic' tier",
        "Ad-free experience",
        "Access to exclusive tools and templates",
        "Downloadable digital resources",
        "More API credits",
      ],
      popular: true,
      buttonStyle: "primary",
    },
    {
      name: "Premium",
      monthlyPrice: 25.99,
      yearlyPrice: 259.99,
      description:
        "For power users who want access to premium content and early features.",
      features: [
        "Everything in 'Pro' tier",
        "Access to premium content",
        "Access to beta versions of new tools",
        "Download premium automation scripts and templates",
        "Use private APIs and integrations",
      ],
      popular: false,
      buttonStyle: "secondary",
    },
  ];

  const getPrice = (plan) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = (
      ((monthlyCost - plan.yearlyPrice) / monthlyCost) *
      100
    ).toFixed(0);
    return savings;
  };

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 dark:bg-blue-950/20"></div>
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-50/50 dark:bg-purple-950/20"></div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Support My Work
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Choose a{" "}
              <span className="relative">
                <span className="relative z-10 text-blue-600 dark:text-blue-400">
                  Subscription{" "}
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
                  />
                </svg>
              </span>
              Plan
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Get access to exclusive content, tutorials, and resources to
              enhance your skills in cybersecurity and web development.
            </p>

            {/* Toggle */}
            <div className="mb-8 inline-flex rounded-full border border-slate-200 p-1 dark:border-slate-800">
              <button
                onClick={() => setIsYearly(false)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  !isYearly
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isYearly
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                Yearly{" "}
                <span className="text-xs text-green-600 dark:text-green-400">
                  (Save 20%)
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-slate-900 ${
                  plan.popular
                    ? "border-blue-200 dark:border-blue-800 scale-105"
                    : "border-slate-200 dark:border-slate-800"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 right-4 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <div className="flex items-center">
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
                        className="mr-1 h-3 w-3 fill-current"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                      Popular
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    ${getPrice(plan).toFixed(2)}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    / {isYearly ? "year" : "month"}
                  </span>
                  {isYearly && (
                    <div className="mt-1 text-xs text-green-600 dark:text-green-400">
                      Save {getSavings(plan)}% compared to monthly
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="mb-6 text-slate-600 dark:text-slate-400">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mb-8 space-y-3 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
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
                        className="mr-2 h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto">
                  <a className="w-full block" href="/contact">
                    <button
                      className={`w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md px-6 ${
                        plan.buttonStyle === "primary"
                          ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                          : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      Join Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              All plans include access to exclusive content, tutorials, and
              resources. You can cancel or change your subscription at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
