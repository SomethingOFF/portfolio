import React from "react";
import skillset from "@/data/about/skills/skillset.json";
import { cn } from "@/lib/utils";
const SkillSets = () => {
  return (
    <div className="space-y-2 py-4">
      {skillset.map((skill) => (
        <div className="flex flex-col gap-2" key={skill.name}>
          <div className="font-medium">{skill.name}</div>
          <div className="w-full bg-primary/20 relative overflow-hidden rounded-full h-4">
            <div
              className={cn("absolute h-full left-0 top-0 bg-primary")}
              style={{ width: `${skill.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSets;
