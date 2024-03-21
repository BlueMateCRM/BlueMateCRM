import { Form, Field, ErrorMessage, configure, defineRule } from "vee-validate";
import { required, min, max, email, digits } from "@vee-validate/rules";

export default {
  install(app: any) {
    app.component("VeeForm", Form);
    app.component("VeeField", Field);
    app.component("VeeError", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("digits", digits);

    configure({
      generateMessage: (ctx: any): any => {
        const messages = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} must be minimum 8 characters`,
          max: `The field ${ctx.field} is too long`,
          email: `The field ${ctx.field} is must be email`,
          digits: `The ${ctx.field} should consist of 9 digits`,
        };
        return messages || `${ctx.field} is empty`;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnModelUpdate: true,
      validateOnInput: true,
    });
  },
};
