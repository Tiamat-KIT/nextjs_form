import Image from 'next/image'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>テスト</h1> 
      <Link href="./login" className={buttonVariants({variant:"outline"})}>SignIn</Link>
      <Button variant="outline">Press!</Button>

    </main>
  )
}
