import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";

export default function CreditPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white h-screen justify-center flex items-center">
        <Card className="p-4 min-h-4/12 min-w-4/12 justify-center flex flex-col gap-16">
          <CardTitle>Analizador de créditos</CardTitle>
          <CardDescription>
            <h2>Conoce tu perfil de crédito al instante</h2>
          </CardDescription>
          <Button>Primer button</Button>
        </Card>
      </div>
    </>
  );
}
