import { projects } from "../data/Portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-gray-800 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}