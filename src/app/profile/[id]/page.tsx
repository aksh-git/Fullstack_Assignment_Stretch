import Profile from "@/components/Profile";

export default async function Page({ params }: { params: { id: string } }) {
  const api_url = `${process.env.API_URL}/api/student/getStudentByID?id=${params.id}`;

  const res = await fetch(api_url);
  const data = await res.json();

  return <div>{data.success && <Profile student={data.data} />}</div>;
}
