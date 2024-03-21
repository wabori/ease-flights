import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
      <h1>Página não encontrada</h1>
      <div>
        <Link className='hover:cursor-pointer text-blue-400 underline underline-offset-2' href={'/'}>Voltar para a página principal</Link>
      </div>
    </div>
  )
}

export default NotFound
