import React from 'react'

import { OrganizationProps } from '../redux/actions/types'

const Organization = ({ organization }: OrganizationProps) => {
  return (
    <div className='organization-container'>
      <p>{!organization ? 'No public organizations' : organization.description}</p>
    </div>
  )
}

export default Organization