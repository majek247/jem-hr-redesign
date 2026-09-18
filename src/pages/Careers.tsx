import Section from '../components/Section'
import Button from '../components/Button'

const roles = [
  { title: 'Senior Backend Engineer', team: 'Platform', location: 'Cape Town / Remote' },
  { title: 'Product Designer', team: 'Design', location: 'Cape Town' },
  { title: 'Customer Success Manager', team: 'Customers', location: 'Johannesburg' },
  { title: 'Growth Marketer', team: 'Marketing', location: 'Remote (Africa)' },
]

export default function Careers() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl italic text-ink md:text-5xl">
            Build the platform 250,000 workers rely on.
          </h1>
          <p className="mt-5 text-lg text-ink/65">
            We're a small team solving a problem most software companies have ignored. If that
            sounds like your kind of hard problem, we'd like to meet you.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="divide-y divide-ink/10 rounded-xl2 border border-ink/10 bg-white">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-medium text-ink">{role.title}</h3>
                <p className="text-sm text-ink/50">
                  {role.team} · {role.location}
                </p>
              </div>
              <Button to="/contact" variant="ghost" className="self-start sm:self-auto">
                Apply
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/45">
          Don't see the right role? Reach out anyway — we're growing quickly.
        </p>
      </Section>
    </>
  )
}
