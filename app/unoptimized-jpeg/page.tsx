import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1>Image JPEG 1MB</h1>
      <Image
        data-test-id="unoptimized-jpeg"
        src="/images/image.jpeg"
        alt="1mb image"
        width={700}
        height={700}
      />
    </main>
  );
}
