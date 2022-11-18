import React from "react";

const Section = ({ children }) => {
  return (
    <section className="max-w-screen-xl mx-auto px-12 xl:px-0 relative z-10 min-h-screen">
      <div className="max-w-[800px] mx-auto mt-20">{children}</div>
    </section>
  );
};

export default Section;
