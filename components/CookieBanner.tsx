"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("gmax_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    Cookies.set("gmax_cookie_consent", "accepted", { expires: 365 });
    setVisible(false);
  };

  const rejectCookies = () => {
    Cookies.set("gmax_cookie_consent", "rejected", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 transform right-1/2 translate-x-1/2 max-w-7xl rounded-xl w-full bg-on-background text-white p-6 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-white/70 max-w-xl">
          We use cookies to enhance your experience on our SEO and AI search
          visibility platform. Essential cookies ensure our website functions
          properly, while optional cookies help us analyze traffic, improve
          performance, and personalize content for your business or personal
          use. You can accept all cookies, reject optional ones, or customize
          your preferences. Without a selection, we'll use our default settings.
          You can update your choices anytime. Learn more in our{" "}
          <Link href="/cookie-policy" className="italics hover:underline">
            Cookie Policy.
          </Link>
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 border border-white/20 text-white text-sm rounded-lg hover:bg-white/10 transition"
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:opacity-90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
