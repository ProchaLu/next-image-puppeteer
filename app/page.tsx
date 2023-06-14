import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>Images with Puppeteer</h1>
      <h2>Image JPEG 1MB</h2>
      <Image
        data-test-id="unoptimized-jpeg"
        src="/images/image.jpeg"
        alt="1mb image"
        width={500}
        height={500}
      />
      <h2>Image JPG 100KB</h2>
      <Image
        data-test-id="optimized-jpg"
        src="/images/image-opt.jpg"
        alt="1mb image"
        width={500}
        height={500}
      />
      <h2>Image AVIF 21KB</h2>
      <Image
        data-test-id="optimized-avif"
        src="/images/image-opt-avif.avif"
        alt="1mb image"
        width={500}
        height={500}
      />
    </main>
  );
}
