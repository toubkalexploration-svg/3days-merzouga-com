type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
  level?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, children, center = false, level = "h2" }: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b5532f]">{eyebrow}</p>
      <Heading className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#201913] sm:text-3xl lg:text-4xl">
        {title}
      </Heading>
      {children ? <div className="mt-5 text-base leading-7 text-[#6d6256]">{children}</div> : null}
    </div>
  );
}