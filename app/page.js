import Sidebar from "@/components/Sidebar";
import SkillTest from "@/components/SkillTest";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4">
        <SkillTest />
      </main>
    </>
  );
}