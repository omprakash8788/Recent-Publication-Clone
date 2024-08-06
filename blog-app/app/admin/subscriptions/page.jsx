"use client"
import SubscriptionTableItem from '@/components/adminComponent/SubscriptionTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [emails, setEmails]=useState([])

  const fetchEmailData=async()=>{
    const response = await axios.get('/api/email')
    setEmails(response.data.emails)
  }
    const deleteEmail = async (mongoId)=>{
      // after that we will create one api endpoint for the delete method, so open email/route.js file.
       const response = await axios.delete('/api/email',{
        params:{
          id:mongoId
        }
       })
       if(response.data.success){
        toast.success(response.data.msg);
        fetchEmailData()
       }
       else{
        toast.error("Error")
       }
  
    }
  
  useEffect(()=>{
     fetchEmailData()
  },[])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Subscriptions</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400  scrollbar-hide'>
      <table className='w-full text-sm text-gray-500'>
              <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Email Subscription
                    </th>
                    <th scope='col' className='px-6 py-3 hidden sm:block'>
                      Data
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Action
                    </th>
                  </tr>
              </thead>
              <tbody>
                {/* called here your component */}
                {
                  emails.map((item, index)=>{
                    return <SubscriptionTableItem key={index} mongoId={item._id} email={item.email} date={item.date} deleteEmail={deleteEmail}/>
                  })
                }
              

              </tbody>
         </table>

      </div>

    </div>
  )
}

export default page
