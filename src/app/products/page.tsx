import Link from "next/link";

const products = [
  {
    title: "Payment Solutions",
    description:
      "Accept, manage, and automate digital payments with secure and scalable payment infrastructure.",
    href: "/products/payment-solutions",
  },
  {
    title: "White Label Solutions",
    description:
      "Launch your own branded fintech platform with complete customization.",
    href: "/products/white-label-solutions",
  },
  {
    title: "B2B White Label Solutions",
    description:
      "Enterprise-ready reseller and partner solutions for financial businesses.",
    href: "/products/b2b-white-label-solutions",
  },
  {
    title: "Business Admin Panel & AI Chatbot",
    description:
      "Manage operations efficiently with centralized dashboards and AI automation.",
    href: "/products/business-admin-panel-ai-chatbot-automation",
  },
  {
    title: "Digital Solutions & AI Services",
    description:
      "Modern web, mobile, cloud, AI, and enterprise software development.",
    href: "/products/digital-solutions-ai-services",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span>Our Products</span>

          <h1>Technology Solutions Built for Modern Businesses</h1>

          <p>
            Discover our complete portfolio of fintech products, AI-powered
            automation, and digital transformation services designed to help
            businesses grow.
          </p>
        </div>
      </section>

      <section className="products-list">
        <div className="container">
          <div className="product-grid">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="product-card"
              >
                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <span>View Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
