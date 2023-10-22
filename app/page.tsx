"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import avatar from "../img/avatar.svg"
import logo from "../img/logo.svg"
import test from "../img/test.jpg"
import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main>
      {/* <div className="bg-[url('../img/bg.png')]">
        <div className="flex justify-between p-5">
          <Button>About</Button>
          <Button>Account&nbsp;&nbsp;<Image src={avatar.src} width={15} height={15} alt=""/></Button>
        </div>
        <div className="flex h-screen w-full">
          <div className="grid place-items-center grid-rows-auto m-auto w-full">
            <div className="flex w-full space-x-5 justify-center items-center">
              <Image className="pb-8" src={logo.src} width={80} height={80} alt=""></Image>
              <h1 className="font-bold text-center text-5xl pb-5">Better Reddit Search</h1>
            </div>
            <div className="flex w-full justify-center">
              <Input className="h-16 border border-2 w-2/3 bg-white border border-1 border-gray drop-shadow-2xl rounded-full px-5 text-xl" type="search" placeholder="Discover something new..." />
              <Button className="h-16 rounded-full ml-4 drop-shadow-2xl bg-gradient-to-tr from-red-700 to-red-500 text-lg hover:opacity-80 transition-all duration-300 ease-in-out" type="button">Search</Button>
            </div>
          </div>
        </div>
        <footer className="bg-white rounded-lg shadow-xl m-4 dark:bg-dray-800 center-text">
          <p className="text-center p-5 text-gray-400">Copyright 2023 • Better Reddit Search</p>
        </footer>
      </div> */}
      <div className="grid grid-cols-3 grid-flow-col gap-x-5 p-20">
        <Card className="bg-[url('../img/test.jpg')]">
          <CardHeader className="rounded-lg bg-gradient-to-b from-black/50 to-transparent">
              <CardTitle className="text-white">Post title</CardTitle>
              <CardDescription className="text-white">This is a test of description</CardDescription>
          </CardHeader>
        </Card>
        <Card className="row-span-2">
          <div className="grid grid-rows-auto">
            <CardHeader>
              <CardTitle>Post title</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet velit molestie elementum gravida. Cras tristique bibendum odio, sit amet congue diam fermentum non. Vestibulum at lectus vel elit condimentum faucibus in nec turpis. Vestibulum rhoncus ex sem, tempor eleifend augue porttitor sit amet.</CardDescription>
            </CardHeader>
            <CardFooter>
              <CardDescription>this is the user • date</CardDescription>
            </CardFooter>
          </div>
        </Card>
        <Card className="flex">
          <CardHeader>
            <CardTitle>Post title</CardTitle>
            <CardDescription>This is a test of the description</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={test.src} width={300} height={300} alt=""></Image>
          </CardContent>
        </Card>
      </div>
      
    </main>
  )
}
