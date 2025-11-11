import ButtonIconProps from "./IconButton.types";

export default function IconButton({ icon: Icon }: ButtonIconProps) {
  return (
      <button
      >
        <Icon />
      </button>
  );
}
