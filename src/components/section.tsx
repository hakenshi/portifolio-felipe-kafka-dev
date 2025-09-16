import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Section({ children, ...rest }: SectionProps) {
  return (
    <section className='flex flex-col justify-center items-center min-h-screen py-8 sm:py-12 lg:py-16' {...rest}>
      {children}
    </section>
  )
}
