import React, { FunctionComponent } from 'react'

interface Props {
  children: React.ReactNode
}
const ClientOnly: FunctionComponent<Props> = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return (
    <div>
      {children}
    </div>
  )
}
export default ClientOnly
