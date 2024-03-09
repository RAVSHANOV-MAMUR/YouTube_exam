import "./RelsList.scss";

const RelsList = ({ children, className }) => {
  return <ul className={`${className}__list list`}>{children}</ul>;
};

export default RelsList;
