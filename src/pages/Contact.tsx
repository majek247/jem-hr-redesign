import { useState } from 'react'
import Section from '../components/Section'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Section className="pt-16">
      <div className="grid gap-14 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl italic text-ink md:text-5xl">
            Let's put your frontline on Jem.
          </h1>
          <p className="mt-5 max-w-sm text-ink/65">
            Tell us a little about your workforce and we'll show you what Jem looks like for
            your business, usually within a week.
          </p>

          <div className="mt-10 space-y-5 text-sm text-ink/60">
            <div>
              <p className="text-ink/40">Sales</p>
              <p className="text-ink">hello@jemhr.com</p>
            </div>
            <div>
              <p className="text-ink/40">Head office</p>
              <p className="text-ink">Cape Town, South Africa</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl2 border border-ink/10 bg-white p-8 shadow-soft md:p-10">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <p className="font-display text-2xl italic text-ink">Thanks — that's in.</p>
              <p className="mt-3 max-w-xs text-sm text-ink/60">
                A member of the team will reach out shortly to set up your demo.
              </p>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-ink/70">
                  Full name
                  <input
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-coral"
                  />
                </label>
                <label className="block text-sm text-ink/70">
                  Work email
                  <input
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-coral"
                  />
                </label>
              </div>

              <label className="block text-sm text-ink/70">
                Company
                <input
                  required
                  type="text"
                  className="mt-1.5 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-coral"
                />
              </label>

              <label className="block text-sm text-ink/70">
                How many deskless workers do you employ?
                <select className="mt-1.5 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-coral">
                  <option>Under 100</option>
                  <option>100–500</option>
                  <option>500–2,000</option>
                  <option>2,000+</option>
                </select>
              </label>

              <label className="block text-sm text-ink/70">
                What would you like to solve first?
                <textarea
                  rows={3}
                  className="mt-1.5 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-coral"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-coral px-6 py-3.5 font-medium text-paper transition-colors hover:bg-coral-dark"
              >
                Book a demo
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
