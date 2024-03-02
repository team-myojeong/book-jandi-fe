export default function Page({ params }: { params: { user_id: number } }) {
  return <div>Profile {params.user_id}</div>;
}
