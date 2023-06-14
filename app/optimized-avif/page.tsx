import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1>Optimized AVIF</h1>
      <Image
        data-test-id="optimized-avif"
        src="/images/image-opt-avif.avif"
        alt="Optimized AVIF"
        width={700}
        height={700}
      />
    </main>
  );
}
