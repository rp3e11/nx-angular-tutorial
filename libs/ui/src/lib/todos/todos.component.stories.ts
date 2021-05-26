import { text, number, boolean } from '@storybook/addon-knobs';
import { TodosComponent } from './todos.component';

export default {
  title: 'TodosComponent',
  component: TodosComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    todos: text('todos', []),
  }
})