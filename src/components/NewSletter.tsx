import styles from "./Subscribe.module.scss";

const NewSletter = () => {
  return (
    <div className="lg-container ">
      <div className="subscribe">
        <h2 className="subscribe-title">Subscribe to our Newsletter</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
          justo sagittis suscipit ultrices
        </p>
        <div className="inputContainer">
          <input type="email" placeholder="Enter a valid email address" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default NewSletter;
