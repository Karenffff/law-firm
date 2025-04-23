import Link from "next/link"
import { ArrowRight, Scale, Briefcase, Users, Home, BookOpen, FileText } from "lucide-react"

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: <Scale className="w-12 h-12 text-amber-500" />,
      title: "Corporate Law",
      description:
        "Comprehensive legal services for businesses of all sizes, from startups to established corporations. We handle entity formation, governance, compliance, contracts, mergers and acquisitions, and more.",
      link: "/practice-areas/corporate-law",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-amber-500" />,
      title: "Litigation",
      description:
        "Skilled representation in court proceedings, arbitration, and mediation. Our litigation team handles complex disputes with strategic approaches focused on achieving favorable outcomes.",
      link: "/practice-areas/litigation",
    },
    {
      icon: <Users className="w-12 h-12 text-amber-500" />,
      title: "Family Law",
      description:
        "Compassionate counsel for divorce, child custody, support, adoption, and other family matters. We help clients navigate emotional situations with sensitivity and legal expertise.",
      link: "/practice-areas/family-law",
    },
    {
      icon: <Home className="w-12 h-12 text-amber-500" />,
      title: "Real Estate Law",
      description:
        "Legal guidance for residential and commercial real estate transactions, leasing, property disputes, land use, zoning, and development projects.",
      link: "/practice-areas/real-estate",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-amber-500" />,
      title: "Intellectual Property",
      description:
        "Protection for your creative and business assets through trademarks, copyrights, patents, and trade secrets. We help clients establish, maintain, and defend their intellectual property rights.",
      link: "/practice-areas/intellectual-property",
    },
    {
      icon: <FileText className="w-12 h-12 text-amber-500" />,
      title: "Tax Law",
      description:
        "Strategic tax planning, compliance assistance, and representation in tax disputes with government agencies. We help individuals and businesses optimize their tax positions while ensuring compliance.",
      link: "/practice-areas/tax-law",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Practice Areas</h1>
            <p className="text-xl text-gray-300">Comprehensive legal services tailored to your specific needs.</p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <Link
                  href={area.link}
                  className="text-amber-500 hover:text-amber-700 font-medium flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Approach</h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                At Madini Legal Firm, we believe in a client-centered approach to legal representation. We take the time
                to understand your unique situation, goals, and concerns before developing a tailored strategy to
                address your legal needs.
              </p>
              <p className="text-gray-600 mb-6">
                Our attorneys combine deep legal expertise with practical business knowledge to provide solutions that
                are not only legally sound but also aligned with your broader objectives. We focus on clear
                communication, keeping you informed at every stage of the process.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're facing a complex legal challenge or seeking guidance for a business decision, our team is
                committed to providing the highest level of service and achieving the best possible outcome for your
                case.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-lg"></div>
                <img
                  src="/images/meeting.jpg"
                  alt="Attorneys in meeting"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to schedule a consultation and discuss your legal needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-amber-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
