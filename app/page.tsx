
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Your Vision, Our Expertise.
          </h1>
          <p className="mt-4 text-xl sm:text-2xl opacity-90">
            We build stunning digital experiences that drive growth.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600">
                From responsive websites to complex web applications, we create robust and scalable solutions tailored to your needs.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Digital Marketing</h3>
              <p className="text-gray-600">
                Boost your online presence with our SEO, social media marketing, and content strategy services.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Branding & Design</h3>
              <p className="text-gray-600">
                Craft a memorable brand identity with our expert logo design, UI/UX, and graphic design services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-xl opacity-90">
            Let's discuss your project and bring your ideas to life.
          </p>
          <a
            href="mailto:info@agencyapp.com"
            className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2024 Full Stack Agency App. All rights reserved.</p>
      </footer>
    </div>
  );
}
