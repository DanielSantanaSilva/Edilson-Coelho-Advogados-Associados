type BrandProps = { href?: string; ariaLabel?: string };

export function Brand({ href = "#inicio", ariaLabel = "Edilson Coelho Advogados Associados - início" }: BrandProps) {
  return <a className="brand" href={href} aria-label={ariaLabel}><span className="brand-mark" aria-hidden="true" /><span>EDILSON COELHO <em>ADVOGADOS ASSOCIADOS</em></span></a>;
}
