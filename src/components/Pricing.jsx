import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 5.99,
      yearlyPrice: 59.99,
      features: [
        "Access to basic content",
        "Community support",
        "Monthly newsletter",
        "Basic templates"
      ],
      popular: false
    },
    {
      name: "Pro",
      monthlyPrice: 15.99,
      yearlyPrice: 159.99,
      features: [
        "All Basic features",
        "Premium content access",
        "Direct support",
        "Advanced templates",
        "Early access to new tools",
        "Priority email support"
      ],
      popular: true
    },
    {
      name: "Premium",
      monthlyPrice: 25.99,
      yearlyPrice: 259.99,
      features: [
        "All Pro features",
        "One-on-one mentorship",
        "Early access to new tools",
        "Custom solutions",
        "24/7 priority support",
        "Exclusive webinars",
        "Personal consultation"
      ],
      popular: false
    }
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose a <span className="text-blue-500">Subscription Plan</span>
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900/80 backdrop-blur-sm border rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all relative ${
                plan.popular
                  ? 'border-blue-500 scale-105 md:scale-110'
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-2xl mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 text-sm md:text-base">/{isYearly ? 'year' : 'month'}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

