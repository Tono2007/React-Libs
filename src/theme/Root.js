import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
// Default implementation, that you can customize
export default function Root({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return <>{children}</>;
}
