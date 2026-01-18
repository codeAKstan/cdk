"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all rounded-lg text-xs font-bold uppercase tracking-widest text-left"
    >
      <span className="material-symbols-outlined text-lg">logout</span>
      Terminate Session
    </button>
  );
}
