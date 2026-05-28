import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12 bg-gray-50 text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Your Agency App</h1>
        <p className="text-xl text-gray-600">Your central hub for managing clients, projects, and team.
        </p>
      </div>

      <div className="flex space-x-8">
        <Link href="/clients">
          <div className="card">
            <h2 className="card-title">Clients</h2>
            <p className="card-description">Manage your client relationships.</p>
          </div>
        </Link>
        <Link href="/projects">
          <div className="card">
            <h2 className="card-title">Projects</h2>
            <p className="card-description">Track project progress and details.</p>
          </div>
        </Link>
        <Link href="/team">
          <div className="card">
            <h2 className="card-title">Team</h2>
            <p className="card-description">View and manage your team members.</p>
          </div>
        </Link>
      </div>

      {/* Basic styling for cards - ideally this would be in a CSS module or Tailwind config */} 
      <style jsx>{`
        .card {
          background-color: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          width: 250px;
          text-align: center;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e3a8a; /* blue-800 */
          margin-bottom: 0.75rem;
        }
        .card-description {
          font-size: 1rem;
          color: #6b7280; /* gray-500 */
        }
      `}</style>
    </main>
  );
}
