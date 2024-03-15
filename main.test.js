import { test, expect } from "vitest";
import { findTheStrongestFighter } from "./main.js";


const listOfFighters = [
	{ name: "Goku", powerLevel: 97 },
	{ name: "Edward Elric", powerLevel: 82 },
	{ name: "Winry Rockbell", powerLevel: 50 },
	{ name: "Levi Ackerman", powerLevel: 78 },
	{ name: "Ash Ketchum", powerLevel: 55 },
	{ name: "Izuku Midoriya", powerLevel: 62 },
	{ name: "Vegeta", powerLevel: 90 },
	{ name: "Mikasa Ackerman", powerLevel: 67 },
	{ name: "Sailor Moon", powerLevel: 58 },
	{ name: "Mob", powerLevel: 85 },
	{ name: "Meliodas", powerLevel: 75 },
	{ name: "Rukia Kuchiki", powerLevel: 65 },
	{ name: "Monkey D. Luffy", powerLevel: 78 },
	{ name: "Lucy Heartfilia", powerLevel: 70 },
	{ name: "Naruto Uzumaki", powerLevel: 80 },
	{ name: "Eren Yeager", powerLevel: 45 },
	{ name: "Lelouch Lamperouge", powerLevel: 68 },
	{ name: "Gon Freecss", powerLevel: 60 },
	{ name: "Satoru Gojo", powerLevel: 88 },
];


test("find The Strongest Fighter", () => {
	const expected = [
		{ name: "Goku", powerLevel: 97 },
		{ name: "Vegeta", powerLevel: 90 },
		{ name: "Satoru Gojo", powerLevel: 88 }
	];
	expect(findTheStrongestFighter(listOfFighters)).toStrictEqual(expected);
});

const listOfFightersTwo = [
	{ name: "Yoruichi Shihōin", powerLevel: 92 }, // Bleach
	{ name: "Reiner Braun", powerLevel: 80 }, // Attack on Titan (Armored Titan form)
	{ name: "Chika Fujiwara", powerLevel: 35 }, // Kaguya-sama: Love is War (explosive ingenuity)
	{ name: "Killua Zoldyck", powerLevel: 87 }, // Hunter x Hunter
	{ name: "Tanjiro Kamado", powerLevel: 72 }, // Demon Slayer: Kimetsu no Yaiba
	{ name: "Megumi Fushiguro", powerLevel: 70 }, // Jujutsu Kaisen
	{ name: "Vash the Stampede", powerLevel: 83 }, // Trigun (pacifist with immense hidden power)
	{ name: "Riza Hawkeye", powerLevel: 85 }, // Fullmetal Alchemist: Brotherhood
	{ name: "Winry Rockbell ()", powerLevel: 65 }, // Winry with mechanical enhancements (upgrade!)
	{ name: "Hinata Hyuga", powerLevel: 74 }, // Naruto
	{ name: "Kaneki Ken (One-Eyed Ghoul)", powerLevel: 89 }, // Tokyo Ghoul
	{ name: "Saber", powerLevel: 88 }, // Fate series
	{ name: "Inuyasha", powerLevel: 84 }, // Inuyasha
	{ name: "Edward Elric (Truth Form)", powerLevel: 95 }, // Fullmetal Alchemist: Brotherhood (powered by Truth)
	{ name: "Kiyoko Shimizu", powerLevel: 52 }, // Haikyuu!! (strategic volleyball genius)
	{ name: "All Might (Prime)", powerLevel: 97 }, // My Hero Academia (at his peak)
	{ name: "Rimuru Tempest", powerLevel: 96 }, // That Time I Got Reincarnated as a Slime
	{ name: "Meliodas (Demon King)", powerLevel: 100 }, // Seven Deadly Sins (true power unleashed)
];

test("find The Strongest Fighter 2", () => {
	const expected = [
		{ name: "Meliodas (Demon King)", powerLevel: 100 },
		{ name: "All Might (Prime)", powerLevel: 97 },
		{ name: "Rimuru Tempest", powerLevel: 96 },
	];
	expect(findTheStrongestFighter(listOfFightersTwo)).toStrictEqual(expected);
});

const listOfFightersThree = [
	{ name: "Arataka Reigen", powerLevel: 70 }, // Mob Psycho 100 (master of charisma and manipulation)
	{ name: "Biscuit Krueger", powerLevel: 90 }, // Hunter x Hunter (powerful Nen master and trainer)
	{ name: "Senku Ishigami", powerLevel: 65 }, // Dr. Stone (scientific genius with incredible inventions)
	{ name: "Meruem", powerLevel: 99 }, // Hunter x Hunter (prodigy king with immense strength)
	{ name: "Kaguya Shinomiya", powerLevel: 82 }, // Kaguya-sama: Love is War (master strategist in love games)
	{ name: "Holo the Wise Spice Wolf", powerLevel: 85 }, // Spice and Wolf (powerful harvest deity with economic prowess)
	{ name: "Shinobu Oshino", powerLevel: 78 }, // Monogatari Series (cunning vampire with poison expertise)
	{ name: "Yang Wen-li", powerLevel: 92 }, // Legend of the Galactic Heroes (brilliant military strategist)
	{ name: "Reinhard van Lohengramm", powerLevel: 97 }, // Legend of the Galactic Heroes (invincible warrior)
	{ name: "Hinatsuru", powerLevel: 80 }, // Demon Slayer: Kimetsu no Yaiba (skilled kunoichi with knowledge of poisons)
	{ name: "Makima", powerLevel: 88 }, // Chainsaw Man (manipulative Devil Contract user)
	{ name: "Accelerator", powerLevel: 95 }, // A Certain Magical Index (vector manipulation with a dark side)
	{ name: "Violet Evergarden", powerLevel: 72 }, // Violet Evergarden (skilled soldier with emotional growth)
	{ name: "Jotaro Kujo (Star Platinum)", powerLevel: 90 }, // JoJo's Bizarre Adventure (powerful Stand user)
	{ name: "Joseph Joestar (Hamon)", powerLevel: 87 }, // JoJo's Bizarre Adventure (master of Hamon technique)
	{ name: "Meliodas (Full Counter)", powerLevel: 93 }, // Seven Deadly Sins (specialized counterattack ability)
	{ name: "Guts", powerLevel: 89 }, // Berserk (relentless swordsman with a prosthetic arm)
];

test("find The Strongest Fighter 3", () => {
	const expected = [
		{ name: "Meruem", powerLevel: 99 },
		{ name: "Reinhard van Lohengramm", powerLevel: 97 },
		{ name: "Accelerator", powerLevel: 95 },
	];
	expect(findTheStrongestFighter(listOfFightersThree)).toStrictEqual(expected);
});