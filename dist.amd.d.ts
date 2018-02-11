declare module "Configurable" {
    export type Constructor<T> = {
        new (...args: any[]): T;
    };
    export function Configurable<T extends Constructor<{}>>(base: T): T;
}
declare module "Class" {
    export class HiddenClass {
    }
    declare const ActualClass_base: typeof HiddenClass;
    export class ActualClass extends ActualClass_base {
    }
}
