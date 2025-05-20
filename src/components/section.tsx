import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Section({ children, ...rest }: SectionProps) {
  return (
    <section className='grid place-items-center gap-5 min-h-screen py-8' {...rest}>
      {children}
    </section>
  )
}
