import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Home</h1>
      <Link href={"/login"}><h1 className="text-4xl font-bold mb-4 bg-gray-700 p-2 rounded-lg cursor-pointer active:bg-gray-600 active:scale-95 transition-all">Login!</h1></Link>
      <Link href={"/signup"}><h1 className="text-4xl font-bold mb-4 bg-gray-700 p-2 rounded-lg cursor-pointer active:bg-gray-600 active:scale-95 transition-all">SignUP!</h1></Link>
    </div></div>
  );
}
