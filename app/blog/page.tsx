import Link from "next/link"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding Corporate Liability: What Business Owners Need to Know",
      excerpt:
        "Corporate liability is a complex area of law that affects businesses of all sizes. This article explores key concepts and strategies for minimizing risk.",
      image: "/images/blog-1.jpg",
      date: "April 15, 2023",
      author: "Jennifer Reynolds",
      category: "Corporate Law",
      slug: "understanding-corporate-liability",
    },
    {
      title: "The Evolving Landscape of Family Law in 2023",
      excerpt:
        "Family law continues to evolve with changing societal norms and legal precedents. Learn about recent developments and their implications.",
      image: "/images/blog-2.jpg",
      date: "March 28, 2023",
      author: "Maria Gonzalez",
      category: "Family Law",
      slug: "evolving-landscape-family-law",
    },
    {
      title: "Intellectual Property Protection in the Digital Age",
      excerpt:
        "Digital innovation has created new challenges for intellectual property protection. Discover strategies for safeguarding your creative assets.",
      image: "/images/blog-3.jpg",
      date: "March 10, 2023",
      author: "Sarah Kim",
      category: "Intellectual Property",
      slug: "intellectual-property-digital-age",
    },
    {
      title: "Navigating Commercial Real Estate Transactions: A Legal Guide",
      excerpt:
        "Commercial real estate transactions involve complex legal considerations. This guide provides insights into key aspects of the process.",
      image: "/images/blog-4.jpg",
      date: "February 22, 2023",
      author: "David Washington",
      category: "Real Estate Law",
      slug: "commercial-real-estate-transactions",
    },
    {
      title: "Effective Strategies for Dispute Resolution in Business",
      excerpt:
        "Business disputes can be costly and disruptive. Learn about effective strategies for resolving conflicts while preserving relationships.",
      image: "/images/blog-5.jpg",
      date: "February 8, 2023",
      author: "Robert Chen",
      category: "Litigation",
      slug: "dispute-resolution-strategies",
    },
    {
      title: "Tax Planning for Small Businesses: Legal Considerations",
      excerpt:
        "Effective tax planning is essential for small business success. This article covers key legal considerations and strategies.",
      image: "/images/blog-6.jpg",
      date: "January 20, 2023",
      author: "Michael Johnson",
      category: "Tax Law",
      slug: "tax-planning-small-businesses",
    },
  ]

  const categories = [
    "Corporate Law",
    "Litigation",
    "Family Law",
    "Real Estate Law",
    "Intellectual Property",
    "Tax Law",
  ]

  const recentPosts = blogPosts.slice(0, 3)

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Legal Insights</h1>
            <p className="text-xl text-gray-300">
              Stay informed with the latest legal news, analysis, and perspectives from our attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Articles</h2>
              <div className="w-20 h-1 bg-amber-500 mb-10"></div>

              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gray-200">
                    <div className="md:w-1/3">
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-60 rounded-lg overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          <span>{post.category}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-amber-500 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-amber-500 hover:text-amber-700 font-medium flex items-center gap-2 group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center justify-between text-gray-600 hover:text-amber-500 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-20 h-20">
                        <Link href={`/blog/${post.slug}`}>
                          <div className="relative h-full rounded overflow-hidden">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 hover:text-amber-500 transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title.length > 50 ? post.title.substring(0, 50) + "..." : post.title}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gray-800 p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300 mb-4">Stay updated with our latest legal insights and news.</p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-md transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
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
            Our team of experienced attorneys is ready to help with your legal needs.
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
