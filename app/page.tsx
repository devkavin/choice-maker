"use client";
import SpinnerPage from "./SpinnerPage";

export default function Home() {
  const spinnerOptions = [
    "Watch a horror movie",
    "MLBB",
    "Sing together",
    "Watch a K-drama",
    "Draw it",
    "Sleep 😂",
    "Watch a TV series",
    "Watch a trashy movie",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <h1 className="text-4xl font-bold mb-8">Choice Maker</h1>
      <SpinnerPage spinnerOptions={spinnerOptions} />
    </main>
  );
}
