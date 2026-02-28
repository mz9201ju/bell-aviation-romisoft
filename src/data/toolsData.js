import Calc from '../assets/gallery/Calc.png';
import Cost from '../assets/gallery/Cost.png';
import Distance from '../assets/gallery/Distance.png';
import Range from '../assets/gallery/Range.png';
import ROMXLegacyWindowsUI from '../assets/gallery/ROMX_Legacy_WindowsUI.jpg';
import ROMXWindowsUI from '../assets/gallery/ROMX_WindowsUI.jpg';
import ROMX_BDMConsole from '../assets/gallery/ROMX_BDM_Console.png';

export const PREVIEW_TOOLS = [
  { label: 'Cost', href: 'https://www.romisoft.net/vqc/' },
  { label: 'Calc', href: 'https://www.romisoft.net/vcc/' },
  { label: 'Range', href: 'https://www.romisoft.net/vrm/' },
  { label: 'Distance', href: 'https://www.romisoft.net/vqd/' },
];

export const LEGACY_HELP = [
  { label: 'BDM', href: 'https://romisoft.net/bdm/' },
  { label: 'BDMX', href: 'https://romisoft.net/bdmx/' },
  { label: 'ROMX', href: 'https://romisoft.net/romx/' },
];

export const TOOL_ALBUMS = [
  {
    slug: 'ROMX_WINDOWS_UI',
    title: 'ROMX Windows UI',
    count: 7,
    cover: ROMXWindowsUI,
    blurb: 'ROMX: Modern User Interface.',
  },
  {
    slug: 'ROMX_LEGACY_WINDOWS_UI',
    title: 'ROMX Legacy Windows UI',
    count: 8,
    cover: ROMXLegacyWindowsUI,
    blurb: 'ROMX: Legacy User Interface',
  },
  {
    slug: 'ROMX_BDM_CONSOLE',
    title: 'ROMX/BDM Console',
    count: 21,
    cover: ROMX_BDMConsole,
    blurb: 'Legacy BDM/ROMX Original Console Application',
  },
  {
    slug: 'CALC',
    title: 'Quick Calc',
    count: 2,
    cover: Calc,
    blurb: 'Quick Calc',
  },
  {
    slug: 'COST',
    title: 'Quick Cost',
    count: 8,
    cover: Cost,
    blurb: 'Quick Cost',
  },
  {
    slug: 'DISTANCE',
    title: 'Quick Distance',
    count: 4,
    cover: Distance,
    blurb: 'Quick Distance',
  },
  {
    slug: 'RANGE',
    title: 'Quick Distance',
    count: 3,
    cover: Range,
    blurb: 'Quick Distance',
  },
];
