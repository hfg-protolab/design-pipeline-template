import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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

type Workshop = {
  title: string
  description: string
  lead: string
  initials: string
  seats: number
}

const workshops: Workshop[] = [
  {
    title: "Figma Basics",
    description: "Frames, Auto Layout und Komponenten in 90 Minuten.",
    lead: "Lena Hoffmann",
    initials: "LH",
    seats: 4,
  },
  {
    title: "Prototyping mit KI",
    description: "Vom Prompt zum klickbaren Prototyp.",
    lead: "Jonas Weber",
    initials: "JW",
    seats: 0,
  },
  {
    title: "Design Systems",
    description: "Tokens, Varianten und wie Code sie übernimmt.",
    lead: "Mira Schulz",
    initials: "MS",
    seats: 12,
  },
]

export function App() {
  return (
    <div className="mx-auto flex min-h-svh max-w-5xl flex-col gap-8 p-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Workshops im Wintersemester</h1>
        <p className="text-muted-foreground">
          Wähle einen Workshop und melde dich an.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workshops.map((w) => (
          <Card key={w.title}>
            <CardHeader>
              <CardTitle>{w.title}</CardTitle>
              <CardDescription>{w.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{w.initials}</AvatarFallback>
              </Avatar>
              <span className="text-sm">{w.lead}</span>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              {w.seats > 0 ? (
                <Badge variant="secondary">{w.seats} Plätze frei</Badge>
              ) : (
                <Badge variant="outline">Ausgebucht</Badge>
              )}
              <Button size="sm" disabled={w.seats === 0}>
                Anmelden
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Benachrichtigung</CardTitle>
          <CardDescription>
            Wir schreiben dir, sobald neue Workshops online sind.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Label htmlFor="email">E-Mail</Label>
          <Input id="email" type="email" placeholder="name@hfg-gmuend.de" />
        </CardContent>
        <CardFooter>
          <Button>Eintragen</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
