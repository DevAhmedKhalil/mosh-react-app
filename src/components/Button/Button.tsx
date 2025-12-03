import styles from "./Button.module.css";

interface ButtonProps {
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  children: React.ReactNode;

  onClick?(): void;
}

const Button = ({ color = "primary", children, onClick }: ButtonProps) => {
  return (
    <button className={[styles.btn, styles[`btn-${color}`]].join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
