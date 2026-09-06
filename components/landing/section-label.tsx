type SectionLabelProps = { number: string; children: React.ReactNode };

export function SectionLabel({ number, children }: SectionLabelProps) {
  return <div className="section-label"><span>{number}</span>{children}</div>;
}
