import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 min-w-full bg-gray-300  py-3 md:py-5">
      <div className="flex flex-row text-2xl md:text-3xl text-gray-700 text-center justify-center space-x-5">
        <Link href="/" prefetch={false}>
          <h1 className="font-bold mx-2">FIFO</h1>
        </Link>
        <h1 className="mx-2">Kantor Wymiany Walut</h1>
      </div>
    </div>
  );
}
