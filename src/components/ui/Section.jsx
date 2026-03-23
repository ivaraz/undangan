import React from "react";
import classNames from "classnames";

const Section = ({ id, className, children, ...props }) => {
  return (
    <section
      id={id}
      className={classNames(
        "py-20 md:py-24 relative overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto px-4 relative z-10">{children}</div>
    </section>
  );
};

export default Section;
