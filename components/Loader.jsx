'use client'
import { palavras } from '@/data/palavras'
import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import { collapseWords, introAnimation } from '@/actions/animations'

const Loader = ({ timeline }) => {
    const loaderRef = useRef(null)
    const wordGroupsRef = useRef(null)
    useEffect(() => {
        timeline &&
        timeline
            .add(introAnimation(wordGroupsRef), 0)
            .add(collapseWords(loaderRef), '-=1')
    }, [timeline])
    return (
        <div className="center">
            <div className={'loader-wrapper'}>
                <div className={'loader'} ref={loaderRef}>
                    <div className={'loader-words'}>
                    <div className={'loader-overlay'}></div>
                    <div className={'loader-words'} ref={wordGroupsRef}>
                        {palavras.map((word, index) => {
                            return (
                                <span key={index} className={'loader-word'}>
                                {word}
                                </span>
                            );
                        })}
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Loader
