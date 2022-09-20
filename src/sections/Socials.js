const iconNames = ["facebook-f", "twitter", "instagram"];
const actionNames = [
  { text: "Download a brochure", icon: "" },
  { text: "Plan your stay", icon: "" },
  { text: "Subscribe", icon: "envelope" },
];

const Socials = () => {
  return (
    <section className="Socials">
      <div className="group">
        <ul className="social-links">
          {iconNames.map((icon, i) => (
            <li key={i} className="social-item">
              <a href="!#">
                <i className={`fa-brands fa-${icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="group">
        <ul className="action-buttons">
          {actionNames.map((action, i) => (
            <li key={i} className="action-item">
              <a href="!#">
                {action.text}
                {action.icon && (
                  <i className={`fa-solid fa-${action.icon}`}></i>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Socials;
