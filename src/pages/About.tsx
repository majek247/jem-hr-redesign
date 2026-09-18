import Section from '../components/Section'
import Button from '../components/Button'

const values = [
  {
    title: 'Meet people where they are',
    body: 'We build for the phone people already carry and the app they already trust, not the other way around.',
  },
  {
    title: 'Dignity is a feature',
    body: 'Access to pay, benefits and information shouldn\u2019t require explaining your situation to a manager.',
  },
  {
    title: 'Built for scale from day one',
    body: 'Our platform is designed to hold up across thousands of sites and hundreds of thousands of workers.',
  },
]

export default function About() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl italic text-ink md:text-5xl">
            We exist to unlock Africa's deskless workforce.
          </h1>
          <p className="mt-5 text-lg text-ink/65">
            Three in four South African workers are deskless, yet almost none of enterprise
            software is built with them in mind. They're locked out of the tools office workers
            take for granted, and often locked out of fair financial services too, simply
            because they're considered high risk.
          </p>
          <p className="mt-4 text-lg text-ink/65">
            Jem is the key that meets them where they are, on their own terms. We're proudly
            South African, and building out across the continent.
          </p>
        </div>
      </Section>

      <Section className="bg-sand" bleed>
        <div className="container-content grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl2 bg-white p-7">
              <h3 className="font-display text-xl italic text-ink">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{value.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="font-display text-3xl italic text-ink md:text-4xl">
          Come build the deskless internet with us.
        </h2>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/careers">See open roles</Button>
          <Button to="/contact" variant="ghost">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  )
}
