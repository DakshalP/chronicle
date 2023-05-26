import Button from "@/components/Button";

export default function ComingSoon() {
  return (
    <div className="flex flex-col p-10 text-center justify-center gap-10 items-center min-h-screen bg-cgray dark:bg-gray-700">
                <h1 className="font-extrabold text-6xl font-display tracking-wider">Coming Soon</h1>
                <p>Features planned for a future version of Chronicle:</p>
                <ul>
                  <li>Hour Goals</li>
                  <li>Notifications</li>
                  <li>Return Visit Record</li>
                </ul>
                <Button variant={"cgreen"} href="/dashboard">Return to the service log</Button>
    </div>
  )
}