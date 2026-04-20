export interface FeatureRow {
  people: string;
  basic: string;
  premium: string;
}

export interface Feature {
  title: string;
  rows: FeatureRow[];
}
