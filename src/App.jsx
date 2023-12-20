import {Nav, Hero, Footer, Plan, PopularDestinasi, Service, CustomerReviews} from "./sections"
const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="">
        <Hero/>
      </section>
      <section className="padding">
        <PopularDestinasi/>
      </section>
      <section className="padding">
        <Service/>
      </section>
      <section className="padding-x py-10">
        <Plan/>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default App