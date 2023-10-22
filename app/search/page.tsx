"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import avatar from "../../img/avatar.svg"
import logo from "../../img/logo.svg"
import test from "../../img/test.jpg"
import * as React from "react"
import tests from "../page"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
    CardTitle,
} from "@/components/ui/card"
import useSWR from 'swr'
import { useRouter, useSearchParams } from 'next/navigation';

export default function Search() {
  const testImg = "https://preview.redd.it/rt0nwimuajlb1.jpg?width=216&crop=smart&auto=webp&s=8e4eabfa199489e8efcc68d6483685939494df6d"
    const { push } = useRouter();
    const searchParams = useSearchParams();
    const searches = searchParams.get('q') || "";

    const { data, isLoading, error } = useSWR('/api/search?q=' + encodeURIComponent(searches), async (url) => {
        const res = await fetch(url);
        return res.json();
    });
    
    const [tests, setTest] = React.useState(searches);

    const search = () => {
        push(`/search?q=${encodeURIComponent(tests)}`)
    }

    if (isLoading || error) {
        return <>Uh Oh...</>
    }
    console.log("data: ", data);
  return (
    <main>
        <div>
            <div className="flex w-full justify-center items-center p-10 space-x-5">
                <Image className="" src={logo.src} width={50} height={50} alt=""></Image>
                <Input value={tests} onInput={(event) => setTest(event.target.value)} className="h-12 border border-2 w-2/3 bg-white border border-1 border-gray drop-shadow-2xl rounded-full px-5 text-l" type="search" placeholder="Discover something new..." {...test} />
                <Button onClick={search} className="h-12 rounded-full ml-4 drop-shadow-2xl bg-gradient-to-tr from-red-700 to-red-500 text-lg hover:opacity-80 transition-all duration-300 ease-in-out" type="button">Search</Button>
            </div>
            <div className="grid grid-cols-3 grid-flow-row gap-x-5">
                
                  {data?.map((post: any) => { 
                        return <Card key={post.id} className="max-w-sm">
                            <CardHeader>
                                <CardTitle>{post.title.slice(0, 25)}{post.title.length > 25 ? "..." : ""}</CardTitle>
                                
                            </CardHeader>
                            <CardContent>
                                {post.image ? <img
                                    src={post.image}
                                    alt="Card Image"
                                    className="w-full"
                                /> : 
                                <p>{post.selftext.slice(0, 200)}{post.selftext.length > 200 ? "..." : ""}</p>}
                            </CardContent>
                        </Card>
                   })}
            </div>
        </div>
    </main>
  )
}


/*
<Card style={{backgroundImage: "url(" + testImg + ")"}}>
                    <CardHeader className="rounded-lg bg-gradient-to-b from-black/75 to-transparent">
                        <CardTitle className="text-white">Post title</CardTitle>
                        <CardDescription className="text-white">This is a test of description</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="row-span-2">
                    <div className="grid grid-rows-auto">
                        <CardHeader>
                        <CardTitle>Post title {searches}</CardTitle>
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
                  */