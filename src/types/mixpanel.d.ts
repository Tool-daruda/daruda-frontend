import 'mixpanel-browser';

declare module 'mixpanel-browser' {
  interface Config {
    record_heatmap_data?: boolean;
  }
}
