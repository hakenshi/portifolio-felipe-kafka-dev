import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function Section({children, ...rest}: SectionProps) {
  return (
    <section {...rest}>
        {children}
    </section>
  )
}
