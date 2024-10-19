import React from 'react';
import { User, FileText } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="intro" className="mb-16">
      <div className="glassmorphic p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="glassmorphic p-2 rounded-full w-48 h-48 mx-auto">
            <img
              src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOG9aRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cc412eb0548b8e6ca32df6f9eebac760defeb4a5/passport%20size.jpg"
              className="rounded-full w-full h-full object-cover float"
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold mb-4 text-primary glow">
            Mir Zubair Hameed
          </h1>
          <h2 className="text-2xl text-secondary mb-4">Network Engineer</h2>
          <p className="text-text mb-6">
            With over a decade of experience in network engineering, I
            specialize in designing and implementing robust network
            infrastructures. My expertise spans from large-scale installations
            to cutting-edge cybersecurity implementations, ensuring seamless and
            secure technological environments for businesses of all sizes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="glassmorphic-button inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-text hover:text-primary transition-colors"
            >
              <User className="mr-2" size={18} />
              Get in Touch
            </a>
            <a
              href="/mir.jpg" // Update this path to match your resume file name
              download
              className="glassmorphic-button inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-text hover:text-primary transition-colors"
            >
              <FileText className="mr-2" size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;