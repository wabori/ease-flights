'use client'
import Hero from "@/screens/Hero";
import Loader from "@/components/Loader";
import {gsap} from "gsap";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [loaderFinished, setLoaderFinished] = useState(false)
    const [timeline, setTimeline] = useState(null)
    const router = useRouter()

    useLayoutEffect(() => {
      const context = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => router.replace('/home')
        })
        setTimeline(tl)
      })
      return () => context.revert()
    }, [])

    return (
      <main>
        <Loader timeline={timeline} />
      </main>
    );
}

