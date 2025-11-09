"use client";
import {
  Check,
  Menu,
  X,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@workos-inc/authkit-nextjs/components";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function LandingPage() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-neutral-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-neutral-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-neutral-400" />
              <span className="text-xl font-bold text-white">App Name</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link
                href="#features"
                className="text-gray-300 hover:text-neutral-400 transition"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-gray-300 hover:text-neutral-400 transition"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-300 hover:text-neutral-400 transition"
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="text-gray-300 hover:text-neutral-400 transition"
              >
                FAQ
              </Link>
            </div>

            <div className="hidden md:flex space-x-4">
              {user ? (
                <Button
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                  variant="outline"
                  className="text-white hover:text-neutral-400"
                >
                  Dashboard
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                  variant="outline"
                  className="text-white hover:text-neutral-400"
                >
                  Sign In
                </Button>
              )}
              <Button className="bg-neutral-600 hover:bg-neutral-700">
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-neutral-500/20">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="#features"
                className="block text-gray-300 hover:text-neutral-400"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="block text-gray-300 hover:text-neutral-400"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="block text-gray-300 hover:text-neutral-400"
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="block text-gray-300 hover:text-neutral-400"
              >
                FAQ
              </Link>

              {user ? (
                <Button
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                  variant="ghost"
                  className="w-full text-white"
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                  variant="ghost"
                  className="w-full text-white"
                >
                  Sign In
                </Button>
              )}
              <Button className="w-full bg-neutral-600 hover:bg-neutral-700">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-neutral-500/20 rounded-full border border-neutral-500/30">
            <span className="text-neutral-300 text-sm font-semibold">
              🚀 New: AI-Powered Analytics
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Workflow
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-400 to-slate-400">
              With CloudFlow
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your business operations with our intelligent automation
            platform. Save time, reduce costs, and scale effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-neutral-600 hover:bg-neutral-700 text-lg px-8 py-6">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-neutral-400 text-neutral-300 hover:bg-neutral-500/10 text-lg px-8 py-6"
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-400 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-400 mr-2" />
              <span>14-day free trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to succeed in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-neutral-500/20 hover:border-neutral-500/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-neutral-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-neutral-400" />
                </div>
                <CardTitle className="text-white">Lightning Fast</CardTitle>
                <CardDescription className="text-gray-400">
                  Process tasks 10x faster with our optimized infrastructure and
                  intelligent caching
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20 hover:border-neutral-500/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-neutral-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-neutral-400" />
                </div>
                <CardTitle className="text-white">
                  Enterprise Security
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Bank-level encryption and compliance with SOC 2, GDPR, and
                  HIPAA standards
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20 hover:border-neutral-500/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-neutral-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-neutral-400" />
                </div>
                <CardTitle className="text-white">
                  Real-time Analytics
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Get actionable insights with advanced analytics and custom
                  reporting dashboards
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20 hover:border-neutral-500/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-neutral-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-neutral-400" />
                </div>
                <CardTitle className="text-white">Team Collaboration</CardTitle>
                <CardDescription className="text-gray-400">
                  Work seamlessly with your team with shared workspaces and
                  permissions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20 hover:border-neutral-500/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-neutral-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-neutral-400" />
                </div>
                <CardTitle className="text-white">AI-Powered</CardTitle>
                <CardDescription className="text-gray-400">
                  Leverage machine learning to automate repetitive tasks and
                  predict outcomes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20 hover:border-neutral-500/50 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-neutral-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-neutral-400" />
                </div>
                <CardTitle className="text-white">Easy Integration</CardTitle>
                <CardDescription className="text-gray-400">
                  Connect with 1000+ apps through our API and pre-built
                  integrations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Choose the plan that's right for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Starter</CardTitle>
                <CardDescription className="text-gray-400">
                  Perfect for individuals
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Up to 10 projects
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    5GB storage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Basic analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Email support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-slate-700 hover:bg-slate-600">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-linear-to-br from-neutral-600 to-slate-600 border-0 transform scale-105">
              <CardHeader>
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold text-white mb-2">
                  MOST POPULAR
                </div>
                <CardTitle className="text-white text-2xl">
                  Professional
                </CardTitle>
                <CardDescription className="text-neutral-100">
                  For growing teams
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-neutral-100">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-white">
                    <Check className="h-5 w-5 mr-2" />
                    Unlimited projects
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="h-5 w-5 mr-2" />
                    100GB storage
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="h-5 w-5 mr-2" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="h-5 w-5 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="h-5 w-5 mr-2" />
                    API access
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white text-neutral-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Enterprise
                </CardTitle>
                <CardDescription className="text-gray-400">
                  For large organizations
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Unlimited everything
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Dedicated infrastructure
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    24/7 phone support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    SLA guarantee
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-slate-700 hover:bg-slate-600">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-400">
              See what our customers have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-base">
                  "CloudFlow has transformed how we manage our projects. The
                  automation features alone have saved us 20 hours per week!"
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-neutral-500 rounded-full flex items-center justify-center text-white font-bold">
                  SJ
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">CEO, TechStart</div>
                </div>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-base">
                  "The best investment we've made this year. The ROI was
                  immediate and the support team is incredibly responsive."
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div>
                  <div className="text-white font-semibold">Michael Chen</div>
                  <div className="text-gray-400 text-sm">CTO, InnovateCo</div>
                </div>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-base">
                  "Intuitive interface, powerful features, and excellent
                  documentation. CloudFlow makes complex workflows simple."
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  EP
                </div>
                <div>
                  <div className="text-white font-semibold">Emily Parker</div>
                  <div className="text-gray-400 text-sm">
                    Product Manager, DataFlow
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know</p>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <CardTitle className="text-white">
                  How does the free trial work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  You get full access to all Professional plan features for 14
                  days. No credit card required. Cancel anytime during the trial
                  period with no charges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <CardTitle className="text-white">
                  Can I change plans later?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Yes! You can upgrade or downgrade your plan at any time.
                  Changes take effect immediately, and we'll prorate any
                  payments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <CardTitle className="text-white">Is my data secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Absolutely. We use bank-level 256-bit encryption, and we're
                  compliant with SOC 2, GDPR, and HIPAA standards. Your data is
                  stored in secure data centers with regular backups.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <CardTitle className="text-white">
                  Do you offer refunds?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Yes, we offer a 30-day money-back guarantee. If you're not
                  satisfied with CloudFlow, contact us within 30 days for a full
                  refund.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-neutral-500/20">
              <CardHeader>
                <CardTitle className="text-white">
                  What kind of support do you provide?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  All plans include email support. Professional plans get
                  priority support with faster response times. Enterprise
                  customers receive 24/7 phone support and a dedicated account
                  manager.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-neutral-600 to-slate-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-100 mb-8">
            Join thousands of teams already using CloudFlow to transform their
            workflows
          </p>

          {submitted && (
            <Alert className="mb-6 bg-green-500/20 border-green-500/50">
              <AlertDescription className="text-white text-center">
                Thanks for signing up! Check your email to get started.
              </AlertDescription>
            </Alert>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              type="submit"
              className="bg-white text-neutral-600 hover:bg-gray-100 px-8 py-3"
            >
              Start Free Trial
            </Button>
          </form>

          <p className="text-neutral-100 mt-4 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-neutral-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-neutral-400" />
                <span className="text-lg font-bold text-white">CloudFlow</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transform your workflow with intelligent automation
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-neutral-400 text-sm"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 CloudFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
