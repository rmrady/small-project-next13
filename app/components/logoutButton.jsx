"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
    }

    if (error) {
      console.log("error!");
    }
  };

  return (
    <button
      className=" bg-purple-600 text-white text-[20px] font-bold  px-8 pt-1"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
