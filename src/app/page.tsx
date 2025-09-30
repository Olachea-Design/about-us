import Logo from "@/components/Logo";
import FacebookIcon from "@/components/FacebookIcon";
import InstagramIcon from "@/components/InstagramIcon";
import ImageCard from "@/components/ImageCard";

const galleryItems = [
  {
    title: "Team Mexico Competition Jersey",
    src: "https://placehold.co/600x800/212121/ffffff?text=Team+Mexico",
    width: 600,
    height: 800,
  },
  {
    title: "Modern Trailblazer Women's Hiking Tee",
    src: "https://placehold.co/600x400/212121/ffffff?text=Trailblazer+Tee",
    width: 600,
    height: 400,
  },
  {
    title: "Last Call Flaming Glass Jersey",
    src: "https://placehold.co/600x700/212121/ffffff?text=Last+Call+Jersey",
    width: 600,
    height: 700,
  },
  {
    title: "Double In, Stumble Out Pro Dart Jersey",
    src: "https://placehold.co/600x900/212121/ffffff?text=Darts+Jersey",
    width: 600,
    height: 900,
  },
  {
    title: "Cosmic Bender Darts Jersey",
    src: "https://placehold.co/600x600/212121/ffffff?text=Cosmic+Jersey",
    width: 600,
    height: 600,
  },
  {
    title: "Street Race Mustang Sport Tee",
    src: "https://placehold.co/600x500/212121/ffffff?text=Mustang+Tee",
    width: 600,
    height: 500,
  },
];

export default function Home() {
  return (
    <div className="bg-brand-background text-brand-white min-h-screen font-sans">
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center flex flex-col items-center mb-12">
          <Logo />
          <h1 className="text-5xl font-bold mt-6">
            Your Vision, Our Design
          </h1>
        </header>

        {/* Social Links Section */}
        <section className="flex justify-center gap-6 mb-16">
          <FacebookIcon />
          <InstagramIcon />
        </section>

        {/* Gallery Section */}
        <section className="pb-16">
          <div
            className="columns-1 md:columns-2 lg:columns-3 gap-8"
            style={{ columnFill: "balance" }}
          >
            {galleryItems.map((item) => (
              <div key={item.title} className="mb-8 break-inside-avoid">
                <ImageCard
                  src={item.src}
                  alt={item.title}
                  title={item.title}
                  width={item.width}
                  height={item.height}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center text-sm text-gray-400 py-6 border-t border-gray-700">
          <p>© 2025 Olachea Design. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}