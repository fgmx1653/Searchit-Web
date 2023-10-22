"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import avatar from "../../img/avatar.svg"
import logo from "../../img/logo.svg"
import test from "../../img/test.jpg"
import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function About() {
  const testImg = "https://preview.redd.it/rt0nwimuajlb1.jpg?width=216&crop=smart&auto=webp&s=8e4eabfa199489e8efcc68d6483685939494df6d"

  return (
    <main>
      <div>
        <h1>About</h1>
        <p>A better search engine for Reddit.</p>
      </div>
    </main>
  )
}
