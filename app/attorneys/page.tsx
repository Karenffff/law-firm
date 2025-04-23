import Link from "next/link"
import { ArrowRight, Mail, Linkedin } from "lucide-react"

export default function AttorneysPage() {
  const attorneys = [
    {
      name: "Jennifer Reynolds",
      position: "Managing Partner",
      image: "evgeniya-chaburchina.jpg",
      specialties: ["Corporate Law", "Mergers & Acquisitions"],
      education: ["J.D., Harvard Law School", "B.A., Yale University"],
      bio: "Jennifer has over 20 years of experience in corporate law and leads our corporate practice. She has successfully guided numerous clients through complex mergers and acquisitions, corporate restructurings, and governance matters.",
    },
    {
      name: "Robert Chen",
      position: "Senior Partner",
      image: "carlo-Deho.jpg",
      specialties: ["Litigation", "Dispute Resolution"],
      education: ["J.D., Stanford Law School", "B.S., University of California, Berkeley"],
      bio: "Robert specializes in complex commercial litigation and has represented clients in state and federal courts across the country. His strategic approach to dispute resolution has resulted in numerous favorable outcomes for our clients.",
    },
    {
      name: "Maria Gonzalez",
      position: "Partner",
      image: "Donato-Di-Bono.jpg",
      specialties: ["Family Law", "Estate Planning"],
      education: ["J.D., Columbia Law School", "B.A., New York University"],
      bio: "Maria brings compassion and expertise to her family law practice. She helps clients navigate challenging personal situations with sensitivity while ensuring their legal rights and interests are protected.",
    },
    {
      name: "David Washington",
      position: "Partner",
      image: "salvatore-modica.jpg",
      specialties: ["Real Estate Law", "Commercial Transactions"],
      education: ["J.D., Georgetown University", "B.B.A., University of Michigan"],
      bio: "David leads our real estate practice, handling complex commercial and residential transactions. His background in business gives him unique insight into the practical aspects of real estate deals.",
    },
    {
      name: "Michael Johnson",
      position: "Senior Associate",
      image: "paolo-Di-Leo-per-LL.jpg",
      specialties: ["Intellectual Property", "Technology Law"],
      education: ["J.D., University of Chicago", "B.S., Massachusetts Institute of Technology"],
      bio: "Micheal specializes in intellectual property protection and technology law. Her technical background makes her particularly effective in handling complex IP matters for technology companies.",
    },
    {
      name: "Sarah Kim",
      position: "Associate",
      image: "serena-torrente-1.jpg",
      specialties: ["Tax Law", "Corporate Structuring"],
      education: ["J.D., New York University", "LL.M. in Taxation, NYU", "B.A., Cornell University"],
      bio: "Sarah focuses on tax planning and corporate structuring. He helps clients navigate complex tax regulations and develop strategies to minimize tax liabilities while ensuring compliance.",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Attorneys</h1>
            <p className="text-xl text-gray-300">
              Meet our team of experienced legal professionals dedicated to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={attorney.image || "/placeholder.svg"}
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

                  <div className="mb-4">
                    <p className="text-gray-600 font-medium mb-2">Education:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {attorney.education.map((degree, idx) => (
                        <li key={idx}>{degree}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-gray-600 text-sm mb-6">{attorney.bio}</p>

                  <div className="flex justify-between items-center">
                    <Link
                      href={`/attorneys/${attorney.name.toLowerCase().replace(" ", "-")}`}
                      className="text-amber-500 hover:text-amber-700 font-medium flex items-center gap-2 group"
                    >
                      Full Profile
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    {/* <div className="flex space-x-2">
                      <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Email">
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-amber-500 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Join Our Team</h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                We're always looking for talented attorneys and legal professionals to join our team. At Justice Law
                Firm, we foster a collaborative environment where you can grow your career while making a meaningful
                impact for our clients.
              </p>
              <p className="text-gray-600 mb-8">
                We offer competitive compensation, professional development opportunities, and a supportive culture that
                values work-life balance. If you're passionate about legal excellence and client service, we'd love to
                hear from you.
              </p>
              <Link
                href="/careers"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center gap-2 group"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-lg"></div>
                <img
                  src="other-areas.jpg"
                  alt="Team meeting"
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with one of our attorneys to discuss your legal needs.
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
