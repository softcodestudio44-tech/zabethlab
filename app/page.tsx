import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-dark">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-light sm:text-6xl">
          Glow & Grow <span className="text-primary">Naturally</span>
        </h1>
        <p className="mt-6 text-lg text-light-muted max-w-2xl mx-auto">
          Learn the science of natural beauty, analyze ingredients like a pro, 
          and build your own skincare empire.
        </p>
        <div className="mt-10">
          <Link href="/scanner" className="rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary-light transition-colors">
            Start Analyzing
          </Link>
        </div>
      </div>

      {/* 4 Pillars */}
      <div className="py-24 bg-dark-light">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-light mb-16">Four Pillars of Natural Beauty</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Learn', desc: 'Master skincare & haircare with expert courses', color: 'text-emerald-400' },
              { name: 'Analyze', desc: 'Scan and understand ingredient lists', color: 'text-cyan-400' },
              { name: 'Build', desc: 'Create your own beauty brand', color: 'text-amber-400' },
              { name: 'Connect', desc: 'Join our global community', color: 'text-rose-400' },
            ].map((item) => (
              <div key={item.name} className="bg-dark p-6 rounded-2xl border border-dark-lighter text-center">
                <h3 className={`text-xl font-bold mb-2 ${item.color}`}>{item.name}</h3>
                <p className="text-light-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}