import { clientNames } from '../lib/data'

export default function LogoMarquee() {
  const track = [...clientNames, ...clientNames]

  return (
    <div className="overflow-hidden border-y border-ink/10 py-6">
      <div className="marquee-track flex w-max items-center gap-12">
        {track.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-lg italic text-ink/35"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
