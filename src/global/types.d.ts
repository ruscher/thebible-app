import { RouteComponent } from 'vue-router';

export type Route = {
  name: string;
  path: string;
  redirect?: string;
  icon?: string;
  status?: Status;
  visible?: Visible;
  component?: RouteComponent;
  children?: Route[];
};
