type Directions = "left" | "right";

function replace(text: string, direction: Directions) {
  switch (direction) {
    case "left":
    default:
      return text.slice(1) + text[0];
    case "right":
      return text[text.length - 1] + text.slice(0, -1);
  }
}

function rotate(text: string, direction: Directions) {
  const result = [text];

  for (let i = 0; i < text.length - 1; i++) {
    let newText = result[i];
    newText = replace(newText, direction);
    result.push(newText);
  }

  return result;
}

export function leftRotations(text: string) {
  return rotate(text, "left");
}

export function rightRotations(text: string) {
  return rotate(text, "right");
}
