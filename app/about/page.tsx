import Link from "next/link"
import { ArrowRight, Award, BookOpen, Clock, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Firm</h1>
            <p className="text-xl text-gray-300">A legacy of excellence in legal representation since 2005.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2005 by a group of passionate attorneys with a vision to provide exceptional legal services,
                Madini legal Firm has grown to become one of the most respected legal practices in the region.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began with a small team dedicated to corporate law, but we quickly expanded our expertise to
                meet the diverse needs of our clients. Today, we are proud to offer comprehensive legal services across
                multiple practice areas while maintaining our commitment to personalized attention and excellence.
              </p>
              <p className="text-gray-600 mb-8">
                Throughout our history, we have remained true to our founding principles: integrity, dedication, and a
                relentless pursuit of justice for our clients. These values continue to guide our practice as we look
                toward the future.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-amber-500 rounded-lg"></div>
                <img
                  src="lawfirmoffice.jpg"
                  alt="Law firm office"
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              These principles guide our practice and define our approach to client service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-amber-500" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our practice, from legal strategy to client communication.",
              },
              {
                icon: <Users className="w-12 h-12 text-amber-500" />,
                title: "Integrity",
                description:
                  "We uphold the highest ethical standards and maintain transparency in all client relationships.",
              },
              {
                icon: <Clock className="w-12 h-12 text-amber-500" />,
                title: "Responsiveness",
                description:
                  "We understand the importance of timely communication and remain accessible to our clients.",
              },
              {
                icon: <BookOpen className="w-12 h-12 text-amber-500" />,
                title: "Innovation",
                description: "We embrace creative thinking and innovative approaches to complex legal challenges.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Legal Team</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Meet our experienced attorneys who are dedicated to providing exceptional legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Reynolds",
                position: "Managing Partner",
                image: "Evgeniya-Chaburchina.jpg",
                specialties: ["Corporate Law", "Mergers & Acquisitions"],
              },
              {
                name: "Robert Chen",
                position: "Senior Partner",
                image: "carlo-Deho.jpg",
                specialties: ["Litigation", "Dispute Resolution"],
              },
              {
                name: "Maria Gonzalez",
                position: "Partner",
                image: "Donato-Di-Bono.jpg",
                specialties: ["Family Law", "Estate Planning"],
              },
            ].map((attorney, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={attorney.image }
                  alt={attorney.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{attorney.name}</h3>
                  <p className="text-amber-500 font-medium mb-4">{attorney.position}</p>
                  <div className="mb-4">
                    <p className="text-gray-600 font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {attorney.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/attorneys/${attorney.name.toLowerCase().replace(" ", "-")}`}
                    className="text-amber-500 hover:text-amber-700 font-medium flex items-center gap-2 group"
                  >
                    View Profile
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/attorneys"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
            >
              View All Attorneys
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss your legal needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-amber-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}
