// One Word for Your Wi-Fi — make.fun entry
// The entry word is "grumpy": the single most honest word for home Wi-Fi.
// It drops out mid-sentence, sulks in the far bedroom, and only behaves
// when you stand next to the router and ask nicely. One word, no context
// needed — every reader who has ever buffered knows exactly what it means.
import { mkdirSync, writeFileSync } from "node:fs";

// Why "grumpy" and not the obvious words: "slow" is a complaint, not a
// joke, and "laggy" is gamer jargon, not a laugh. "Grumpy" personifies the
// router as a bad-tempered housemate — it works in the morning, refuses
// in the evening, and nobody can explain why. Funny at once, true at
// once, and short enough to be a network name.
const word = "grumpy";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
console.log(`Wrote one-word Wi-Fi entry: ${word}`);
