import Section from '../components/Section'
import Button from '../components/Button'

const industries = [
  {
    name: 'Retail & FMCG',
    description:
      'Coordinate announcements, payslips and rosters across hundreds of stores from one dashboard.',
  },
  {
    name: 'Hospitality',
    description:
      'Keep seasonal and shift-based staff connected, informed and paid without app fatigue.',
  },
  {
    name: 'Logistics & warehousing',
    description:
      'Reach drivers and warehouse teams who rarely sit at a desk, wherever their shift takes them.',
  },
  {
    name: 'Security & facilities',
    description:
      'Distribute rosters and compliance documents to guards and cleaners spread across sites.',
  },
  {
    name: 'Manufacturing & mining',
    description:
      'Give shift workers a direct line to HR and finance, even on remote or industrial sites.',
  },
  {
    name: 'Agriculture',
    description:
      'Support seasonal and permanent workforces with communication that travels beyond signal-poor farms.',
  },
]

export default function Solutions() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl italic text-ink md:text-5xl">
            Built for the industries that keep Africa moving.
          </h1>
          <p className="mt-5 text-lg text-ink/65">
            Every deskless workforce looks a little different. Jem adapts to how your sites,
            shifts and teams actually run.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-xl2 border border-ink/10 bg-white p-7 transition-shadow hover:shadow-soft"
            >
              <h3 className="font-display text-xl italic text-ink">{industry.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{industry.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-coral text-paper" bleed>
        <div className="container-content flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-3xl italic md:text-4xl">
            Don't see your industry? We've probably already built for it.
          </h2>
          <Button to="/contact" variant="dark">
            Talk to sales
          </Button>
        </div>
      </Section>
    </>
  )
}
