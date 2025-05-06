const ptsdSymptoms = [
  "memory loss",
  "altered state of consciousness",
  "flashbacks that severely affect concentration",
  "paranoia",
  "chronic dissociation",
];
ptsdSymptoms.push("severe anxiety");
console.log(ptsdSymptoms);
ptsdSymptoms.splice(2, 1);
console.log(ptsdSymptoms);
const ptsdSymptomsAsStr = ptsdSymptoms.join(", ");
console.log(ptsdSymptomsAsStr);
