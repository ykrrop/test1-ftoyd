import Image from "next/image";
import React from "react";

const PlayerList = ({ team }) => {
  return (
    <div className="min-h-[112px] w-1/2 mt-10 text-sm px-4">
      <div>
        <ul className="flex justify-between items-center gap-2">
          {team.players.map((player) => (
            <li
              key={player.username}
              className="flex bg-[#101318] flex-1 rounded justify-between items-center h-[52px] px-3"
            >
              <p className="flex items-center gap-2">
                <Image
                  src="/img/avatar.svg"
                  alt="User"
                  width={36}
                  height={36}
                />
                {player.username}
              </p>
              <p className="flex gap-2">
                <span className="opacity-40">Убийств:</span>
                <span>{player.kills}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-2 h-[52px] flex items-center bg-[#101318]">
          <div className="flex items-center gap-2 w-1/3 justify-center">
            <p className="opacity-40">Points:</p>
            <p>{team.points > 0 ? "+" + team.points : team.points}</p>
          </div>
          <Image src="/img/divider.svg" alt="Divider" width={2} height={24} />
          <div className="flex items-center gap-2 w-1/3 justify-center">
            <p className="opacity-40">Место:</p>
            <p>{team.place}</p>
          </div>
          <Image src="/img/divider.svg" alt="Divider" width={2} height={24} />
          <div className="flex items-center gap-2 w-1/3 justify-center">
            <p className="opacity-40">Всего убийств:</p>
            <p>{team.total_kills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerList;
