import Button from "@/components/Button";

export default function ComingSoon() {
  return (
    <div className="flex flex-col justify-center gap-10 items-center min-h-screen bg-cgray dark:bg-gray-700">
                <h1 className="font-extrabold text-6xl font-display tracking-wider">Coming Soon</h1>
                <p>This feature is coming soon, in a future release of Chronicle.</p>
                <Button variant={"cgreen"} href="/dashboard">Return to the service log</Button>
    </div>
  )
}