export type Constructor<T> = {
   new(...args: any[]): T;
}
export function Configurable<T extends Constructor<{}>>(base: T) : T {
      return class extends base {

         constructor(...args: any[]) {
            super(...args);
         }

      };
   }