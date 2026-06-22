export type Project = {
  num: string;
  year: string;
  title: string;
  kind: string;
  desc: string;
  color: string;
  link?: string;
};

export type ExperienceItem = {
  when: string;
  where: string;
  role: string;
  detail: string;
  stack: string[];
};

export type WritingItem = {
  date: string;
  kicker: string;
  title: string;
  dek: string;
  href: string;
};
