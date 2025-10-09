import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function TabelaUsuarios() {

    const API_URL= import.meta.env.VITE_API_URL;

    const [users, setUsers] = useState([])
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    useEffect(()=>{
        fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])

    function handleSubmit(userId) {
        console.log("Submitting form for user ID:", userId);
        const updatedUser = {
            name,
            username,
            email,
            senha,
        };

        fetch(`${API_URL}/users/${userId}`, {
            method: "PUT", 
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("User updated successfully:", data);
            alert("Usuário atualizado com sucesso!");
        })
        .catch((error) => {
            console.error("Error updating user:", error);
        })
        .finally(() => {
            window.location.reload();
        });

    }

  return (
    <Table>
      <TableCaption>Uma lista de seus usuários recentes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((pegaItem) => (
          <TableRow key={pegaItem.id}>
            <TableCell className="font-medium">{pegaItem.id}</TableCell>
            <TableCell className="font-medium">
                <img src={pegaItem.avatar} className="w-[32px]"/>
            </TableCell>
            <TableCell>{pegaItem.name}</TableCell>
            <TableCell>{pegaItem.email}</TableCell>
            <TableCell className="flex gap-2">
                   <Sheet>
                    <SheetTrigger asChild>
                        <Button>Editar</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle>Editar perfil</SheetTitle>
                        <SheetDescription>
                            Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
                        </SheetDescription>
                        </SheetHeader>
                       <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-name">Nome</Label>
                            <Input 
                                id="sheet-demo-name" 
                                defaultValue={pegaItem.name}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">Usuário</Label>
                            <Input 
                                id="sheet-demo-username" 
                                defaultValue={`@${pegaItem.username}`}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-email">E-mail</Label>
                            <Input 
                                id="sheet-demo-email" 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                         <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-password">Nova Senha</Label>
                            <Input 
                                id="sheet-demo-password" 
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        </div>
                        <SheetFooter>
                        <Button type="submit" onClick={() => handleSubmit(pegaItem.id)}>Salvar alterações</Button>
                        <SheetClose asChild>
                            <Button variant="outline">Fechar</Button>
                        </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                    </Sheet>  
                <Button>Apagar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
