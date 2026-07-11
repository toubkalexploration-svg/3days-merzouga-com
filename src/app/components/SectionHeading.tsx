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
      <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-terracotta">
        {eyebrow}
      </p>
      <Heading className="mt-3 text-3xl font-black uppercase leading-tight tracking-normal text-brand-slate sm:text-4xl">
        {title}
      </Heading>
      <div className={center ? "mx-auto mt-4 h-1 w-12 bg-brand-terracotta" : "mt-4 h-1 w-12 bg-brand-terracotta"} />
      {children ? <div className="mt-5 text-base leading-8 text-slate-800">{children}</div> : null}
    </div>
  );
}
