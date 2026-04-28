import API_URL from '../api';

export default function Register() {
  const submit = async (e) => {
    e.preventDefault();

    await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      })
    });

    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="relative w-full max-w-md">
        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl blur opacity-30"></div>

        {/* Card */}
        <form
          onSubmit={submit}
          className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10"
        >
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Crear cuenta
          </h2>

          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            className="w-full mb-4 p-3 rounded-lg bg-black/40 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
          />

          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            required
            className="w-full mb-6 p-3 rounded-lg bg-black/40 border border-white/10 focus:border-violet-400 focus:ring-2 focus:ring-violet-500 outline-none transition"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 hover:scale-[1.02] hover:shadow-lg transition-all"
          >
            Registrarse
          </button>

          <p className="text-center text-sm mt-5 text-gray-400">
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="text-cyan-400 hover:underline">
              Inicia sesión
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}