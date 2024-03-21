import React, { useEffect, useState } from 'react'
import {z} from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'
import { aeroportos } from '@/data/aeroportos'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Input } from '../ui/input'

const formSchema = z.object({
    origem: z.string({
        required_error: "É obrigatório um local de origem"
    }),
    destino: z.string({
        required_error: 'É obrigatório um destino'
    }),
    ida: z.date({
        invalid_type_error: "Isso não é uma data válida",
        required_error: "É obrigatório uma data de ida"
    }),
    volta: z.date({
        invalid_type_error: "Isso não é uma data válida"
    }),
    adultos: z.coerce.number().min(1, {
        message: "É obrigatório ao menos 1 adulto"
    }),
    criancas: z.coerce.number(),
    classe: z.string({
        required_error: 'É necessário que informe uma classe'
    })
})

const SearchForm = () => {
    const [tipo, setTipo] = useState('idaevolta')
    const [mostrarListaOrigem, setMostrarListaOrigem] = useState(false)
    const [mostrarListaDestino, setMostrarListaDestino] = useState(false)
    const form = useForm({
        mode: "onChange",
        resolver: zodResolver(formSchema),
        defaultValues: {
            adultos: 1,
            classe: "",
            criancas: 0,
            volta: new Date(),
            ida: new Date(),
            origem: '',
            destino: ''
        }
    })


    function onSubmit(values) {
        console.log(values)
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>



                {/** TIPO DE VOO */}
                <FormField 
                    control={form.control}
                    name="tipo"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Tipo de Vôo</FormLabel>
                            <FormControl className="flex flex-row gap-3 justify-between">
                                <div>
                                    <div onClick={() => {setTipo('idaevolta')}} className={`rounded-[5px] text-center px-4 w-[50%] py-2 border border-black hover:text-white hover:bg-black duration-300 cursor-pointer ${tipo == 'idaevolta' && 'text-white bg-black'}`}>
                                        Ida e Volta
                                    </div>
                                    <div onClick={() => {setTipo('soida')}} className={`rounded-[5px] text-center px-4 w-[50%] py-2 border border-black hover:text-white hover:bg-black duration-300 cursor-pointer ${tipo == 'soida' && 'text-white bg-black'}`}>
                                        Só Ida
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                {/** ORIGEM */}
                <FormField 
                    control={form.control}
                    name="origem"
                    render={({field}) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Origem</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl className="w-full">
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            " justify-between w-full",
                                            !field.value && "text-muted-foreground"
                                        )}
                                        >
                                        {field.value
                                            ? field.value
                                            : "Selecionar Aeroporto"}
                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput 
                                        placeholder="Informe Cidade e País"
                                        className="h-9"
                                        onValueChange={(e) => {
                                            if(e.length >= 6) setMostrarListaOrigem(true)
                                            else setMostrarListaOrigem(false)
                                        }}
                                    />
                                   <CommandList>
                                    <CommandEmpty>Nenhum aeroporto encontrado.</CommandEmpty>
                                   <CommandGroup>
                                    {mostrarListaOrigem && aeroportos.map((aeroporto) => (
                                        <CommandItem
                                            value={`${aeroporto.sigla} - ${aeroporto.cidade} - ${aeroporto.pais}`}
                                            key={`${aeroporto.sigla} - ${aeroporto.cidade} - ${aeroporto.pais}`}
                                            onSelect={() => {
                                                form.setValue("origem", `${aeroporto.sigla} - ${aeroporto.cidade} - ${aeroporto.pais}`)
                                                setMostrarListaOrigem(false)
                                            }}
                                        >
                                            {aeroporto.cidade}, {aeroporto.pais}
                                            <CheckIcon
                                                className={cn(
                                                "ml-auto h-4 w-4",
                                                `${aeroporto.sigla} - ${aeroporto.cidade} - ${aeroporto.pais}` === field.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                    </CommandGroup>
                                   </CommandList>
                                </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                {/** DESTINO */}
                <FormField 
                    control={form.control}
                    name="destino"
                    render={({field}) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Destino</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl className="w-full">
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            " justify-between w-full",
                                            !field.value && "text-muted-foreground"
                                        )}
                                        >
                                        {field.value
                                            ? field.value
                                            : "Selecionar Aeroporto"}
                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput 
                                        placeholder="Informe Cidade e País"
                                        className="h-9"
                                        onValueChange={(e) => {
                                            if(e.length >= 6) setMostrarListaDestino(true)
                                            else setMostrarListaDestino(false)
                                        }}
                                    />
                                   <CommandList>
                                    <CommandEmpty>Nenhum aeroporto encontrado.</CommandEmpty>
                                   <CommandGroup>
                                    {mostrarListaDestino && aeroportos.map((aeroporto) => (
                                        <CommandItem
                                            value={`${aeroporto.sigla} - ${aeroporto.cidade} - ${aeroporto.pais}`}
                                            key={`${aeroporto.sigla} - ${aeroporto.cidade} - ${aeroporto.pais}`}
                                            onSelect={() => {
                                                form.setValue("destino", `${aeroporto.sigla} - ${aeroporto.cidade} - ${aeroporto.pais}`)
                                                setMostrarListaDestino(false)
                                            }}
                                        >
                                            {aeroporto.cidade}, {aeroporto.pais}
                                            <CheckIcon
                                                className={cn(
                                                "ml-auto h-4 w-4",
                                                `${aeroporto.sigla} - ${aeroporto.cidade} - ${aeroporto.pais}` === field.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                    </CommandGroup>
                                   </CommandList>
                                </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/** DATA DE IDA */}
                <FormField
                    control={form.control}
                    name="ida"
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full">
                        <FormLabel>Data de Ida</FormLabel>
                        <Popover className='w-full'>
                            <PopoverTrigger asChild className='w-full'>
                            <FormControl className='w-full '>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value ? (
                                    format(field.value, "PPP", {locale: ptBR})
                                ) : (
                                    <span>Escolha um dia</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    
                {/** DATA DE VOLTA */}
                {tipo == 'idaevolta' && (
                    <FormField
                    control={form.control}
                    name="volta"
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full">
                        <FormLabel>Data de Volta</FormLabel>
                        <Popover className='w-full'>
                            <PopoverTrigger asChild className='w-full'>
                            <FormControl className='w-full '>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value ? (
                                    format(field.value, "PPP", {locale: ptBR})
                                ) : (
                                    <span>Escolha um dia</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                )}


                    <div className='flex flex-row gap-3 justify-between'>
                        
                    <FormField
                        control={form.control}
                        name="adultos"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Adultos</FormLabel>
                                <FormControl>
                                    <Input  onChangeCapture={e => {
                                        form.setValue("adultos", Number(e.target.valueAsNumber))
                                        console.log(typeof e.target.valueAsNumber)
                                    }} placeholder="Adultos" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="criancas"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Crianças</FormLabel>
                                <FormControl>
                                    <Input onChangeCapture={e => {
                                        form.setValue("criancas", Number(e.currentTarget.valueAsNumber))
                                    }} placeholder="Crianças" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    </div>


                    <FormField 
                    control={form.control}
                    name="classe"
                    render={({field}) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Classe</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl className="w-full">
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            " justify-between w-full",
                                            !field.value && "text-muted-foreground"
                                        )}
                                        >
                                        {field.value
                                            ? field.value
                                            : "Selecionar Classe"}
                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput 
                                        placeholder="Escolha um"
                                        className="h-9"
                                    />
                                   <CommandList>
                                    <CommandEmpty>Nada foi encontrado.</CommandEmpty>
                                   <CommandGroup>
                                    {["Econômico", "Executivo", "Primeira Classe"].map((label) => (
                                        <CommandItem
                                            value={label}
                                            key={label}
                                            onSelect={() => {
                                                form.setValue("classe", label)
                                            }}
                                        >
                                            {label}
                                            <CheckIcon
                                                className={cn(
                                                "ml-auto h-4 w-4",
                                                label === field.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                    </CommandGroup>
                                   </CommandList>
                                </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button className="bg-black w-full" type="submit">Encontrar</Button>
            </form>
        </Form>
    )
}

export default SearchForm
