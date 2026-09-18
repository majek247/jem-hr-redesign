import Section from '../components/Section'
import Button from '../components/Button'
import LogoMarquee from '../components/LogoMarquee'
import { caseStudy, testimonial } from '../lib/data'

export default function Customers() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl italic text-ink md:text-5xl">
            Trusted by Africa's biggest frontline employers.
          </h1>
          <p className="mt-5 text-lg text-ink/65">
            200+ employers and 250,000+ deskless workers run on Jem — from retail floors to
            logistics yards to hotel kitchens.
          </p>
        </div>
      </Section>

      <LogoMarquee />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl2 border border-ink/10 bg-ink p-8 text-paper md:p-10">
            <p className="text-xs uppercase tracking-wide text-paper/45">Case study</p>
            <h2 className="mt-3 font-display text-2xl italic">{caseStudy.headline}</h2>
            <p className="mt-2 text-sm text-paper/50">{caseStudy.sector}</p>
            <p className="mt-4 text-sm leading-relaxed text-paper/65">{caseStudy.body}</p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-paper/10 pt-6">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-xl italic text-coral">{metric.value}</p>
                  <p className="mt-1 text-xs leading-snug text-paper/50">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl2 border border-ink/10 bg-white p-8 md:p-10">
            <p className="text-xs uppercase tracking-wide text-ink/40">Switching stories</p>
            <h2 className="mt-3 font-display text-2xl italic text-ink">
              When Wasteplan tried a competitor, their people brought Jem back within six weeks.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Adoption is the real test of any frontline platform. More than once, a switch away
              from Jem has been reversed by the workforce itself.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="ghost">
                Book a meeting
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-mist" bleed>
        <div className="container-content">
          <div className="mx-auto max-w-2xl rounded-xl2 bg-white p-10 text-center shadow-soft">
            <p className="font-display text-2xl italic leading-relaxed text-ink">
              "{testimonial.quote}"
            </p>
            <p className="mt-6 text-sm font-semibold text-ink">{testimonial.name}</p>
            <p className="text-sm text-ink/50">{testimonial.role}</p>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="font-display text-3xl italic text-ink md:text-4xl">
          Ready to see your own numbers?
        </h2>
        <div className="mt-8 flex justify-center">
          <Button to="/contact">Book a demo</Button>
        </div>
      </Section>
    </>
  )
}
