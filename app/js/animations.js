"use client"

document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for fade-in animations
  const observeElements = (elements, className) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className)
          }
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((element) => {
      observer.observe(element)
    })
  }

  // Service cards animation
  const serviceCards = document.querySelectorAll(".service-card")
  observeElements(serviceCards, "visible")

  // About section animation
  const aboutImage = document.querySelector(".about-image")
  const aboutContent = document.querySelector(".about-content")
  if (aboutImage && aboutContent) {
    observeElements([aboutImage], "visible")
    observeElements([aboutContent], "visible")
  }

  // Testimonial cards animation
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  observeElements(testimonialCards, "visible")

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Mobile menu toggle animation
  const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]')
  const mobileMenu = document.querySelector(".lg\\:hidden.fixed")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      document.body.classList.toggle("overflow-hidden")
    })
  }
})
