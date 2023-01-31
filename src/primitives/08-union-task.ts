type Level = "junior" | "middle" | "senior";

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}
export const userX: Developer = {
  login: "Sasha",
  skills: ["js", "ts", "html", "react"],
  level: "middle",
};

// create a function that change level of incoming developer
function gradeDeveloper(user: Developer, newLevel: Level) {
  if (user.level) {
    user.level = newLevel;
  }
}

gradeDeveloper(userX, "senior");
