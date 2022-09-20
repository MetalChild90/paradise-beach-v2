import PropTypes from "prop-types";

function FooterList({ menuList: { title, features } }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      <ul className="list">
        {features.map((item, i) => (
          <li key={i}>
            <a href="!#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterList.propTypes = {
  title: PropTypes.string,
  features: PropTypes.array,
};

export default FooterList;
