import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1>Unoptimized props JPG</h1>
      <Image
        data-test-id="unoptimized-props-jpg"
        src="/images/image-opt.jpg"
        alt="Optimized JPG"
        width={700}
        height={700}
        unoptimized={true}
      />
    </main>
  );
}
