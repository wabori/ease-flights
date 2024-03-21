import React, { useEffect, useRef } from 'react'
import { Button } from '../components/ui/button'
import {gsap} from 'gsap'
import { KeyIcon, Search } from 'lucide-react'
import { animateLogo, animateMenu, animateSearchButton } from '@/actions/animations'
import Navbar from '../components/Navbar'
import SearchDrawer from '../components/drawers/SearchDrawer'
import Container from '@/components/Container'

const Hero = () => {
    const timeline = useRef(gsap.timeline())
    useEffect(() => {
        const context = gsap.context(() => {
            const tl = timeline.current
            tl
                .add(animateSearchButton())
                .add(animateMenu(), 0)
                .add(animateLogo(), 0)
        })
        return () => context.revert()
    }, [])
    return (
        <Container>
            <Navbar />
            <div className='fixed flex flex-row gap-3 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <SearchDrawer />
                <Button data-button variant='outline' className=' rounded-full hover:rotate-icon'>
                    <KeyIcon className='mr-2 w-4 h-4 icon' /> Admin
                </Button>
            </div>

        </Container>
    )
}

export default Hero
