export default function Page({ params }: { params: { post_id: number } }) {
  return <div>PostPoll {params.post_id}</div>;
}
