'use client'
import EmptyFilter from '@/app/components/EmptyFilter'
import React from 'react'

export default function Page({searchParams}: {searchParams: {callbackUrl: string}}) {
  return (
    <EmptyFilter 
        title='You need to perform this action'
        subtitle='Please click Login if you wish to login'
        showLogin
        callbackUrl={searchParams.callbackUrl}
    />
  )
}
