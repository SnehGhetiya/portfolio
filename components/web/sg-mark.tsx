// 9x5 pixel "SG" glyph on a 32-unit grid.
const MARK_PATH =
  "M0 0H128V32H0ZM160 0H288V32H160ZM0 32H32V64H0ZM160 32H192V64H160ZM0 64H128V96H0ZM160 64H192V96H160ZM224 64H288V96H224ZM96 96H128V128H96ZM160 96H192V128H160ZM256 96H288V128H256ZM0 128H128V160H0ZM160 128H288V160H160Z";

export function SGMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 288 160"
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d={MARK_PATH} />
    </svg>
  );
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 288 160"><path fill="currentColor" d="${MARK_PATH}"/></svg>`;
}
