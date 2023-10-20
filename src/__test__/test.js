import Character from "../js/Character";
import Bowman from "../js/Bowman";
import Swordsman from "../js/Swordsman";
import Magician from "../js/Magician";
import Daemon from "../js/Daemon";
import Undead from "../js/Undead";
import Zombie from "../js/Zombie";

test("Имя(строка) персоанажа", () => {
    expect(() => new Character(7, "Bowman")).toThrow()
})

test("Проверка на кол-во символов(2)", () => {
    expect(() => new Character("c", "Bowman")).toThrow()
})

test("Проверка на тип", () => {
    expect(() => new Character("Oleg", "BoBo")).toThrow()
})

test("Проверка на кол-во символов(10)", () => {
    expect(() => new Character("abcdifjklmnop", "Bowman")).toThrow()
})

test("выполнение верно(Bowman)", () => {
    const pers = new Bowman("alex", "Bowman");
    expect(pers).toEqual({
        name: "alex",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
})

test("выполнение верно(Daemon)", () => {
    const pers = new Daemon("alex", "Daemon");
    expect(pers).toEqual({
        name: "alex",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
})

test("выполнение верно(Magician)", () => {
    const pers = new Magician("alex", "Magician");
    expect(pers).toEqual({
        name: "alex",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
})

test("выполнение верно(Undead)", () => {
    const pers = new Undead("alex", "Undead");
    expect(pers).toEqual({
        name: "alex",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
})

test("выполнение верно(Swordsman)", () => {
    const pers = new Swordsman("alex", "Swordsman");
    expect(pers).toEqual({
        name: "alex",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
})

test("выполнение верно(Zombie)", () => {
    const pers = new Zombie("alex", "Zombie");
    expect(pers).toEqual({
        name: "alex",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
})