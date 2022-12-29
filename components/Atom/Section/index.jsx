import React from "react";

const Section = ({ children }) => {
  return (
    <section className="max-w-[800px] mx-auto px-0 md:px-6 xl:px-0 relative z-10">
      <div className="mx-auto">{children}</div>
    </section>
  );
};

export default Section;
