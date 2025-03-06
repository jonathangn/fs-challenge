"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Algo salió mal...</h2>
      <br />
      <button onClick={() => reset()}>
        <Link href="/"> Intentar nuevamente</Link>
      </button>
    </div>
  );
}
