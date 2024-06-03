const cx = (...classNames: (string | undefined)[]) =>
  classNames.filter(Boolean).join(" ");

export default cx;
