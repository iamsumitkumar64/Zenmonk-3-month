import AudioListsComp from "@/components/AudioLists/page";
import PlayerComp from "@/components/Player/page";
import { UploadForm } from "@/components/upload-song/form";
import './main.css'

export default function Home() {
  return (
    <div className="main">
      <div className="header">
        <UploadForm />
      </div>
      <div className="body">
        <AudioListsComp />
        <PlayerComp />
      </div>
    </div>
  );
}
