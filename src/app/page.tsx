"use client";
import Authentication from "@/components/authentication";
import { useUserStore } from "@/store/user-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { user } = useUserStore();
  useEffect(() => {
    if (user) router.push("/crew");
  }, [user, router]);

  return <Authentication />;
};

export default Page;
