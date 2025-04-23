import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle, Users, Phone, Mail } from "lucide-react"

type PracticeArea = {
  title: string
  description: string
  icon: JSX.Element
  content: string
  services: string[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
}

const practiceAreas: Record<string, PracticeArea> = {
  "corporate-law": {
    title: "Corporate Law",
    description: "Comprehensive legal services for businesses of all sizes",
    icon: <Users className="w-12 h-12 text-amber-500" />,
    content:
      "Our corporate law practice provides strategic legal guidance to businesses at every stage of their development. From formation and governance to complex transactions and compliance, our attorneys have the expertise to help your business thrive in today's competitive environment.",
    services: [
      "Business Formation & Entity Selection",
      "Corporate Governance",
      "Mergers & Acquisitions",
      "Commercial Contracts",
      "Regulatory Compliance",
      "Corporate Finance",
      "Joint Ventures & Strategic Alliances",
    ],
    benefits: [
      "Minimize legal risks and liabilities",
      "Ensure regulatory compliance",
      "Protect shareholder interests",
      "Facilitate business growth and expansion",
      "Navigate complex transactions successfully",
    ],
    faqs: [
      {
        question: "What type of business entity should I form?",
        answer:
          "The ideal business entity depends on various factors including liability protection, tax considerations, management structure, and growth plans. Our attorneys will assess your specific situation and goals to recommend the most appropriate structure, whether it's a corporation, LLC, partnership, or another entity type.",
      },
      {
        question: "How can your firm help with a merger or acquisition?",
        answer:
          "Our M&A team provides comprehensive support throughout the transaction process, including due diligence, valuation analysis, negotiation of terms, drafting and reviewing agreements, regulatory compliance, and post-closing integration guidance. We work to protect your interests while facilitating a smooth transaction.",
      },
      {
        question: "What corporate governance practices should my company implement?",
        answer:
          "Effective corporate governance typically includes establishing a clear organizational structure, developing comprehensive policies and procedures, implementing internal controls, ensuring regulatory compliance, and maintaining proper documentation of corporate actions. We can help design and implement governance practices tailored to your company's size, industry, and specific needs.",
      },
    ],
  },
  litigation: {
    title: "Litigation",
    description: "Skilled representation in court proceedings and dispute resolution",
    icon: <Users className="w-12 h-12 text-amber-500" />,
    content:
      "Our litigation practice is dedicated to resolving disputes effectively and efficiently. Whether through negotiation, mediation, arbitration, or trial, our experienced litigators develop strategic approaches to achieve favorable outcomes while minimizing disruption to your business or personal life.",
    services: [
      "Commercial Litigation",
      "Contract Disputes",
      "Employment Litigation",
      "Real Estate Litigation",
      "Intellectual Property Disputes",
      "Alternative Dispute Resolution",
      "Appeals",
    ],
    benefits: [
      "Strategic case assessment and planning",
      "Efficient resolution of disputes",
      "Experienced courtroom representation",
      "Protection of your rights and interests",
      "Minimization of business disruption",
    ],
    faqs: [
      {
        question: "Should I consider settling my case or going to trial?",
        answer:
          "This decision depends on many factors including the strength of your case, potential damages, costs of litigation, time considerations, and your risk tolerance. We provide a thorough case assessment and discuss all options with you, weighing the benefits and drawbacks of settlement versus trial to help you make an informed decision.",
      },
      {
        question: "How long will my litigation case take to resolve?",
        answer:
          "The timeline varies significantly depending on the complexity of the case, court schedules, opposing parties, and whether the case settles or goes to trial. Simple disputes might resolve in months, while complex litigation can take years. We work to move your case forward efficiently while ensuring your interests are fully protected.",
      },
      {
        question: "What are the potential costs of litigation?",
        answer:
          "Litigation costs typically include attorney fees, court filing fees, expert witness fees, deposition costs, and other expenses. We provide transparent fee structures and regular updates on costs. We also explore cost-effective strategies and alternative dispute resolution methods when appropriate to manage expenses.",
      },
    ],
  },
  "family-law": {
    title: "Family Law",
    description: "Compassionate counsel for divorce, custody, and family matters",
    icon: <Users className="w-12 h-12 text-amber-500" />,
    content:
      "Our family law practice provides compassionate guidance through life's most challenging personal situations. We understand the emotional nature of family law matters and strive to achieve resolutions that protect your interests and the well-being of your family.",
    services: [
      "Divorce and Legal Separation",
      "Child Custody and Visitation",
      "Child and Spousal Support",
      "Property Division",
      "Prenuptial and Postnuptial Agreements",
      "Adoption",
      "Domestic Violence Protection",
    ],
    benefits: [
      "Personalized attention to your unique situation",
      "Compassionate representation during difficult times",
      "Protection of your parental rights",
      "Fair division of assets and property",
      "Resolution-focused approach to minimize conflict",
    ],
    faqs: [
      {
        question: "How is child custody determined?",
        answer:
          "Courts determine custody based on the best interests of the child, considering factors such as parental ability, home stability, child's relationship with each parent, and sometimes the child's preferences. We help present your case effectively while advocating for arrangements that serve your child's well-being.",
      },
      {
        question: "How are assets divided in a divorce?",
        answer:
          "Asset division depends on state law, whether community property or equitable distribution principles apply, and factors such as the length of marriage and each spouse's contributions. We work to ensure a fair division while protecting your financial interests and important assets.",
      },
      {
        question: "Do I need a prenuptial agreement?",
        answer:
          "Prenuptial agreements can be valuable for protecting pre-marital assets, business interests, inheritance rights, and establishing financial expectations. They're particularly useful for those entering second marriages, business owners, or individuals with significant assets. We can help determine if a prenup is right for your situation and draft an agreement that protects your interests.",
      },
    ],
  },
}

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const practiceArea = practiceAreas[slug] || {
    title: "Practice Area",
    description: "Legal services",
    icon: <Users className="w-12 h-12 text-amber-500" />,
    content: "Information about this practice area is coming soon.",
    services: [],
    benefits: [],
    faqs: [],
  }

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{practiceArea.title}</h1>
            <p className="text-xl text-gray-300">{practiceArea.description}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
              <p className="text-gray-600 text-lg mb-8">{practiceArea.content}</p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {practiceArea.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">How We Help</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <ul className="space-y-4">
                  {practiceArea.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6 mb-8">
                {practiceArea.faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/practice-areas"
                  className="text-amber-500 hover:text-amber-700 font-medium flex items-center gap-2 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Practice Areas
                </Link>
                <Link
                  href="/contact"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 flex items-center gap-2 group"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Speak With An Attorney</h3>
              <p className="text-gray-600 mb-6">
                Our experienced attorneys are ready to assist you with your {practiceArea.title.toLowerCase()} needs.
                Contact us today for a consultation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-medium">(212) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-medium">Avv@madinilegal.org</p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-md text-center transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Practice Areas</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(practiceAreas)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, area]) => (
                <div
                  key={key}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-6">{area.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <Link
                    href={`/practice-areas/${key}`}
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
    </main>
  )
}
