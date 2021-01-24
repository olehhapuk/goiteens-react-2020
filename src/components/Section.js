function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
      <hr />
    </div>
  );
}

export default Section;
