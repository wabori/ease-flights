import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import SignUpForm from "../forms/SignUpForm"
import SignInForm from "../forms/SignInForm"

export function SignCard() {
  return (
    <Tabs data-card-sign defaultValue="signin" className="w-[330px] -mt-3 md:w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Entrar</TabsTrigger>
        <TabsTrigger value="signup">Criar Conta</TabsTrigger>
      </TabsList>
      <TabsContent className=' duration-500' value="signin">
        <Card>
          <CardHeader>
            <CardTitle>Fazer Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">

            {/** FORMULARIO DE LOGIN */}

            
           <SignInForm />





          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card className='duration-500'>
          <CardHeader>
            <CardTitle>Cadastro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <SignUpForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
