"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { usernameSchema } from '@/app/lib/validators'





const Dashboard = () => {
  
const { isLoaded, user } = useUser()
const { register, handleSubmit, setValue } = useForm({
  resolver: zodResolver(usernameSchema)
})
  

useEffect(() => {

setValue("username")


}, [isLoaded])


const onSubmit = async (data) => {

}


  return (
    <div className='spave-y-8'>
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.firstName}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>You're Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
              <div className='flex items-center gap-2'>
                <span>{window?.location.origin}</span>
                <Input {...register("username")} placeholder="username"/>
              </div>
            </div>
            <Button type="submit">Update Username</Button>
          </form>
        </CardContent>
      </Card>
      </div>
  )
}

export default Dashboard