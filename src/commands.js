// @flow strict

export type CommandType = {|
  name: string,
  url: string,
  searchurl?: string,
|};

export type CommandNames =
  | "ghgs"
  | "ghs"
  | "gh"
  | "gt"
  | "g"
  | "gpt"
  | "r"
  | "rc"
  | "c"
  | "DEFAULT";

export type CommandDataTableType = {|
  name: string,
  url: string,
  command: CommandNames,
|};

export type ColumnDataTableType = {|
  data: string,
  title: string,
|};

export const COMMANDS: { [CommandNames]: CommandType } = {
  ghgs: {
    name: "GitHub Global Search",
    url: "https://www.github.com/search?type=code&q=",
    searchurl: "https://www.github.com/search?type=code&q=",
  },
  ghs: {
    name: "GitHub Search",
    url: "https://github.com/linera-io/linera-protocol/search?type=code&q=",
    searchurl:
      "https://github.com/linera-io/linera-protocol/search?type=code&q=",
  },
  gh: {
    name: "GitHub PRs/Issues",
    url: "https://github.com/linera-io/linera-protocol/pull/",
    searchurl: "https://github.com/linera-io/linera-protocol/pull/",
  },
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
  gpt: {
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    searchurl: "https://chatgpt.com/?hints=search&q=",
  },
  r: {
    name: "Rust Standard Library Docs",
    url: "https://doc.rust-lang.org/std/",
    searchurl: "https://doc.rust-lang.org/std/?search=",
  },
  rc: {
    name: "Rust Crate Docs",
    url: "https://docs.rs/",
    searchurl: "https://docs.rs/releases/search?query=",
  },
  c: {
    name: "Crates.io",
    url: "https://crates.io/",
    searchurl: "https://crates.io/search?q=",
  },
  gt: {
    name: "Graphite",
    url: "https://app.graphite.dev/",
    searchurl: "https://app.graphite.dev/github/pr/linera-io/linera-protocol/",
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
};
