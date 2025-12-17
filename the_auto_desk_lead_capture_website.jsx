import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AutoDeskLanding() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // STEP 1: EMAIL DELIVERY VIA FORMSPREE
    await fetch('https://formspree.io/f/xayrzzzb', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    // STEP 2: FACEBOOK PIXEL LEAD EVENT
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }

    alert('Thank you! Your info has been sent to The Auto Desk.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      {/* STEP 2: FACEBOOK PIXEL BASE CODE GOES IN <head> WHEN DEPLOYED */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">The Auto Desk</h1>
              <p className="text-gray-600">Buy • Sell • Trade — Simple & Fast</p>
            </div>

            {/* STEP 1: LEAD CAPTURE FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required className="w-full p-3 border rounded-xl" placeholder="Full Name" />
              <input required className="w-full p-3 border rounded-xl" placeholder="Phone Number" />
              <input className="w-full p-3 border rounded-xl" placeholder="Email Address" />
              <input className="w-full p-3 border rounded-xl" placeholder="Vehicle Year / Make / Model" />
              <textarea className="w-full p-3 border rounded-xl" placeholder="Tell us about your trade or what you're looking for" />
              <Button type="submit" className="w-full rounded-xl text-lg">Get My Offer</Button>
            </form>

            {/* STEP 3: CALL & TEXT ACTIONS */}
            <div className="flex gap-4">
              <a href="tel:2566541329" className="w-full">
                <Button variant="outline" className="w-full rounded-xl flex gap-2">
                  <Phone size={18} /> Call Now
                </Button>
              </a>
              <a href="sms:2566541329?body=Hi%20I%20want%20a%20trade%20value%20from%20The%20Auto%20Desk" className="w-full">
                <Button variant="outline" className="w-full rounded-xl flex gap-2">
                  <MessageCircle size={18} /> Text Us
                </Button>
              </a>
            </div>

            <div className="text-center text-sm text-gray-500">
              We respect your privacy. No spam. No pressure.
            </div>

            {/* STEP 4: HOSTING INSTRUCTIONS */}
            <div className="text-xs text-gray-400 text-center">
              Deploy via Vercel or Netlify. Add Facebook Pixel in the site &lt;head&gt;.
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
