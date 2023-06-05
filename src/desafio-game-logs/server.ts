enum Action {
  Attacked = "attacked",
  Healed = "healed",
  Taunted = "taunted",
}

export const random = <T extends any>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const createLog = (matchId: number, hero: string, action: Action, enemy: string) => ({
  hero,
  action,
  target: enemy,
  match: matchId,
  createdAt: new Date(),
});

type Log = ReturnType<typeof createLog>;

const actions = [Action.Attacked, Action.Healed, Action.Taunted];

const Heroes = [
  "SpiderMan",
  "IronMan",
  "Batman",
  "Superman",
  "Deadpool",
  "DoctorStrange",
  "Hulk",
  "DeathStroke",
  "SubZero",
  "Scorpion",
  "Aragorn",
  "Legolas",
];

const getRandomHero = (alreadyUsed: string[]) =>
  alreadyUsed.length === 0 ? random(Heroes) : random(Heroes.filter((x) => !alreadyUsed.includes(x)));

const shuffleArray = <T extends any>(list: T[]): T[] => {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const generateLog = (log: { heroes: number; matches: number }): Log[] => {
  const matches: Log[] = [];
  for (let i = 0; i < log.matches; i++) {
    const matchId = i + 1;
    const heroAlreadyUsed: string[] = [];
    for (let j = 0; j < log.heroes; j++) {
      const hero = getRandomHero(heroAlreadyUsed);
      const enemy = getRandomHero(heroAlreadyUsed.filter((x) => x !== hero));
      const action = random(actions);
      matches.push(createLog(matchId, hero, action, enemy));
      heroAlreadyUsed.push(hero);
    }
  }
  return shuffleArray(matches);
};
