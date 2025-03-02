import React, { useState } from "react";
import PlayerList from "./PlayerList";
import Image from "next/image";

const MatchCard = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  const statusText = match.status === "Ongoing" ? "Live" : match.status;
  const statusClass =
    match.status === "Ongoing"
      ? "bg-[#43AD28]"
      : match.status === "Finished"
      ? "bg-[#EB0237]"
      : match.status === "Scheduled"
      ? "bg-[#EB6402]"
      : "";

  return (
    <article className="bg-[#0B0E12] shadow-md rounded-lg p-4 min-h-[87px] transition-transform hover:scale-[1.02]">
      <div className="flex justify-between items-center">
        <div className="flex justify-between h-[48px] w-[171px] items-center">
          <Image src="/img/team.svg" alt="Team icon" width={48} height={48} />
          <p className="text-lg font-semibold">{match.awayTeam.name}</p>
        </div>

        <div className="text-center">
          <div className="font-bold text-xl">
            {match.awayScore} : {match.homeScore}
          </div>
          <div
            className={`flex items-center justify-center w-[92px] h-[27px] rounded ${statusClass}`}
          >
            <p className="text-xs font-semibold">{statusText}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex justify-between h-[48px] w-[171px] items-center">
            <p className="text-lg font-semibold">{match.homeTeam.name}</p>
            <Image src="/img/team.svg" alt="Team icon" width={48} height={48} />
          </div>
          <button
            onClick={toggleOpen}
            className="p-1 hover:bg-[#222934] rounded-full transition-colors self-center"
          >
            <Image
              src={isOpen ? "/img/hide.svg" : "/img/show.svg"}
              alt="Toggle players"
              width={14}
              height={14}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex items-center justify-between">
          <PlayerList team={match.awayTeam} />
          <PlayerList team={match.homeTeam} />
        </div>
      )}
    </article>
  );
};

export default MatchCard;
