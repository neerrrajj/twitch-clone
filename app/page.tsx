import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-rose-500 font-bold">
      <p>helo</p>
      <UserButton />
    </div>
  );
}
