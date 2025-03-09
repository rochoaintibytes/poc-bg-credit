import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/ui/navbar";

export default function CreditPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white h-screen justify-center flex items-center">
        <Card className="p-4 min-h-4/12 min-w-4/12 justify-center flex flex-col gap-16">
          <CardTitle>Analizador de créditos</CardTitle>
          <CardDescription className="gap-16 flex flex-col">
            <h2 className="text-center">
              Conoce tu perfil de crédito al instante
            </h2>
            <Input
              leadingTitle="Cédula de identidad o ruc"
              placeholder="Ej: 0926480146001"
            />
          </CardDescription>
          <Button>Primer button</Button>
        </Card>
      </div>
    </>
  );
}
