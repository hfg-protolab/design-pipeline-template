import { useState } from "react"
import { cn } from "cn"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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

export function Login({ onLogin }: { onLogin: (email: string) => void }) {
  const [rainbow, setRainbow] = useState(false)

  return (
    <div
      className={cn(
        "flex min-h-svh p-1",
        // full hue wheel without hard-coded colors
        rainbow &&
          "bg-[conic-gradient(in_oklch_longer_hue,oklch(0.7_0.2_0),oklch(0.7_0.2_0))]"
      )}
    >
      <main className="flex flex-1 flex-col items-center bg-background px-4 pt-34 pb-12">
        <Avatar className="size-20">
          <AvatarFallback className="text-3xl">CN</AvatarFallback>
        </Avatar>

        <form
          className="mt-21 flex w-60 flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            onLogin(new FormData(e.currentTarget).get("email") as string)
          }}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Anmeldung</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <Input
            name="password"
            type="password"
            placeholder="Passwort"
            aria-label="Passwort"
            required
          />
          <Button type="submit" className="mt-3 self-end">
            Anmelden
          </Button>
        </form>

        <Card className="mt-28 w-full max-w-90">
          <CardHeader>
            <CardTitle>Sonderangebot</CardTitle>
            <CardDescription>Nur heute</CardDescription>
          </CardHeader>
          <CardContent>
            Wenn sie sich jetzt anmelden, bekommen sie alles umsonst!!!11!!!1
          </CardContent>
          <CardFooter>
            <Button aria-pressed={rainbow} onClick={() => setRainbow(!rainbow)}>
              Action
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
