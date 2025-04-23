import Link from "next/link"
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or CMS
  const post = {
    title: "Understanding Corporate Liability: What Business Owners Need to Know",
    content: `
      <p class="mb-4">Corporate liability is a complex area of law that affects businesses of all sizes. As a business owner, understanding the scope of your company's potential liability is essential for effective risk management and legal compliance.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Types of Corporate Liability</h2>
      
      <p class="mb-4">Corporations can face several types of liability, including:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Contract Liability:</strong> Arising from breaches of contractual obligations with vendors, customers, employees, or other parties.</li>
        <li><strong>Tort Liability:</strong> Including negligence, product liability, and other civil wrongs that cause harm to others.</li>
        <li><strong>Statutory Liability:</strong> Resulting from violations of laws and regulations, such as environmental regulations, securities laws, or employment laws.</li>
        <li><strong>Criminal Liability:</strong> In certain circumstances, corporations can be held criminally liable for the actions of their employees or agents.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">The Doctrine of Limited Liability</h2>
      
      <p class="mb-4">One of the primary advantages of incorporating a business is the concept of limited liability, which generally protects shareholders' personal assets from the company's debts and liabilities. However, this protection is not absolute.</p>
      
      <p class="mb-4">Courts may "pierce the corporate veil" and hold shareholders personally liable in cases where:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>The corporation is undercapitalized</li>
        <li>Corporate formalities are not observed</li>
        <li>The corporation is used for fraudulent purposes</li>
        <li>The corporation is essentially an alter ego of its shareholders</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Strategies for Minimizing Corporate Liability</h2>
      
      <p class="mb-4">While it's impossible to eliminate all potential liability, businesses can take several steps to minimize their exposure:</p>
      
      <h3 class="text-xl font-bold text-gray-800 mb-3 mt-6">1. Maintain Corporate Formalities</h3>
      
      <p class="mb-4">To preserve limited liability protection, corporations must observe proper formalities, including:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Holding regular board and shareholder meetings</li>
        <li>Keeping accurate corporate records and minutes</li>
        <li>Maintaining separate corporate and personal finances</li>
        <li>Using proper corporate signatures on documents</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-800 mb-3 mt-6">2. Implement Comprehensive Compliance Programs</h3>
      
      <p class="mb-4">Developing and enforcing compliance policies can help prevent violations of laws and regulations. Effective compliance programs typically include:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Written policies and procedures</li>
        <li>Regular employee training</li>
        <li>Monitoring and auditing mechanisms</li>
        <li>Clear reporting channels for potential violations</li>
        <li>Consistent enforcement of policies</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-800 mb-3 mt-6">3. Obtain Adequate Insurance Coverage</h3>
      
      <p class="mb-4">Insurance is a critical component of risk management. Depending on your business, you may need:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>General liability insurance</li>
        <li>Professional liability insurance</li>
        <li>Directors and officers (D&O) insurance</li>
        <li>Employment practices liability insurance</li>
        <li>Cyber liability insurance</li>
        <li>Product liability insurance</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-800 mb-3 mt-6">4. Use Well-Drafted Contracts</h3>
      
      <p class="mb-4">Properly drafted contracts can limit liability through provisions such as:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Limitation of liability clauses</li>
        <li>Indemnification provisions</li>
        <li>Warranty disclaimers</li>
        <li>Alternative dispute resolution requirements</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8">Conclusion</h2>
      
      <p class="mb-4">Understanding corporate liability is essential for protecting your business and personal assets. By maintaining proper corporate formalities, implementing compliance programs, obtaining adequate insurance, and using well-drafted contracts, you can significantly reduce your company's liability exposure.</p>
      
      <p class="mb-4">However, liability risks vary widely depending on your industry, business structure, and operations. For personalized guidance on managing your company's specific liability risks, consulting with an experienced corporate attorney is highly recommended.</p>
    `,
    image: "/images/blog-1.jpg",
    date: "April 15, 2023",
    author: "Jennifer Reynolds",
    category: "Corporate Law",
    tags: ["Corporate Law", "Business Risk", "Legal Compliance", "Liability"],
  }

  const relatedPosts = [
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
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300 mb-4">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-700 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              <div className="mb-8">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto rounded-lg" />
              </div>

              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-gray-700">Tags:</span>
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase().replace(" ", "-")}`}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-amber-100 hover:text-amber-700 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="font-medium text-gray-700 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share:
                  </span>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-700 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-gray-50 p-8 rounded-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/images/attorney-1.jpg" alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">
                      Jennifer Reynolds is a Managing Partner at Madini Legal Firm with over 20 years of experience in
                      corporate law. She specializes in corporate governance, mergers and acquisitions, and business
                      risk management.
                    </p>
                    <Link
                      href="/attorneys/jennifer-reynolds"
                      className="text-amber-500 hover:text-amber-700 font-medium"
                    >
                      View Profile
                    </Link>
                  </div>
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

              {/* Related Posts */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-20 h-20">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <div className="relative h-full rounded overflow-hidden">
                            <img
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 hover:text-amber-500 transition-colors">
                          <Link href={`/blog/${relatedPost.slug}`}>
                            {relatedPost.title.length > 50
                              ? relatedPost.title.substring(0, 50) + "..."
                              : relatedPost.title}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500">{relatedPost.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {[
                    "Corporate Law",
                    "Litigation",
                    "Family Law",
                    "Real Estate Law",
                    "Intellectual Property",
                    "Tax Law",
                  ].map((category, index) => (
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
