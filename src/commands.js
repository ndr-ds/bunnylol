// @flow strict

export type CommandType = {|
    name: string,
        url: string,
            searchurl ?: string,
|};

export type CommandNames = 'ghgs' | 'ghs' | 'gh' | 'g' | 'rust' | 'DEFAULT';

export type CommandDataTableType = {|
    name: string,
        url: string,
            command: CommandNames
                |};

export type ColumnDataTableType = {|
    data: string,
        title: string
            |};

export const COMMANDS: { [CommandNames]: CommandType } = {
    ghgs: {
        name: "GitHub Global Search",
        url: "https://www.github.com/search?type=code&q=",
        searchurl: "https://www.github.com/search?type=code&q="
    },
    ghs: {
        name: "GitHub Search",
        url: "https://github.com/linera-io/linera-protocol/search?type=code&q=",
        searchurl: "https://github.com/linera-io/linera-protocol/search?type=code&q="
    },
    gh: {
        name: "GitHub PRs/Issues",
        url: "https://github.com/linera-io/linera-protocol/pull/",
        searchurl: "https://github.com/linera-io/linera-protocol/pull/"
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    },
    rust: {
        name: "Rust Docs",
        url: "https://doc.rust-lang.org/std/?search=",
        searchurl: "https://doc.rust-lang.org/std/?search="
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
