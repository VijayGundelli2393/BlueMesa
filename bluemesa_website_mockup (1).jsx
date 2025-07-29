import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">BlueMesa</h1>
        <p className="text-xl md:text-2xl mb-6">Your Suite. Simplified.</p>
        <Button className="bg-white text-blue-900 hover:bg-blue-100">Get Started</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "NetSuite Implementation",
              desc: "End-to-end implementation customized to your business.",
            },
            {
              title: "Optimization & Support",
              desc: "Ongoing enhancements, integrations, and tech support.",
            },
            {
              title: "Custom Solutions",
              desc: "Automate and simplify complex processes with our tools.",
            },
          ].map(({ title, desc }) => (
            <Card key={title} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <p className="italic mb-4">"BlueMesa transformed our entire NetSuite setup. Their expertise is unmatched."</p>
              <p className="font-bold">— Sarah L., Operations Director</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <p className="italic mb-4">"The team at BlueMesa is responsive, smart, and easy to work with. Highly recommend!"</p>
              <p className="font-bold">— David K., CFO</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-blue-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-6">
          <Input type="text" placeholder="Your Name" className="w-full" />
          <Input type="email" placeholder="Your Email" className="w-full" />
          <Textarea placeholder="Your Message" className="w-full h-32" />
          <Button className="bg-blue-900 text-white hover:bg-blue-800 w-full">Send Message</Button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to simplify your Suite?</h2>
        <p className="mb-6 text-lg text-gray-700">
          Let BlueMesa be your trusted NetSuite partner.
        </p>
        <Button className="bg-blue-900 text-white hover:bg-blue-800">Schedule a Free Consultation</Button>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-gray-200 text-center text-sm">
        © {new Date().getFullYear()} BlueMesa. All rights reserved.
      </footer>
    </div>
  );
}
