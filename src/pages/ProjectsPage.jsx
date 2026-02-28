import AlbumGalleryPage from "../components/AlbumGalleryPage";
import { groupAssetModules } from "../lib/groupAssetModules";

const modules = import.meta.glob("../assets/projects/*/*.{png,jpg,jpeg,webp,svg}", { eager: true });
const grouped = groupAssetModules(modules, "projects");

export default function ProjectsPage() {
    return <AlbumGalleryPage groupedAlbums={grouped} backTo="/projects" backLabel="Back to Projects" />;
}
