
interface IProps{
    [key:string]:string | number
}
const a = { a: 1, b: 2, c: 3  };
const b = { name: 'Alex', hobby: 'JS' }

function getProp<T extends object, K extends keyof T>(obj:T, key:K):T[K]{
    return obj[key];
}
getProp(a, 'x') // Ts должен ругаться
getProp(a, 'c')
getProp(b, 'hobby');
getProp(b, 'job') // Ts должен ругаться

type Type = 'Red' | 'Blue';
type TObj={
    [key in Type]:string
}
function  matchString <T extends TObj>(obj:T)  {
    return <S extends Type>(str:S)=> obj[str];
};

const str = matchString({
    Red: 'star',
    Blue: 'sky',
} as const);

const o1 = str('Red');
const o2 = str('Blue');;

type output1 = typeof  o1; // Star
type output2 = typeof o2; // Sky
