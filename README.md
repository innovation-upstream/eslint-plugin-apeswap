# eslint-plugin-apeswap

custom rules for apeswap frontend repos

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-apeswap`:

```sh
npm install eslint-plugin-apeswap --save-dev
```

## Usage

Add `apeswap` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "apeswap"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "apeswap/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


