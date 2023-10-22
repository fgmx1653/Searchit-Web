"use client"

import Image from 'next/image'
import Link from 'next/link'
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
import { useRouter } from 'next/navigation';

export default function Home() {
  const testImg = "https://preview.redd.it/rt0nwimuajlb1.jpg?width=216&crop=smart&auto=webp&s=8e4eabfa199489e8efcc68d6483685939494df6d"
  var [tests, setTest] = React.useState("");

  const {push} = useRouter();

  const search = () => {
    push(`/search?q=${encodeURIComponent(tests)}`)
  }

  return <>
      <div className="bg-[url('../img/bg.png')]">
        <div className="flex justify-between p-5">
          <Link href="/about"><Button>About</Button></Link>
          <Button>Account&nbsp;&nbsp;<Image src={avatar.src} width={15} height={15} alt=""/></Button>
        </div>
        <div className="flex h-screen w-full">
          <div className="grid place-items-center grid-rows-auto m-auto w-full">
            <div className="flex w-full space-x-5 justify-center items-center">
              <Image className="pb-8" src={logo.src} width={80} height={80} alt=""></Image>
              <h1 className="font-bold text-center text-6xl pb-5">SearchIt</h1>
            </div>
            <div className="flex w-full justify-center">
              <Input value={tests} onInput={(event) => setTest(event.target.value)} onKeyDown={(event) => {
                if(event.keyCode==13) {
                  search()
                }
              }} className="h-16 border border-2 w-2/3 bg-white border border-1 border-gray drop-shadow-2xl rounded-full px-5 text-xl" type="search" placeholder="Discover something new..." {...test} />
              <Button onClick={search} className="h-16 rounded-full ml-4 drop-shadow-2xl bg-gradient-to-tr from-red-700 to-red-500 text-lg hover:opacity-80 transition-all duration-300 ease-in-out" type="button">Search</Button>
            </div>
          </div>
        </div>
        <footer className="bg-white rounded-lg shadow-xl m-4 dark:bg-dray-800 center-text">
          <p className="text-center p-5 text-gray-400">Copyright 2023 • SearchIt</p>
        </footer>
      </div>
          
    </>;
}