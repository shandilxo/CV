import { FC } from 'react';
import {
  Code,
  Flame,
  Cloud,
  Home,
  Image as ImageIcon,
  Instagram,
  MessageSquarePlus,
  Linkedin,
  Scissors,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
  Video,
  X,
  Youtube,
} from 'lucide-react';
import List from '../ui/List';
import { useMenu } from '../Provider';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  const { showMenuVisibility } = useMenu();
  return (
    <div
      className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
      onClick={() => showMenuVisibility(false)}
    >
      <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
        <X className={`text-primary`} />
      </div>
      {/* List 1 */}
      <List link="/" effect="slideUp">
        <Home /> Home
      </List>
      <List link="/" effect="slideUp">
        <Flame /> Trending
      </List>
      <List link="/" effect="slideUp">
        <Code /> Snippets
      </List>
      <List link="https://www.youtube.com/channel/UCh9iBdP34Dp9nm5QnvU3Wxg" effect="slideUp">
        <Video /> Videos
      </List>

      {/* List 2 */}
      <div className="mt-5">Socials</div>
      <List
        target="_blank"
        link="https://www.instagram.com/shandil.xls/"
        effect="slideUp"
      >
        <Instagram color="#b5179e" /> Instagram
      </List>
      <List target="_blank" link="https://www.cloudskillsboost.google/public_profiles/0ecb0cb5-c51b-48e6-b7d4-f73b6c49683d" effect="slideUp">
        <Cloud color="#2a9d8f" /> Cloud Skills
      </List>
      <List
        target="_blank"
        link="https://www.youtube.com/@ShanD1L"
        effect="slideUp"
      >
        <Youtube color="#e63946" /> Youtube
      </List>
      <List
        target="_blank"
        link="https://discord.gg/t27Ry5WybF/"
        effect="slideUp"
      >
        <MessageSquarePlus color="#f77f00" /> Discord
      </List>
      <List
        target="_blank"
        link="https://www.linkedin.com/in/shandilthakur/"
        effect="slideUp"
      >
        <Linkedin color="#0277b5" /> Linkedin
      </List>

      {/* List 3 */}
      {/* <div className="mt-5">ABOUT</div>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/ezClothing"
                effect="slideUp"
            >
                <Shirt /> Ez CLothing
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/eCommerce"
                effect="slideUp"
            >
                <ShoppingCart /> eCommerce
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/HardhatLottery"
                effect="slideUp"
            >
                <Ticket /> Lottery
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/filetransfer-webrtc"
                effect="slideUp"
            >
                <Share2 /> File Sharing
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/dalleClone"
                effect="slideUp"
            >
                <ImageIcon /> Dalle Clone
            </List>
            <List
                target="_blank"
                link="https://snake-nwaliaez.vercel.app/"
                effect="slideUp"
            >
                <Scissors /> Ex Clone
            </List> */}
    </div>
  );
};

export default Menu;
