import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const formSchema = z.object({
    nome: z.string({
        required_error: 'É obrigatório que preencha o campo nome'
    }).min(5, {
        message: "Insira seu nome completo"
    }),
    email: z.string({
        required_error: "É obrigatório que preencha o campo email"
    }).regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, {
        message: 'Insira um email válido'
    }),
    telefone: z.string({
        required_error: "É necessário que informe seu número"
    }).min(11, {
        message: "Informe o seu número junto com o DDD"
    }),
    senha: z.string({
        required_error: "Informe uma senha"
    }).min(6, {
        message: "Informe uma senha com ao menos 6 caracteres"
    }),
    confirmarSenha: z.string({
        required_error: 'Insira a mesma senha que informou anteriormente'
    }).min(6, {
        message: 'Informe uma senha com ao menos 6 caracteres'
    }).superRefine(({senha, confirmarSenha }, ctx) => {
        if(senha !== confirmarSenha) {
            ctx.addIssue({
                code: "custom",
                message: "As duas senhas não são iguais",
            })
        }
    })
})




const SignUpForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
            confirmarSenha: ''
        }
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>

                
                    <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmarSenha"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirmar Senha</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    
                    <FormField
                        control={form.control}
                        name="telefone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefone</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                <Button className="bg-black w-full" type="submit">Criar Conta</Button>
            </form>
        </Form>
    )
}

export default SignUpForm
