import React, { memo, ReactNode } from 'react'
const Footer = React.lazy(() => import('../Footer'))

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  return (
    <div {...props}>
      {children}
      <Footer />
    </div>
  )
}

export default memo(MainLayout)
