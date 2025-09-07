export default function Blog({ posts }: { posts: { id: number; title: string; content: string }[] }) {
  return (
  <>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();
    return {
        props: { posts }, revalidate: 60
    }
}