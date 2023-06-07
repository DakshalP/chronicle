'use client'

import { signOut } from "next-auth/react"
import Button from "../Button"

export default function LogoutButton() {
    return <Button size="small" variant="cbrown" onClick={() => signOut()}>Sign out</Button>
}