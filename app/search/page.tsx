"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import avatar from "../../img/avatar.svg"
import logo from "../../img/logo.svg"
import test from "../../img/test.jpg"
import Link from "next/link"
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
import { Checkbox } from "@/components/ui/checkbox"

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
        return <>Loading...</>
    }

    var textState = true
    var imagesState = false

    console.log("data: ", data);
  return (
    <main>
        <div>
            <div className="flex w-full justify-center items-center p-10 space-x-5">
                <a href="./"><Image className="" src={logo.src} width={50} height={50} alt=""></Image></a>
                <Input value={tests} onInput={(event) => setTest(event.target.value)} className="h-12 border border-2 w-2/3 bg-white border border-1 border-gray drop-shadow-md rounded-full px-5 text-l" type="search" placeholder="Discover something new..." {...test} />
                <Button onClick={search} className="h-12 rounded-full ml-4 drop-shadow-md bg-gradient-to-tr from-red-700 to-red-500 text-lg hover:opacity-80 transition-all duration-300 ease-in-out" type="button">Search</Button>
            </div>
            <div className="flex justify-center h-10 gap-x-10">
                <div className="flex items-center space-x-2 p-5 bg-white border border-1 border-red-500 rounded-full">
                    <Checkbox checked id="text"/>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Text</label>
                 </div>
                 <div className="flex items-center space-x-2 p-5 bg-white border border-1 border-red-500 rounded-full">
                    <Checkbox checked id="images"/>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Images</label>
                 </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-row gap-x-5 gap-y-5 p-20">
                
                  {data?.map((post: any) => { 
                        return <Link passHref key={post.id} href={`https://reddit.com/comments/${post.id}`}>
                        <Card key={post.id} className="flex-auto max-w-sm h-full shadow-md hover:shadow-xl duration-100 ease-in-out">
                            <CardHeader>
                                <CardTitle>{post.title.slice(0, 30)}{post.title.length > 30 ? "..." : ""}</CardTitle>
                                <CardDescription>r/{post.subreddit}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {post.image ? <img
                                    src={post.image}
                                    alt="Card Image"
                                    className="w-full rounded-md"
                                /> : 
                                <p>{post.selftext.slice(0, 150)}{post.selftext.length > 150 ? "..." : ""}</p>}
                            </CardContent>
                            <CardFooter>
                                <div className="grid grid-rows-auto">
                                    <CardDescription>u/{post.author}</CardDescription>
                                    <CardDescription>{post.date}</CardDescription>
                                </div>
                            </CardFooter>
                        </Card>
                        </Link>
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