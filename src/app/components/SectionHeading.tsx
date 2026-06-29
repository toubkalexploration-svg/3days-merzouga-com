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
      <p className="inline-flex rounded-full border border-[#e8d2ad] bg-white/70 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#b5532f] shadow-sm">
        {eyebrow}
      </p>
      <Heading className="mt-4 text-2xl font-black leading-tight tracking-tight text-[#201913] sm:text-3xl lg:text-4xl">
        {title}
      </Heading>
      {children ? <div className="mt-5 text-base leading-8 text-[#6d6256]">{children}</div> : null}
    </div>
  );
}
