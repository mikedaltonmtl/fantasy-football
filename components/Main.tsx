import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";


export default function Main(data: any) {
  console.log(data.data);
  return (
    <Accordion type="single" collapsible className="w-full max-w-2xl">
      {data.data.teams.map((team: any) => {
        return (
          <AccordionItem key={team.id} value={team.id}>
            <AccordionTrigger>{team.name}</AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="pl-5 w-full max-w-2xl text-gray-500">
                {data.data.elements.filter((element: any) => element.team === team.id).map((player: any) => {
                  return (
                    <AccordionItem key={player.id} value={player.id}>
                      <AccordionTrigger>{player.web_name}</AccordionTrigger>
                      <AccordionContent>
                        <article className="flex flex-row w-full flex-wrap">
                          <Image
                            src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}
                            width={110}
                            height={140}
                            alt={player.web_name}
                          />
                          <section className="pl-5 flex justify-start">
                            <div>
                              <p>Minutes Played</p>
                              <p>Goals Scored</p>
                              <p>Assists</p>
                              <p>Clean Sheets</p>
                              <p>Goals Conceded</p>
                              <p>Own Goals</p>
                              <p>Total Points</p>
                            </div>
                            <div className="pl-2 text-right">
                              <p>{player.minutes}</p>
                              <p>{player.goals_scored}</p>
                              <p>{player.assists}</p>
                              <p>{player.clean_sheets}</p>
                              <p>{player.goals_conceded}</p>
                              <p>{player.own_goals}</p>
                              <p>{player.total_points}</p>
                            </div>
                          </section>
                        </article>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
