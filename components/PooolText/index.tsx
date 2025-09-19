export default function Poool() {
  return (
    <a
      href="https://www.poool.fr/"
      target="_blank"
      rel="noopener noreferrer"
      className="poool"
    >
      {["p", "o", "o", "o", "l"].map((letter, i) => (
        <span key={i}>{letter}</span>
      ))}
    </a>
  );
}
