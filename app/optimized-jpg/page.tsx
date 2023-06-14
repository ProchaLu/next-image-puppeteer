import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1>Optimized JPG</h1>
      <Image
        data-test-id="optimized-jpg"
        src="/images/image-opt.jpg"
        alt="Optimized JPG"
        width={700}
        height={700}
      />
    </main>
  );
}
