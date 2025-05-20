import MentorCard from "./MentorCard";

const baseMentor = {
  id:"1",
  nombre: "Ekaterina Lazo",
  materia: "Matemáticas",
  precio: "$25/h",
  rating: 4.8,
  descripcion:
    "Senior Machine Learning/GenAI Engineer Among Top 3% Freelancer | 5+ Years of Expertise",
  disponibilidad: "Disponible hoy",
};

const mockMentores = Array.from({ length: 10 }, () => baseMentor);

export default function MentorList() {
  return (
    <>
      {mockMentores.map((mentor, idx) => (
        <MentorCard key={idx} {...mentor} />
      ))}
      <p className="text-center text-sm mt-10 text-gray-500">Paginación</p>
    </>
  );
}
