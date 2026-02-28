export function groupAssetModules(modules, rootFolder) {
  const grouped = Object.entries(modules).reduce((acc, [path, mod]) => {
    const parts = path.split('/');
    const album = parts[parts.indexOf(rootFolder) + 1];
    const url = mod.default || mod;
    (acc[album] ||= []).push({ src: url, alt: parts.at(-1) });
    return acc;
  }, {});

  Object.values(grouped).forEach((list) =>
    list.sort((a, b) => a.src.localeCompare(b.src))
  );

  return grouped;
}
