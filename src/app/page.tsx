import Banner from 'app/components/Banner/Banner';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="w-full h-screen">
        <div className="w-[65%] mx-auto">
          <h2 className="text-center md:text-[3rem] md:leading-[2.8rem] mt-10 uppercase font-bold">Lorem ipsum dolor sit
            amet, adipiscing elit. </h2>
        </div>

        <div className="mt-20 mx-auto container flex gap-[30px] justify-between">
          <article className="card-section">
            <h3>adipiscing elit.</h3>
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </article>

          <article className="card-section">
            <h3>adipiscing elit.</h3>
            <img src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </article>

          <article className="card-section">
            <h3>adipiscing elit.</h3>
            <img src="https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </article>
        </div>
      </section>
    </main>
  );
}
