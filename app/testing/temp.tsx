async function getUsers() {
    const res = await fetch(`${process.env.BASE_URL}/api/getUsers`, {next: {revalidate: 0}})
    return res.json()
  }
  
  export default async function Home() {
    const data: {id: number, email: string, name: string}[] = await getUsers();
    return (
      <main>
        <h1>Hello there!</h1>
        {data.map(post => (
          <h1 key={post.id}>{post.email}</h1>
        ))}
      </main>
    )
  }
  