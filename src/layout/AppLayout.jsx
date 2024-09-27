import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container ">
        <Header />  
        <Outlet />
      </main>
      {/*<Outlet/> we can do any code around this outlet and that will act as a layout and all rote rendere at this particular place */}
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with ❤️by Vishal
      </div>
    </div>
  );
};

export default AppLayout;
