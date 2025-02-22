import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function Section({children, ...rest}: SectionProps) {
  return (
    <section className='bg-gray-900/20 backdrop-blur-2xl border-y border-zinc-800' {...rest}>
        {children}
    </section>
  )
}
