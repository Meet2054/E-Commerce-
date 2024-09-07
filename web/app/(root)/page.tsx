import React from 'react'
import { UserButton } from '@clerk/nextjs'
type Props = {}

const SetupPage = (props: Props) => {
  return (
    <div>
              <UserButton afterSwitchSessionUrl='/' />
    </div>
  )
}

export default SetupPage