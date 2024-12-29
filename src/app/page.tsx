import Hero from "@/Components/home/Hero";
import WebHostingPlan from "@/Components/home/WebHostingPlan";

export default function Home() {
  return (
    <section className=" flex flex-col gab-7 w-full justify-around items-center">
      <Hero />
      <br />
      <br />

      <h2 className=" text-3xl font-bold text-center">
        Choose Your Web Hosting Plan
      </h2>
      <br />
      <br />

      <div className="flex w-full justify-around flex-wrap">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </section>
  )
}
