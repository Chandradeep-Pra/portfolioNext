import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-dark px-6 pt-4">
      <Header />
      <section className="min-h-screen flex-1 flex-col px-6 pb-6 pt-24 max-md:pb-14 sm:px-14">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
        <div className="mt-6 border-2 border-amber-400 px-6 w-[90%] py-1 ml-2 rounded-full sm:hidden"><Navbar /></div>
      </section>
      {/* <div className="sm:hidden px-6 border-2  absolute bottom-[100px] left-16 py-2 rounded-full">
        
      </div> */}
    </main>
  );
};

export default Layout;
