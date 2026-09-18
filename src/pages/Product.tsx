import Section from '../components/Section'
import Button from '../components/Button'
import { pillars } from '../lib/data'

const colorMap: Record<string, string> = {
  coral: 'bg-coral',
  ink: 'bg-ink',
  palm: 'bg-palm',
}

export default function Product() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl italic text-ink md:text-5xl">
            One platform, three jobs your HR stack usually splits apart.
          </h1>
          <p className="mt-5 text-lg text-ink/65">
            Connect, Manage and Reward run on the same WhatsApp thread your people already use,
            so nothing you ship needs an install, a login, or a training session.
          </p>
        </div>
      </Section>

      {pillars.map((pillar, i) => (
        <Section key={pillar.key} className={i % 2 === 1 ? 'bg-sand' : ''} bleed={i % 2 === 1}>
          <div className={i % 2 === 1 ? 'container-content' : ''}>
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <span className={`inline-block h-2.5 w-2.5 rounded-full ${colorMap[pillar.color]}`} />
                <h2 className="mt-4 font-display text-3xl italic text-ink md:text-4xl">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-ink/50">{pillar.tagline}</p>
                <p className="mt-5 max-w-md text-ink/65">{pillar.description}</p>
                <div className="mt-8">
                  <Button to="/contact" variant="ghost">
                    Talk to us about {pillar.title.toLowerCase()}
                  </Button>
                </div>
              </div>

              <div className={`rounded-xl2 border border-ink/10 bg-white p-8 shadow-soft ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <ul className="space-y-4">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 border-b border-ink/5 pb-4 last:border-0 last:pb-0">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colorMap[pillar.color]}`} />
                      <span className="text-sm text-ink/75">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section className="bg-ink text-paper" bleed>
        <div className="container-content flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-3xl italic md:text-4xl">
            See the full product on a real call, not a slide deck.
          </h2>
          <Button to="/contact">Book a demo</Button>
        </div>
      </Section>
    </>
  )
}
