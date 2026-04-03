export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md  z-[9999]">
      <img
        src="https://www.gofoods.pk/static/media/icon.034eddce3e2b1a3dcc51.png"
        alt="Loading..."
        className="w-16 h-16 sm:w-20 sm:h-20 animate-spin"
      />
    </div>
  );
}
