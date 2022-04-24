/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export async function getData(): Promise<number[]> {
    const result: number[] = [];

    const pr1 = mock(100).then((data1) => {
        return data1;
    });

    const pr2 = mock(200).then((data2) => {
        return data2;
    });

    const pr3 = mock(300).then((data3) => {
        return data3;
    });

    return Promise.all([pr1, pr2, pr3]);
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        const a = await Promise.reject(new Error('my error'));
    } catch (err) {
        //return new Promise(()=>{return (err as Error).message})
        return err.message;
    }
}
