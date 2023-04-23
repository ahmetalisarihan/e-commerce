import React from 'react'

type Props = { children: React.ReactNode };


const PageContainer: React.FC<Props> = ({children}) => {
  return (
    <div className='w-10/12 m-auto'>{children}</div>
  )
}

export default PageContainer