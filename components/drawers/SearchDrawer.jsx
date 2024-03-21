import React from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import { Button } from '../ui/button'
import { MinusIcon, PlusIcon, Search } from 'lucide-react'
import SearchForm from '../forms/SearchForm'

const SearchDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button data-button color='#ff0000' className='rounded-full  bg-black scale-x-150 lg:scale-100 hover:rotate-icon'>
            <Search className='sm:mr-2 h-4 w-4 icon' /> <span className='sm:block hidden'>Pesquisar</span> 
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Passagens Aéreas</DrawerTitle>
          </DrawerHeader>
          <div className='py-4 px-4 '>
            <SearchForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SearchDrawer
