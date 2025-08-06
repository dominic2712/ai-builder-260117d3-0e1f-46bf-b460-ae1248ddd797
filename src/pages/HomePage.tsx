import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Future</h2>
        <p>The future of AI is here, and it's transforming every industry.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;