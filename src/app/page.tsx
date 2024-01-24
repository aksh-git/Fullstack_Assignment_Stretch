import MainMenu from "@/components/nav/MainMenu";
import StudentsList from "@/components/StudentsList";

export default async function Page() {
  const api_url = `${process.env.API_URL}/api/student/getStudents`;

  const res = await fetch(api_url);
  const data = await res.json();

  return (
    <>
      <MainMenu path={"/"} />
      <StudentsList students={data["students"]} />
    </>
  );
}
