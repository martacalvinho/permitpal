import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import FeatureCard from "@/components/features/FeatureCard";
import PricingCard from "@/components/pricing/PricingCard";
import Testimonials from "@/components/landing/Testimonials";
import { features } from "@/data/features";
import { pricingTiers } from "@/data/pricing";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Why Choose Cafe Permit Pal?</h2>
            <p className="mt-4 text-gray-600">
              Everything you need to manage your cafe permits effectively
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      <Testimonials />

      {/* Pricing Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-gray-600">
              Choose the plan that best fits your cafe's needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={index} {...tier} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;