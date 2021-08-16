import app from './../main'
import EmailEditor from './EmailEditor.vue';

const Components = {
  EmailEditor,
};

Object.keys(Components).forEach((name) => {
  app.component(name, Components[name]);
});

export { EmailEditor };
export default Components;
