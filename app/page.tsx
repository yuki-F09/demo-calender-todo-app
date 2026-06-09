import Calendar from "@/components/Calender";
import MemoModal from "@/components/MemoModal";
import { SidebarTrigger } from "@/components/ui/sidebar";

import {Button}from "@/components/ui/button"

export default function Home() {
  return (

    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black p-4">
    
      <main className="w-full max-w-7xl mx-auto">
        <Calendar />
        <MemoModal />

        <Button>default</Button>
        <Button variant={"default"}>default</Button>


      </main>
    </div>
  );
}
