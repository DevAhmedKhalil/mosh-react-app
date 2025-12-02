interface ButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;

  onClick?(): void;
}

const Button = ({ color='primary', children, onClick }: ButtonProps) => {
  return <button className={'btn btn-' + color} onClick={onClick}>{children}</button>;
};

export default Button;
