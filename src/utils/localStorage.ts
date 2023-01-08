import React from 'react'

export const setItem = (key:string,data:any) => {
    return (
      localStorage.setItem(key,JSON.stringify(data))
    )
  }

export const getitem = (key:string):any => {
  return (
    JSON.parse(localStorage.getItem(key)!)
  )
}
