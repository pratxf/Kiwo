import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-5 ${centered ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl"}`}
    >
      <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-brand-600">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="font-display text-balance text-4xl text-ink sm:text-5xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
