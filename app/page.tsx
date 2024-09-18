// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Free Unlimited Images, Videos Converter</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
  Discover the power of Format Fusion – your go-to online tool for seamless multimedia conversion.
  Effortlessly change the format of images, audio, and videos without limits. Start transforming
  your content today and unlock endless creative possibilities!
</p>

          </div>

          {/* Upload Box */}
          <Dropzone />
          <p>
            @Khankor
          </p>
      </div>
  );
}
