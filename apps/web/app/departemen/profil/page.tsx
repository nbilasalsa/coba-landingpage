import { ProfileContent } from "../../../components/departemen/profile-content";

export default function ProfilPage() {
  return (
    <main className="min-h-screen">
      {/* Navbar & Footer otomatis ada dari layout.tsx utama */}
      <ProfileContent />
    </main>
  );
}