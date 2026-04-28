import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      window.location.href = '/';
      return;
    }

    fetch('/products', {
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(setProducts);
  }, [token]);

  const reload = async () => {
    const res = await fetch('/products', {
      headers: { Authorization: token }
    });
    setProducts(await res.json());
  };

  const createProduct = async (e) => {
    e.preventDefault();

    await fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({
        nombre: e.target.nombre.value,
        precio: e.target.precio.value
      })
    });

    e.target.reset();
    reload();
  };

  const deleteProduct = async (id) => {
    await fetch(`/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: token }
    });

    reload();
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Dashboard de Productos
          </h1>

          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg bg-red-500/80 hover:bg-red-600 transition"
          >
            Cerrar sesión
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={createProduct}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-zinc-900/60 backdrop-blur-xl p-4 rounded-xl border border-white/10"
        >
          <input
            name="nombre"
            placeholder="Nombre del producto"
            className="p-3 rounded-lg bg-black/40 border border-white/10 outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            name="precio"
            type="number"
            placeholder="Precio"
            className="p-3 rounded-lg bg-black/40 border border-white/10 outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:scale-[1.02] transition">
            Agregar
          </button>
        </form>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div
              key={p._id}
              className="relative bg-zinc-900/70 backdrop-blur-xl p-5 rounded-xl border border-white/10 shadow-lg hover:scale-[1.02] transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {p.nombre}
              </h3>

              <p className="text-cyan-400 font-bold mb-4">
                ${p.precio}
              </p>

              <button
                onClick={() => deleteProduct(p._id)}
                className="w-full py-2 rounded-lg bg-red-500/80 hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
