import './styles.css';

export const Button = ({OnClick, text}) => {
  return <button onClick={OnClick}>{text}</button>;
}
 
