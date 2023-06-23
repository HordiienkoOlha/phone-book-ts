// const button = document.querySelector("button");
const input1: HTMLInputElement = document.getElementById(
  "num1"
)! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// if (button) {
//   button.addEventListener("click", function () {
//     console.log(add(+input1.value, +input2.value));
//   });
// }

let age: number;
age = 50;

let name1: string;
name1 = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};

let anything: any;
anything = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}

let person: [string, number];
person = ["Max", 21];

// LOADING READY
enum Status {
  LOADING,
  READY,
}

const page = {
  status: Status.READY,
};

if (page.status === Status.LOADING) {
  console.log("Сторінка завантажується");
}

if (page.status === Status.READY) {
  console.log("Сторінка завантажена");
}

let union: string | number;

let literal: "enable" | "disable";

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

type DatabaseDatePage1 = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: DatabaseDatePage1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

type DatabasePage2 = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
};
const page2: DatabasePage2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
