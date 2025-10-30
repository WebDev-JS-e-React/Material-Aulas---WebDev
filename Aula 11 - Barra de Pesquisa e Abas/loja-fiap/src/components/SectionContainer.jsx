import ProductCard from "./ProductCard";

export default function SectionContainer({ title, children }) {

  return (
    <section className="mb-12">
      <div className="bg-black text-yellow-400 py-6 mb-6 text-center mt-4">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-center">Produtos em destaque</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {children}
      </div>
    </section>
  );
}
