import Button from "./src/button";
import { Prefix } from "@/prefix";

Button.install = Vue => {
  Vue.component(Prefix + Button.name, Button);
};

export default Button;
