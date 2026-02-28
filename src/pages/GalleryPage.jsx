import AlbumGalleryPage from "../components/AlbumGalleryPage";
import { groupAssetModules } from "../lib/groupAssetModules";

const modules = import.meta.glob("../assets/gallery/*/*.{png,jpg,jpeg,webp,svg}", { eager: true });
const grouped = groupAssetModules(modules, "gallery");

export default function GalleryPage() {
    return <AlbumGalleryPage groupedAlbums={grouped} backTo="/tools" backLabel="Back to Tools" />;
}
