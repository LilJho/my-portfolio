import Homepage from "@/components/Homepage";
import FlippableCard from "@/components/layout/flipable card/FlippableCard";
import Layout from "@/components/layout/Layout";
import MainLayout from "@/components/layout/MainLayout";
import Navbar from "@/components/Navbar";
s;

export default function Home() {
  return (
    <>
      {/* <Layout /> */}
      <div className="flex items-center justify-center w-screen h-screen">
        <FlippableCard />
      </div>
    </>
  );
}
