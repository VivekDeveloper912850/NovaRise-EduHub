import heroImage from '../../assets/branding/nova-rise-hero.png'

function BrandHero() {
  return (
    <section className="brand-hero border-b border-slate-800 bg-slate-950 text-white" aria-label="NovaRise EduHub technology workspace">
      <div className="brand-hero-fade-up w-full overflow-hidden shadow-lg shadow-slate-950/20">
        <img src={heroImage} alt="NovaRise EduHub technology workspace" className="block h-auto w-full object-contain" />
      </div>
    </section>
  )
}

export default BrandHero
