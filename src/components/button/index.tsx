import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "./Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className=" space-y-4">
        <div>
          <Button buttonColor="blue">Click to Submit</Button>
        </div>
        <div>
          <Button buttonColor="blue" isLoading>
            Loading
          </Button>
        </div>
      </div>
    </main>
  );
}
