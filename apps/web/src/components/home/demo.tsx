import Video from "next-video";

export default function DemoVideo({ src }: { src: string }) {
  return <Video src={src} autoPlay loop />;
}
