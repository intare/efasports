"use client"

import { stats } from "./stats-data"

export function Stats() {
  return (
    <div className="bg-[#E31E24] py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-white">SMC2 IN NUMBERS</h2>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.Icon
            return (
              <div key={stat.title} className="text-center text-white">
                <Icon className="mx-auto mb-4 h-12 w-12" />
                <div className="space-y-2">
                  {stat.value && (
                    <p className="text-2xl font-bold">{stat.value}</p>
                  )}
                  <p className="text-sm font-medium">{stat.title}</p>
                  {stat.subtitle && (
                    <p className="text-xs text-white/80">{stat.subtitle}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}