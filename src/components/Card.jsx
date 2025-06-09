// src/components/Card.jsx
export default function Card({ children }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
      {children}
    </div>
  );
}
