export default async function Home() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl justify-start">
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
