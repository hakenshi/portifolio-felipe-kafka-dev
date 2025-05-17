import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Section({ children, ...rest }: SectionProps) {
  return (
    <section className='flex items-center justify-center flex-col gap-5 max-h-screen h-full' {...rest}>
      {children}
    </section>
  )
}
