import "./feedback.scss";

import React from "react";

function Feedback() {
  return (
    <div className="feedBack">
      <div className="feedBack__inner">
        <div className="feedBack__inner-message">
          <p>
            В работе с Orion нам нравится адаптивность, простота использования и
            умение команды оперативно реагировать на потребности клиентов.
          </p>
          <div className="feedBack__inner-triangle">
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-triangle">
              <polygon points="10,0 90,0 50,50" />
            </svg>
          </div>
        </div>

        <div className="feedBack__inner-partner">
          <img src="/assets/icons/idea-logo.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
