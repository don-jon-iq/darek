import { Separator } from "@/components/ui/separator"
import { Items } from "./items";
import { SidebarNav } from "./sidenav";
import { Route, Routes } from "react-router-dom";
import { Cate } from "./cate";
const sidebarNavItems = [
  {
    title: "القوائم",
    href: "dashboard/cate",
  },
  {
    title: "الوجبة",
    href: "dashboard/items",
  },
]


function Dashboard() {
  return (


    <>
      <div className="md:hidden h-screen p-4">

      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block  h-full w-full" dir="rtl">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">منيو دارك</h2>
          <p className="text-muted-foreground">
            تعديل قائمة الطعام
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/12">
            <SidebarNav items={sidebarNavItems} />
          </aside>
         
        
          <Routes>
          <Route path="dashboard/items" element={<Items />} />
          <Route path="dashboard/cate" element={<Cate />} />
        </Routes>
          
          
        </div>
      </div>
    </>

  );
}


export default Dashboard;