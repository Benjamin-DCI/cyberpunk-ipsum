// Generates random text from an array based on the chosen paragraph length

const generation = () => {
  let output = "";
  let quantity = parseInt($("#quantity").val());

  for (let i = 0; i < quantity; i++) {
    let paragraph = "<p>";
    while (paragraph.length <= paragraphLength()) {
      let index = Math.floor(Math.random() * cyber.length);
      paragraph += " " + cyber[index];
    }

    paragraph += "</p>";
    output += paragraph;
  }
  $("#textbox").html(output);
}

const paragraphLength = () => {
  let baseLength = 500;
  let threshold = 0.5;
  let randomizedLength =
    parseInt(Math.random() * threshold * baseLength) + baseLength;
  return randomizedLength;
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    generation();
  },
  false
);

function changeEventHandler(e) {
  generation();
}

// Array of generated text
var cyber = [
  "decayed matrix",
  "ESP cyber slot",
  "drone emulator gene-dub",
  "zaibatsu",
  "AI human pill",
  "mainframe blitz",
  "color of dead televisions",
  "intra cortex jack-in point",
  "sensory immerse data-stack forum",
  "hacking hyperreal vampire scanner",
  "drone through neon corridors of the megalopolis",
  "Scanner glitches, fades in icy starlight",
  "01110001100",
  "NEO/Hong Kong",
  "synthetic neural blocking agent",
  "ruling mega corporation",
  "nano voodoo core",
  "shatter humanix preset dome",
  "decayed hyperdrive",
  "interrupted by static",
  "artificial sky, cracked and frozen",
  "netrunner - joygirl",
  "jacked-in",
  "holodeck",
  "head-chip implant",
  "recusitation of decayed intelligence",
  "glitch exit",
  "emotional replicant performance",
  "ultra circuit = DIVE machinery",
  "MANIX infection archive",
  "respiration byte virus",
  "retro A.D.A.M. nano-bacteria",
  "human simulation node",
  "EVE doll",
  "mech crisis 2732",
  "bio-transmitted psychic sync wave",
  "micro DNA helix transferral",
  "PSI/cop"
];
