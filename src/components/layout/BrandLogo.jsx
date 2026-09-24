const logoSizes = {
  navbar: 'h-10 w-10 sm:h-11 sm:w-11',
  footer: 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]',
  default: 'h-12 w-12',
}

function BrandLogo({ variant = 'default', className = '' }) {
  return (
    <span className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-0.5 shadow-sm ${logoSizes[variant] || logoSizes.default} ${className}`}>
      <img src="/assets/branding/nova-rise-logo.png" alt="Nova Rise" className="h-full w-full object-contain" />
    </span>
  )
}

export default BrandLogo