import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1>Unoptimized props AVIF</h1>
      <Image
        unoptimized={true}
        data-test-id="unoptimized-props-avif"
        src="/images/image-opt-avif.avif"
        alt="Optimized AVIF"
        width={700}
        height={700}
      />
    </main>
  );
}
