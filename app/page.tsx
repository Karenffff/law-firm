import Link from "next/link"
import { ArrowRight, Scale, Briefcase, Users, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90 z-0"></div>
        <div
          className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
          style={{ backgroundImage: "url('/law-office.jpg')" }}
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-amber-400">Justice</span> & <span className="text-amber-400">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in-delay">
            Dedicated legal representation with a commitment to achieving the best possible outcomes for our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="bg-transparent hover:bg-white/10 text-white border border-white font-bold py-3 px-8 rounded-md transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-white opacity-70 hover:opacity-100 transition-opacity">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Practice Areas</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive legal services across a wide range of practice areas, tailored to meet your
              specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Scale className="w-12 h-12 text-amber-500" />,
                title: "Corporate Law",
                description: "Expert guidance for businesses on formation, governance, compliance, and transactions.",
              },
              {
                icon: <Briefcase className="w-12 h-12 text-amber-500" />,
                title: "Litigation",
                description:
                  "Skilled representation in court proceedings, dispute resolution, and settlement negotiations.",
              },
              {
                icon: <Users className="w-12 h-12 text-amber-500" />,
                title: "Family Law",
                description: "Compassionate counsel for divorce, custody, adoption, and other family matters.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 service-card"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={`/practice-areas/${service.title.toLowerCase().replace(" ", "-")}`}
                  className="text-amber-500 hover:text-amber-700 font-medium flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/practice-areas"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
            >
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 about-image">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-lg"></div>
                <img
                  src="/lawfirm.jpg"
                  alt="Law firm team"
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:w-1/2 about-content">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Our Firm</h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2005, our law firm has established a reputation for excellence in legal representation. We
                combine deep legal expertise with a client-centered approach to deliver exceptional results.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced attorneys is committed to understanding your unique situation and developing
                tailored strategies to achieve your goals. We pride ourselves on our accessibility, responsiveness, and
                dedication to your success.
              </p>
              <Link
                href="/about"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Meet Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The team at Madini legal provided exceptional service during my corporate litigation case. Their expertise and strategic approach led to a favorable outcome.",
                author: "Michael Johnson",
                position: "CEO, Tech Innovations",
              },
              {
                quote:
                  "I was impressed by the personal attention and care I received. They guided me through a complex legal process with professionalism and empathy.",
                author: "Sarah Williams",
                position: "Small Business Owner",
              },
              {
                quote:
                  "Their knowledge of family law is unmatched. They helped me navigate a difficult divorce with compassion while ensuring my interests were protected.",
                author: "David Thompson",
                position: "Client",
              },
            ].map((testimonial, index) => (
              
              <div key={index} className="bg-gray-800 p-8 rounded-lg testimonial-card">
                <div className="mb-6 text-amber-400">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Case?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to provide the legal guidance you need. Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
            <Link
              href="/practice-areas"
              className="bg-transparent hover:bg-white/10 text-white border border-white font-bold py-3 px-8 rounded-md transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
