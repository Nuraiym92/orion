import "./mail.scss";
import "semantic-ui-css/semantic.min.css";
import { Button, Form, Input } from "semantic-ui-react";

import React from "react";

function Mail() {
  const myCustomColor = "rgb(200, 200, 255)";
  return (
    <div className="mail">
      <Form>
        <Form.Field>
          <Input
            icon={{ name: "mail outline", circular: true, link: true }}
            color={myCustomColor}
            iconPosition="left"
            placeholder="Ваша почта"
          />
        </Form.Field>
        {/* <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field> */}
        <Button type="submit">Отправить</Button>
      </Form>
    </div>
  );
}

export default Mail;
