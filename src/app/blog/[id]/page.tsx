
export default async function BlogPage({
    params
}: {
    params: Promise<{id :String}>
}) {

  const id = (await params).id;
  return (
    <div>
       Blog  {id}
    </div>
  )
}
