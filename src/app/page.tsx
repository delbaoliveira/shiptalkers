"use client";
import { Github, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Component() {
  const router = useRouter();
  return (
    <main className="flex flex-grow flex-col items-center justify-center py-6">
      <div className="flex w-full max-w-2xl items-center justify-center space-x-4 py-4">
        <Github size={64} />
        <h2 className="text-4xl font-bold">/</h2>
        <Twitter size={64} />
      </div>
      <span className="max-w-[600px] text-balance pb-4 text-center text-xl ">
        Find out if the person you're losing an argument to on Twitter actually
        ships code or if it's all just shiptalk
      </span>
      <form
        className="flex w-full max-w-2xl flex-col items-center justify-center space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          // @ts-expect-error asd
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const githubUrl = e.target[0].value as string;
          // @ts-expect-error asd
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const twitterUrl = e.target[1].value as string;
          // just get the names of both
          const githubName = githubUrl.split("/").pop();
          const twitterName = twitterUrl.split("/").pop();
          void router.push(
            `/compare?github=${githubName}&twitter=${twitterName}`,
          );
        }}
      >
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Github size={24} />
          <Input
            className="w-full"
            required
            name="github-url"
            placeholder="GitHub Profile Name"
          />
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Twitter size={24} />
          <Input
            className="w-full"
            name="twitter-url"
            required
            placeholder="Twitter Profile Name"
          />
        </div>
        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </form>

      <section className="mt-40 flex w-full max-w-6xl flex-col items-center justify-center rounded-md px-4 py-6 text-center">
        <h2 className="mb-4 text-2xl font-bold">Recently Compared</h2>
        <p className="text-lg">
          See some of the recent comparisons made by users:
        </p>
      </section>
    </main>
  );
}
