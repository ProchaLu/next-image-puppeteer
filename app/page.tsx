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
        width={300}
        height={300}
      />
      <h2>Image JPG 100KB</h2>
      <Image
        data-test-id="optimized-jpg"
        src="/images/image-opt.jpg"
        alt="jpg image"
        width={300}
        height={300}
      />
      <h2>Image AVIF 21KB</h2>
      <Image
        data-test-id="optimized-avif"
        src="/images/image-opt-avif.avif"
        alt="avif image"
        width={300}
        height={300}
      />
      <h2>Image AVIF 21KB with unoptimized prop</h2>
      <Image
        data-test-id="unoptimized-props-avif"
        src="/images/image-opt-avif.avif"
        alt="avif unoptimized image"
        width={300}
        height={300}
        unoptimized={true}
      />
      <h2>Image JPG 100KB with unoptimized prop</h2>
      <Image
        data-test-id="unoptimized-props-jpg"
        src="/images/image-opt.jpg"
        alt="jpg unoptimized image"
        width={300}
        height={300}
        unoptimized={true}
      />
    </main>
  );
}
