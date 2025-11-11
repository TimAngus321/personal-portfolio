import ButtonIconProps from "./IconButton.types";

export default function IconButton({ icon: Icon, className }: ButtonIconProps) {
  return (
      <button
        className={className}
      >
        <Icon />
      </button>
  );
}
