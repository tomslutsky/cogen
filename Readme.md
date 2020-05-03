# Cogen

My opinionated way of createding react-native components

## Installation

Using npm `npm install -g tomslutsky/cogen`

Using yarn `yarn global add tomslutsky/cogen`

## Usage

Simple usage for creating a component named Example in the components directory:

`cogen Example`

As default cogen will genereate the component in the '<root>/components' directory of your project

You can specify the directory in which you want to component to be created with --path (or -P) option.
Assuming that you want to create the component in src/components:

`cogen Example -P src/components`

Typescript file extensions is available with -ts (or --typescript) options:

`cogen Example -ts`

You can also specify your component template with -T (or --template) option.
In your template the string `__component_name__` will be replaced with your component name.
For example, assuming you create you have a file:

'templates/Components.jsx'

```javascript
var hello = 'Hello __component_name__';
```

running

`cogen World -T templates/Component.jsx`

will create:

'components/Example.jsx'

```javascript
var hello = 'Hello World';
```
