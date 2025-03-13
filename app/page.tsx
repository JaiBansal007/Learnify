import Navbar from "@/Components/Navbar";

export default function Home() {

  return (
    <>
        {/* Hero Section */}
  <section className="container mx-auto px-6 py-12 md:py-20">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Learn Faster with Interactive Flashcards
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Create, study and master any subject with our simple yet powerful flashcard platform.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Students learning" 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="bg-white py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Key Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Creation</h3>
          <p className="text-gray-600">
            Create flashcards with descriptions and rich content in seconds.
          </p>
        </div>
        
        {/* Feature 2 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Learning</h3>
          <p className="text-gray-600">
            Our system helps you focus on what you need to review most.
          </p>
        </div>
        
        {/* Feature 3 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Anywhere</h3>
          <p className="text-gray-600">
            Access your flashcards on any device, anytime you want.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-indigo-600 py-12">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
      <p className="text-indigo-100 mb-6">
        Join thousands of students improving their learning today.
      </p>
      <button className="bg-white text-indigo-600 px-6 py-3 rounded-md hover:bg-gray-100 transition">
        Get Started Free
      </button>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="text-xl font-bold">FlashLearn</div>
          <p className="text-gray-400 text-sm">© 2023 FlashLearn. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>
      </div>
    </div>
  </footer>

    </>
  );
}
